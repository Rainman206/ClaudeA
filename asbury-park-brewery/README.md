# Asbury Park Brewery — Spec Redesign Concept

An unsolicited redesign concept for Asbury Park Brewery, built as a portfolio /
pitch piece. **Not a live deployment, not affiliated with the real brewery.** All
beer names, copy, addresses, hours, and events on this site are invented for
design purposes. If this concept ever went forward, all brand assets (logo,
photography, official copy) would be client-supplied and licensed before launch.

## Concept: "Salt & Static"

A concrete-and-neon reading of the Jersey Shore: near-black stage, editorial
condensed display type set against a precise mono for chrome, a single
saturated teal doing the heavy lifting for accent. The brand lives at the
seam between the working waterfront (steel rails, kegging lines, off-season
cold) and late-night Asbury (arcade neon, boardwalk haze, Stone Pony
marquee) — without tipping into kitsch.

### Art direction pillars

- **Editorial type pairing.** Bebas Neue set large and tight, broken against
  JetBrains Mono (for lot numbers, coordinates, ABV, system chrome) and
  Fraunces for story passages.
- **Near-black + teal.** `#0B0E10` base, `#F2ECE0` bone type, `#2BE4C6` teal
  accent, `#FF6A3D` ember reserved for small flags.
- **Deliberate grid breaks.** Strict 12-col baseline violated on purpose
  — beer cards stagger vertically, headlines bleed right, a marquee runs
  between hero and lineup.
- **Purposeful motion.** One orchestrated entrance (staggered mask reveals),
  one persistent ambient (marquee), and hover-only secondary motion.
  Respects `prefers-reduced-motion`.

## Sections

1. Hero — oversized wordmark with mono meta strip
2. Marquee ticker — full-bleed rolling display
3. Beer lineup — 6 invented styles, filterable, CSS-drawn can placeholders
4. Visit / Taproom — hours grid + CSS-rendered map placeholder
5. Story — editorial two-column with drop cap and pull quote
6. Events teaser — three upcoming fictional events
7. Footer — sitemap, newsletter, concept disclaimer

## Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3** with custom tokens (see `tailwind.config.js`)
- **Framer Motion 11**
- Mobile-first, responsive from 320px up
- WCAG AA — skip link, focus-visible ring, semantic landmarks, reduced-motion
  support, minimum contrast on teal-on-ink headings

## Placeholder strategy

No photography is used. Beer "cans" are rendered entirely in CSS (gradient
body + noise overlay + mono labeling). The map is a CSS-drawn coordinate
grid with SVG streets and a pulsing pin. Every placeholder is visually or
textually tagged as such so the unsolicited-concept status is obvious.

If you want to swap in Unsplash shots during your own review, I'd suggest
credited open-license picks like Asbury boardwalk interiors or brewhouse
equipment — but the current build intentionally avoids any real imagery.

## Run locally

```bash
npm install
npm run dev            # http://127.0.0.1:5173
npm run build          # standard multi-file build -> dist/
npm run build:single   # single-file build -> dist/index.html
                       #   then copied to ../asbury-park-brewery-v1.html
                       #   (named to avoid collision with mountain-king-v2.html
                       #    at the repo root)
npm run preview        # serves dist/
```

### Single-file preview

`asbury-park-brewery-v1.html` at the repo root is a fully self-contained HTML
file &mdash; CSS, JS, and markup inlined &mdash; so it can be opened directly
in a browser or dropped into any static host without a build step. It sits
alongside `mountain-king-v2.html` under a distinct name on purpose.

## Deploy (Netlify)

`netlify.toml` is configured. Either drag `dist/` into Netlify Drop or
connect the repo and let Netlify build with `npm run build`.

## Notes and assumptions

- Fonts load from Google Fonts (Bebas Neue / Fraunces / JetBrains Mono).
  In production, swap for self-hosted or licensed equivalents.
- All content is original, written in a plausible independent-brewery voice.
  Names like *Boardwalk Static*, *Convention Hall Stout*, *Kingsley Sour* are
  invented; they nod to Asbury Park landmarks without copying the real
  brewery's product list.
- The concept disclaimer in the footer is load-bearing — keep it.

## License

Code: concept piece, shared for portfolio review.
Brand / copy: this is a concept. Any real-world use requires the real
brewery's engagement and licensed assets.
