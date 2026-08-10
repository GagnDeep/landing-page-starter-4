# Landing Page Starter — Agent Guide

## Core Commands
- `pnpm install --frozen-lockfile`
- `pnpm run typecheck`
- `pnpm run lint`
- `pnpm run build`

## Route Manifest
- Hubs: `/`, `/engagements/`, `/perspectives/`
- Spokes: `/engagements/fractional-cto/`, `/engagements/diligence/`, `/engagements/exam-readiness/`, `/perspectives/custodian-data/`, `/review/`
- Money page: `/consultation/`
- Founder record: `/founder/`

## Rules
1. **Tokens only in globals.css:** All color and spacing tokens live exclusively in `app/globals.css`. Do not hardcode values in components.
2. **Single source of site metadata:** `lib/site.ts` is the *only* source of site metadata.
3. **Compliance Rule:** No fabricated social proof — no invented clients, logos, testimonials or case studies; every credibility claim is a VERIFY token or absent. The build fails on "trusted by", "our clients include", "award-winning" or "SEC-approved", and on any logo grid.

