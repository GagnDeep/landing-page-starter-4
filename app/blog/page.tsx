import Link from "next/link"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { PageHero } from "@/components/layout/page-hero"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Jsonld } from "@/components/primitives/jsonld"
import { posts } from "@/content/posts"
import { buildMetadata } from "@/lib/seo"
import { site, absUrl } from "@/lib/config/site.config"

export const metadata = buildMetadata({
  title: "Punjab Solar Journal — subsidy guides & install notes",
  description:
    "Notes on rooftop solar in Punjab. PM Surya Ghar walkthroughs, monsoon performance, net-metering, battery decisions, tariff math — by the people doing the installs.",
  path: "/blog/",
})

export default function BlogPage() {
  const blogLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${site.name} Journal`,
    url: absUrl("/blog/"),
    publisher: { "@type": "Organization", name: site.name },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.excerpt,
      datePublished: p.date,
      author: { "@type": "Organization", name: p.author },
      url: absUrl(`/blog/${p.slug}/`),
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
          eyebrow="Journal"
          titleHtml="The Punjab Solar<br/><em>Journal</em>."
          lead="Notes from our installs, subsidy walkthroughs, and the boring-but-important details that decide whether your install pays back in 4 years or 8."
        />
        <section className="tight">
          <div className="container">
            <ol className="faq-list" style={{ listStyle: "none", padding: 0 }}>
              {posts.map((p) => (
                <li className="faq-item" key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}/`}
                    className="faq-summary"
                    style={{ display: "flex" }}
                  >
                    <span className="faq-num mono">
                      {p.date.split("-")[1]}.{p.date.split("-")[0]}
                    </span>
                    <span className="serif faq-q">{p.title}</span>
                    <span className="faq-toggle" aria-hidden="true">
                      →
                    </span>
                  </Link>
                  <p className="faq-a" style={{ maxHeight: "none" }}>
                    {p.excerpt}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>
      <SiteFooter />
      <Jsonld data={blogLd} />
    </>
  )
}
