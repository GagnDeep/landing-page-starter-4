# Design System: Your Home Salon

## 1. Aesthetic Direction: "Studio-Crafted Elegance"

**Purpose**: Provide a premium, high-trust digital platform for a top-rated beauty studio in Chandigarh, offering both in-salon and doorstep services.
**Tone**: Editorial, refined, calm, and highly professional. The interface should feel like stepping into a serene, high-end salon—uncluttered, fragrant, and meticulously maintained.
**Differentiation**: Moving away from the generic "tech-startup" or "pink/gold generic salon" look. We are using an editorial approach with distinct typography, semantic OKLCH colors, and asymmetrical spatial rhythm.

---

## 2. Typography

We avoid generic sans-serifs (Inter, Roboto) in favor of a pairing that evokes editorial beauty and modern clarity.

### Font Pairing
- **Display/Heading**: *Playfair Display* (or similar high-contrast serif) - Elegant, trustworthy, and sophisticated. Used for section titles, hero headlines, and pull quotes.
- **Body/UI**: *Plus Jakarta Sans* (or similar geometric sans) - Clean, legible, and modern. Used for navigation, pricing tables, descriptions, and functional UI elements.

### Type Scale (Fluid)
- **Display Large**: `clamp(2.5rem, 5vw, 4.5rem)` — Hero headings.
- **Heading 1**: `clamp(2rem, 4vw, 3.5rem)` — Page titles.
- **Heading 2**: `clamp(1.5rem, 3vw, 2.5rem)` — Section titles.
- **Heading 3**: `clamp(1.25rem, 2vw, 1.75rem)` — Card titles, sub-sections.
- **Body Large**: `clamp(1.125rem, 1.5vw, 1.25rem)` — Lead paragraphs.
- **Body Base**: `1rem` — General text.
- **Body Small**: `0.875rem` — Meta text, subtle labels.

---

## 3. Color Palette (Semantic OKLCH)

The color palette is rooted in natural, calming tones—warm stones, soft clays, and deep charcoals. We use OKLCH for perceptually uniform lightness across light and dark modes.

### Light Mode (The "Daylight Studio")
- `--color-background`: `oklch(0.98 0.01 75)` — Warm off-white (Alabaster).
- `--color-surface-primary`: `oklch(1 0 0)` — Pure white for elevated cards.
- `--color-surface-secondary`: `oklch(0.95 0.02 75)` — Subtle warm gray/beige for secondary sections.
- `--color-text-primary`: `oklch(0.25 0.02 75)` — Deep warm charcoal (not pure black).
- `--color-text-secondary`: `oklch(0.45 0.02 75)` — Muted warm gray.
- `--color-accent-primary`: `oklch(0.40 0.06 45)` — Deep terracotta/rust. Used sparingly for primary actions.
- `--color-accent-secondary`: `oklch(0.85 0.04 45)` — Soft peach/blush. Used for subtle highlights.
- `--color-border`: `oklch(0.90 0.02 75)` — Soft, warm division lines.

### Dark Mode (The "Evening Spa")
- `--color-background`: `oklch(0.18 0.02 75)` — Deep, warm slate.
- `--color-surface-primary`: `oklch(0.22 0.02 75)` — Slightly lighter slate for elevated cards.
- `--color-surface-secondary`: `oklch(0.15 0.02 75)` — Recessed areas.
- `--color-text-primary`: `oklch(0.95 0.01 75)` — Soft, warm off-white.
- `--color-text-secondary`: `oklch(0.75 0.02 75)` — Muted light warm gray.
- `--color-accent-primary`: `oklch(0.65 0.10 45)` — Vibrant but grounded terracotta.
- `--color-accent-secondary`: `oklch(0.35 0.05 45)` — Deep, rich rust for subtle backgrounds.
- `--color-border`: `oklch(0.28 0.02 75)` — Subtle division lines.

---

## 4. Spacing & Rhythm

Instead of identical padding everywhere, we use a fluid spacing scale to create intentional tension and release.

- **Micro (`4px - 8px`)**: Icon to text spacing.
- **Tight (`16px - 24px`)**: Grouping related elements (e.g., heading to paragraph).
- **Base (`32px - 48px`)**: Inner component padding.
- **Loose (`64px - 96px`)**: Separation between distinct content blocks.
- **Breathe (`clamp(80px, 10vw, 160px)`)**: Major section transitions. Allows the design to feel spacious and luxurious.

---

## 5. Border Radius System

We avoid over-rounded, "bubbly" aesthetics. The corners are sharp enough to feel precise and professional, but soft enough to be approachable.

- `--radius-none`: `0px` — For full-bleed images and structural divisions.
- `--radius-sm`: `4px` — For small UI elements (checkboxes, tags).
- `--radius-md`: `8px` — For buttons and inputs.
- `--radius-lg`: `16px` — For main content cards and featured images.
- `--radius-full`: `9999px` — Only for avatars and specific pill-shaped badges.

---

## 6. Motion & Interaction

Motion should feel deliberate, smooth, and unhurried—mirroring the relaxing experience of a salon.

- **Easing**: Use exponential easing (`cubic-bezier(0.16, 1, 0.3, 1)`) for natural deceleration. Avoid bouncy or elastic effects.
- **Durations**:
  - `fast` (150ms): Hover states, color transitions.
  - `medium` (300ms): Opening menus, expanding accordions.
  - `slow` (600ms+): Page load reveals, hero image scaling.
- **Patterns**:
  - *Fade & Drift*: Elements fade in while moving slightly upward (subtle `translateY(10px)`).
  - *Image Reveal*: Images scale down slightly (`1.05` to `1`) inside a hidden-overflow container on load.
  - *Button Hover*: Solid buttons subtly shift shadow or background lightness; text links use an elegant underline reveal.