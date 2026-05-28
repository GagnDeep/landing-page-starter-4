import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { PageHero } from "@/components/layout/page-hero"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { FAQ } from "@/components/sections/faq"
import { FinalCTA } from "@/components/sections/final-cta"
import { Jsonld } from "@/components/primitives/jsonld"
import { faqJsonLd } from "@/lib/jsonld"
import { faqs } from "@/content/faqs"
import { buildMetadata } from "@/lib/seo"
import { site } from "@/lib/config/site.config"

export const metadata = buildMetadata({
  title: `Frequently asked questions — rooftop solar in ${site.copy.regionName}`,
  description: `Honest answers to the questions ${site.copy.regionName} homeowners ask before going solar — install time, shading, incentives, outages, resale, financing.`,
  path: "/faq/",
})

export default function FAQPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <div className="container">
          <Breadcrumbs items={[{ name: "FAQ", path: "/faq/" }]} />
        </div>
        <PageHero
          eyebrow="FAQ"
          titleHtml="Things people<br/><em>actually</em> ask."
          lead="If your question isn't here, text us — a real human, not a bot, replies within an hour."
        />
        <FAQ />
        <FinalCTA />
      </main>
      <SiteFooter />
      <Jsonld data={faqJsonLd(faqs)} />
    </>
  )
}
