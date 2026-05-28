import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { PageHero } from "@/components/layout/page-hero"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Subsidy } from "@/components/sections/subsidy"
import { Timeline } from "@/components/sections/timeline"
import { FAQ } from "@/components/sections/faq"
import { FinalCTA } from "@/components/sections/final-cta"
import { Jsonld } from "@/components/primitives/jsonld"
import { faqJsonLd, govServiceJsonLd } from "@/lib/jsonld"
import { faqs } from "@/content/faqs"
import { buildMetadata } from "@/lib/seo"
import { site } from "@/lib/config/site.config"

export const metadata = buildMetadata({
  title: `${site.incentive.program} — ${site.incentive.short}`,
  description: `How the ${site.incentive.program} works for ${site.copy.regionName} homeowners. We file every form so the incentive applies cleanly.`,
  path: "/subsidy/",
})

export default function SubsidyPage() {
  const subsidyFaqs = faqs.filter((f) => f.category === "subsidy")
  const useFaqs = subsidyFaqs.length ? subsidyFaqs : faqs
  return (
    <>
      <SiteHeader />
      <main id="main">
        <div className="container">
          <Breadcrumbs items={[{ name: "Incentive", path: "/subsidy/" }]} />
        </div>
        <PageHero
          eyebrow={site.incentive.program}
          titleHtml={`<em>${site.incentive.short}</em><br/>off your install.`}
          lead={site.incentive.long}
        />
        <Subsidy />
        <Timeline />
        <FAQ items={useFaqs} />
        <FinalCTA />
      </main>
      <SiteFooter />
      <Jsonld data={[govServiceJsonLd(), faqJsonLd(useFaqs)]} />
    </>
  )
}
