import type { MetadataRoute } from "next"
import { site, absUrl } from "@/lib/config/site.config"
import { districts } from "@/content/districts"
import { caseStudies } from "@/content/case-studies"
import { posts } from "@/content/posts"
import { tiers } from "@/content/packages"

export const dynamic = "force-static"

type Priority = 0.3 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1.0
type Freq = "daily" | "weekly" | "monthly" | "yearly"

const alts = (path: string) => ({
  languages: {
    "en-IN": absUrl(path),
    "hi-IN": absUrl(path),
    "pa-IN": absUrl(path),
    "x-default": absUrl(path),
  },
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

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    entry("/", 1.0, "weekly"),
    entry("/calculator/", 0.9, "monthly"),
    entry("/packages/", 0.9, "monthly"),
    entry("/how-it-works/", 0.8, "monthly"),
    entry("/subsidy/", 0.8, "monthly"),
    entry("/service-areas/", 0.8, "monthly"),
    entry("/case-studies/", 0.7, "weekly"),
    entry("/blog/", 0.7, "weekly"),
    entry("/about/", 0.6, "monthly"),
    entry("/contact/", 0.6, "yearly"),
    entry("/faq/", 0.7, "monthly"),
    entry("/privacy/", 0.3, "yearly"),
    entry("/terms/", 0.3, "yearly"),
    ...tiers.map((t) => entry(`/packages/${t.slug}/`, 0.8, "monthly")),
    ...districts.map((d) =>
      entry(`/service-areas/${d.slug}/`, 0.7, "monthly"),
    ),
    ...caseStudies.map((c) =>
      entry(`/case-studies/${c.slug}/`, 0.6, "monthly"),
    ),
    ...posts.map((p) =>
      entry(`/blog/${p.slug}/`, 0.6, "monthly", p.date),
    ),
  ]
}

// `site` is imported for type-only side effects; reference to silence unused.
void site
