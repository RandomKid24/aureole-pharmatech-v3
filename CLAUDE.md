# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

`AGENTS.md` holds the detailed project rules (vCard workflow, image optimization, SEO workflow, design tokens) and `design.md` the UI standards. Read them before changing pages, assets or vCards; this file only adds what they don't cover.

## Commands

- `npm run dev`: Vite dev server on :3000 (includes middleware that serves `/vcards/*` from `public/vcards-2026/`).
- `npm run build`: three steps chained: `vite build`, then `vite build --ssr scripts/prerender.entry.ts --outDir .prerender`, then `node .prerender/prerender.entry.js`, which writes a static `dist/<route>/index.html` per route. `.prerender/` is git-ignored build output.
- `npx tsc --noEmit`: the only type check. There is no linter and no test suite.
- `npm run sitemap`: regenerates `public/sitemap.xml` (run after changing the product catalog or routes; it is not part of `build`).
- `npm run optimize`: converts images in `public/` to WebP (required after adding raster assets).

## Architecture

Client-side React 19 SPA (Vite, React Router 7, no SSR framework) deployed on Vercel. Because crawlers and AI bots often don't run JS, the build **prerenders head tags, JSON-LD and a text fallback body** for every route; React then replaces `#root`. Things that span several files:

- **Prerender pipeline.** `scripts/prerender.entry.ts` takes `dist/index.html` as a template and writes one file per route from the data modules (`data/pageSeo.ts`, `data/products`, `data/cityWiseProducts.ts`, `data/directAnswers.ts`). Its tags carry `data-rh`, and `index.tsx` removes them (plus the static description/canonical/og/twitter tags) before mounting so `components/SEO.tsx` (react-helmet-async) re-adds a single set. A route that renders no `<SEO>` therefore ends up with no description or canonical.
- **Metadata single source.** Core page titles/descriptions live in `data/pageSeo.ts` (`PAGE_SEO`, keyed by path without trailing slash); product titles in `data/seoMetadata.ts`. Pages render a bare `<SEO />` and it looks up the path. New route = add to `PAGE_SEO`, `scripts/generate-sitemap.js`, and (if it isn't a `PAGE_SEO` key) the prerender entry.
- **Product visibility is driven by `data/products/catalog.ts`.** `PRODUCT_DETAILS` (in `data/products/details.ts`) defines every product page, but only names listed in `PRODUCT_CATALOG` (exported as `LISTED_PRODUCT_NAMES`) appear in category pages, the sitemap and the prerender; others still render by direct URL with `noindex`. `PRODUCT_LIST_STATUS.md` documents this and must be kept in sync. `scripts/generate-sitemap.js` is plain JS, so it re-parses `catalog.ts` with a regex and carries its own copy of `slugify` (keep it identical to `utils/urlUtils.ts`) and a hard-coded `ALL_PRODUCT_SLUGS` list that must contain any newly listed product.
- **Product URLs are slugs of display names** (`utils/urlUtils.ts` `slugify`; `findValuesBySlug` matches against `PRODUCT_DETAILS` keys). Renaming a key changes its URL.
- **City pages** (`/<product>-manufacturers-and-suppliers-in-<city>`) are parsed from the slug in `pages/CityWiseProductPage`, using the four Walk In products and city lists in `data/cityWiseProducts.ts` (`CITY_REGION` supplies the state; add a region only when known). The prerender and sitemap script each duplicate the product/city lists.
- **Routing catch-all.** `App.tsx` ends with `/:cityProductSlug` then `*` -> `NotFound`; unknown routes are `noindex` client-side but Vercel still answers 200 (rewrite to `index.html` in `vercel.json`). Redirects (www host, `/contact*`, `/about-us`, `/stability-chamber` without trailing slash) live in `vercel.json`.
- **Tailwind runs from the CDN** with its config inline in `index.html` (brand colors, fonts, animations); there is no Tailwind build step or `tailwind.config`.
- **vCards** are standalone HTML under `public/vcards-2026/`, served at `/vcards/<slug>/` via rewrites, sent `X-Robots-Tag: noindex`, yet listed in the sitemap from `vcard_urls.txt`.
- **Third-party runtime pieces:** GA4 tag and a chat widget in `index.html`; enquiry forms POST to an external HRMS API (`hrms.encryptedbar.com`); careers pages call a separate jobs API. Analytics events go through `utils/track.ts`.
- `public/content.md` and `public/llms.txt` are crawler-facing fact sheets that must mirror the UI/product data (the UI wins on conflicts).
- Content rule: 21 CFR Part 11 is described as "supports requirements", never "compliant"; don't invent specs, certifications or ratings.
