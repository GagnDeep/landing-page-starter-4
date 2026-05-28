import Link from "next/link"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { PageHero } from "@/components/layout/page-hero"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { PunjabPulse } from "@/components/sections/punjab-pulse"
import { FinalCTA } from "@/components/sections/final-cta"
import { Jsonld } from "@/components/primitives/jsonld"
import { districts } from "@/content/districts"
import { buildMetadata } from "@/lib/seo"
import { site, absUrl } from "@/lib/config/site.config"

export const metadata = buildMetadata({
  title: `${site.copy.regionName} service areas — ${districts.length} ${site.copy.districtWordPlural} covered`,
  description: `Active rooftop solar installation crews across ${districts.length} ${site.copy.districtWordPlural} of ${site.copy.regionName}. Pick your ${site.copy.districtWord} below.`,
  path: "/service-areas/",
})

export default function ServiceAreasPage() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${site.name} — service areas`,
    numberOfItems: districts.length,
    itemListElement: districts.map((d, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absUrl(`/service-areas/${d.slug}/`),
      name: d.name,
    })),
  }
  return (
    <>
      <SiteHeader />
      <main id="main">
        <div className="container">
          <Breadcrumbs items={[{ name: "Service areas", path: "/service-areas/" }]} />
        </div>
        <PageHero
          eyebrow="Coverage"
          titleHtml={`Active in<br/><em>${districts.length} ${site.copy.districtWordPlural}</em>.`}
          lead={`Click any ${site.copy.districtWord} to see local pricing, payback, and a sample install.`}
        />
        <section className="tight">
          <div className="container">
            <div className="cities-grid">
              {districts.map((d) => (
                <Link
                  key={d.slug}
                  href={`/service-areas/${d.slug}/`}
                  className="city-cell"
                >
                  <span className="serif">{d.name}</span>
                  <span className="mono dot-tag">
                    <span className="dot" />
                    active
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <PunjabPulse />
        <FinalCTA />
      </main>
      <SiteFooter />
      <Jsonld data={ld} />
    </>
  )
}
