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

## 🔧 Maintenance & Automation

### 🖼️ Image Optimization Guide
Whenever you add new heavy PNG or JPG images to the `public/` folder, run the automated optimization script to convert them to lightweight WebP files and update all code references automatically:

```bash
npm run optimize
```
*or directly:*
```bash
python3 scripts/optimize-images.py
```

**What this script does:**
1. Scans `public/` for raw `.png`, `.jpg`, and `.jpeg` images.
2. Converts them into optimized `.webp` images (and scales oversized 4K images down to 1600px width).
3. Automatically updates all image path references across your React components, data files, and HTML files.
4. Deletes original uncompressed image files to keep the repository lightweight.

---

### ❓ Why do I see ~80 pending changes in Git?
When you optimize images or add new V-Cards, Git tracks:
1. **New WebP Images**: Super-lightweight `.webp` files generated in `public/`.
2. **Deleted Uncompressed Files**: Old `.png`, `.jpg`, and unused `.gif` files removed from `public/`.
3. **Updated Code References**: Data files (`data/homeData.tsx`, `data/products/`, etc.) and component files updated to point to `.webp`.

To save these optimizations to your repository and deploy to Vercel, run:
```bash
git add .
git commit -m "Optimize assets to WebP and update vcard sitemap"
git push
```

---

- **Adding V-Cards**: Please refer to the [VCARD_MAINTENANCE.md](VCARD_MAINTENANCE.md) for the standardized workflow.
- **Product Updates**: Catalog status is tracked in [PRODUCT_LIST_STATUS.md](PRODUCT_LIST_STATUS.md).

---

<div align="center">
  <p>© 2026 Aureole Pharma Tech Pvt. Ltd. | Designed for Excellence</p>
</div>
