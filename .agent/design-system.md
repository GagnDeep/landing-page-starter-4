# Design System: Perfect Smile Dental Clinic

## Brand Ethos
**"Friendly-Professional" & "Calm-Clinic"**
The visual identity moves away from sterile corporate dental aesthetics toward a warm, craft-driven brand experience. It feels welcoming, trustworthy, and distinctly human. We avoid "AI-startup" tropes and emphasize soothing color palettes, full dark mode support, accessibility, and gentle motion principles.

## Typography
A bespoke typography system that balances character with legibility.

- **Heading Font:** `Playfair Display` (or similar refined serif like Merriweather). A warm, elegant serif that conveys trustworthiness, professionalism, and a human touch.
- **Body Font:** `DM Sans` (or similar modern sans-serif like Inter, Roboto). A clean, highly legible sans-serif for optimal readability across all devices.

## Color Palette
Prioritizing calming, dental-appropriate tones like soft mints, warm whites, and deep slate. Designed using OKLCH for consistent perceived lightness.

### Light Mode
- **Background:** Warm White — Soft, inviting, avoiding stark hospital white.
- **Foreground:** Deep Slate — High contrast for readability without the harshness of pure black.
- **Primary:** Soft Mint — Calming, hygienic, representing dental care gently.
- **Primary Foreground:** Deep Green/Slate — Contrast for text on primary elements.
- **Secondary:** Light Warm Grey — For subtle background separation.
- **Muted:** Very Light Grey — For borders and secondary text.
- **Accent:** Warm Sand / Soft Peach — Friendly highlights.
- **Destructive:** Muted Red — Clear but not overly alarming.

### Dark Mode
- **Background:** Deep Slate — Soothing on the eyes, professional.
- **Foreground:** Warm White — High contrast, easy to read.
- **Primary:** Deep Mint — Maintaining brand identity in dark mode.
- **Primary Foreground:** White — Contrast for text on primary elements.
- **Secondary:** Dark Warm Grey — For layered elements.
- **Muted:** Very Dark Grey — For subtle borders.
- **Accent:** Muted Sand — Friendly highlights adapted for dark backgrounds.

## Spacing Scale
Strictly adheres to an 8pt (0.5rem) grid spacing scale to establish visual rhythm and consistency.

- `space-1`: 0.25rem (4px)
- `space-2`: 0.5rem (8px)
- `space-3`: 0.75rem (12px)
- `space-4`: 1rem (16px)
- `space-6`: 1.5rem (24px)
- `space-8`: 2rem (32px)
- `space-12`: 3rem (48px)
- `space-16`: 4rem (64px)
- `space-24`: 6rem (96px)
- `space-32`: 8rem (128px)

## Border Radius Constants
Slightly rounded to convey approachability and friendliness, avoiding sharp, sterile edges.

- `radius-sm`: 0.25rem (4px) - For small elements like tags or small buttons.
- `radius-md`: 0.5rem (8px) - Default for cards, standard buttons, and inputs.
- `radius-lg`: 0.75rem (12px) - For larger container panels.
- `radius-xl`: 1rem (16px) - For major structural blocks or soft image corners.
- `radius-full`: 9999px - For pills, avatars, and circular buttons.

## Motion Principles
Motion should feel natural, soothing, and purposeful. No jerky or overly energetic bouncing.

- **Duration:**
  - Fast: `150ms` (hover states, small interactions)
  - Base: `300ms` (page transitions, dialog opens)
  - Slow: `500ms` (complex layout shifts)
- **Easing:** Gentle, ease-in-out (`cubic-bezier(0.4, 0, 0.2, 1)`), providing a calm, unhurried feel.
- **Transforms:** Prefer subtle fades and slight vertical shifts (e.g., `translate-y-1`) over dramatic scaling or rotations.
