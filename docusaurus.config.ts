import fs from 'node:fs';
import path from 'node:path';
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// Used wherever a site-wide description is needed. Keep in sync with home.meta.description.
const DESCRIPTION =
  'BioListener is a startup developing an open-source biosensing ecosystem: hardware, firmware, and software for EEG, EMG, ECG, and EOG, scientifically validated and open for anyone to build on.';
const TAGLINE = 'An open-source ecosystem designed to revolutionize biosensing';

const GITHUB = 'https://github.com/serhii-matsyshyn';

const staticFile = (p: string) => fs.existsSync(path.join(__dirname, 'static', p));
// Optional assets: used only when the file is present.
const darkLogo = staticFile('img/logo/biolistener-logo-dark.png')
  ? 'img/logo/biolistener-logo-dark.png'
  : undefined;
const socialCard = staticFile('img/logo/social-card.jpg') ? 'img/logo/social-card.jpg' : undefined;

const config: Config = {
  title: 'BioListener',
  tagline: TAGLINE,
  favicon: 'img/logo/favicon.ico',

  url: 'https://biolistener.com',
  baseUrl: '/',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  markdown: {hooks: {onBrokenMarkdownLinks: 'throw', onBrokenMarkdownImages: 'throw'}},

  // Infima goes into CSS cascade layers, so the site's own styles always win.
  future: {v4: {removeLegacyPostBuildHeadAttribute: true, useCssCascadeLayers: true}},

  i18n: {defaultLocale: 'en', locales: ['en']},

  presets: [
    [
      'classic',
      {
        docs: {
          // Published documentation pages live in content/docs.
          path: 'content/docs',
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    function tailwindPlugin() {
      return {
        name: 'tailwindcss',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require('tailwindcss'), require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],

  themeConfig: {
    ...(socialCard ? {image: socialCard} : {}),
    metadata: [{name: 'description', content: DESCRIPTION}],
    colorMode: {defaultMode: 'light', respectPrefersColorScheme: true},
    navbar: {
      logo: {
        alt: 'BioListener',
        src: 'img/logo/biolistener-logo@nav.png',
        ...(darkLogo ? {srcDark: darkLogo} : {}),
        height: 26,
      },
      items: [
        {type: 'docSidebar', sidebarId: 'docs', label: 'Docs', position: 'left'},
        {to: '/sleep', label: 'BioListener Sleep', position: 'left'},
        {href: `${GITHUB}/biolistener`, label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      links: [
        {
          title: 'BioListener',
          items: [
            {label: 'GitHub', href: `${GITHUB}/biolistener`},
            {label: 'Docs', to: '/docs/intro'},
            {label: 'BioListener Sleep', to: '/sleep'},
          ],
        },
        {
          title: 'Licensing',
          items: [
            {label: 'Code: GPL-3.0', href: 'https://www.gnu.org/licenses/gpl-3.0.html'},
            {label: 'Hardware designs: CERN-OHL-S v2', href: 'https://cern-ohl.web.cern.ch/'},
            {label: 'Documentation: CC BY 4.0', href: 'https://creativecommons.org/licenses/by/4.0/'},
          ],
        },
        {
          title: 'Contact',
          items: [
            {label: 'contact@biolistener.com', href: 'mailto:contact@biolistener.com'},
          ],
        },
      ],
      copyright: '© 2024-2026 BioListener',
    },
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
  } satisfies Preset.ThemeConfig,
};

export default config;
