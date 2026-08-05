# Think Audio Visual

Marketing site for Think Audio Visual — stage, sound, lighting and AV production,
Durban, South Africa. Built with Next.js (App Router), Tailwind CSS, GSAP +
Lenis for scroll animation, and React Three Fiber for the hero backdrop.

Live: https://thechmanic-sketch.github.io/Thinkaudiovisual-3/

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result. Pages
live under `src/app/`, shared UI under `src/components/`.

## Build

```bash
npm run build
```

This project is configured for **static export** (`output: "export"` in
`next.config.ts`) with a `basePath` of `/Thinkaudiovisual-3` so it serves
correctly from GitHub Pages as a project site. The build output goes to `out/`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
static export and publishes it to GitHub Pages via
`actions/deploy-pages`. Enable Pages for this repo under
**Settings → Pages → Source: GitHub Actions** if it isn't already.

## Stack

- Next.js 16 (App Router, static export)
- Tailwind CSS v4
- GSAP + ScrollTrigger, Lenis (smooth scroll)
- React Three Fiber / Three.js (hero visuals)
- TypeScript
