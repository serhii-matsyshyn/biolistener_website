import React, {useEffect, useRef} from 'react';

/**
 * Floating biosignal background.
 *
 * Technique: the traces are drawn ONCE to an
 * offscreen canvas, turned into a seamlessly repeating image strip, and the
 * strip is scrolled by a CSS transform. No JavaScript runs per frame. The
 * strip is re-rendered only when the container height or the theme changes.
 * `prefers-reduced-motion` stops the scrolling (see .traces in custom.css).
 *
 * All drawing happens inside useEffect, so nothing runs during the static
 * (server-side) build. The traces are synthesized (EEG with alpha bursts,
 * one ECG lane, one EMG lane), not recorded data.
 */

const LOOP_S = 16; // seconds of signal in one tile; every signal below repeats exactly over it
const PX_PER_S = 110; // horizontal scale
const SCROLL_PX_S = 30; // on-screen speed
const TILE_W = LOOP_S * PX_PER_S;
const TOP = 16; // small clear band under the navbar
const TAU = Math.PI * 2;

// Value noise that wraps after `period` steps, so the tile's right edge meets its left edge.
const hash = (n: number) => {
  const s = Math.sin(n * 127.1) * 43758.5453;
  return s - Math.floor(s);
};
const noise = (t: number, rate: number, seed: number) => {
  const period = rate * LOOP_S;
  const x = t * rate;
  const i = Math.floor(x);
  const f = x - i;
  const u = f * f * (3 - 2 * f);
  const at = (k: number) => hash((((k % period) + period) % period) + seed);
  return (at(i) * (1 - u) + at(i + 1) * u) * 2 - 1;
};
const bump = (x: number, mu: number, w: number, a: number) => a * Math.exp(-((x - mu) ** 2) / (2 * w * w));

// All rates and frequencies are multiples of 1 / LOOP_S.
const eeg = (t: number, k: number) => {
  const env = Math.max(0, noise(t, 0.375, k * 17)) ** 1.5; // alpha waxes and wanes
  return (
    0.75 * env * Math.sin(TAU * (9.5 + k * 0.25) * t) +
    0.22 * Math.sin(TAU * 5.3125 * t + k) +
    0.22 * noise(t, 24, k * 31) +
    0.3 * noise(t, 1.25, k * 7)
  );
};
const ecg = (t: number) => {
  const p = (t / 0.8) % 1;
  return (
    bump(p, 0.16, 0.028, 0.14) -
    bump(p, 0.275, 0.01, 0.14) +
    bump(p, 0.3, 0.011, 1.15) -
    bump(p, 0.33, 0.012, 0.26) +
    bump(p, 0.52, 0.045, 0.3) +
    0.03 * noise(t, 30, 3)
  );
};
const emg = (t: number) => {
  const env = Math.max(0, noise(t, 0.25, 91) - 0.25) * 2.2; // occasional contractions
  return (0.06 + env) * noise(t, 60, 5);
};

interface Lane {
  f: (t: number) => number;
  a: number;
  gain?: number;
  alt?: boolean;
}

const lanes: Lane[] = [
  {f: (t) => eeg(t, 1), a: 0.2},
  {f: (t) => eeg(t, 2), a: 0.16},
  {f: (t) => eeg(t, 3), a: 0.2},
  {f: ecg, a: 0.34, gain: 1.5},
  {f: (t) => eeg(t, 4), a: 0.16},
  {f: (t) => eeg(t, 5), a: 0.2},
  {f: emg, a: 0.22, alt: true},
  {f: (t) => eeg(t, 6), a: 0.16},
];

export default function SignalBackground(): React.ReactElement {
  const rootRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const strip = stripRef.current;
    if (!root || !strip) return undefined;

    let lastH = 0;
    let lastUrl = '';
    let generation = 0;
    let disposed = false;

    const render = () => {
      const h = root.clientHeight;
      if (!h) return;
      lastH = h;
      const myGeneration = ++generation;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const canvas = document.createElement('canvas');
      canvas.width = TILE_W * dpr;
      canvas.height = h * dpr;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.scale(dpr, dpr);
      ctx.lineJoin = 'round';

      // Colours follow the Docusaurus theme through CSS variables.
      const cs = getComputedStyle(root);
      const main = cs.getPropertyValue('--bl-trace').trim();
      const alt = cs.getPropertyValue('--bl-trace-alt').trim();
      const gain = parseFloat(cs.getPropertyValue('--bl-trace-gain')) || 1;
      ctx.lineWidth = parseFloat(cs.getPropertyValue('--bl-trace-width')) || 1.25;
      const laneH = (h - TOP) / lanes.length;
      const amp = Math.min(laneH * 0.3, 34);
      lanes.forEach((lane, i) => {
        const y0 = TOP + laneH * (i + 0.5);
        ctx.strokeStyle = `rgba(${lane.alt ? alt : main},${Math.min(1, lane.a * gain)})`;
        ctx.beginPath();
        for (let x = 0; x <= TILE_W; x++) {
          const y = y0 - lane.f(x / PX_PER_S + i * 13) * amp * (lane.gain || 1);
          if (x) ctx.lineTo(x, y);
          else ctx.moveTo(x, y);
        }
        ctx.stroke();
      });

      canvas.toBlob((blob) => {
        if (!blob || disposed || myGeneration !== generation) return;
        const url = URL.createObjectURL(blob);
        strip.style.backgroundImage = `url(${url})`;
        strip.style.backgroundSize = `${TILE_W}px ${h}px`;
        strip.classList.add('traces__strip--ready'); // short fade-in once the strip exists
        if (lastUrl) URL.revokeObjectURL(lastUrl);
        lastUrl = url;
      });
    };

    const layout = () => {
      strip.style.width = `${root.clientWidth + TILE_W}px`; // always one spare tile to scroll into
      strip.style.setProperty('--tile', `${TILE_W}px`);
      strip.style.setProperty('--loop', `${TILE_W / SCROLL_PX_S}s`);
      if (root.clientHeight !== lastH) render(); // redraw only when the height changes
    };

    let timer: number | undefined;
    const onResize = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(layout, 150);
    };
    window.addEventListener('resize', onResize);

    // Docusaurus switches themes by changing data-theme on <html>.
    const themeObserver = new MutationObserver(render);
    themeObserver.observe(document.documentElement, {attributes: true, attributeFilter: ['data-theme']});

    layout();

    return () => {
      disposed = true;
      window.clearTimeout(timer);
      window.removeEventListener('resize', onResize);
      themeObserver.disconnect();
      if (lastUrl) URL.revokeObjectURL(lastUrl);
    };
  }, []);

  return (
    <div ref={rootRef} className="traces" aria-hidden="true">
      <div ref={stripRef} className="traces__strip" />
    </div>
  );
}
