# Design System: Dr. Kochar's House of Smiles

## 1. Brand Identity & Vibe
**Core Themes:** Warmth, Compassionate Care, 24/7 Reliability, High-End Professionalism, Chandigarh-local appeal.
**Vibe:** Sophisticated and artistic, avoiding cold, generic clinical templates. The environment feels inviting, like an upscale hospitality space, yet firmly reassuring and medically excellent.

## 2. Typography
We are stepping away from default sans-serifs (like Inter or Roboto) to establish a distinctive personality.

* **Primary Heading Font:** *Playfair Display* (or similar high-personality serif). Used for H1, H2, H3 to bring an elegant, trustworthy, and established feel.
* **Secondary / Body Font:** *Outfit* or *Plus Jakarta Sans* (or similar modern, friendly, geometric sans-serif). Ensures readability, accessibility, and a modern touch.
* **Highlight / Accent Font:** A subtle script or italicized serif for quotes and special emphasis (e.g., *Caveat* or *Playfair Italic*), used sparingly for personal touches (like "Dr. Kochar").

## 3. Color Palette (Tokens)
The palette balances the calm reliability of medical care with the warmth of a family home.

### Light Mode
* **Background (`--background`):** Warm Off-White (`#FAFAFA` / `oklch(0.98 0.01 75)`)
* **Foreground (`--foreground`):** Deep Charcoal/Slate (`#1A1D20` / `oklch(0.25 0.01 250)`)
* **Primary (`--primary`):** Reassuring Midnight Blue (`#0B3B60` / `oklch(0.35 0.08 250)`)
* **Primary Foreground (`--primary-foreground`):** White (`#FFFFFF` / `oklch(1 0 0)`)
* **Secondary (`--secondary`):** Soft Mint/Sage (`#E2F0CB` / `oklch(0.92 0.05 145)`)
* **Secondary Foreground (`--secondary-foreground`):** Deep Slate (`#1A1D20` / `oklch(0.25 0.01 250)`)
* **Accent (`--accent`):** Warm Gold/Sand (`#D4AF37` / `oklch(0.75 0.12 85)`) - represents premium care and the 24/7 "light always on" concept.
* **Accent Foreground (`--accent-foreground`):** Dark Navy (`#082440` / `oklch(0.2 0.05 250)`)
* **Muted (`--muted`):** Very Light Blue/Gray (`#F0F4F8` / `oklch(0.96 0.01 250)`)
* **Muted Foreground (`--muted-foreground`):** Slate Gray (`#64748B` / `oklch(0.55 0.02 250)`)
* **Destructive (`--destructive`):** Soft Coral/Red (`#E06A6A` / `oklch(0.6 0.15 25)`)
* **Border (`--border`):** Light Gray (`#E2E8F0` / `oklch(0.9 0.01 250)`)

### Dark Mode (For nighttime viewing, emphasizing the 24/7 aspect)
* **Background (`--background`):** Deep Night Navy (`#0A1118` / `oklch(0.15 0.02 250)`)
* **Foreground (`--foreground`):** Soft Off-White (`#E2E8F0` / `oklch(0.9 0.01 250)`)
* **Primary (`--primary`):** Soft Gold/Sand (`#E6C875` / `oklch(0.8 0.1 85)`) - shining in the dark
* **Primary Foreground (`--primary-foreground`):** Deep Night (`#0A1118` / `oklch(0.15 0.02 250)`)
* **Secondary (`--secondary`):** Deep Emerald/Teal (`#10353A` / `oklch(0.3 0.04 180)`)
* **Secondary Foreground (`--secondary-foreground`):** Light Mint (`#E2F0CB` / `oklch(0.92 0.05 145)`)
* **Accent (`--accent`):** Warm Amber (`#F59E0B` / `oklch(0.7 0.15 70)`)
* **Accent Foreground (`--accent-foreground`):** Deep Night (`#0A1118` / `oklch(0.15 0.02 250)`)
* **Muted (`--muted`):** Dark Slate (`#1E293B` / `oklch(0.25 0.02 250)`)
* **Muted Foreground (`--muted-foreground`):** Gray/Blue (`#94A3B8` / `oklch(0.7 0.02 250)`)
* **Border (`--border`):** Dark Slate (`#1E293B` / `oklch(0.25 0.02 250)`)

## 4. Spacing Scale
Using an 8pt grid system to ensure vertical and horizontal rhythm.
* `spacing-1`: 4px
* `spacing-2`: 8px
* `spacing-4`: 16px
* `spacing-6`: 24px
* `spacing-8`: 32px
* `spacing-12`: 48px
* `spacing-16`: 64px
* `spacing-24`: 96px
* `spacing-32`: 128px (Used for major section padding)

## 5. Border Radius
Soft and organic shapes to convey comfort and safety (avoiding sharp, clinical edges).
* `--radius-sm`: 0.375rem (6px) - for small inputs
* `--radius`: 0.75rem (12px) - for buttons and standard cards
* `--radius-lg`: 1.5rem (24px) - for featured cards and images
* `--radius-full`: 9999px - for pills, avatars, and 24/7 badges

## 6. Shadows & Depth
Subtle, warm shadows that lift elements without making them feel detached.
* `shadow-sm`: `0 1px 2px 0 rgb(11 59 96 / 0.05)` (Subtle borders)
* `shadow-md`: `0 4px 6px -1px rgb(11 59 96 / 0.1)` (Cards)
* `shadow-lg`: `0 10px 15px -3px rgb(11 59 96 / 0.1), 0 4px 6px -4px rgb(11 59 96 / 0.1)` (Hover states, popovers)
* `shadow-glow`: `0 0 15px 2px rgb(212 175 55 / 0.4)` (Used specifically for the 24/7 indicator)

## 7. Motion & Animation
Animations should be smooth, reassuring, and never jarring.
* **Durations:**
  * Fast: 150ms (Hover effects)
  * Base: 300ms (Fade ins, toggles)
  * Slow: 500ms-700ms (Page transitions, hero elements)
* **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` (Smooth ease-in-out)
* **Accessibility:** Always respect `@media (prefers-reduced-motion: reduce)`. If reduced motion is preferred, default to simple opacity fades or entirely disable transforms.
* **Signature Move:** A gentle "breathing" or pulsing animation for the 24/7 availability badge.
