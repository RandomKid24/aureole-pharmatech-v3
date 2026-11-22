# Changelog

## 2026-11-22: SEO overhaul, product page redesign, content fixes

21 commits (`9f8fe50` to `eaa96dc`), 107 files changed. Nothing here is live until `git push origin main` is run.

---

## In simple words

**SEO (so Google and AI tools find and understand the site)**
- Every page title is now 60 characters or fewer, so Google does not cut it. Every meta description is 135 to 158 characters and uses real specs from the product data.
- The site now says: made in Nashik, India, sold in India, exported to 15+ countries. Product titles say "Manufacturer & Exporter".
- Staff vCards are out of the sitemap and hidden from search (noindex).
- Company data for Google is fuller: legal name, both offices, the plant, IndiaMART link.
- Thin pages (About, Certifications, Plants, Service, Software, Careers) now give crawlers real text.
- New comparison guide: Stability Chamber vs Humidity Chamber vs BOD Incubator.
- Product and city pages now link to related products.
- City pages were cleaned up (no unverified "service center" claims; same product info as the product page).
- The site is faster to load (Tailwind is built once instead of in every visitor's browser) and has security headers.

**Product pages (how they look)**
- New top section: the product sits on a circle in a 3D carousel (left, front, right views). Click, swipe, scroll sideways or use arrows.
- Water Bath and Ultrasonic Bath use the same carousel with the type names as pills.
- Standard equipment and add-ons are clean rows with small sharp icons.
- A sticky bar (Overview, Features, Inside the chamber, Models & sizes, Enquiry) follows you down the page.
- A "Need a different size?" strip appears where the data says customised sizes are offered.
- New Dry Bath picture; misspelled picture file names fixed.

**Content fix**
- "28 years" was the founder's experience, not the company's age. It now says so, shows 29+, and goes up by one every 1 January by itself.

---

## In detail

### SEO: titles and descriptions
- All 128 prerendered pages: title at most 60 characters (longest is exactly 60). Hub and company pages had been up to 92.
- Product titles: `{Product} Manufacturer & Exporter, India | Aureole` (the ", India" is dropped when the title would pass 60).
- Meta descriptions rewritten for 40 products, 14 pages and 88 city pages. Each leads with verified specs, drops "Best Quality & Price", ends with a call to action. Range 135 to 158 characters.
- City pages: description built by `data/cityPageContent.ts`, choosing the longest spec set that fits; countries say "Made in Nashik, India, exported to 15+ countries".
- Fixed a wrong Cold Chamber title that claimed -40°C to +80°C (the data says 2°C to 8°C).
- Wording rule (owner confirmed 2026-11-22): manufactured in India, sold in India and exported to 15+ countries.

### SEO: crawling, sitemap and structure
- `scripts/generate-sitemap.js`: vCards no longer listed; duplicate city pages (Mumbai-2) skipped; comparison guide added. Sitemap has 128 URLs.
- `noindex, nofollow` meta added to all 43 vCards (the header in `vercel.json` was not being served live).
- `index.html` company graph: legal name Aureole Pharma Private Limited, alternate names, Thane office, Malegaon plant, `knowsAbout`, IndiaMART in `sameAs`; the India-only `areaServed` was removed.
- `Service` schema on `/service` (page and prerender).
- `public/llms.txt` rewritten (all main product and company pages, export wording); `public/robots.txt` names GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot and Google-Extended.
- `data/prerenderDetails.ts`: verified facts from `BUSINESS_FACTS.md` added to the prerendered text of About, Certifications, Plants, Service, Software and Careers (About went from 22 words to 158).
- Alt text: all 36 `<img>` tags have an alt attribute; team and product-list thumbnails got real alt text.
- Layout shift measured at 0.000 on five key pages, so image width/height attributes were not needed.

### SEO: new content and links
- New page `/guides/stability-chamber-vs-humidity-chamber-vs-bod-incubator/`: comparison table, "which one do I need?" list, five FAQ answers (FAQ schema). All values come from product data. Linked from the stability hub FAQ.
- `data/relatedProducts.ts` and a Related products section on product and city pages (114 pages, 498 links, all resolve); the comparison guide is linked where it applies. The same links are in the prerendered HTML.

### City and country pages
- Same sections as the product page (hero, specs, "Inside the Chamber", models, enquiry); the place name appears only in the URL, title, description, heading and breadcrumb.
- Removed unverified "Service Centers in {city}" and "Operational Hub" claims from the city-specific block.
- `Mumbai-2` canonicalises to Mumbai.

### Performance and security
- Tailwind v3 built by Vite/PostCSS (`tailwind.config.js`, `postcss.config.js`, `index.css`); the CDN script is gone. Custom classes moved to `index.css`.
- `vercel.json`: HSTS, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy` and a report-only Content-Security-Policy.

### Product page redesign
- Hero (`ProductHero`, `ProductImageStage`): title on top, product on a circle. Products with 3 pictures get a coverflow carousel (left, front, right; tilt and slide animation, turning dashed ring, sliding view switch). One picture: floating picture with a turning ring. Specs sit beside a single picture or in a grid under the carousel. Description and "Request a quote" button below.
- Water Bath and Ultrasonic Bath: the types come from the comparison table, shown as named pills; the chosen type changes the picture and shows its own specs.
- `ProductFeatureScroll`: standard equipment and add-ons as spec-sheet rows with pinned group headings and small sharp icons (compact products keep the tabs). Shared icon mapping moved to `components/ui/attributeIcons.ts`.
- `ProductSectionNav`: sticky section bar with active highlight and smooth scroll.
- `CustomSizeStrip`: shown only where the data offers customised sizes (16 products).
- Models and specification tables: eyebrow headings, lighter borders, larger text. "Introducing RHS" and "Inside the Chamber" headings use the gradient word and the hero's margins.
- Accessibility: keyboard arrows, tab roles, reduced-motion respected.

### Images
- New Dry Bath picture: 1200 px WebP with transparent background, `Dry Bath Final.webp` (old 392 px file removed).
- Misspelled files renamed with all references updated: Humidity Chamberr, Walk in Deep Freezerr, Air Sampaler, ultrasomic Cleaner, StablilityChamber-Standalone.
- Audit of all 87 product pictures: only the Muffle Furnace picture is low resolution (533 px).

### Founder experience (content fix)
- `utils/experience.ts`: `founderYears()` = current year minus 1997 (29 in 2026, 30 in 2027).
- Home About heading "29+ YEARS OF FOUNDER EXPERTISE.", home About text and first home FAQ answer reworded to the founder's experience.
- `public/content.md` uses the token `{{FOUNDER_YEARS}}`, filled in by `scripts/prerender.entry.ts` at build time (a deploy in the new year refreshes it).
- `BUSINESS_FACTS.md` updated (IndiaMART profile, export wording, founder experience).

### Docs
- `CLAUDE.md`, `AGENTS.md`, `BUSINESS_FACTS.md` updated for the Tailwind build, vCard status, sitemap and new facts.

---

## Commits
| Commit | Summary |
|---|---|
| 9f8fe50 | Tailwind build, shorter titles, city pages mirror product page, vCards out of sitemap |
| 9c50577 | Centred hero with angle switcher; spec-sheet rows for equipment and add-ons |
| d86297f | Front, left and right pictures together on the circle |
| ef89f69 | Side pictures in front of the centre picture |
| 95a7915 | Clickable 3D coverflow viewer |
| 5fa4d25 | Viewer for any picture count; single pictures float |
| 2f07c4f | Water bath and ultrasonic bath types as pills |
| ca96ac7 | Bath pages use the same carousel as other products |
| 31d3f4b | Fuller company schema, Service schema, llms.txt, robots.txt, vCard noindex, thin-page text |
| 19e268b | Rewrite all meta descriptions |
| 2ea25cb | Descriptions mention 15+ countries |
| 17dd5db | Manufactured in India, sold in India, exported to 15+ countries |
| c763936 | Remaining page titles at 60 characters or fewer |
| a3e1177 | City page titles within 60 characters |
| 66d4fe7 | Lengthen short descriptions |
| 2d54a91 | Comparison guide, Mumbai-2 out of sitemap, alt text |
| 8729387 | Related-product links |
| ae1422d | New Dry Bath picture |
| 8c83ecb | Fix misspelled picture file names |
| d9be6bb | Sticky section bar, custom-size strip, table styling |
| eaa96dc | Founder-experience wording, 29+ years, automatic count |

---

## Still open
**Needs the owner**
- Run `git push origin main` (nothing above is live yet).
- Vercel: set the non-www redirect to 308. Set up Google Search Console and submit the sitemap.
- Send PageSpeed scores and a Search Console export.
- Update IndiaMART products (profile lists deep freezers and ovens, not stability chambers); create TradeIndia, Google Business Profile and YouTube listings.
- Answers needed: price drivers, delivery time, warranty, IQ/OQ/PQ documents supplied, power failure behaviour, countries supplied, service response time.
- Reviewer name, Google Maps reviews link, case-study details, catalogue PDFs.
- Decisions: is "service centers across India and internationally" true; does service reach abroad (Service page text and schema still say India); plant address (ZED certificate says Plot B-80, others B-61); the Managing Director's "27 years" quote now disagrees with 29.
- Pictures: better Muffle Furnace render (533 px now), cleaner Dry Bath label text, separate pictures for Eco, Prime and Advanced Control, extra angles for single-picture products.

**After deploy**
- Check the live headers, redirect, forms, chat widget, structured data (Rich Results Test) and the new viewer on a real phone.
