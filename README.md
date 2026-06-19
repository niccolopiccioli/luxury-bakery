# Sweet Lab — Luxury Bakery Showcase

Multilingual marketing site (IT/EN/FR/ES) for **Sweet Lab**, a fictional luxury patisserie in Milan.

## Stack

- Next.js 16 · React 19 · Tailwind CSS 4
- next-intl · GSAP · Framer Motion · Lenis

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — redirects to `/it`.

## Scripts

```bash
npm run lint          # ESLint
npm run build         # Production build
npm run start         # Production server (binds 0.0.0.0)
node scripts/site-smoke-test.mjs
node scripts/verify-all-images.mjs
```

## Deploy

- **Vercel** (recommended for Next.js): connect the GitHub repo or run `vercel --prod`
- **Render**: use the included `render.yaml` Blueprint
