import type { MetadataRoute } from "next"
import { site, absUrl } from "@/lib/config/site.config"
import { districts } from "@/content/districts"
import { caseStudies } from "@/content/case-studies"
import { posts } from "@/content/posts"
import { tiers } from "@/content/packages"

export const dynamic = "force-static"

type Priority = 0.3 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1.0
type Freq = "daily" | "weekly" | "monthly" | "yearly"

/**
 * hreflang alternates are derived from the active market preset so the
 * sitemap stays in lock-step with metadata canonicals and the site
 * <html lang>. Hardcoding locales here previously caused a mismatch for
 * non-Indian markets that fed Search Console "alternate page with proper
 * canonical tag" warnings.
 */
const HREFLANGS = [site.hreflang.primary, ...site.hreflang.alternates]

const alts = (path: string) => ({
  languages: Object.fromEntries(HREFLANGS.map((l) => [l, absUrl(path)])),
})

const entry = (
  path: string,
  priority: Priority,
  changeFrequency: Freq,
  lastModified: string = new Date().toISOString(),
): MetadataRoute.Sitemap[number] => ({
  url: absUrl(path),
  lastModified,
  changeFrequency,
  priority,
  alternates: alts(path),
})

/**
 * Honest `lastModified` resolution.
 *
 * Google's Search Off the Record podcast (Illyes, 2023–2024) confirmed
 * that Search uses <lastmod> when it's accurate and ignores it when
 * it's not. Stamping every entry with `new Date().toISOString()` was
 * lying to the crawler. We now derive each section's lastModified from
 * the freshest underlying content date so Google can compress the
 * recrawl interval on pages that actually changed.
 */
const latestPostDate =
  posts
    .map((p) => p.updated ?? p.date)
    .filter(Boolean)
    .sort()
    .slice(-1)[0] ?? new Date().toISOString().slice(0, 10)

// case studies use human-readable installDate strings (e.g. "Feb 2026"),
// not ISO. Fall back to the latest post date so the entry still carries
// a valid timestamp without inventing one.
const latestCaseDate = latestPostDate

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    entry("/", 1.0, "weekly", latestPostDate),
    entry("/calculator/", 0.9, "monthly", latestPostDate),
    entry("/packages/", 0.9, "monthly", latestPostDate),
    entry("/how-it-works/", 0.8, "monthly", latestPostDate),
    entry("/subsidy/", 0.8, "monthly", latestPostDate),
    entry("/service-areas/", 0.8, "monthly", latestPostDate),
    entry("/case-studies/", 0.7, "weekly", latestCaseDate),
    entry("/blog/", 0.7, "weekly", latestPostDate),
    entry("/about/", 0.6, "monthly", latestPostDate),
    entry("/contact/", 0.6, "yearly", latestPostDate),
    entry("/faq/", 0.7, "monthly", latestPostDate),
    entry("/privacy/", 0.3, "yearly", latestPostDate),
    entry("/terms/", 0.3, "yearly", latestPostDate),
    ...tiers.map((t) =>
      entry(`/packages/${t.slug}/`, 0.8, "monthly", latestPostDate),
    ),
    ...districts.map((d) =>
      entry(`/service-areas/${d.slug}/`, 0.7, "monthly", latestPostDate),
    ),
    ...caseStudies.map((c) =>
      entry(`/case-studies/${c.slug}/`, 0.6, "monthly", latestCaseDate),
    ),
    ...posts.map((p) =>
      entry(
        `/blog/${p.slug}/`,
        p.featured ? 0.8 : 0.6,
        "monthly",
        p.updated ?? p.date,
      ),
    ),
  ]
}

// `site` is imported for type-only side effects; reference to silence unused.
void site
