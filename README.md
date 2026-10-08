# BioListener website

Source of [biolistener.com](https://biolistener.com), the website of BioListener.

Built with [Docusaurus](https://docusaurus.io/) and Tailwind CSS.

## Development

Requires Node.js 20 or newer.

```bash
npm install
npm start        # local preview at http://localhost:3000
npm run build    # production build in build/
```

Page text lives in `src/data/`. Documentation pages live in `content/docs/`.

## Deployment

The site is hosted on Cloudflare, which builds and publishes it on every push to the default branch.

Build command `npm run build`, deploy command `npx wrangler deploy` (configured in `wrangler.jsonc`), Node.js 20 (set in `.node-version`).

## License

Code: [GPL-3.0](https://www.gnu.org/licenses/gpl-3.0.html). Text and images: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
