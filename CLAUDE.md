# Landing Page Starter

## Commands

- `pnpm run dev` — Start dev server (Turbopack)
- `pnpm run build` — Production build
- `pnpm run lint` — ESLint
- `pnpm run format` — Prettier
- `pnpm run typecheck` — TypeScript check

## Tech Stack

- Next.js 16.1.7 (App Router, Turbopack)
- React 19.2.4
- TypeScript 5.9.3 (strict mode)
- Tailwind CSS v4.2.1 (PostCSS, inline `@theme` config)
- shadcn/ui (radix-maia style, neutral base color)
- HugeIcons (`@hugeicons/react` + `@hugeicons/core-free-icons`)
- next-themes for dark/light mode
- pnpm package manager

## Folder Structure

```
app/              — Next.js App Router pages and layouts
components/       — React components
components/ui/    — shadcn/ui primitives (55+ components)
lib/              — Utility functions (cn())
hooks/            — Custom React hooks (useIsMobile)
public/           — Static assets
```

## Architecture & Conventions

- App Router with RSC — mark client components with `"use client"`
- Path aliases: `@/*` maps to project root (`@/components`, `@/lib/utils`, `@/hooks`)
- Class merging: always use `cn()` from `@/lib/utils` (clsx + tailwind-merge)
- Variants: use `cva` from `class-variance-authority`
- Components use `data-slot` attributes for styling hooks
- Compound component pattern for complex UI (Card, Dialog, etc.)

## Styling System

- Tailwind v4 with `@tailwindcss/postcss` — no separate tailwind.config file
- Theme defined inline in `app/globals.css` using `@theme inline`
- OKLCh color space for all theme colors
- CSS variables for semantic colors: `--primary`, `--secondary`, `--accent`, `--muted`, `--destructive`, `--background`, `--foreground`, `--card`, `--popover`, `--border`, `--input`, `--ring`
- Dark mode via `.dark` class (managed by next-themes, `@custom-variant dark`)
- Prettier auto-sorts Tailwind classes via `prettier-plugin-tailwindcss`

## Fonts

- Sans: Figtree (via `next/font/google`, CSS var `--font-sans`)
- Mono: Geist Mono (via `next/font/google`, CSS var `--font-mono`)

## Adding shadcn Components

- CLI: `pnpm dlx shadcn@latest add <component>`
- Config in `components.json` (radix-maia style, hugeicons, RSC enabled)
- Components land in `components/ui/`

## Key Patterns for Landing Pages

- Use semantic color tokens (`bg-primary`, `text-muted-foreground`) not raw colors
- Leverage existing shadcn components before building custom ones
- Use `useIsMobile()` hook from `@/hooks/use-mobile` for responsive logic
- Press `d` hotkey to toggle dark mode (ThemeHotkey component in theme-provider)
- All pages are Server Components by default — only add `"use client"` when needed
- Icons: import specific icons from `@hugeicons/core-free-icons`, render with `HugeIcon` from `@hugeicons/react`

## Code Style

- No semicolons
- Double quotes
- 2-space indentation
- Trailing commas (es5)
- 80 char print width
- LF line endings

## Skills Reference

- `shadcn` — component docs, patterns, CLI usage
- `next-best-practices` — RSC boundaries, async APIs, file conventions
- `frontend-design` — design quality, typography, color, layout
- `brainstorming` — explore intent before building
