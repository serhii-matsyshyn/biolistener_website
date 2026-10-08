import type {Config} from 'tailwindcss';

// Colours are CSS variables defined in src/css/custom.css, so that they follow
// the Docusaurus theme (`data-theme` on <html>).
const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}', './content/docs/**/*.{md,mdx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  // Infima (the Docusaurus base stylesheet) already resets the page; Tailwind's
  // preflight would fight with it in the docs. A scoped reset lives in custom.css.
  corePlugins: {preflight: false},
  theme: {
    extend: {
      colors: {
        bg: 'var(--bl-bg)',
        surface: 'var(--bl-surface)',
        'surface-2': 'var(--bl-surface-2)',
        ink: 'var(--bl-ink)',
        muted: 'var(--bl-muted)',
        faint: 'var(--bl-faint)',
        line: 'var(--bl-line)',
        accent: 'var(--bl-accent)',
        'accent-solid': 'var(--bl-accent-solid)',
        'accent-soft': 'var(--bl-accent-soft)',
      },
      fontFamily: {
        sans: ['var(--bl-font-sans)'],
        mono: ['var(--bl-font-mono)'],
      },
      maxWidth: {
        page: '1320px',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
};

export default config;
