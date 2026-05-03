# Design System: Boho Salon

## Aesthetic Vision
The Boho Salon digital presence is designed to evoke a "Boho-Modern" aesthetic: organic, sophisticated, welcoming, and distinct from generic tech-startup templates. It prioritizes warmth, texture, and a sense of craft to appeal to an upscale, NRI-friendly clientele. The aesthetic embraces earthy neutrals, soft terracottas, and deep teals to convey luxury and specialized care (chrome gel nails, curly hair expertise).

## Typography
We pair a high-personality, humanist serif for headings with a clean, wide-tracked sans-serif for body copy.

*   **Heading Font:** `Playfair Display` (or similar elegant humanist serif). Used for its sophisticated, editorial, and crafted feel.
*   **Body Font:** `Montserrat` (or similar clean sans-serif). Used with generous line-height and slight letter-spacing for a modern, airy contrast to the rich headings.
*   **Scale:** Fluid clamp-based scaling for headings to ensure graceful degradation across viewports. Fixed rem-based scaling for UI components.

## Color Palette
The color palette avoids high-contrast, sterile "SaaS blues" in favor of warm, earthy tones. All colors are defined in OKLCH for perceptual uniformity and easy theming.

### Light Mode
*   **Background:** Soft, warm cream (`oklch(0.97 0.02 80)`)
*   **Foreground:** Deep espresso brown (`oklch(0.30 0.05 40)`)
*   **Primary:** Soft terracotta (`oklch(0.65 0.15 45)`) - Used for primary actions and accents.
*   **Primary Foreground:** Soft cream (`oklch(0.98 0.01 80)`)
*   **Secondary:** Deep teal (`oklch(0.45 0.10 200)`) - Used for secondary highlights and deep contrast.
*   **Secondary Foreground:** Light cream (`oklch(0.98 0.01 80)`)
*   **Accent:** Sage green (`oklch(0.85 0.06 140)`) - Used for subtle highlights and decorative elements.
*   **Accent Foreground:** Deep forest (`oklch(0.25 0.05 140)`)
*   **Muted:** Warm sand (`oklch(0.92 0.04 70)`) - Used for subtle backgrounds and cards.
*   **Muted Foreground:** Taupe (`oklch(0.55 0.05 60)`) - Used for secondary text.
*   **Border:** Light taupe (`oklch(0.85 0.04 70)`)
*   **Destructive:** Soft rust (`oklch(0.55 0.15 30)`)

### Dark Mode
*   **Background:** Dark espresso (`oklch(0.20 0.02 40)`)
*   **Foreground:** Soft beige (`oklch(0.92 0.02 80)`)
*   **Primary:** Burnt terracotta (`oklch(0.55 0.15 45)`)
*   **Primary Foreground:** Soft cream (`oklch(0.98 0.01 80)`)
*   **Secondary:** Deep teal (`oklch(0.35 0.08 200)`)
*   **Secondary Foreground:** Light cream (`oklch(0.98 0.01 80)`)
*   **Accent:** Dark moss green (`oklch(0.30 0.05 140)`)
*   **Accent Foreground:** Pale sage (`oklch(0.85 0.05 140)`)
*   **Muted:** Espresso bean (`oklch(0.25 0.03 40)`)
*   **Muted Foreground:** Warm grey (`oklch(0.65 0.03 60)`)
*   **Border:** Dark taupe (`oklch(0.30 0.03 50)`)
*   **Destructive:** Soft rust (`oklch(0.45 0.15 30)`)

*Note: Contrast ratios meet WCAG standards for both modes.*

## Spacing & Layout
*   **Rhythm:** Emphasizes visual rhythm through varied spacing. Sections alternate between tight, intimate groupings and generous, airy separations.
*   **Grid:** Layouts often break out of standard rigid grids to incorporate asymmetry, overlapping elements, and editorial compositions that feel more like a high-end magazine than a web app.
*   **Containers:** Use generous padding to allow content to breathe. Avoid nesting cards unnecessarily.

## Borders & Radii
*   **Border Radius:** Slightly organic, softer corners.
    *   `--radius`: `0.75rem` (12px base).
    *   Larger elements use `1.5rem` or `2rem` for softer, pill-like, or rounded architectural shapes.
*   **Borders:** Subtle and thin (1px) where necessary, relying more on background color contrast (muted tones) to separate sections.

## Motion & Interaction
*   **Easing:** Exponential easing (`ease-out-quart` or `cubic-bezier(0.25, 1, 0.5, 1)`) for natural deceleration. Avoid bouncy or elastic easing.
*   **Transitions:** Smooth, elegant fades and slight vertical drifts for element reveals.
*   **Hover States:** Subtle desaturation or darkening rather than jarring jumps or heavy dropshadows.
*   **Philosophy:** Focus on high-impact moments, like a well-orchestrated page load with staggered reveals, rather than scattering micro-interactions everywhere.

## Component Specifics (Boho Flavour)
*   **Buttons:** Softly rounded, utilizing the primary terracotta or secondary teal. Hover states slightly lift and shift the background color smoothly.
*   **Cards:** Avoid heavy drop shadows. Use subtle tinted borders or slightly off-background colors (Muted) to distinguish cards. Use large radius.
*   **Images:** Frame images with arched borders, asymmetric rounded corners, or soft edges to break away from sharp rectangles.
