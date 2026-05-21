import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { PageHero } from "@/components/layout/page-hero"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Trust } from "@/components/sections/trust"
import { Partners } from "@/components/sections/partners"
import { FinalCTA } from "@/components/sections/final-cta"
import { Jsonld } from "@/components/primitives/jsonld"
import { aboutPageJsonLd } from "@/lib/jsonld"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "About Punjab Solar — Patiala installer, all-Punjab service",
  description:
    "Punjab Solar — a Patiala-based rooftop solar installer serving every district of Punjab since 2018. Engineers who pick up the phone. One written quote, with subsidy applied.",
  path: "/about/",
})

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <div className="container">
          <Breadcrumbs items={[{ name: "About", path: "/about/" }]} />
        </div>
        <PageHero
          eyebrow="About us"
          titleHtml="Patiala-built. Punjab-wide.<br/>A <em>Punjabi</em> installer."
          lead="We've been wiring panels onto roofs from Pathankot to Fazilka since 2018. We started small, in a single industrial unit on the outskirts of Patiala. Today we run six install crews, employ thirty-eight Punjabi-speaking engineers and linesmen, and have powered 1,247 rooftops across every district in the state."
        />
        <section className="tight">
          <div className="container">
            <div className="prose">
              <h2>Why we exist</h2>
              <p>
                Punjab&rsquo;s electricity tariffs have risen ~6% a year for a
                decade. Most installers in the state are call-centres reselling
                work to nameless subcontractors. We started Punjab Solar to do
                it differently: locally, transparently, with engineers who pick
                up the phone.
              </p>
              <h2>What we promise</h2>
              <p>
                One quote, in writing, with the subsidy locked in. Tier-1
                panels only. PM Surya Ghar paperwork filed for you. Power-on in
                21 days &mdash; or we pay your next month&rsquo;s bill.
              </p>
            </div>
          </div>
        </section>
        <Trust />
        <Partners />
        <FinalCTA />
      </main>
      <SiteFooter />
      <Jsonld data={aboutPageJsonLd()} />
    </>
  )
}
