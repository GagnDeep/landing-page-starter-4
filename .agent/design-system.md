# Design System: Hair Makeup Unisex Salon & Academy

## 1. Aesthetic Direction
**Theme:** "Luxury Academy"
**Keywords:** Editorial, Sophisticated, High-Touch, Professional, Precision, Elegant.
**Description:** A refined balance between a high-end bridal beauty salon and a professional beauty academy. The design feels like a premium editorial magazine—utilizing structured typography, ample negative space (whitespace), subtle motion, and a cohesive warm, neutral palette accented by muted golds and deep charcoals.

## 2. Typography
The typography scale utilizes an elegant Serif for headings to convey luxury and tradition, paired with a clean, modern Sans-serif for body copy to ensure readability and professional clarity.

- **Primary Heading Font (Display):** *Cormorant Garamond* (or similar high-contrast serif like Playfair Display). Used for h1, h2, h3, pull quotes, and hero statements.
- **Secondary Body Font (Sans-serif):** *Montserrat* (or similar geometric/humanist sans like Inter or Jost). Used for body text, navigation, small caps labels, and UI elements.

### Typographic Scale (Tailwind mapping intent)
- **H1 (Display):** 4.5rem to 6rem, tight leading (1.1), tracking slight negative.
- **H2 (Section Titles):** 3rem to 4rem, leading 1.2.
- **H3 (Subsections):** 2rem to 2.5rem, leading 1.3.
- **Body Large:** 1.25rem, leading 1.6, for introductory paragraphs.
- **Body Base:** 1rem, leading 1.6.
- **Overline / Labels:** 0.875rem, uppercase, wide tracking (0.1em), bold weight.

## 3. Color Palette (CSS Variables mapping)
A sophisticated palette centered around warm neutrals, deep charcoals, and a muted gold/champagne accent. Mapped natively to Tailwind CSS via `oklch` (or standard hex/rgb as fallback) for precision in modern displays.

### Light Mode
- **Background:** Warm Off-White (e.g., `#faf9f6` or `oklch(0.98 0.01 80)`)
- **Foreground (Text):** Deep Charcoal/Soft Black (e.g., `#1a1a1a` or `oklch(0.2 0 0)`)
- **Primary / Accent:** Muted Gold / Champagne (e.g., `#c5a059` or `oklch(0.7 0.1 80)`)
- **Secondary / Surface:** Pale Sand / Greige (e.g., `#f0eee8` or `oklch(0.95 0.01 80)`)
- **Muted (Text):** Ash Grey (e.g., `#737373` or `oklch(0.55 0 0)`)
- **Borders:** Soft Grey (e.g., `#e5e5e5` or `oklch(0.9 0 0)`)

### Dark Mode
- **Background:** Deep Charcoal/Onyx (e.g., `#121212` or `oklch(0.15 0 0)`)
- **Foreground (Text):** Soft White/Bone (e.g., `#f5f5f5` or `oklch(0.95 0 0)`)
- **Primary / Accent:** Warm Metallic Gold (e.g., `#d4af37` or `oklch(0.75 0.12 80)`)
- **Secondary / Surface:** Dark Ash (e.g., `#1e1e1e` or `oklch(0.2 0 0)`)
- **Muted (Text):** Light Grey (e.g., `#a3a3a3` or `oklch(0.7 0 0)`)
- **Borders:** Dark Grey (e.g., `#2a2a2a` or `oklch(0.25 0 0)`)

## 4. Spacing & Rhythm
Ample whitespace is critical for a luxury feel. Components should breathe.
- **Section Padding (Vertical):** `py-24` (6rem) or `py-32` (8rem) for major sections.
- **Component Gap:** `gap-8` to `gap-16` for grid items.
- **Content Max Width:** Constrained to `max-w-7xl` (1280px) for standard flow, with specific editorial sections utilizing narrower bounds (e.g., `max-w-3xl`) for optimal reading length.

## 5. Border Radius
Sharp or slightly softened corners to maintain architectural precision.
- **Buttons / Inputs:** `rounded-none` or `rounded-sm` (2px).
- **Cards / Images:** `rounded-none` (sharp) or `rounded-md` (6px) max for a modern but structured look. Avoid highly rounded pill shapes unless specifically for floating badges.

## 6. Shadows & Depth
Subtle, natural depth. Avoid harsh drop shadows.
- **Default Shadow:** Soft and diffuse. `shadow-sm` or custom `0 4px 20px rgba(0,0,0,0.05)`.
- **Hover States:** Slight elevation using translate-y or deeper diffuse shadow.
- **Dark Mode Shadows:** Rely more on borders or subtle surface color shifts rather than heavy shadows.

## 7. Motion & Interaction
Motion should feel deliberate, slow, and graceful.
- **Timing Function:** Smooth easing (e.g., `cubic-bezier(0.22, 1, 0.36, 1)` or standard `ease-out`).
- **Durations:** Slightly longer than typical apps (e.g., `300ms` - `500ms`).
- **Effects:** Fade-ins, gentle upward drifts (`translate-y`), and subtle image scaling on hover (e.g., `scale-105` inside an `overflow-hidden` container). Parallax scrolling for major editorial photography.
