# Design System: Amil's Hair Lounge

## Brand Identity
**Concept**: Affordable Luxury
**Vibe**: Sophisticated, welcoming, expert, premium, clean. The aesthetic should feel like a high-end editorial magazine.

## Typography
- **Headings (Serif)**: `Playfair Display`
  - Used for h1, h2, h3, and hero section titles.
  - Conveys elegance, tradition, and high-end luxury.
- **Body (Sans-serif)**: `Figtree`
  - Used for body text, UI elements, buttons, and captions.
  - Conveys modern cleanliness, readability, and approachability.

## Color Palette (CSS Variables)

### Light Mode
- **Background** (`--background`): `#FAFAF9` (Soft Cream / Pearl) - Conveys cleanliness and spaciousness.
- **Foreground** (`--foreground`): `#1C1917` (Deep Charcoal) - For crisp, accessible text contrast.
- **Primary** (`--primary`): `#43302B` (Rich Espresso) - Sophisticated dark tone for primary actions.
- **Primary Foreground** (`--primary-foreground`): `#FAFAF9`
- **Secondary / Accent** (`--secondary`): `#E5E0D8` (Warm Taupe) - Soft neutral accent for section backgrounds.
- **Secondary Foreground** (`--secondary-foreground`): `#1C1917`
- **Muted** (`--muted`): `#F5F5F4` (Stone)
- **Muted Foreground** (`--muted-foreground`): `#78716C`
- **Border** (`--border`): `#E7E5E4`

### Dark Mode
- **Background** (`--background`): `#131110` (Very Dark Espresso / Charcoal) - Rich, deep tone to maintain luxury rather than a stark `#000000`.
- **Foreground** (`--foreground`): `#F5F5F4` (Soft Stone)
- **Primary** (`--primary`): `#C7A992` (Champagne Gold / Warm Sand) - Elegant accent for high contrast against dark backgrounds.
- **Primary Foreground** (`--primary-foreground`): `#131110`
- **Secondary** (`--secondary`): `#292524` (Deep Stone)
- **Secondary Foreground** (`--secondary-foreground`): `#F5F5F4`
- **Muted** (`--muted`): `#292524`
- **Muted Foreground** (`--muted-foreground`): `#A8A29E`
- **Border** (`--border`): `#292524`

*(Accessibility Note: WCAG 2.1 AA compliant contrast ratios maintained across all background/foreground pairings.)*

## Spacing Scale
- Defined by a geometric 4pt/8pt grid system.
- `space-xs`: 0.25rem (4px)
- `space-sm`: 0.5rem (8px)
- `space-md`: 1rem (16px)
- `space-lg`: 2rem (32px)
- `space-xl`: 4rem (64px)
- `space-2xl`: 8rem (128px) - Used for major section breaks to enhance the editorial/magazine feel.

## Border Radius
Tokens reflect a modern, elegant look—leaning towards slightly softened corners rather than overly rounded (which can look playful/cheap).
- `--radius-sm`: `0.125rem` (2px)
- `--radius-md`: `0.25rem` (4px)
- `--radius-lg`: `0.5rem` (8px) - Used for cards and main UI elements.

## Motion & Easing
- **Easing**: `cubic-bezier(0.22, 1, 0.36, 1)` (Smooth, elegant deceleration)
- **Durations**:
  - `fast`: 150ms (Hover states, small UI shifts)
  - `medium`: 300ms (Drawer opens, fades)
  - `slow`: 500ms (Hero animations, page transitions, complex reveals)
- **Intent**: Animations should feel deliberate, smooth, and unhurried—mimicking the relaxed, pampered experience of a luxury salon.
