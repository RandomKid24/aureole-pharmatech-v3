# Aureole Pharmatech - Theme Design System

This document outlines the core design principles, color palettes, and typographic standards for the Aureole Pharmatech v3 web application.

## 1. Color Palette

The application follows a strictly defined corporate blue palette. **Pure black (#000000) is avoided.**

| Color Name | Hex Code | Utility Class | Usage |
| :--- | :--- | :--- | :--- |
| **Aureole Blue** | `#0079ac` | `text-aureole-blue` | Primary brand color, logo text, main accents. |
| **Aureole Cyan** | `#00a6d6` | `text-aureole-cyan` | Highlight color, hover states, interactive nodes. |
| **Aureole Deep** | `#003366` | `text-aureole-deep` | Deep blue for layering and visual depth. |
| **Aureole Slate** | `#001529` | `text-aureole-slate` | **Primary Text Color**. The darkest shade used instead of black. |
| **Slate 500** | `#64748b` | `text-slate-500` | Secondary description text. |
| **Slate 100** | `#f1f5f9` | `bg-slate-100` | Subtle background dividers and borders. |

## 2. Typography

We use a high-density, brutalist typographic approach with consistent font weights.

- **Primary Sans**: `Manrope` (sans-serif) - Used for body text
- **Secondary Sans**: `Inter` (sans-serif) - Used for headings
- **Tertiary Sans**: `Questrial` (sans-serif) - Available for special use cases
- **Font Weights**:
  - `font-black`: Used for headings and strong emphasis.
  - `font-bold`: Used for labels, subheadings, and interactive links.
  - `font-medium`: Used for body text and descriptions.

### 5-Level Type Scale
We enforce a strict 5-size type scale to ensure consistency:

1. **Display** (`text-7xl` | 72px): Hero sections, massive impact text.
2. **Title** (`text-5xl` | 48px): Page titles, major section headers.
3. **Heading** (`text-3xl` | 30px): Sub-sections, feature headers.
4. **Subtitle** (`text-xl` | 20px): Card titles, prominent labels.
5. **Body** (`text-base` | 16px): Paragraphs, list items, general content.

*Utility Size: `text-xs` (12px) for tiny metadata tags only.*

### Heading Styles
- **Main Heading**: Uppercase, tracking-tighter, leading-none/tight, using Inter font family.
- **Section Labels**: `text-xs`, font-black, uppercase, tracking-widest.

### Body Text Styles
- **Primary Body Text**: Use `font-medium` (400-500 weight) with Manrope font family.
- **Secondary Text**: Use `font-medium` for descriptions and supporting content.
- **Avoid**: arbitrary pixel values (e.g., `text-[13px]`, `text-[60px]`). Stick to the scale.

## 3. UI Elements & Layout



### Cards & Grids
- **Design Strategy**: Utilize a "Spatial Corner Layout" to avoid text clutter.
- **Interaction**:
  - Do not use heavy shadows (`shadow-2xl` only sparingly).
  - Use color shifts (`slate-50` to `aureole-cyan`) for hovers.
  - Image hovers should transition from grayscale to full color.

### Interactive Components
- **Virtual Cards**: High-visibility links with icon feedback.
- **Buttons**: Square, rigid borders, high-contrast label tracking.

## 4. Brand Philosophy
The design conveys **Precision**, **Reliability**, and **Industrial Excellence**. Every pixel is aligned to a grid, and movement is purposeful and minimal.
