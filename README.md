# Sweet Lab — Luxury Bakery Showcase

Multilingual marketing site for **Sweet Lab**, a fictional luxury patisserie in the heart of Milan. A complete front-end project with scroll-driven animations, a curated design system, and fictional demo content ready for portfolio or client presentations.

**Live:** [luxury-bakery.vercel.app](https://luxury-bakery.vercel.app)

---

## Overview

Sweet Lab is an *haute patisserie* concept: a bright atelier, carefully sourced ingredients, and technical precision. The site introduces the brand through a cinematic homepage and inner pages for story, products, photo gallery, contact, and reservations.

All copy, prices, and contact details are **fictional**. Images are sourced from [Unsplash](https://unsplash.com) and [Pexels](https://pexels.com), with attribution where required.

### Supported languages

| Locale | Example URL |
|--------|-------------|
| Italian (default) | `/it` |
| English | `/en` |
| French | `/fr` |
| Spanish | `/es` |

The root `/` automatically redirects to `/it`.

---

## Pages

| Route | Content |
|-------|---------|
| `/[locale]` | Homepage: preloader, animated hero, pinned manifesto scroll, horizontal creations carousel, laboratory section, gallery teaser, visit CTA |
| `/[locale]/chi-siamo` | Brand timeline, values, team |
| `/[locale]/creazioni` | Product grid with category filters |
| `/[locale]/galleria` | Masonry grid, lightbox, category filters |
| `/[locale]/contatti` | Mock contact form + info block and map placeholder |
| `/[locale]/prenotazioni` | Mock table reservation form |
| Localized 404 | Not-found page translated in all 4 languages |

---

## Design — *Laboratorio Luminoso*

A visual concept blending artisan warmth with laboratory precision.

| Token | Value | Usage |
|-------|-------|-------|
| Cream | `#faf7f2` | Main background |
| Espresso | `#2c1810` | Text, contrast |
| Copper | `#b87333` | Accents, CTAs |
| Champagne | `#e8dcc8` | Alternate sections |
| Rose gold | `#c9a89a` | Decorative details |

**Typography:** Cormorant Garamond (display) + Outfit (body), loaded via `next/font`.

**Texture:** low-opacity SVG grain overlay for visual depth.

---

## Animations & UX

- **GSAP + ScrollTrigger** — manifesto pin, horizontal creations scroll, About timeline, image parallax
- **Framer Motion** — page transitions, card hover, gallery lightbox, preloader
- **Lenis** — smooth scroll integrated with ScrollTrigger
- **`prefers-reduced-motion`** — animations disabled when the user requests it (accessibility)
- **GSAP cleanup** — ScrollTrigger instances killed on route change (no DOM errors on navigation)

---

## Tech stack

| Category | Technologies |
|----------|--------------|
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| UI | [React 19](https://react.dev), [Tailwind CSS 4](https://tailwindcss.com) |
| i18n | [next-intl 4](https://next-intl.dev) — routing, messages, localized metadata |
| Motion | [GSAP 3](https://gsap.com), [Framer Motion 12](https://motion.dev), [Lenis](https://lenis.darkroom.engineering) |
| Images | `next/image` + centralized URLs in `src/lib/images.ts` |
| Deploy | [Vercel](https://vercel.com) (production) · [Render](https://render.com) (`render.yaml` included) |

---

## Project structure

```
src/
├── app/
│   ├── [locale]/          # Localized routes (layout, pages, 404)
│   ├── globals.css        # Design tokens + utilities
│   └── layout.tsx         # Root layout
├── components/
│   ├── home/              # Homepage sections
│   ├── layout/            # Header, Footer, LangSwitcher
│   ├── motion/            # Reusable animation primitives
│   ├── pages/             # Inner page content
│   └── ui/                # Button, Section, ImageCredit
├── data/                  # Products, gallery, nav, site config
├── i18n/                  # Routing, request config, navigation helpers
├── lib/                   # Utils, hooks, images, metadata
├── messages/              # Translations it | en | fr | es
└── proxy.ts               # i18n proxy (Next.js 16)
scripts/
├── site-smoke-test.mjs    # Route + image optimizer tests
└── verify-all-images.mjs  # HTTP 200 check on all images
```

---

## Local development

**Requirements:** Node.js 20+

```bash
git clone https://github.com/niccolopiccioli/luxury-bakery.git
cd luxury-bakery
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you will be redirected to `/it`.

### Available scripts

```bash
npm run dev       # Dev server (Turbopack)
npm run build     # Production build
npm run start     # Production server (binds 0.0.0.0)
npm run lint      # ESLint

# Verification
node scripts/site-smoke-test.mjs
BASE_URL=https://luxury-bakery.vercel.app node scripts/site-smoke-test.mjs
node scripts/verify-all-images.mjs
```

---

## Deployment

### Vercel (recommended)

The project is linked to the GitHub repo: every push to `main` triggers an automatic deploy.

```bash
vercel --prod
```

Production URL: **https://luxury-bakery.vercel.app**

### Render

Use the included Blueprint:

```bash
# After pushing to GitHub
https://dashboard.render.com/blueprint/new?repo=https://github.com/niccolopiccioli/luxury-bakery
```

Configuration in `render.yaml` — Node.js web service, Frankfurt region, free plan.

---

## Data & content

- **Products** — `src/data/products.ts` (8 creations, categories, EUR prices)
- **Gallery** — `src/data/gallery.ts` (24 photos, 6 categories)
- **Brand** — `src/data/site.ts` (Via della Spiga address, hours, social links)
- **Translations** — `src/messages/{it,en,fr,es}.json`

To add a language: extend `src/i18n/routing.ts`, create the messages file, and regenerate static routes.

---

## Accessibility & SEO

- Translated alt text for every image
- `generateMetadata` per locale on each page
- `prefers-reduced-motion` support
- Semantic HTML (`section`, heading hierarchy, ARIA landmarks where needed)

---

## Current limitations

This is a **front-end skeleton**. Not included:

- Backend / form email delivery
- CMS or admin panel
- E-commerce and payments
- Analytics
- Blog

Contact and reservation forms simulate submission on the client side.

---

## License

Demo project. **Sweet Lab** brand and content are fictional. Images subject to Unsplash/Pexels licenses.

---

Built as a design and front-end engineering showcase for the luxury food & beverage sector.
