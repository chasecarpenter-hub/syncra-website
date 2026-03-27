# Syncra Labs - Brand Guidelines

This document outlines the visual identity, typography, color palette, and design principles for the Syncra Labs brand platform.

## 1. Core Identity

**Brand Name**: Syncra Labs
**Tagline**: Custom AI Solutions, Built for Your Business.
**Brand Voice**: Authoritative, visionary, highly-technical, yet accessible and boutique-focused. We are partners, not just developers.

### Logo Usage (Interim)
Until the final SVG/PNG logo asset is provided, the brand heavily utilizes a typographic logo treatment matching the glassmorphism UI overlays:

- **Format**: `SYNCRA` (White) + `LABS` (Cyan)
- **Weight**: `font-black` (Heavy/Black weight)
- **Tracking**: `tracking-tight` or `tracking-tighter`
- **Tailwind Example**: 
  ```html
  <span className="font-black tracking-tight text-white">SYNCRA<span className="text-cyan-500">LABS</span></span>
  ```

---

## 2. Color Palette

The Syncra Labs digital presence relies on a "High-Contrast Dark Mode" aesthetic. We use deep, rich blacks to make our vibrant, futuristic accent colors pop.

### Primary Accents (The Glow)
- **Syncra Cyan**: `#06b6d4` (Tailwind `cyan-500`) to `#22d3ee` (Tailwind `cyan-400`)
  - *Usage*: Primary buttons, checkmarks, active states, and the "LABS" portion of the logo.
- **Electric Indigo**: `#6366f1` (Tailwind `indigo-500`)
  - *Usage*: Gradient transitions and hover effects.

### Gradients
Gradients are used sparingly but effectively for main section titles and primary conversion buttons to establish a premium, AI-driven aesthetic.
- **Text Gradient**: `from-cyan-400 via-blue-500 to-purple-600`
- **Button Gradient**: `from-indigo-500 to-cyan-400`

### Neutrals (The Canvas)
- **Pure Black**: `#000000` (Tailwind `bg-black`)
  - *Usage*: Main page backgrounds, hero sections.
- **Deep Space**: `#0a0a0e` 
  - *Usage*: Elevated cards, watermark backgrounds, and subtle contrasts against pure black.
- **Primary Text**: `#ffffff` (White, pure contrast)
- **Secondary Text/Muted**: `#9ca3af` (Tailwind `gray-400`) to `#6b7280` (Tailwind `gray-500`)
  - *Usage*: Paragraphs, subtitles, fine print.

---

## 3. Typography

Syncra Labs uses modern, geometric sans-serif typography.

### Headers (`<h1>`, `<h2>`, `<h3>`)
- **Font Weight**: Extrabold (`800`) or Black (`900`)
- **Letter Spacing**: Tighter (`tracking-tighter`)
- **Line Height**: Tight / Reduced leading
- *Example*: Section headers use `text-4xl md:text-5xl font-extrabold tracking-tighter`.

### Body Text (`<p>`)
- **Font Weight**: Light (`300`) to Regular (`400`)
- **Line Height**: Relaxed (`leading-relaxed`)
- *Example*: Paragraphs use `text-lg text-gray-400 font-light leading-relaxed`.

### Microcopy (Eyebrows / Overlines)
- **Font Weight**: Bold (`700`)
- **Transform**: Uppercase (`uppercase`)
- **Letter Spacing**: Widest (`tracking-widest`)
- *Example*: "BOUTIQUE PARTNERSHIP" above main headers.

---

## 4. UI/UX Principles

1. **Glassmorphism**: Overlay elements (watermarks, floating navs) should utilize `backdrop-blur-xl` coupled with highly transparent black/white backgrounds (e.g., `bg-black/95` or `bg-white/[0.02]`) and very subtle 5% white borders (`border-white/5`).
2. **Micro-Interactions**: Elements should feel physically responsive. Hover states should include slight scaling (`hover:scale-105`), opacity transitions, and soft, colored box-shadow glows.
3. **Immersive Media**: Hero sections and focal points rely on high-fidelity, edge-to-edge looping videos over static imagery to convey "automation in motion". 

---

*Note: This living document will be updated once the final logo asset and brand book are approved.*
