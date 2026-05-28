import Link from "next/link"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { PageHero } from "@/components/layout/page-hero"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { FinalCTA } from "@/components/sections/final-cta"
import { Jsonld } from "@/components/primitives/jsonld"
import { caseStudies } from "@/content/case-studies"
import { buildMetadata } from "@/lib/seo"
import { site, absUrl } from "@/lib/config/site.config"

export const metadata = buildMetadata({
  title: `Case studies — real ${site.copy.regionName} solar installs`,
  description: `Real rooftop solar installs across ${site.copy.regionName} — bill before, bill after, payback period and system specs that made it possible.`,
  path: "/case-studies/",
})

export default function CaseStudiesPage() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${site.name} — case studies`,
    itemListElement: caseStudies.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absUrl(`/case-studies/${c.slug}/`),
      name: c.title,
    })),
  }
  return (
    <>
      <SiteHeader />
      <main id="main">
        <div className="container">
          <Breadcrumbs items={[{ name: "Case studies", path: "/case-studies/" }]} />
        </div>
        <PageHero
          eyebrow="Case studies"
          titleHtml="Real bills.<br/>Real <em>savings</em>."
          lead={`A handful of recent installs across ${site.copy.regionName} — with the numbers our customers actually see on their bills.`}
        />
        <section className="tight">
          <div className="container">
            <div className="reasons-grid">
              {caseStudies.map((c) => (
                <Link
                  key={c.slug}
                  href={`/case-studies/${c.slug}/`}
                  className="reason"
                >
                  <div className="reason-num mono">
                    {c.district.toUpperCase()} · {c.systemKw} kW
                  </div>
                  <h2
                    className="serif"
                    style={{
                      fontSize: "var(--fs-h4)",
                      margin: "0 0 14px",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.15,
                      fontWeight: 400,
                    }}
                  >
                    {c.title}
                  </h2>
                  <p>{c.subtitle}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <FinalCTA />
      </main>
      <SiteFooter />
      <Jsonld data={ld} />
    </>
  )
}
