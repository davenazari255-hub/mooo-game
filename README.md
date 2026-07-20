# Fruit Farm Game

A mobile-first fruit farming game interface built with Next.js. The current version is a frontend prototype: it presents the farm, seed catalog, resource counters, side actions, and bottom navigation without a backend or persistent game state.

## Tech stack

- Next.js 16 with the App Router
- React 19
- TypeScript
- Tailwind CSS 3

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in a browser.

## Validation

```bash
npm run typecheck
npm run build
```

## Project structure

```text
src/
├── app/
│   ├── globals.css       Global game styles
│   ├── layout.tsx        Root metadata and document layout
│   └── page.tsx          Main game screen
└── components/
    ├── Art.tsx           Shared SVG asset renderer
    ├── BottomNav.tsx     Main navigation
    ├── FarmScene.tsx     Isometric fruit plot
    ├── Icons.tsx         Shared resource icons
    ├── SeedPanel.tsx     Seed catalog and plant-all action
    ├── SideButtons.tsx   Context actions around the farm
    └── TopBar.tsx        Level and resource counters
```

The `photos` directory contains visual references used for the frontend prototype.

## Deployment

The repository includes Vercel configuration for a standard Next.js deployment.
