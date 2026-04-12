# Mountain King Brewing — Asset Library

All brand assets uploaded across our session, organized into a clean folder structure.

## Folder Map

### `/logos`
- **`full_logo_color.svg`** — The full vector logo (wordmark + crowned bear + pines + arrow flourishes). Illustrator-exported SVG, ~64KB. **Use this everywhere possible** — vector, sharp at any size, transparent.
- **`wordmark_only.eps`** — Original Adobe Illustrator EPS export of just the typography portion of the logo. Lacks the bear illustration.
- **`wordmark_compact.svg`** — Small horizontal "MOUNTAIN KING BREWING" lockup, good for nav bars or tight spaces.
- **`wordmark_alt.svg`** — Alternative wordmark variation.
- **`full_logo_raster.png`** — Raster export of the full logo (4500×4500). Saved as JPEG-with-PNG-extension; has a solid black background, not actually transparent.
- **`MNTKNG_LOGO.png`** — Earlier raster logo file.

### `/labels` (10 beers)
Full beer label artwork as raster PNGs/JPGs. These are the actual print labels used on the cans.
- `cocaine_bear.png` — Hazy IPA, rust-red label with crowned bear in pines
- `sunshine_wheat.png` — Hefeweizen, deep teal with explosive sunburst bear
- `peaches_and_cream.png` — Fruited Sour Ale, saturated orange with peach crate art
- `blackbeary_ale.png` — Pale Seasonal Ale, deep purple with blackberry bear
- `hive_heist.jpg` — Honey Lager, parchment cream with beehive and bees (collab beer)
- `big_hollow.png` / `big_hollow_v2.png` — Catskills Lager, vintage photo of kids in field
- `batavia_pils.png` — Czech-style Pilsner, deep map teal with trail signs
- `burnt_knob_porter.png` — Porter, burnt sienna with map background
- `oktoberfest.png` / `oktoberfest_v2.png` — Festbier, parchment with Bavarian boot art
- `winter_lager.png` — German Dunkel, ski-sky blue with chair lift and skiers (the "ski slope scene")

### `/illustrations`
Vector illustrations extracted from the labels and brand system. All Illustrator-exported SVGs with native transparency.
- **`honey_bear.svg`** — The crowned bear from Hive Heist with honey dripping over its head, surrounded by bees. Used as the featured Cocaine Bear card decoration.
- **`beehive.svg`** — Beehive with dripping honey and buzzing bees. Used on the Hive Heist card.
- **`pine_silhouette.svg`** — Pine forest + mountain ridge silhouette strip. Used at the hero baseline. Has a baked-in white background rect (`.cls-1`) that needs to be removed before web use.
- **`illustration_1.svg`**, **`illustration_6.svg`**, **`illustration_7.svg`**, **`illustration_8.svg`** — Additional vector elements from the brand system (purpose TBD).

### `/patterns`
- **`honeycomb.svg`** — Honeycomb hex pattern, used as section background on parchment areas (Story, Taproom). Vector, scales perfectly.

### `/maps`
- **`catskills_map.svg`** — Vintage Catskills survey map as full vector (1.47MB — too big to inline, serve as separate file for production).
- **`catskills_map.png`** — Raster version, smaller file size, used as the hero background.

### `/fonts`
- **`TabernaSerif-Regular.woff2`** — Body text and italics
- **`TabernaSerif-Black.woff2`** — Display headlines (the wood-type liquor-label character)
- **`TabernaSans-Regular.woff2`** — Sub-headers, nav, body
- Commercial family from Latinotype. License covers web use; embed via `@font-face`.

### `/source`
- **`source_design.psd`** — Original Photoshop design file from earlier in the project
- **`portfolio_slide.png`** — Slide layout reference
- **`reference_index.html`** — Earlier HTML version for reference

## Notes for production deploys

**SVGs to optimize before shipping**: Run `svgo` on `honey_bear.svg`, `pine_silhouette.svg`, and the larger illustration files to strip ~40-60% of file size without visual quality loss. The Illustrator exports include lots of unnecessary precision and metadata.

**Pine silhouette baked white background**: The `.cls-1` rect in `pine_silhouette.svg` needs to be deleted (or its fill changed to `none`) before use, otherwise it renders with a white background. Same goes for any other Illustrator SVG that exports with a "background" layer.

**Beer label colors used as CSS variables in the site**:
- Cocaine Bear: `#C2492C` rust-red
- Sunshine Wheat: `#106B6A` deep teal + `#DE592F` orange accent
- Peaches & Cream: `#ED9B2A` orange
- Blackbeary Ale: `#4B3041` deep purple
- Hive Heist: `#F4E4B9` honey cream
- Big Hollow: `#4F9584` vintage teal
- Batavia Pils: `#204A56` map teal
- Burnt Knob Porter: `#7A3920` burnt sienna
- Oktoberfest: `#F1D9A9` parchment + `#1C677C` Bavarian teal
- Winter Lager: `#178B9E` ski-sky blue

**Brand palette**:
- Parchment: `#EFE4CB`
- Ink: `#1C2221`
- Teal Deep (primary): `#204A56`
- Rust (CTAs): `#C2492C`
- Mustard (accents): `#D9A441`

---

Generated as a side artifact of the website build session. If anything's missing or mislabeled let me know.
