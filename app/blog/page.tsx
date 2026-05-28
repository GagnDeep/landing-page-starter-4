import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { PageHero } from "@/components/layout/page-hero"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Jsonld } from "@/components/primitives/jsonld"
import { plainText } from "@/components/blog/parse-body"
import { posts } from "@/content/posts"
import { buildMetadata } from "@/lib/seo"
import { site, absUrl } from "@/lib/config/site.config"

export const metadata = buildMetadata({
  title: `${site.name} Journal — incentive guides & install notes`,
  description: `Notes on rooftop solar in ${site.copy.regionName}. ${site.incentive.program} walkthroughs, interconnection, battery decisions, tariff math — by the people doing the installs.`,
  path: "/blog/",
})

function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00")
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

function readingMinutes(body: string) {
  const words = plainText(body).split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(words / 220))
}

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1))
  const featured = sorted.find((p) => p.featured) ?? sorted[0]
  const rest = sorted.filter((p) => p.slug !== featured?.slug)

  const blogLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${site.name} Journal`,
    url: absUrl("/blog/"),
    publisher: { "@type": "Organization", name: site.name },
    blogPost: sorted.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.excerpt,
      datePublished: p.date,
      dateModified: p.updated ?? p.date,
      author: { "@type": "Organization", name: p.author },
      url: absUrl(`/blog/${p.slug}/`),
      image: absUrl(p.image ?? site.ogImage),
      ...(p.keywords?.length ? { keywords: p.keywords.join(", ") } : {}),
      ...(p.category ? { articleSection: p.category } : {}),
      wordCount: plainText(p.body).split(/\s+/).filter(Boolean).length,
    })),
  }

  return (
    <>
      <SiteHeader />
      <main id="main">
        <div className="container">
          <Breadcrumbs items={[{ name: "Journal", path: "/blog/" }]} />
        </div>
        <PageHero
          eyebrow={`Journal · ${posts.length} articles`}
          titleHtml={`The ${site.name}<br/><em>Journal</em>.`}
          lead="Long-form notes from our installs — federal tax credit walk-throughs, NEM 3.0 economics, battery payback math, and the boring-but-important details that decide whether your install pays back in 4 years or 8."
        />

        {featured && (
          <section className="tight">
            <div className="container">
              <article className="blog-featured">
                <Link
                  href={`/blog/${featured.slug}/`}
                  className="blog-featured-link"
                >
                  <div className="blog-featured-image">
                    {featured.image ? (
                      <Image
                        src={featured.image}
                        alt={featured.title}
                        width={1400}
                        height={900}
                        priority
                      />
                    ) : (
                      <div className="blog-featured-placeholder" aria-hidden="true" />
                    )}
                  </div>
                  <div className="blog-featured-body">
                    <span className="blog-featured-pill mono">
                      ★ Featured · {featured.category ?? "Article"}
                    </span>
                    <h2 className="blog-featured-title serif">
                      {featured.title}
                    </h2>
                    <p className="blog-featured-excerpt">{featured.excerpt}</p>
                    <p className="blog-featured-meta mono">
                      {formatDate(featured.date)} · {readingMinutes(featured.body)} min read · by {featured.author}
                    </p>
                    <span className="blog-featured-cta mono">
                      Read article <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              </article>
            </div>
          </section>
        )}

        <section className="tight" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="blog-grid-head">
              <h2 className="blog-grid-title serif">Latest from the field</h2>
              <p className="blog-grid-sub mono">
                {rest.length} more articles
              </p>
            </div>

            <ul className="blog-card-grid" role="list">
              {rest.map((p) => (
                <li key={p.slug} className="blog-card-wrap">
                  <Link href={`/blog/${p.slug}/`} className="blog-card">
                    <div className="blog-card-image">
                      {p.image ? (
                        <Image
                          src={p.image}
                          alt={p.title}
                          width={720}
                          height={540}
                        />
                      ) : (
                        <div
                          className="blog-card-placeholder"
                          aria-hidden="true"
                        />
                      )}
                      {p.category && (
                        <span className="blog-card-badge mono">
                          {p.category}
                        </span>
                      )}
                    </div>
                    <div className="blog-card-body">
                      <p className="blog-card-meta mono">
                        {formatDate(p.date)} · {readingMinutes(p.body)} min
                      </p>
                      <h3 className="blog-card-title serif">{p.title}</h3>
                      <p className="blog-card-excerpt">{p.excerpt}</p>
                      <span className="blog-card-cta mono">
                        Read <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
      <Jsonld data={blogLd} />
    </>
  )
}
