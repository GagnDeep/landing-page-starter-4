# JSONMock Agent Guide

## Commands
- Run verification script: `node scripts/check-seo.mjs`
- Build: `pnpm run build`
- Typecheck: `pnpm run typecheck`
- Lint: `pnpm run lint`

## Route Manifest
- Home: `/`
- Hubs: `/docs/`, `/providers/`
- Spokes: `/docs/quickstart/`, `/docs/recording/`, `/providers/openai/`, `/providers/anthropic/`, `/recipes/flaky-agent-tests/`
- Tool: `/cassette-diff/`
- Money: `/pricing/`

## Rules
- All tokens live in `app/globals.css`.
- `lib/site.ts` is the only source of site metadata.
- **Compliance Rule:** No benchmark, latency or cost number without a runnable script in the repo linked from the claim; no named customer or logo, ever.
- **Banned Strings:** "trusted by", "used by teams at", "10x faster", "enterprise-grade".
