# Design System: The Smile Designers

## 1. Aesthetic Direction: Luxury-Clinical
The visual language balances the pristine, hygienic environment of a world-class dental clinic with the warm, sophisticated touch of a luxury fashion or boutique studio.

- **Core Vibe:** Pristine, trustworthy, highly precise, yet empathetic and elegant.
- **Differentiator:** Avoid generic medical blue-and-white. Instead, use a curated palette of warm alabasters, clinical charcoals, and subtle, muted organic accents (like soft sage or warm taupe) to evoke calmness and premium care.

## 2. Typography
A high-contrast, editorial serif paired with a clean, highly legible humanist sans-serif.

### Primary Font (Headings & Display)
- **Family:** *Playfair Display*, *Cormorant Garamond*, or a similar high-end transitional serif.
- **Usage:** Hero titles, section headers, pull quotes.
- **Weight:** Regular (400) or Medium (500) for elegance; avoid overly bold weights which reduce refinement.

### Secondary Font (Body & UI)
- **Family:** *Inter*, *Plus Jakarta Sans*, or *Switzer*.
- **Usage:** Body copy, buttons, clinical details, navigation.
- **Weight:** Light (300) for descriptive text, Medium (500) for interactive elements.

### Type Scale (Fluid via clamp)
- `text-xs`: 0.75rem (12px)
- `text-sm`: 0.875rem (14px)
- `text-base`: 1rem (16px) - 1.125rem (18px)
- `text-lg`: 1.125rem (18px) - 1.25rem (20px)
- `text-xl`: 1.25rem (20px) - 1.5rem (24px)
- `text-2xl`: 1.5rem (24px) - 2rem (32px)
- `text-3xl`: 2rem (32px) - 2.5rem (40px)
- `text-4xl`: 2.5rem (40px) - 3.5rem (56px)
- `text-5xl`: 3.5rem (56px) - 4.5rem (72px)
- `text-6xl`: 4.5rem (72px) - 6rem (96px)

## 3. Color Palette & CSS Variables (OKLCH)

### Light Mode ("Day Clinic")
The light theme feels like a sunlit, spotless modern clinic.
- **Background (`--background`)**: Warm Alabaster - `oklch(0.98 0.01 75)`
- **Foreground (`--foreground`)**: Clinical Charcoal - `oklch(0.2 0.01 250)`
- **Primary (`--primary`)**: Deep Sapphire/Slate - `oklch(0.3 0.03 260)`
- **Primary Foreground (`--primary-foreground`)**: Pure White - `oklch(0.99 0 0)`
- **Secondary (`--secondary`)**: Soft Taupe - `oklch(0.94 0.02 70)`
- **Secondary Foreground (`--secondary-foreground`)**: Charcoal - `oklch(0.2 0.01 250)`
- **Muted (`--muted`)**: Pale Stone - `oklch(0.96 0.01 80)`
- **Muted Foreground (`--muted-foreground`)**: Mid Gray - `oklch(0.5 0.01 250)`
- **Accent (`--accent`)**: Warm Sage - `oklch(0.92 0.03 140)`
- **Accent Foreground (`--accent-foreground`)**: Dark Moss - `oklch(0.25 0.02 140)`
- **Border (`--border`)**: Very Light Gray - `oklch(0.92 0.01 250)`

### Dark Mode ("Night Clinic" / "Premium Consultation")
The dark theme is not a simple inversion. It evokes a private, exclusive consultation room. Deep, rich tones, never pure black.
- **Background (`--background`)**: Deep Obsidian - `oklch(0.15 0.01 250)`
- **Foreground (`--foreground`)**: Soft Pearl - `oklch(0.95 0.01 75)`
- **Primary (`--primary`)**: Warm Gold/Champagne accent - `oklch(0.8 0.05 80)`
- **Primary Foreground (`--primary-foreground`)**: Obsidian - `oklch(0.15 0.01 250)`
- **Secondary (`--secondary`)**: Dark Slate - `oklch(0.22 0.02 250)`
- **Secondary Foreground (`--secondary-foreground`)**: Pearl - `oklch(0.95 0.01 75)`
- **Muted (`--muted`)**: Charcoal - `oklch(0.25 0.01 250)`
- **Muted Foreground (`--muted-foreground`)**: Ash Gray - `oklch(0.7 0.01 250)`
- **Accent (`--accent`)**: Deep Sage/Bronze - `oklch(0.3 0.03 140)`
- **Accent Foreground (`--accent-foreground`)**: Light Sage - `oklch(0.85 0.02 140)`
- **Border (`--border`)**: Dark Gray - `oklch(0.28 0.01 250)`

## 4. Spacing & Rhythm
A generous, airy spatial system that allows content to breathe, emphasizing luxury.

- **Base Rhythm:** 4px / 8px scale.
- **Section Padding:**
  - Mobile: `py-16 px-6`
  - Tablet: `py-24 px-12`
  - Desktop: `py-32 px-16` (or `py-40`)
- **Gap System:**
  - Micro (UI elements): `gap-2` to `gap-4`
  - Component (Card contents): `gap-6` to `gap-8`
  - Structural (Between sections): `gap-16` to `gap-32`

## 5. Shape & Border Radius
Shapes should feel intentional and slightly softened to reduce the harshness of medical aesthetics, but not "bubbly" or playful.

- **Base Radius (`--radius`)**: `0.3rem` (approx 5px).
- **Buttons/Inputs**: Slight rounding, crisp but safe.
- **Cards/Images**: `rounded-xl` or `rounded-2xl` for large imagery to feel framed and deliberate. Avoid pill shapes unless for specific badges.

## 6. Shadows & Depth
Subtle, hyper-realistic drop shadows. No harsh or generic box-shadows.

- **Light Mode Shadows**:
  - Soft floating: `0 10px 40px -10px oklch(0.2 0.01 250 / 0.05)`
  - Elevated card: `0 4px 20px -2px oklch(0.2 0.01 250 / 0.03)`
- **Dark Mode Shadows**:
  - Dark mode relies more on borders (`oklch(1 0 0 / 0.1)`) and subtle background color shifts (`oklch(1 0 0 / 0.05)`) than shadows to establish depth.

## 7. Motion & Interaction
Motion should be purposeful, slow, and sophisticated. It should feel like pages turning in an editorial magazine or a slow panning shot in a luxury commercial.

- **Entrance Animations**: Slow fade-in with a gentle upward translation (`translateY: 20px -> 0`).
- **Duration**: `500ms` to `800ms`.
- **Easing**: Exponential ease-out (`cubic-bezier(0.16, 1, 0.3, 1)`).
- **Hover States**: Subtle scale-ups on images (e.g., `scale-105` over `700ms`), slight color shifts on buttons. Avoid bouncy, elastic, or rapid animations.
- **Staggered Reveals**: List items or gallery grids should reveal sequentially to build anticipation.
