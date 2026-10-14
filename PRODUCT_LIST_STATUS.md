# 📦 Product Inventory & Visibility Status

This document tracks which products are currently live on the **Aureole Pharma Tech** website and which ones are hidden from the public category pages.

---

## 📊 Quick Summary
- **Live Products:** 22 (listed in `data/products/catalog.ts`)
- **Removed / Hidden Products:** 19 (product data still exists in `data/products/`, but not listed)
- **Total Defined Products:** 41
- **Last Status Audit & Verification**: October 14, 2026 (counts re-checked against `catalog.ts`; sitemap and build now follow the catalog)

> **What "removed" means for SEO:** a product not listed in `catalog.ts` is left out of `sitemap.xml`, gets no prerendered static page, and its page (if opened by direct URL) carries `noindex`. Nothing else links to it.

---

## 🔬 Stability Testing Equipments
*Managed under `/products/stability-chambers`*

| Status | Product Name | Notes |
| :---: | :--- | :--- |
| ✅ | Humidity Chamber | Live |
| ❌ | **Stability Chamber** | **REMOVED** (not in sitemap, noindex; the no-slash URL redirects to the category page) |
| ✅ | BOD Incubator | Live |
| ❌ | **Cooling Incubator** | **REMOVED** (not in sitemap, noindex) |
| ✅ | Cold Chamber | Live |
| ✅ | Deep Freezer (upto -20°C / upto -40°C) | Live |
| ✅ | Ultra Low Deep Freezer (-80°C) | Live |
| ✅ | Photostability Chamber | Live |
| ✅ | Pharma Refrigerator / Dual Zone Chamber | Live |
| ✅ | Hot Air Oven | Live |
| ✅ | Vacuum Oven | Live |
| ✅ | Muffle Furnance | Live |
| ✅ | Walk In Humidity Chamber | Live (Walk-in) |
| ✅ | Walk In Cold Chamber | Live (Walk-in) |
| ✅ | Walk In BOD Incubator | Live (Walk-in) |
| ✅ | Walk In Deep Freezer | Live (Walk-in) |

---

## 🧪 Table Top Instruments
*Managed under `/products/table-top-instruments`*

| Status | Product Name | Notes |
| :---: | :--- | :--- |
| ✅ | Ultrasonic Bath | Live |
| ✅ | Water Bath | Live |
| ✅ | Steam Bath | Live |
| ✅ | Oil Bath | Live |
| ✅ | Dry Bath | Live |
| ✅ | Air Sampler | Live |

---

## 🪑 Laboratory Furniture
*Managed under `/products/laboratory-furniture`*

| Status | Product Name | Notes |
| :---: | :--- | :--- |
| ✅ | Modular Laboratory Furniture | Live |
| ✅ | Stainless Steel Items & Accessories | Live |
| ❌ | Wall Side Bench | Removed (not in sitemap, noindex) |
| ❌ | Island Bench | Removed (not in sitemap, noindex) |
| ❌ | Corner Bench | Removed (not in sitemap, noindex) |
| ❌ | Anti Vibration Table | Removed (not in sitemap, noindex) |
| ❌ | Fume Hood | Removed (not in sitemap, noindex) |
| ❌ | Spot Extractor | Removed (not in sitemap, noindex) |
| ❌ | Overhead Cabinet | Removed (not in sitemap, noindex) |
| ❌ | Tall Storage Cabinet | Removed (not in sitemap, noindex) |
| ❌ | Storage Cabinets | Removed (not in sitemap, noindex) |
| ❌ | Laboratory Sinks | Removed (not in sitemap, noindex) |
| ❌ | Laboratory Fittings | Removed (not in sitemap, noindex) |
| ❌ | Lab Accessories | Removed (not in sitemap, noindex) |

---

## 🧼 Cleanroom Equipment
*⚠️ These products have no category page yet*

| Status | Product Name | Notes |
| :---: | :--- | :--- |
| ❌ | Static Pass Box | Removed / no category page (not in sitemap, noindex) |
| ❌ | Dynamic Pass Box | Removed / no category page (not in sitemap, noindex) |
| ❌ | Laminar Air Flow | Removed / no category page (not in sitemap, noindex) |
| ❌ | Sampling / Dispensing Booth | Removed / no category page (not in sitemap, noindex) |
| ❌ | Biosafety Cabinet | Removed / no category page (not in sitemap, noindex) |

---

> [!TIP]
> **How to show a product:** Add the product name to the `products` array in `data/products/catalog.ts`, then run `npm run sitemap` (and `npm run build`). It then returns to the sitemap and gets a static page automatically.
> **How to hide a product:** Remove the product name from the `products` array in `data/products/catalog.ts`, then run `npm run sitemap`. It drops out of the sitemap and is set to `noindex`.
> **Walk-in city pages** (e.g. `walk-in-cold-chamber-manufacturers-and-suppliers-in-pune`) depend on the four Walk In products staying listed.
