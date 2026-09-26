# MARL@SUT course website

The course website for Multi-Agent Reinforcement Learning at Sharif University of Technology. Its interface follows the Material for MkDocs documentation layout used by the Deep RL Course website.

## Run locally

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Build and test

```bash
npm run build
npm test
```

## Editing course content

- Main-page sections and navigation: `app/page.tsx`
- Colors, typography, and responsive layout: `app/globals.css`
- Page title and fonts: `app/layout.tsx`

Replace the “To be announced” details when the official course content is available.
