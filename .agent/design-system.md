# Dental Lifeline Clinic Design System

This document outlines the core visual language and structural principles for the Dental Lifeline Clinic digital experience. The aesthetic is strictly sophisticated, clinical, and premium editorial—aiming to convey sterility, precision, and reassurance while avoiding generic "tech-startup" tropes.

## Typography

We pair a sharp, sophisticated serif with a highly legible, clean sans-serif.

*   **Primary Font (Headings/Display):** `Playfair Display` or `Cormorant Garamond`. Used for hero statements, major section titles, and pull quotes to impart an editorial, premium medical feel.
*   **Secondary Font (Body/UI/Functional):** `Inter` or `Geist`. Used for paragraphs, navigation, buttons, labels, and small copy to ensure pristine legibility across devices.

## Spacing System

Strict adherence to an 8-point grid to ensure visual rhythm.

*   `spacing-1`: 4px
*   `spacing-2`: 8px
*   `spacing-3`: 12px
*   `spacing-4`: 16px
*   `spacing-5`: 24px
*   `spacing-6`: 32px
*   `spacing-8`: 48px
*   `spacing-10`: 64px
*   `spacing-12`: 96px
*   `spacing-16`: 128px

## Color Palette & CSS Variables

The color palette emphasizes "sterile" whites, deep navy/charcoal for gravity, and soft clinical blues for accents and reassurance. Dark mode is carefully tuned to maintain high contrast and readability without feeling harsh.

### Light Mode Variables

*   `--background`: `oklch(0.99 0 0)` - Pristine, sterile white.
*   `--foreground`: `oklch(0.2 0.02 240)` - Deep slate/navy for text, avoiding pure black.
*   `--card`: `oklch(1 0 0)` - Pure white for cards to sit cleanly.
*   `--card-foreground`: `oklch(0.2 0.02 240)`
*   `--popover`: `oklch(1 0 0)`
*   `--popover-foreground`: `oklch(0.2 0.02 240)`
*   `--primary`: `oklch(0.3 0.05 240)` - Deep clinical navy.
*   `--primary-foreground`: `oklch(0.99 0 0)` - White text on primary elements.
*   `--secondary`: `oklch(0.96 0.01 240)` - Soft, clinical ice blue.
*   `--secondary-foreground`: `oklch(0.3 0.05 240)`
*   `--muted`: `oklch(0.96 0.01 240)`
*   `--muted-foreground`: `oklch(0.5 0.02 240)` - Legible grey-blue for secondary text.
*   `--accent`: `oklch(0.96 0.01 240)`
*   `--accent-foreground`: `oklch(0.3 0.05 240)`
*   `--destructive`: `oklch(0.6 0.15 20)` - A refined, serious red, not alarmist.
*   `--destructive-foreground`: `oklch(0.99 0 0)`
*   `--border`: `oklch(0.92 0.01 240)` - Very subtle borders.
*   `--input`: `oklch(0.92 0.01 240)`
*   `--ring`: `oklch(0.7 0.05 240)` - Focus ring in a calm blue.
*   `--radius`: `0.5rem` - Slightly rounded, but maintaining precision (not overly bubbly).

### Dark Mode Variables (Carefully Curated)

*   `--background`: `oklch(0.15 0.02 240)` - Very deep, rich charcoal/navy, not pure black.
*   `--foreground`: `oklch(0.95 0.01 240)` - Soft off-white for text to reduce eye strain.
*   `--card`: `oklch(0.2 0.02 240)` - Slightly lighter dark tone for cards.
*   `--card-foreground`: `oklch(0.95 0.01 240)`
*   `--popover`: `oklch(0.2 0.02 240)`
*   `--popover-foreground`: `oklch(0.95 0.01 240)`
*   `--primary`: `oklch(0.8 0.05 240)` - Muted, elegant light blue for primary actions.
*   `--primary-foreground`: `oklch(0.15 0.02 240)` - Dark text on primary elements.
*   `--secondary`: `oklch(0.25 0.02 240)` - Darker clinical tone.
*   `--secondary-foreground`: `oklch(0.95 0.01 240)`
*   `--muted`: `oklch(0.25 0.02 240)`
*   `--muted-foreground`: `oklch(0.7 0.02 240)` - Lighter grey-blue for secondary text.
*   `--accent`: `oklch(0.25 0.02 240)`
*   `--accent-foreground`: `oklch(0.95 0.01 240)`
*   `--destructive`: `oklch(0.5 0.15 20)`
*   `--destructive-foreground`: `oklch(0.95 0 0)`
*   `--border`: `oklch(0.3 0.02 240)`
*   `--input`: `oklch(0.3 0.02 240)`
*   `--ring`: `oklch(0.5 0.05 240)`

## Shadows & Depth

Shadows should be extremely soft, diffused, and cool-toned to maintain the "sterile" environment. No harsh, dark dropshadows.

*   `shadow-sm`: Soft subtle lift for inputs or minor cards.
*   `shadow-md`: Standard elevation for floating elements like dropdowns.
*   `shadow-lg`: Deep, diffused shadow for modals and major prominent elements.

## Motion & Animation Principles

Motion should feel deliberate, smooth, and unhurried—like a confident medical professional.

*   **Speed:** Moderate to slow. Avoid snappy, springy "tech" animations.
*   **Easing:** Smooth ease-in-out (`cubic-bezier(0.4, 0, 0.2, 1)` or similar) for an organic, reassuring feel.
*   **Types of Motion:** Subtle fade-ins, gentle upward translates on scroll reveal, smooth cross-fades. No aggressive scaling or bouncing.
