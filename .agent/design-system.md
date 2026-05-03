# 99 Institute - Design System

## Brand Identity & Persona
**Persona:** "Glam-Academy"
**Vibe:** Sophisticated, Glamorous, Professional, Educational
**Description:** A high-conversion, visually sophisticated digital platform that serves both as a booking portal for high-end bridal services and a recruitment hub for aspiring makeup artists.

## Typography
High-contrast typography combining elegant serifs for headings with clean, modern sans-serifs for readability and UI elements.

- **Heading Font (Serif):** Playfair Display / Cormorant Garamond / Lora
  - *Usage:* Primary headings, large pull quotes, premium section titles.
- **Body & UI Font (Sans-serif):** Montserrat / Inter / Plus Jakarta Sans
  - *Usage:* Body copy, buttons, labels, navigation, microcopy.

## Color Tokens (CSS Variables)
Colors are defined using OKLCH for consistent perceptual lightness. The theme uses a crisp champagne-light mode and a rich velvet-inspired dark mode.

### Light Mode (Champagne Crisp)
- **Background:** `oklch(0.98 0.01 75)` (Crisp champagne white)
- **Foreground:** `oklch(0.15 0.02 300)` (Deep velvet charcoal)
- **Primary:** `oklch(0.45 0.12 30)` (Rich terracotta / warm burgundy)
- **Primary Foreground:** `oklch(0.98 0.01 75)`
- **Secondary:** `oklch(0.92 0.02 75)` (Soft champagne gold)
- **Secondary Foreground:** `oklch(0.20 0.05 30)`
- **Muted:** `oklch(0.95 0.01 75)`
- **Muted Foreground:** `oklch(0.45 0.02 300)`
- **Border:** `oklch(0.90 0.02 75)`
- **Card/Popover:** `oklch(1.0 0 0)`
- **Card/Popover Foreground:** `oklch(0.15 0.02 300)`

### Dark Mode (Velvet Glam)
- **Background:** `oklch(0.12 0.02 300)` (Deep velvet charcoal/navy)
- **Foreground:** `oklch(0.95 0.01 75)` (Soft champagne white)
- **Primary:** `oklch(0.65 0.15 30)` (Vibrant rose gold / warm crimson)
- **Primary Foreground:** `oklch(0.12 0.02 300)`
- **Secondary:** `oklch(0.20 0.03 300)` (Rich dark slate)
- **Secondary Foreground:** `oklch(0.95 0.01 75)`
- **Muted:** `oklch(0.20 0.02 300)`
- **Muted Foreground:** `oklch(0.70 0.01 75)`
- **Border:** `oklch(0.25 0.02 300)`
- **Card/Popover:** `oklch(0.15 0.02 300)`
- **Card/Popover Foreground:** `oklch(0.95 0.01 75)`

*(Note: Contrast ratios meet WCAG AA standards. High contrast between foregrounds and backgrounds)*

## Spacing Scale
Based on a 4px mathematical grid to ensure consistent, physical rhythm.

- `--space-1`: 4px
- `--space-2`: 8px
- `--space-3`: 12px
- `--space-4`: 16px
- `--space-6`: 24px
- `--space-8`: 32px
- `--space-12`: 48px
- `--space-16`: 64px
- `--space-24`: 96px
- `--space-32`: 128px
- `--space-48`: 192px

## Border Radius
Refined, elegant corners avoiding overly playful roundness.

- `--radius-sm`: 2px (Subtle edge for inputs)
- `--radius-md`: 4px (Standard buttons, small cards)
- `--radius-lg`: 8px (Large cards, feature images)
- `--radius-full`: 9999px (Pills, avatars)

## Motion & Transitions
Smooth, luxurious curves that feel expensive and deliberate. Avoid bouncy or elastic easing.

- **Duration Fast:** 150ms
- **Duration Normal:** 300ms
- **Duration Slow:** 500ms
- **Easing Standard (Ease-out-quart):** `cubic-bezier(0.25, 1, 0.5, 1)`
- **Easing Entrance (Ease-out-expo):** `cubic-bezier(0.16, 1, 0.3, 1)`
- **Easing Exit (Ease-in-quart):** `cubic-bezier(0.5, 0, 0.75, 0)`
