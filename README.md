# 🐄 Mooo Game — Farm Mini-App (UI Preview)

A Telegram farm mini-app. This branch is a **from-scratch UI redesign** that
matches the supplied reference mock-up. It is a **design preview only** — the
buttons are intentionally non-functional and game logic/back-end come later.

## Tech

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Baloo 2** display font
- **Telegram WebApp SDK** (loaded, not yet wired to gameplay)

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Structure

```
src/
├── app/
│   ├── layout.tsx        # root layout, fonts, Telegram SDK
│   ├── page.tsx          # screen composition
│   └── globals.css       # design tokens + component styles
└── components/
    ├── AssetSlot.tsx     # placeholder that auto-swaps to real art
    ├── TopBar.tsx        # coins / gems / level+XP / settings
    ├── FarmField.tsx     # fenced plot (uses farm-field.jpg)
    ├── SideDock.tsx      # left & right floating icon docks
    ├── PlantAllButton.tsx
    ├── SeedShop.tsx      # tabs + horizontal seed cards
    └── BottomNav.tsx     # Farm / Market / Warehouse / Factory / Prestige
```

## Art assets

All illustrated art is supplied as PNG files dropped into `public/assets/`.
Any missing file shows a neat placeholder until the real art is added; once the
file exists it appears automatically (no code change needed). See
`docs/needed-assets` for the full list of expected filenames.

The only art asset currently present is `public/assets/farm-field.jpg` (the
supplied field illustration), used as the farm background.
