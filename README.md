# Sweet Lab — Luxury Bakery Showcase

Sito vetrina multilingue per **Sweet Lab**, pasticceria di lusso immaginaria nel cuore di Milano. Progetto front-end completo con animazioni scroll-driven, design system curato e contenuti fittizi pronti per demo o portfolio.

**Live:** [luxury-bakery.vercel.app](https://luxury-bakery.vercel.app)

---

## Panoramica

Sweet Lab è un concept di *haute patisserie* artigianale: laboratorio luminoso, ingredienti selezionati, precisione tecnica. Il sito presenta il brand attraverso una homepage cinematografica e pagine interne per storia, prodotti, galleria fotografica, contatti e prenotazioni.

Tutti i testi, i prezzi e i recapiti sono **fittizi**. Le immagini provengono da [Unsplash](https://unsplash.com) e [Pexels](https://pexels.com), con attribuzione dove richiesto.

### Lingue supportate

| Locale | URL esempio |
|--------|-------------|
| Italiano (default) | `/it` |
| English | `/en` |
| Français | `/fr` |
| Español | `/es` |

La root `/` reindirizza automaticamente a `/it`.

---

## Pagine

| Route | Contenuto |
|-------|-----------|
| `/[locale]` | Homepage: preloader, hero animato, manifesto pin-scroll, carousel orizzontale creazioni, laboratorio, teaser galleria, invito alla visita |
| `/[locale]/chi-siamo` | Timeline brand, valori, team |
| `/[locale]/creazioni` | Griglia prodotti con filtri per categoria |
| `/[locale]/galleria` | Masonry grid, lightbox, filtri categoria |
| `/[locale]/contatti` | Form mock + informazioni e mappa placeholder |
| `/[locale]/prenotazioni` | Form prenotazione tavolo (mock) |
| 404 localizzata | Pagina non trovata tradotta in tutte e 4 le lingue |

---

## Design — *Laboratorio Luminoso*

Concept visivo che unisce calore artigianale e precisione da laboratorio.

| Token | Valore | Uso |
|-------|--------|-----|
| Cream | `#faf7f2` | Sfondo principale |
| Espresso | `#2c1810` | Testo, contrasto |
| Copper | `#b87333` | Accenti, CTA |
| Champagne | `#e8dcc8` | Sezioni alternate |
| Rose gold | `#c9a89a` | Dettagli decorativi |

**Tipografia:** Cormorant Garamond (display) + Outfit (body), caricati via `next/font`.

**Texture:** overlay grain SVG a bassa opacità per profondità visiva.

---

## Animazioni e UX

- **GSAP + ScrollTrigger** — pin del manifesto, scroll orizzontale creazioni, timeline Chi siamo, parallax immagini
- **Framer Motion** — transizioni pagina, hover card, lightbox galleria, preloader
- **Lenis** — smooth scroll integrato con ScrollTrigger
- **`prefers-reduced-motion`** — animazioni disabilitate quando l'utente lo richiede (accessibilità)
- **Cleanup GSAP** — distruzione ScrollTrigger su cambio route (no errori DOM in navigazione)

---

## Stack tecnico

| Categoria | Tecnologie |
|-----------|------------|
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| UI | [React 19](https://react.dev), [Tailwind CSS 4](https://tailwindcss.com) |
| i18n | [next-intl 4](https://next-intl.dev) — routing, messaggi, metadata localizzati |
| Motion | [GSAP 3](https://gsap.com), [Framer Motion 12](https://motion.dev), [Lenis](https://lenis.darkroom.engineering) |
| Immagini | `next/image` + URL centralizzati in `src/lib/images.ts` |
| Deploy | [Vercel](https://vercel.com) (produzione) · [Render](https://render.com) (`render.yaml` incluso) |

---

## Struttura del progetto

```
src/
├── app/
│   ├── [locale]/          # Route localizzate (layout, pagine, 404)
│   ├── globals.css        # Design tokens + utility
│   └── layout.tsx         # Root layout
├── components/
│   ├── home/              # Sezioni homepage
│   ├── layout/            # Header, Footer, LangSwitcher
│   ├── motion/            # Primitivi animazione riutilizzabili
│   ├── pages/             # Contenuti pagine interne
│   └── ui/                # Button, Section, ImageCredit
├── data/                  # Prodotti, galleria, nav, site config
├── i18n/                  # Routing, request config, navigation helpers
├── lib/                   # Utils, hooks, immagini, metadata
├── messages/              # Traduzioni it | en | fr | es
└── proxy.ts               # Proxy i18n (Next.js 16)
scripts/
├── site-smoke-test.mjs    # Test route + image optimizer
└── verify-all-images.mjs  # Verifica HTTP 200 su tutte le immagini
```

---

## Avvio locale

**Requisiti:** Node.js 20+

```bash
git clone https://github.com/niccolopiccioli/luxury-bakery.git
cd luxury-bakery
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) — verrai reindirizzato a `/it`.

### Script disponibili

```bash
npm run dev       # Dev server (Turbopack)
npm run build     # Build produzione
npm run start     # Server produzione (bind 0.0.0.0)
npm run lint      # ESLint

# Verifiche
node scripts/site-smoke-test.mjs
BASE_URL=https://luxury-bakery.vercel.app node scripts/site-smoke-test.mjs
node scripts/verify-all-images.mjs
```

---

## Deploy

### Vercel (consigliato)

Il progetto è collegato al repo GitHub: ogni push su `main` avvia un deploy automatico.

```bash
vercel --prod
```

URL produzione: **https://luxury-bakery.vercel.app**

### Render

Usa il Blueprint incluso:

```bash
# Dopo push su GitHub
https://dashboard.render.com/blueprint/new?repo=https://github.com/niccolopiccioli/luxury-bakery
```

Configurazione in `render.yaml` — web service Node.js, regione Frankfurt, piano free.

---

## Dati e contenuti

- **Prodotti** — `src/data/products.ts` (8 creazioni, categorie, prezzi EUR)
- **Galleria** — `src/data/gallery.ts` (24 foto, 6 categorie)
- **Brand** — `src/data/site.ts` (indirizzo Via della Spiga, orari, social)
- **Traduzioni** — `src/messages/{it,en,fr,es}.json`

Per aggiungere una lingua: estendi `src/i18n/routing.ts`, crea il file messaggi e rigenera le route statiche.

---

## Accessibilità e SEO

- Alt text tradotti per ogni immagine
- `generateMetadata` per locale su ogni pagina
- Supporto `prefers-reduced-motion`
- HTML semantico (`section`, heading hierarchy, landmark ARIA dove necessario)

---

## Limitazioni (fase attuale)

Questo è un **skeleton front-end**. Non incluso:

- Backend / invio email form
- CMS o pannello admin
- E-commerce e pagamenti
- Analytics
- Blog

I form contatti e prenotazioni simulano l'invio lato client.

---

## Licenza

Progetto dimostrativo. Contenuti e brand **Sweet Lab** sono fittizi. Immagini soggette alle licenze Unsplash/Pexels.

---

Sviluppato come showcase di design e front-end engineering per il settore luxury food & beverage.
