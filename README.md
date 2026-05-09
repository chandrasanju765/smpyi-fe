# Smpyi — B2B Marketplace Frontend

A Next.js 14 project with the App Router, TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
smpyi/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout (Header + Footer)
│   ├── page.tsx                # Home page
│   └── globals.css             # Global styles + CSS variables
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Sticky navbar with mobile menu + theme toggle
│   │   └── Footer.tsx          # Site footer
│   ├── home/
│   │   ├── HeroCarousel.tsx    # Auto-playing hero slider
│   │   ├── CategoriesSection.tsx # 8-category grid
│   │   └── BestValueDeals.tsx  # Deal cards section
│   └── ui/
│       ├── ThemeToggle.tsx     # Dark/light mode switch
│       └── CategoryCard.tsx    # Reusable category card
│
├── hooks/
│   ├── useTheme.ts             # Theme state + localStorage persistence
│   └── useCarousel.ts         # Carousel state + auto-play logic
│
├── lib/
│   └── utils.ts               # cn() utility (clsx + tailwind-merge)
│
├── public/
│   └── images/                # Add hero + deal images here
│
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

## Theme System

The project uses CSS custom properties for theming (defined in `globals.css`):

- `--bg`, `--bg-surface`, `--bg-card`, `--bg-nav` — background layers
- `--border` — border color
- `--text-primary`, `--text-secondary`, `--text-muted` — text hierarchy

Toggle is stored in `localStorage` under the key `smpyi-theme`.

## Typography

From the Figma design spec:
- **Display**: Poppins Medium 36px, line-height 100%
- **Body LG**: Poppins Medium 20px, line-height 100%

## Adding Hero Images

Place images in `public/images/` and update the `SLIDES` array in
`components/home/HeroCarousel.tsx`. Each slide has an `image` field ready
to accept the path.

## Color Palette

| Token | Value |
|---|---|
| Primary (orange) | `#F97316` |
| Accent blue | `#3B82F6` |
| Dark bg | `#0F172A` |
| Dark card | `#1A2744` |

## Build

```bash
npm run build
npm run start
```
