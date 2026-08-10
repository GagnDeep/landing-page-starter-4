# Landing Page Starter — Agent Guide

## Verification Commands
```bash
pnpm install --frozen-lockfile
pnpm run typecheck
pnpm run lint
pnpm run build
node scripts/check-seo.mjs
pnpm dlx linkinator out --recurse --silent
```

## Route Manifest
- / (Home)
- /about/
- /rfq/

## Critical Rules
1. **Tokens**: All styling tokens live in `app/globals.css`. Never hardcode colors inside a component.
2. **Metadata**: `lib/site.ts` is the single source of truth for site metadata.
3. **Compliance Rule**: The standards IPC/WHMA-A-620, UL, AS9100, Nadcap and ITAR registration exist, and EV high-voltage harnesses are the fastest-growing segment. Every market size, price, lead time and shop name is {{VERIFY: ...}}.
