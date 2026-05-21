import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { PageHero } from "@/components/layout/page-hero"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Timeline } from "@/components/sections/timeline"
import { Trust } from "@/components/sections/trust"
import { FAQ } from "@/components/sections/faq"
import { FinalCTA } from "@/components/sections/final-cta"
import { Jsonld } from "@/components/primitives/jsonld"
import { howToJsonLd } from "@/lib/jsonld"
import { steps } from "@/content/steps"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "How rooftop solar gets installed — 21-day process",
  description:
    "Day-by-day breakdown of our 21-day install. Site survey to power-on — every form, every wire, every inspection explained.",
  path: "/how-it-works/",
})

export default function HowItWorksPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <div className="container">
          <Breadcrumbs
            items={[{ name: "How it works", path: "/how-it-works/" }]}
          />
        </div>
        <PageHero
          eyebrow="How it works"
          titleHtml="From bill shock to <em>power-on</em><br/>in twenty-one days."
          lead="One team. Six steps. Every form, every wire, every inspection — handled."
        />
        <HowItWorks />
        <Timeline />
        <Trust />
        <FAQ />
        <FinalCTA />
      </main>
      <SiteFooter />
      <Jsonld data={howToJsonLd(steps)} />
    </>
  )
}
