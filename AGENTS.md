# Landing Page Starter — Agent Guide

## Project Overview

Landing page starter template built with Next.js 16 + shadcn/ui. Purpose: scaffold for building production landing pages quickly with a modern stack (React 19, Tailwind v4, TypeScript strict mode).

## Available UI Components (55+)

**Layout:** Card, Separator, AspectRatio, Sidebar, Resizable, Direction, Empty

**Navigation:** Button, ButtonGroup, NavigationMenu, Breadcrumb, Pagination, Tabs, Menubar

**Forms:** Input, InputGroup, InputOTP, Select, NativeSelect, Checkbox, RadioGroup, Switch, Textarea, Slider, Field, Combobox, Label

**Feedback:** Alert, Skeleton, Progress, Spinner, Sonner (toasts), Badge, Kbd

**Overlay:** Dialog, AlertDialog, Sheet, Drawer, Popover, HoverCard, ContextMenu, DropdownMenu, Tooltip

**Data Display:** Table, Carousel, Calendar, Chart (Recharts), Avatar, Item

**Interactive:** Accordion, Collapsible, Command (cmd+k), Toggle, ToggleGroup, ScrollArea

All components are in `components/ui/` and managed by the shadcn CLI. Add new ones with:
```bash
pnpm dlx shadcn@latest add <component>
```

## Landing Page Building Guide

### Hero Section
Use a full-width container with `min-h-svh` or a large padding section. Combine heading typography with `Button` for CTAs. Use semantic colors (`text-foreground`, `bg-background`).

### Feature Grid
Use CSS grid with Tailwind (`grid grid-cols-1 md:grid-cols-3 gap-6`). Each feature can use `Card` with `CardHeader`, `CardTitle`, `CardDescription`, and `CardContent`. Add icons from HugeIcons.

### Pricing Tables
Use `Card` components in a grid. Highlight the recommended plan with `border-primary` or `bg-accent`. Use `Badge` for labels like "Popular". Use `Separator` between price and features list.

### Testimonials
Use `Card` with `Avatar` for profile images. Arrange in a grid or `Carousel` for sliding testimonials.

### Call to Action
Full-width section with `bg-primary text-primary-foreground`. Use `Button` with `variant="secondary"` or `variant="outline"` for contrast.

### FAQ
Use the `Accordion` component directly — it handles expand/collapse with accessible keyboard navigation.

### Footer
Use a grid layout with `Separator` at the top. Organize links in columns with `NavigationMenu` or simple link lists.

## Critical Rules

1. **Always use `cn()`** from `@/lib/utils` for className composition — never concatenate strings
2. **Use existing shadcn components** — don't rebuild what's already available
3. **Semantic color tokens only** — use `bg-primary`, `text-muted-foreground`, etc. Never hardcode color values
4. **Server Components by default** — only add `"use client"` when you need hooks, event handlers, or browser APIs
5. **Import icons correctly:**
   ```tsx
   import { HugeIcon } from "@hugeicons/react"
   import { ArrowRight01Icon } from "@hugeicons/core-free-icons"
   // Usage: <HugeIcon icon={ArrowRight01Icon} />
   ```
6. **Test both light and dark mode** — press `d` to toggle in dev
7. **Use responsive Tailwind utilities** — `sm:`, `md:`, `lg:`, `xl:` for breakpoints
8. **Use `cn()` with `cva`** for component variants — import `cva` from `class-variance-authority`

## File Conventions

| What | Where | Example |
|------|-------|---------|
| New pages | `app/<route>/page.tsx` | `app/pricing/page.tsx` |
| New layouts | `app/<route>/layout.tsx` | `app/(marketing)/layout.tsx` |
| Custom components | `components/<name>.tsx` | `components/hero.tsx` |
| UI primitives | `components/ui/<name>.tsx` | Managed by shadcn CLI |
| Utilities | `lib/<name>.ts` | `lib/constants.ts` |
| Hooks | `hooks/use-<name>.ts` | `hooks/use-scroll.ts` |

## Code Style

- No semicolons, double quotes, 2-space indent, trailing commas (es5), 80 char width
- Run `pnpm run format` to auto-format with Prettier
- Run `pnpm run lint` to check with ESLint
- Run `pnpm run typecheck` for TypeScript validation
