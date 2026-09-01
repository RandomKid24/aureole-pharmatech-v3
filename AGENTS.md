# AGENTS.md — Aureole Pharma Tech (V3) Engineering Guide

Welcome to the **Aureole Pharma Tech V3** codebase. This document serves as the operational guide and knowledge repository for AI agents and developers working on this project.

---

## 1. Project Architecture & Stack

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Framework** | [React 19](https://react.dev/) | Client-side Single Page Application (SPA) |
| **Build Tool** | [Vite 6](https://vitejs.dev/) | Fast HMR dev server & production bundling |
| **Language** | [TypeScript](https://www.typescriptlang.org/) (~5.8) | Strict typing across components, models, and data |
| **Routing** | [React Router 7](https://reactrouter.com/) | Client routes with trailing slash conventions |
| **Animations** | GSAP 3 & Framer Motion 12 | Smooth scroll triggers, micro-interactions, layout transitions |
| **Icons** | Lucide React | Modern minimalist UI icons |
| **Deployment** | Vercel | Clean URL rewrites and caching headers configured in `vercel.json` |

---

## 2. Directory Structure

```text
aureole-pharmatech-v3/
├── data/                      # Structured product data, specifications, home/about content
│   └── products/              # Subfolder categorized product definitions (.ts)
├── components/                # Reusable UI components (Navbar, Footer, Modals, SEO)
├── pages/                     # Routed page views (Home, About, Products, Service, etc.)
│   ├── Home/                  # Modular landing sections
│   ├── about/                 # Corporate profile, team, plants, compliance
│   └── products/              # Industrial product showcases & city-landing pages
├── public/                    # Static assets directly served by Vite/Vercel
│   ├── vcards-2026/           # Digital V-Card collection (HTML standalone bundles)
│   │   └── _shared/           # Shared CSS, JS libraries, and background assets
│   ├── sitemap.xml            # Auto-generated XML sitemap
│   └── sitemap.xsl            # XSL stylesheet for formatted browser sitemap preview
├── scripts/                   # Automation scripts (Sitemaps, V-Cards, Image optimization)
│   ├── optimize-images.py     # Converts JPG/PNG to WebP and updates code references
│   ├── generate-sitemap.js    # Compiles core pages, products, cities, and vcards to sitemap.xml
│   ├── fix-all-vcards.js      # Refactors vCards to use _shared assets and fixes metadata
│   └── add-vcard.js           # CLI tool to scaffold new employee digital business cards
├── vcard_urls.txt             # Registered XML loc records for all published vCards
├── vercel.json                # Vercel routing, rewrite rules, and security/cache headers
└── vite.config.ts             # Vite development server middleware for vCards & SPA rewrites
```

---

## 3. Core Development Commands

| Command | Action | Description |
| :--- | :--- | :--- |
| `npm run dev` | Start dev server | Launches Vite at `http://localhost:3000` |
| `npm run build` | Production build | Compiles TSX into `dist/` |
| `npm run sitemap` | Regenerate sitemap | Runs `scripts/generate-sitemap.js` $\rightarrow$ `public/sitemap.xml` |
| `npm run optimize` | Optimize images | Runs `python3 scripts/optimize-images.py` to convert assets to WebP |

---

## 4. Digital V-Card System (`public/vcards-2026/`)

Each employee has an interactive digital business card accessible at `https://www.aureolepharmatech.com/vcards/[slug]/`.

### Maintenance Rules & Best Practices:
1. **Shared Assets (`_shared/`)**:
   - V-Cards link CSS to `../_shared/css/` and JS to `../_shared/js/`.
   - Never retain redundant `assets/css` or `assets/js` in individual vCard directories.
2. **Contact Script (`save-btn`)**:
   - The `.vcf` generator script at the bottom of `index.html` must have a sanitized phone number (no spaces, e.g., `+919561178585`) and defined `email` field (empty string `""` if not present to avoid `undefined`).
3. **Registering New V-Cards**:
   - Add the slug to the `VCARDS` array in `scripts/generate-sitemap.js`.
   - Add the `<url>` entry to `vcard_urls.txt`.
   - Run `npm run sitemap` to reflect the changes in `public/sitemap.xml`.
   - Run `node scripts/fix-all-vcards.js` to ensure proper linking and cleanups.

---

## 5. Asset & Image Optimization Standard

- **Format Standard**: All raster images served on the website must be `.webp` format.
- **Maximum Resolution**: 4K/high-res renders are capped at 1600px width.
- **Automated Workflow**:
  ```bash
  npm run optimize
  ```
  This script:
  1. Detects uncompressed `.png`, `.jpg`, `.jpeg` in `public/`.
  2. Compresses and exports `.webp` versions using `cwebp` / `Pillow`.
  3. Scans all `.tsx`, `.ts`, `.html`, `.css`, and `.json` files to update file path references.
  4. Removes the heavy source files.

---

## 6. Design System & Theming Tokens

| Token | Hex | Tailwind / CSS Utility | Application |
| :--- | :--- | :--- | :--- |
| **Aureole Blue** | `#0079ac` | `text-aureole-blue`, `bg-aureole-blue` | Primary brand accent, logo text |
| **Aureole Cyan** | `#00a6d6` | `text-aureole-cyan`, `bg-aureole-cyan` | Interactive highlights, glow accents |
| **Aureole Deep** | `#003366` | `text-aureole-deep`, `bg-aureole-deep` | Deep headers, dark surface containers |
| **Aureole Slate** | `#001529` | `text-aureole-slate`, `bg-aureole-slate` | Primary readable dark content & typography |
| **Aureole Soft** | `#f8fafc` | `bg-aureole-soft` | Clean off-white background |
| **Aureole Pearl** | `#f1f5f9` | `bg-aureole-pearl` | Subtle card background |

### Typography Hierarchy:
- **Body**: `Manrope`, sans-serif
- **Headings**: `Inter`, sans-serif
- **Display Statistics**: `Bebas Neue`, cursive

---

## 7. Mandatory Agent Rules & Workflows

### 📇 Workflow When User Adds a New V-Card Folder:
Whenever the user provides or asks to add a new vCard folder in `public/vcards-2026/[slug]`:
1. **Use Shared Assets (`_shared`)**: Ensure `index.html` references `../_shared/css/` and `../_shared/js/`, and delete the redundant local `assets/css` and `assets/js` directories.
2. **Automate via Scripts**:
   - Run `node scripts/fix-all-vcards.js` to automatically rewire paths, clean redundant assets, and register the URL in `vcard_urls.txt`.
   - Add the slug to the `VCARDS` array in `scripts/generate-sitemap.js`.
   - Run `npm run sitemap` (`node scripts/generate-sitemap.js`) to rebuild `public/sitemap.xml`.
3. **Optimize V-Card Assets & Images**:
   - Always run `npm run optimize` (`python3 scripts/optimize-images.py`) to convert all vCard `.png`/`.jpg` images to `.webp`, update `index.html` references, and remove heavy source files.
4. **Sanitize Data**: Ensure `og:image` points to the correct slug and contact script has a clean phone number with `email` defined.

---

### 🖼️ Workflow When Adding Assets & Images:
Whenever new assets/images (`.png`, `.jpg`, `.jpeg`, etc.) are added to `public/` or any component:
1. **Mandatory Optimization via Script**: Always execute `npm run optimize` (`python3 scripts/optimize-images.py`).
2. **Automatic Code Updates**: The script will convert images to `.webp`, cap 4K/oversized dimensions at 1600px width, update all `.tsx`/`.ts`/`.html`/`.css`/`.json` file references, and delete uncompressed source files.

---

### 📄 Page & Component Creation Workflow:
- **Strictly Consult `design.md`**: Whenever adding or modifying pages, layouts, or UI components, always reference [design.md](design.md) for color tokens (`bg-aureole-blue`, `bg-aureole-cyan`, `bg-aureole-deep`, `bg-aureole-slate`, `bg-aureole-soft`, `bg-aureole-pearl`), typography scale (`Manrope`, `Inter`, `Bebas Neue`), border radius, container widths, and animation standards (`animate-float`, `animate-pulse-slow`, `border-beam`).

---

### 💬 Communication, Explanations & Asking Questions:
1. **Explain Every Action Simply**: Whenever doing anything, clearly and simply explain what is happening (e.g., *what is being created, updated, modified, or removed*) so the user always has full visibility.
2. **Never Act Blindly — Ask Questions**: If requirements are unclear, ambiguous, or involve important design/content decisions, do NOT make blind assumptions. Always ask the user questions first to clarify what they need before proceeding.

---

### 💡 General Agent Guidelines:
- **Avoid Direct DOM Manipulation**: In React components, use state/refs or GSAP / Framer Motion hooks.
- **Maintain Metadata & SEO**: Update OpenGraph tags and structured data whenever adding products or routes.
- **Preserve Documentation**: Keep `VCARD_MAINTENANCE.md`, `PRODUCT_LIST_STATUS.md`, and sitemap registries in sync with changes.


