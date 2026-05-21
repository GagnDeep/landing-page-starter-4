import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { Hero } from "@/components/sections/hero"
import { TrustMarquee } from "@/components/sections/trust-marquee"
import { CostShrink } from "@/components/sections/cost-shrink"
import { QuickCheck } from "@/components/sections/quick-check"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Timeline } from "@/components/sections/timeline"
import { LiveGeneration } from "@/components/sections/live-generation"
import { Packages } from "@/components/sections/packages"
import { Partners } from "@/components/sections/partners"
import { SavingsStory } from "@/components/sections/savings-story"
import { Trust } from "@/components/sections/trust"
import { Gallery } from "@/components/sections/gallery"
import { Testimonials } from "@/components/sections/testimonials"
import { Subsidy } from "@/components/sections/subsidy"
import { PunjabPulse } from "@/components/sections/punjab-pulse"
import { FAQ } from "@/components/sections/faq"
import { FinalCTA } from "@/components/sections/final-cta"
import { StickyCta } from "@/components/layout/sticky-cta"
import { ScrollProgress } from "@/components/layout/scroll-progress"
import { Jsonld } from "@/components/primitives/jsonld"
import { buildMetadata } from "@/lib/seo"
import {
  faqJsonLd,
  packageItemListJsonLd,
  howToJsonLd,
} from "@/lib/jsonld"
import { faqs } from "@/content/faqs"
import { tiers } from "@/content/packages"
import { steps } from "@/content/steps"
import { site } from "@/lib/config/site.config"

export const metadata = buildMetadata({
  title: `Rooftop solar in ${site.address.locality}, all Punjab`,
  description: site.description,
  path: "/",
})

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <SiteHeader />
      <main id="main">
        {/* Capture intent */}
        <Hero />
        <TrustMarquee />

        {/* Proof in numbers — savings + live generation */}
        <section id="proof" aria-label="Savings and live generation">
          <CostShrink />
          <LiveGeneration />
        </section>

        {/* Engagement: 30-second qualifier */}
        <section id="quick-check" aria-label="Quick check quiz">
          <QuickCheck />
        </section>

        {/* Pricing first — visitors want price */}
        <section id="packages" aria-label="Solar packages">
          <Packages />
        </section>

        {/* Financial reassurance after price */}
        <section id="subsidy" aria-label="Subsidy">
          <Subsidy />
        </section>

        {/* Process clarity */}
        <section id="how-it-works" aria-label="How it works">
          <HowItWorks />
          <Timeline />
        </section>

        {/* Outcome story */}
        <section id="savings" aria-label="Customer savings stories">
          <SavingsStory />
        </section>

        {/* Visual + social proof */}
        <section id="gallery" aria-label="Install gallery">
          <Gallery />
        </section>
        <section id="testimonials" aria-label="Customer testimonials">
          <Testimonials />
        </section>

        {/* Final objection handling */}
        <section id="trust" aria-label="Why customers trust us">
          <Trust />
        </section>
        <section id="local-proof" aria-label="Local presence in Punjab">
          <PunjabPulse />
          <Partners />
        </section>

        {/* Last questions, then the ask */}
        <section id="faq" aria-label="Frequently asked questions">
          <FAQ />
        </section>
        <FinalCTA />
      </main>
      <SiteFooter />
      <StickyCta />
      <Jsonld
        data={[
          faqJsonLd(faqs.map((f) => ({ q: f.q, a: f.a }))),
          packageItemListJsonLd(tiers),
          howToJsonLd(steps),
        ]}
      />
    </>
  )
}
