# Design System: Perfect Smile Dental Clinic

## Brand Character
- **Family-trusted yet modern:** Avoiding "AI-startup" tropes or generic healthcare templates.
- **Aesthetic:** Warm, professional, clean, soothing, and sophisticated.
- **Core Values:** Reliability, comfort, painless care, specialized expertise (pediatric braces, root canals), legacy of patient trust.

## Typography System
A bespoke typography system to ensure a sophisticated visual language.

- **Heading Font:** `var(--font-heading)` - A refined serif or humanist sans-serif that conveys authority and warmth. E.g., 'Merriweather', 'Lora', or 'Playfair Display' (will be defined in Next.js).
- **Body Font:** `var(--font-sans)` - A highly legible, modern sans-serif for optimal readability. E.g., 'Inter', 'DM Sans', or 'Roboto'.
- **Scale:**
  - `text-xs`: 0.75rem (12px) - Captions, small disclaimers.
  - `text-sm`: 0.875rem (14px) - Secondary text, utility labels.
  - `text-base`: 1rem (16px) - Primary body copy.
  - `text-lg`: 1.125rem (18px) - Lead paragraphs, prominent list items.
  - `text-xl`: 1.25rem (20px) - Small subheadings.
  - `text-2xl`: 1.5rem (24px) - Medium subheadings.
  - `text-3xl`: 1.875rem (30px) - Section headers (mobile).
  - `text-4xl`: 2.25rem (36px) - Section headers (desktop).
  - `text-5xl`: 3rem (48px) - Hero headings (mobile).
  - `text-6xl`: 3.75rem (60px) - Hero headings (desktop).
- **Line Heights:**
  - Headings: 1.1 to 1.2 (tight)
  - Body: 1.5 to 1.6 (relaxed, readable)

## Color Palette Tokens (OKLCH)

### Light Mode (Clean, Soothing, Trustworthy)
- `--background`: Clean white with a hint of warmth (`oklch(0.99 0.01 250)`)
- `--foreground`: Deep slate blue for high readability without harshness (`oklch(0.25 0.02 250)`)
- `--primary`: A calming, clinical teal/blue, representing trust and hygiene (`oklch(0.55 0.12 230)`)
- `--primary-foreground`: White (`oklch(0.99 0.01 250)`)
- `--secondary`: A soft, warm beige/sand to convey warmth and family (`oklch(0.95 0.02 60)`)
- `--secondary-foreground`: Deep slate (`oklch(0.3 0.03 250)`)
- `--muted`: Soft cool gray (`oklch(0.96 0.01 250)`)
- `--muted-foreground`: Medium cool gray (`oklch(0.5 0.02 250)`)
- `--accent`: A gentle coral or warm terracotta for subtle highlights/CTA without being aggressive (`oklch(0.7 0.1 30)`)
- `--accent-foreground`: White or deep slate depending on contrast.
- `--destructive`: Soft red/rose (`oklch(0.6 0.15 20)`)
- `--border`: Light gray (`oklch(0.92 0.01 250)`)
- `--input`: Light gray (`oklch(0.92 0.01 250)`)
- `--ring`: Primary teal (`oklch(0.55 0.12 230)`)

### Dark Mode (Soothing, High-Contrast, Restful)
- `--background`: Deep midnight blue/slate, not pure black (`oklch(0.15 0.02 250)`)
- `--foreground`: Soft off-white for readability (`oklch(0.95 0.01 250)`)
- `--primary`: A lighter, more vibrant teal for visibility (`oklch(0.65 0.15 230)`)
- `--primary-foreground`: Deep midnight (`oklch(0.15 0.02 250)`)
- `--secondary`: Dark warm gray (`oklch(0.25 0.02 60)`)
- `--secondary-foreground`: Soft off-white (`oklch(0.95 0.01 250)`)
- `--muted`: Dark cool gray (`oklch(0.2 0.02 250)`)
- `--muted-foreground`: Medium cool gray (`oklch(0.7 0.02 250)`)
- `--accent`: Gentle warm highlight (`oklch(0.6 0.1 30)`)
- `--accent-foreground`: Deep midnight (`oklch(0.15 0.02 250)`)
- `--destructive`: Soft red (`oklch(0.5 0.15 20)`)
- `--border`: Dark gray (`oklch(0.25 0.02 250)`)
- `--input`: Dark gray (`oklch(0.25 0.02 250)`)
- `--ring`: Primary teal (`oklch(0.65 0.15 230)`)

## Spacing & Sizing Scale
Using a standard 4px baseline grid.
- `space-1`: 0.25rem (4px)
- `space-2`: 0.5rem (8px)
- `space-3`: 0.75rem (12px)
- `space-4`: 1rem (16px)
- `space-6`: 1.5rem (24px)
- `space-8`: 2rem (32px)
- `space-12`: 3rem (48px)
- `space-16`: 4rem (64px) - Section inner padding
- `space-24`: 6rem (96px) - Section outer margin
- `space-32`: 8rem (128px) - Hero/major section spacing

## Border Radius
Soft, approachable corners to reinforce the "painless" and "family" aspects. Avoid sharp edges where possible.
- `--radius`: `0.75rem` (12px) - Standard for cards and buttons.
- `--radius-sm`: `0.5rem` (8px) - Inputs, small badges.
- `--radius-lg`: `1rem` (16px) - Featured cards, modals.
- `--radius-xl`: `1.5rem` (24px) - Large prominent callouts or imagery blocks.

## Shadow System
Subtle, elevated shadows for depth without being heavy.
- `shadow-sm`: Very subtle elevation for inputs or subtle cards. `0 1px 2px rgba(0,0,0,0.05)`
- `shadow-md`: Standard card elevation. `0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -2px rgba(0,0,0,0.05)`
- `shadow-lg`: Hover states, prominent overlays (dropdowns, modals). `0 10px 15px -3px rgba(0,0,0,0.05), 0 4px 6px -4px rgba(0,0,0,0.05)`
- **Dark Mode Shadows:** Reduced opacity, slightly wider spread, utilizing deeper base colors to ensure visibility without "glow" effects.

## Motion Principles
- **Gentle & Purposeful:** Animations should never feel frantic or "techy". They should guide the eye and provide feedback smoothly.
- **Duration:** Slightly longer than typical web defaults to feel more relaxed (e.g., `300ms` for micro-interactions, `500ms` for section reveals).
- **Easing:** Smooth ease-in-out (`cubic-bezier(0.4, 0, 0.2, 1)` or similar) for a natural feel.
- **Fade & Slide:** Simple vertical or horizontal subtle slides coupled with fade-ins for entering content. Avoid aggressive scaling or 3D flips.
- **Accessibility:** Respect `prefers-reduced-motion`.
