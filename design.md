# Aureole Pharmatech - Comprehensive Design System

This document outlines the complete design system, tokens, typography, colors, layout components, and performance guidelines for the Aureole Pharmatech v3 web application, down to the smallest detail.

---

## 1. Color Palette

The application uses Tailwind CSS custom colors extended under the `aureole` namespace. **Pure black (#000000) is avoided** for typography to keep the user experience modern and clean.

### Core Brand Colors

| Color Name | Hex Code | Tailwind Class | Usage / Description |
| :--- | :--- | :--- | :--- |
| **Aureole Blue** | `#0079ac` | `bg-aureole-blue` / `text-aureole-blue` | Logo text color. Primary brand color. |
| **Aureole Cyan** | `#00a6d6` | `bg-aureole-cyan` / `text-aureole-cyan` | Logo highlight color. Used for active indicators, link underlines, and accent hovers. |
| **Aureole Deep** | `#003366` | `bg-aureole-deep` / `text-aureole-deep` | Deep corporate blue for headers, tables, and strong backgrounds. |
| **Aureole Slate** | `#001529` | `bg-aureole-slate` / `text-aureole-slate` | Dark slate tone. Primary color for readable content and text. |
| **Aureole Soft** | `#f8fafc` | `bg-aureole-soft` | Subtle off-white background 1 (equivalent to Slate 50). |
| **Aureole Pearl** | `#f1f5f9` | `bg-aureole-pearl` | Subtle light grey background 2 (equivalent to Slate 100). |
| **Aureole Primary** | `#1D69B0` | `bg-aureole-primary` / `text-aureole-primary` | New core primary blue used for branding cards and background layers. |
| **Aureole Accent** | `#01C2FB` | `bg-aureole-accent` / `text-aureole-accent` | New vibrant blue-cyan accent for headers and highlight components. |
| **Aureole Surface** | `#F0F7FD` | `bg-aureole-surface` | Soft blue-white color for background blocks and layouts. |

### Brand Gradient
* **Horizontal flow**: `bg-brand-gradient` (Linear gradient flowing horizontally from Cyan `#01C2FB` to Blue `#1D69B0`).

---

## 2. Typography

We enforce a strict 5-size type scale to maintain consistent hierarchy across all viewport resolutions.

### Font Families
* **Primary Sans**: `Manrope` (sans-serif) - Enforced on the body tag for reading efficiency.
* **Heading Sans**: `Inter` (sans-serif) - Used for structural headings (`h1` through `h6`).
* **Display Font**: `Bebas Neue` (cursive) - Used for major statistics, large numeric values, and impact headings.
* **Special Accent**: `Questrial` (sans-serif) - Used for auxiliary highlights.

### High-Density Type Scale

| Scale Level | Tailwind Utility | Rendered Size | Primary Use Case |
| :--- | :--- | :--- | :--- |
| **1. Display (Largest)** | `text-7xl` | 72px | Hero sections, massive visual impact. |
| **2. Title** | `text-5xl` | 48px | Page titles, key hero headers. |
| **3. Heading** | `text-3xl` | 30px | Main section headers. |
| **4. Subtitle** | `text-xl` | 20px | Card titles, key call-outs. |
| **5. Body** | `text-base` | 16px | Paragraph text, list items. |
| **6. Metadata (Smallest)**| `text-xs` | 12px | Small tag labels, dates, metadata highlights. |

---

## 3. Grid & Layout System

### Screen Size Viewports
* **xs**: `475px` (Optimized for small mobile devices)
* **sm**: `640px`
* **md**: `768px` (Tablet breakpoint)
* **lg**: `1024px`
* **xl**: `1280px` (Standard desktop)
* **2xl**: `1536px`
* **3xl**: `1920px` (Widescreen layout)
* **4xl**: `2560px` (Ultra-wide desktop)

### Container Layout
* Core layouts are centered (`container: { center: true }`) with default horizontal padding: `padding: "2rem"`.
* Intrinsic max-width scaling extends dynamically up to a maximum width of `2200px` for ultra-wide screens.

---

## 4. UI Textures & Visual Effects

### Background Details
* **Wave Asset**: `background-image: url("/wavebg.png")` - Fixed position background image scales dynamically using `background-size: cover`.
* **Grain Filter**: An overlay grain/noise effect applied globally on body load (`.grain::before`) with `opacity: 0.02` to reduce digital flatness.

### Borders & Radius Tokens
* **Standard rounded borders**: `border-radius: 12px` (applied to maps, banners, inline containers).
* **Card rounded borders**: `border-radius: 24px` (applied to hero modules, testimonial grids).
* **Buttons**: Sharp/rigid edges or exact `border-radius: 8px` / `border-radius: 10px` for call-to-actions.

### Interaction & Animation
* **Float Effect (`animate-float`)**: Smooth 10px vertical translation loop cycling every 6 seconds.
* **Pulse Effect (`animate-pulse-slow`)**: Slow opacity pulsing loop running every 4 seconds.
* **Marquee Scroll (`animate-marquee` / `animate-marquee-reverse`)**: Continuous scrolling loops for product/partner galleries.
* **Skeleton Shimmer (`animate-shimmer`)**: Gradient shimmer background transitions (`#f1f5f9` $\rightarrow$ `#e2e8f0` $\rightarrow$ `#f1f5f9`) for lazy loaded assets.
* **Border Beam (`border-beam`)**: Moving light beam orbits cards on hover using CSS `offset-path`.

---

## 5. Performance Optimizations

* **Lazy Rendering**: Sections use `content-visibility: auto` combined with a safe placeholder box `contain-intrinsic-size` of `1px 1000px` to prevent layout shift.
* **Image Scaling**: Images use `content-visibility: auto` with a `contain-intrinsic-size` profile of `1px 400px` to maintain fast rendering.
* **Grain Performance**: Grain texture is generated from a single optimized external static SVG instead of using active browser-processed turbulence.
