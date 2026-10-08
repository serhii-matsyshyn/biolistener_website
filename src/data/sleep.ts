/**
 * Copy for the /sleep page (src/pages/sleep.tsx). This page is a short
 * landing, not project documentation: keep it to a hero, a few cards and a
 * contact block.
 */
import type {IconName, ImageData} from './home.types';

interface SleepCard {
  icon: IconName;
  title: string;
  text: string;
}

export interface SleepPageData {
  meta: {title: string; description: string};
  hero: {
    title: string;
    subline: string;
    /** Status badge. */
    status: string;
    /** Disabled-style button: plain text, no URL. */
    pendingAction: string;
    /** Working primary button, links to the contact block. */
    contactAction: string;
    image: ImageData;
  };
  how: {id: string; eyebrow: string; title: string; lead?: string; steps: SleepCard[]};
  highlights: {id: string; eyebrow: string; title: string; items: SleepCard[]};
  /** Framed note on stage and scope. */
  note: string;
}

export const sleep: SleepPageData = {
  meta: {
    title: 'BioListener Sleep',
    description:
      'BioListener Sleep: a closed-loop neurostimulation system for sleep onset optimization that adapts stroboscopic light and generative audio to live EEG. Research stage.',
  },
  hero: {
    title: 'BioListener Sleep',
    subline:
      'Closed-loop neurostimulation system for sleep onset optimization, adapting stroboscopic light and generative audio to live EEG. Part of BioListener, an open-source ecosystem designed to revolutionize biosensing with portable, affordable, multi-channel biosensing boards.',
    status: 'Research stage',
    pendingAction: 'GitHub: will be published soon',
    contactAction: 'Contact us',
    image: {
      src: '/img/sleep/led-sleep-mask-prototype.jpg',
      alt: 'Stroboscopic LED sleep mask prototype with its ESP32 controller',
      width: 1600,
      height: 1242,
    },
  },
  how: {
    id: 'how-it-works',
    eyebrow: 'How it works',
    title: 'A closed loop that runs four times per second',
    lead: 'Most stimulation devices play a fixed program and read nothing from the person. BioListener Sleep measures the person while it stimulates, and keeps adjusting.',
    steps: [
      {
        icon: 'brain',
        title: 'Read EEG',
        text: 'The BioListener board records brain activity (EEG) from passive electrodes on the scalp.',
      },
      {
        icon: 'cpu',
        title: 'Choose the stimulation',
        text: 'A controller trained with deep reinforcement learning chooses the next stimulation setting.',
      },
      {
        icon: 'shield',
        title: 'Enforce safety limits',
        text: 'A separate safety supervisor clamps every requested action before it reaches the hardware.',
      },
      {
        icon: 'moon',
        title: 'Drive light and audio',
        text: 'The command drives a stroboscopic LED mask and an audio engine. Then the loop repeats.',
      },
    ],
  },
  highlights: {
    id: 'highlights',
    eyebrow: 'The research',
    title: 'A testbed for closed-loop stimulation',
    items: [
      {
        icon: 'activity',
        title: 'One research question',
        text: 'If a learned controller drives stimulation from live EEG, what should it be rewarded for? The project studies this reward design.',
      },
      {
        icon: 'flask',
        title: 'Trained in a brain simulator',
        text: 'The controller learns in a simulated model of brain cortex, cross-validated against The Virtual Brain, a standard library in computational neuroscience.',
      },
      {
        icon: 'monitor',
        title: 'Run end to end on hardware',
        text: 'The full loop has run with a person on the BioListener board and the LED mask, monitored from a browser console with a panic stop.',
      },
    ],
  },
  note: 'Research stage. BioListener Sleep is researched in simulation and on an integration test harness; sessions with real subjects are a feasibility check only. It is research software, not a medical device, and makes no claim that it helps anyone fall asleep.',
};

export default sleep;
