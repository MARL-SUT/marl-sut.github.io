# MARL@SUT course website

The course website for Multi-Agent Reinforcement Learning at Sharif University of Technology. It includes the course overview, proposed 14-week schedule, learning resources, assessment format, and staff section.

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

- Course copy, schedule, resources, and staff: `app/page.tsx`
- Colors, typography, and responsive layout: `app/globals.css`
- Page title and social metadata: `app/layout.tsx`
- Social sharing image: `public/og.png`

Replace the “To be announced” details once the course term and staff are confirmed.
