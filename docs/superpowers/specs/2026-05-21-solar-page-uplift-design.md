# Solar Page — Comprehensive UI/UX + SEO Uplift

**Date:** 2026-05-21
**Status:** Approved, in implementation
**Scope:** Whole site (home + all subpages), placeholder values centralised in one file.

---

## Goals

1. Best-in-class on-page SEO, structured data, and LLM/AI-search discoverability.
2. Consistent typography and type scale across all 17 home sections + subpages.
3. Conversion-aware UI/UX (sticky mobile CTA, breadcrumbs, anchor nav, reduced motion).
4. One single source of truth for replaceable values (URL, phone, address, GSTIN, social, GBP).
5. Multi-locale aware (en/hi/pa) with correct hreflang + canonical.

## Non-goals

- Building actual lead-capture backend (form posts stay placeholder).
- Migrating away from Next 16 / Tailwind v4 / shadcn.
- Replacing the placeholder gallery images (handled when real photos arrive).

## Sub-projects (execution milestones)

| M | Stream | Files touched |
|---|---|---|
| M1 | Config + SEO infra | `lib/config/site.config.ts` (new), `lib/seo.ts`, `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.tsx` (new), `app/manifest.ts` (new) |
| M2 | JSON-LD + LLM | `lib/jsonld.ts` rewrite (split into `lib/jsonld/`), `public/llms.txt`, `public/ai.txt`, plain-text route alternates, AI bot rules in robots |
| M3 | Type scale | `app/globals.css` (`@theme` extensions for type scale), font fallbacks for hi/pa |
| M4 | Home UI/UX | `app/page.tsx` (section reorder), new `components/layout/sticky-cta.tsx`, `components/layout/scroll-progress.tsx`, breadcrumbs, anchor IDs, reduced-motion CSS |
| M5 | Subpages | metadata + JSON-LD + breadcrumbs across all routes |
| M6 | Perf | preload Fraunces, image cleanup, prefetch hints |
| M7 | A11y | focus-visible, skip-link, semantic landmarks, ARIA |
| M8 | i18n | hreflang correctness; locale routing left as separate spec (deferred) |

## Single source of truth — `lib/config/site.config.ts`

Holds every placeholder/replaceable value with `// REPLACE:` markers. All other modules import from this file. Legacy `lib/site.ts` becomes a thin re-export.

Top-level keys: `url`, `name`, `legalName`, `tagline`, `description`, `foundingYear`, `phone`, `phoneDigits`, `email`, `whatsapp`, `address` (with `geo`), `hours[]`, `gstin`, `cin`, `social{}`, `verification{}`, `rating{}`, `subsidy{}`, `ogImage`, `locales[]`, `defaultLocale`, `aiPolicy{}`.

## The 20 SEO improvements (target)

1. Unique `<title>` per page (≤60 chars, primary keyword + locality).
2. Unique `<meta description>` per page (140–160 chars).
3. Single H1 per page; section H2s.
4. Dynamic multi-locale `sitemap.ts` with `lastModified`, `changeFrequency`, `priority`, hreflang alternates.
5. `robots.ts` with explicit sitemap + AI crawler policy (`GPTBot`, `Google-Extended`, `ClaudeBot`, `PerplexityBot`, `CCBot`, `Applebot-Extended`).
6. Canonical + hreflang on every page.
7. Per-route OG images via Next opengraph-image generator.
8. Web App Manifest + full favicon set.
9. Visual + JSON-LD breadcrumbs on every non-home page.
10. `WebSite` JSON-LD with SearchAction.
11. `AggregateRating` + `Review` JSON-LD attached to LocalBusiness and Product.
12. `HowTo` JSON-LD on `/how-it-works` and home.
13. `Service` + `AreaServed` per district page.
14. `Speakable` markup on FAQs.
15. `Article` + `Person` + `BreadcrumbList` on each blog post.
16. `next/image` (where applicable) with alt + dimensions.
17. Internal linking pass in footer + inline.
18. Core Web Vitals: font preload, `font-display:swap`, reduced-motion media query.
19. NAP consistency + per-day `OpeningHoursSpecification` + map embed on /contact.
20. E-E-A-T: Person schema for team, dated blog posts, certifications listed.

## LLM/AI-search layer

- `/llms.txt` (curated link index), `/llms-full.txt` (long form), `/ai.txt` (policy).
- Plain-text alternates for hottest pages (`/packages.txt`, `/how-it-works.txt`, `/subsidy.txt`).
- Schema-dense JSON-LD on every page.
- Natural-question FAQ phrasing.
- Comparison tables in HTML (packages, subsidy slabs).

## JSON-LD coverage matrix

- Layout (every page): `Organization`, `WebSite` w/ SearchAction, `LocalBusiness`.
- `/`: `FAQPage`, `ItemList` (packages), `AggregateRating`, `HowTo`, `OfferCatalog`.
- `/about`: extended Organization + `Person[]` + `AboutPage`.
- `/how-it-works`: `HowTo` (full).
- `/packages` & `/packages/[slug]`: `Product` + `Offer` + `AggregateRating` + `Review[]`.
- `/calculator`: `WebApplication`.
- `/case-studies` & `/case-studies/[slug]`: `Article` + `Place` + numeric result.
- `/service-areas` & `/service-areas/[district]`: `Service` + `AreaServed` (City).
- `/subsidy`: `GovernmentService` + `FAQPage`.
- `/blog` & `/blog/[slug]`: `Blog` + `BlogPosting` + `Person` + `BreadcrumbList`.
- `/faq`: `FAQPage` + `Speakable`.
- `/contact`: `ContactPage` + `LocalBusiness` w/ `OpeningHoursSpecification[]`.
- `/thanks`: `noindex`.
- All non-home: `BreadcrumbList`.

## Typography token set

Added to `globals.css` as CSS custom properties (consumed in `@theme inline`):

```
--fs-display-1, --fs-display-2, --fs-display-3, --fs-h3, --fs-h4,
--fs-lead, --fs-body-lg, --fs-body, --fs-small, --fs-meta, --fs-micro
```

Sections refactored to use these instead of ad-hoc clamp values. Devanagari + Gurmukhi fallback fonts added.

## Home page reorder (17 → ~12 sections)

```
Hero → TrustMarquee → ProofInNumbers (CostShrink+LiveGen) → QuickCheck
→ Packages → Subsidy → Process (HowItWorks+Timeline) → SavingsStory
→ Gallery → Testimonials → Trust → LocalProof (PunjabPulse+Partners)
→ FAQ → FinalCTA
```

(Note: merges are conservative — sections remain separate components but render closer together. Full visual merge deferred to follow-up.)

## Acceptance

- Pages compile (`pnpm typecheck`, `pnpm build`).
- All routes return valid JSON-LD (manually validated against schema.org).
- Every page has unique title + meta description.
- `/llms.txt`, `/ai.txt`, `/manifest.webmanifest`, `/sitemap.xml`, `/robots.txt` are served.
- One file (`lib/config/site.config.ts`) updates → reflects everywhere.
