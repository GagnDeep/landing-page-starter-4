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

export const metadata = buildMetadata({
  title: "PM Surya Ghar subsidy — up to ₹78,000 off",
  description:
    "How the central PM Surya Ghar Muft Bijli Yojana works for Punjab homeowners. We file every form — National Portal, DISCOM, post-install claim — so the subsidy lands in your bank.",
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
          <Breadcrumbs items={[{ name: "Subsidy", path: "/subsidy/" }]} />
        </div>
        <PageHero
          eyebrow="PM Surya Ghar Yojana"
          titleHtml="Up to <em>₹78,000</em> off<br/>your install."
          lead="The central government pays you to go solar. We file the claim on your behalf — you don't touch a form."
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
