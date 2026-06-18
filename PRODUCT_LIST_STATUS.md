# 📦 Product Inventory & Visibility Status

This document tracks which products are currently live on the **Aureole Pharma Tech** website and which ones are hidden from the public category pages.

---

## 📊 Quick Summary
- **Live Products:** 24
- **Hidden Products:** 20
- **Total Defined Products:** 44
- **Last Status Audit & Verification**: June 18, 2026 (Verified compilation and alt-text completeness for all 24 live catalog items)

---

## 🔬 Stability Testing Equipments
*Managed under `/products/stability-chambers`*

| Status | Product Name | Notes |
| :---: | :--- | :--- |
| ✅ | Humidity Chamber | Live |
| ❌ | **Stability Chamber** | **HIDDEN** |
| ✅ | BOD Incubator | Live |
| ❌ | **Cooling Incubator** | **HIDDEN** |
| ✅ | Cold Chamber | Live |
| ✅ | Deep Freezer (upto -20°C / upto -40°C) | Live |
| ✅ | Ultra Low Deep Freezer (-80°C) | Live |
| ✅ | Photostability Chamber | Live |
| ✅ | Pharma Refrigerator / Dual Zone Chamber | Live |
| ✅ | Hot Air Oven | Live |
| ✅ | Vacuum Oven | Live |
| ✅ | Muffle Furnace | Live |
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
| ❌ | Wall Side Bench | Hidden from listing |
| ❌ | Island Bench | Hidden from listing |
| ❌ | Corner Bench | Hidden from listing |
| ❌ | Anti Vibration Table | Hidden from listing |
| ❌ | Fume Hood | Hidden from listing |
| ❌ | Spot Extractor | Hidden from listing |
| ❌ | Overhead Cabinet | Hidden from listing |
| ❌ | Tall Storage Cabinet | Hidden from listing |
| ❌ | Storage Cabinets | Hidden from listing |
| ❌ | Laboratory Sinks | Hidden from listing |
| ❌ | Laboratory Fittings | Hidden from listing |
| ❌ | Lab Accessories | Hidden from listing |

---

## 🧼 Cleanroom Equipment
*⚠️ These products have no category page yet*

| Status | Product Name | Notes |
| :---: | :--- | :--- |
| ❌ | Static Pass Box | No category listing |
| ❌ | Dynamic Pass Box | No category listing |
| ❌ | Laminar Air Flow | No category listing |
| ❌ | Sampling / Dispensing Booth | No category listing |
| ❌ | Biosafety Cabinet | No category listing |

---

> [!TIP]
> **How to show a product:** Add the product name to the `products` array in `data/products/catalog.ts`.
> **How to hide a product:** Remove the product name from the `products` array in `data/products/catalog.ts`.
