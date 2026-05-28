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
import { site } from "@/lib/config/site.config"

export const metadata = buildMetadata({
  title: `About ${site.name} — ${site.address.locality} installer, all-${site.copy.regionName} service`,
  description: `${site.name} — a ${site.address.locality}-based rooftop solar installer serving every ${site.copy.districtWord} of ${site.copy.regionName} since ${site.foundingYear}. Designers who pick up the phone. One written quote, with ${site.incentive.short} modeled in.`,
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
          titleHtml={`${site.address.locality}-built. ${site.copy.regionName}-wide.<br/>A <em>local</em> installer.`}
          lead={`We've been wiring panels onto roofs across ${site.copy.regionName} since ${site.foundingYear}. We started small, in a single unit on the outskirts of ${site.address.locality}. Today we run multiple install crews, employ designers and electricians who live in the communities we serve, and have powered ${site.rating.count.toLocaleString(site.currency.locale)}+ rooftops across the state.`}
        />
        <section className="tight">
          <div className="container">
            <div className="prose">
              <h2>Why we exist</h2>
              <p>
                {site.copy.regionPossessive} electricity rates have risen
                steeply for years. Most installers are call-centres reselling
                work to nameless subcontractors. We started {site.name} to do
                it differently: locally, transparently, with designers who
                pick up the phone.
              </p>
              <h2>What we promise</h2>
              <p>
                One quote, in writing, with the incentive modeled in. Tier-1
                panels only. {site.incentive.short} paperwork filed for you.
                Power-on in {site.copy.installDays} &mdash; or we pay your next
                month&rsquo;s bill.
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
