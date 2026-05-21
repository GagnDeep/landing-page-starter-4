import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { PageHero } from "@/components/layout/page-hero"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Packages } from "@/components/sections/packages"
import { SavingsStory } from "@/components/sections/savings-story"
import { FAQ } from "@/components/sections/faq"
import { FinalCTA } from "@/components/sections/final-cta"
import { Jsonld } from "@/components/primitives/jsonld"
import { packageItemListJsonLd } from "@/lib/jsonld"
import { tiers } from "@/content/packages"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Solar packages — 3 kW, 5 kW, 8 kW hybrid",
  description:
    "Three rooftop solar packages for Punjab homes. Essential 3 kW, Premium 5 kW bifacial, Hybrid 8 kW with battery backup. Tier-1 components only. Subsidy already applied.",
  path: "/packages/",
})

export default function PackagesPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <div className="container">
          <Breadcrumbs items={[{ name: "Packages", path: "/packages/" }]} />
        </div>
        <PageHero
          eyebrow="Packages"
          titleHtml="Skip the math —<br/>pick a <em>package</em>."
          lead="Three sizes that fit 90% of Punjab homes. Tier-1 components only. Subsidy already applied."
        />
        <Packages />
        <SavingsStory />
        <FAQ />
        <FinalCTA />
      </main>
      <SiteFooter />
      <Jsonld data={packageItemListJsonLd(tiers)} />
    </>
  )
}
