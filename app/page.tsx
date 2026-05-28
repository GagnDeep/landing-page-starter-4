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
  title: `Rooftop solar in ${site.address.locality}, all ${site.copy.regionName}`,
  description: site.description,
  path: "/",
})

/**
 * Each child section already paints its own padding (`.cshrink`, `.livegen`
 * etc.) — wrapping them in a `<section>` would double-stack the spacing.
 * We use anchor `<div>` wrappers instead so the page still has stable
 * `#hash` deep-links and aria-labels without the extra padding-block.
 */
export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <SiteHeader />
      <main id="main">
        <Hero />
        <TrustMarquee />

        <div id="proof" role="region" aria-label="Savings and live generation">
          <CostShrink />
          <LiveGeneration />
        </div>

        <div id="quick-check" role="region" aria-label="Quick check quiz">
          <QuickCheck />
        </div>

        <div id="packages" role="region" aria-label="Solar packages">
          <Packages />
        </div>

        <div id="subsidy" role="region" aria-label="Incentive">
          <Subsidy />
        </div>

        <div id="how-it-works" role="region" aria-label="How it works">
          <HowItWorks />
          <Timeline />
        </div>

        <div id="savings" role="region" aria-label="Customer savings stories">
          <SavingsStory />
        </div>

        <div id="gallery" role="region" aria-label="Install gallery">
          <Gallery />
        </div>

        <div id="testimonials" role="region" aria-label="Customer testimonials">
          <Testimonials />
        </div>

        <div id="trust" role="region" aria-label="Why customers trust us">
          <Trust />
        </div>

        <div id="local-proof" role="region" aria-label="Local presence">
          <PunjabPulse />
          <Partners />
        </div>

        <div id="faq" role="region" aria-label="Frequently asked questions">
          <FAQ />
        </div>

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
