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

We use a high-density, brutalist typographic approach.

- **Primary Sans**: `Inter` (sans-serif)
- **Secondary Sans**: `Questrial` (sans-serif)
- **Font Weights**:
  - `font-[950]` or `font-black`: Used for main headings.
  - `font-bold`: Used for labels and secondary text.
  - `font-medium`: Used for body text.

### Heading Styles
- **Main Heading**: Uppercase, tracking-tighter, leading-none/tight.
- **Section Labels**: 10px - 11px, font-black, uppercase, tracking-[0.4em] to [0.5em].

## 3. UI Elements & Layout

### Section Watermarks (Washed-Out Text)
Watermarks are placed in the top-right or absolute background of sections.
- **Style**: `text-[150px]` or larger, `font-black`, `text-aureole-slate`, `uppercase`, `italic`, `tracking-tighter`, `opacity-[0.02]`.
- **Note**: Always follow the italicized look for an "Industrial Speed" aesthetic.

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
