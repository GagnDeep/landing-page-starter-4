# AGENTS.md

## Commands
pnpm install --frozen-lockfile
pnpm run typecheck
pnpm run lint
pnpm run build
node scripts/check-seo.mjs
pnpm dlx linkinator out --recurse --silent

## Route Manifest
- `/` - Home Page
- `/about` - About
- `/sam-registration` - Guide
- `/set-aside-certifications` - Hub
- `/set-aside-certifications/8a` - Spoke
- `/set-aside-certifications/hubzone` - Spoke
- `/set-aside-certifications/sdvosb` - Spoke
- `/set-aside-certifications/wosb` - Spoke
- `/gsa-schedules` - Guide

## Rules
- All design tokens MUST live in `app/globals.css`.
- `lib/site.ts` is the ONLY source of site metadata.
- No `lorem ipsum`, `TODO`, or `FIXME`.
- Unknown figures/facts ship as `{{VERIFY: what is needed and where to source it}}`.

## Compliance Rule (Repository Law)
- THIS IS NOT A NEWS SITE. No news routes/reporting/NewsArticle schema.
- NEVER MISTAKE FOR A US GOVERNMENT WEBSITE. No federal navy, no USWDS, no seals/eagles/flags, no .gov mimicry.
- A persistent non-dismissible disclosure must appear on EVERY page stating this is an independent guide.
