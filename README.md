# 🌟 Aureole Pharma Tech (V3)
> **Precision Pharmaceutical Engineering & Industrial Excellence.**

[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

---

## 🚀 Project Overview

Aureole Pharma Tech V3 is a high-end web application built for **Aureole Pharma Tech Pvt. Ltd.** It features a modern "Executive" design system, focusing on glassmorphism, fluid animations, and a premium professional aesthetic.

### ✨ Key Features
- **💎 Executive UI**: A state-of-the-art design system using GSAP and Framer Motion for high-impact visual delivery.
- **📇 Dynamic V-Cards**: Integrated digital business cards for all corporate profiles (`public/vcards-2026/`).
- **🗺️ Automated SEO**: Automated sitemap generation and URL indexing for enhanced search visibility.
- **🏗️ Industrial Catalog**: Detailed technical product showcases with cleanroom standards integration.
- **📊 City-Wise Landing**: Specialized pages for pan-India presence.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | [React 19](https://react.dev/) |
| **Build Tool** | [Vite 6](https://vitejs.dev/) |
| **Routing** | [React Router 7](https://reactrouter.com/) |
| **Animations** | [GSAP](https://greensock.com/gsap/) & [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Styling** | Vanilla CSS (Executive Design System) |

---

## 📁 Project Structure

```text
aureole-pharmatech-v3/
├── 📁 components/         # Reusable UI components
├── 📁 pages/              # Page views (Home, About, Products, etc.)
├── 📁 public/
│   ├── 📁 vcards-2026/    # Digital V-Card collection
│   └── 📁 uploads/        # Media assets
├── 📁 scripts/            # Automation scripts (Sitemap, V-Cards)
├── 📁 utils/              # Helper functions & hooks
├── 📄 App.tsx             # Main Application Entry
├── 📄 index.html          # HTML Template
└── 📄 VCARD_MAINTENANCE.md # V-Card operations guide
```

---

## 🛠️ Installation & Setup

1. **Clone & Install**
   ```bash
   npm install
   ```

2. **Start Development**
   ```bash
   npm run dev
   ```

4. **Regenerate Sitemap**
   Whenever new V-Cards or pages are added:
   ```bash
   npm run sitemap
   ```

## ⚡ Quick Commands & Scripts

| Command | Action | When to Use |
| :--- | :--- | :--- |
| `npm run dev` | Starts local development server | While working on features locally |
| `npm run build` | Builds production bundle | Validating build before deployment |
| `npm run optimize` | **Compresses images & updates code** | Whenever you add new `.png` / `.jpg` images |
| `npm run sitemap` | Regenerates `sitemap.xml` | Whenever you add new V-Cards or pages |

---

## 🔧 Maintenance & Automation

### 🖼️ How to Optimize New Images (`npm run optimize`)

Whenever you add new heavy `.png` or `.jpg` images to your project:

1. Place your new images into the `public/` directory (or subfolders).
2. Run the optimization command:
   ```bash
   npm run optimize
   ```
   *(or directly `python3 scripts/optimize-images.py`)*

#### What the script automatically does for you:
- **Converts to `.webp`**: Converts `.png`, `.jpg`, and `.jpeg` images to ultra-light WebP format.
- **Auto-Resizes 4K Images**: Scales oversized high-res renders down to max 1600px width for web.
- **Updates Source Code**: Automatically updates all image path references across React components (`.tsx`), TS data files (`.ts`), HTML, and CSS files.
- **Removes Uncompressed Originals**: Deletes old heavy images so your repository stays lightweight.

---

### ❓ Why do I see ~80 pending changes in Git?

When you run image optimizations or add new V-Cards, Git tracks:
1. **New `.webp` Images**: WebP images generated in `public/`.
2. **Deleted Raw Files**: Uncompressed `.png`, `.jpg`, and unused `.gif` files removed from `public/`.
3. **Updated Code References**: Data files (`data/homeData.tsx`, `data/products/`, etc.) updated to point to `.webp`.

To save these changes and deploy to Vercel, run:
```bash
git add .
git commit -m "Optimize assets to WebP and update vcards"
git push
```

---

- **Adding V-Cards**: Please refer to [VCARD_MAINTENANCE.md](VCARD_MAINTENANCE.md) for the standardized workflow.
- **Product Updates**: Catalog status is tracked in [PRODUCT_LIST_STATUS.md](PRODUCT_LIST_STATUS.md).

---

<div align="center">
  <p>© 2026 Aureole Pharma Tech Pvt. Ltd. | Designed for Excellence</p>
</div>
