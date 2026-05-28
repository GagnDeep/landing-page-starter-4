import { Suspense } from "react"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { PageHero } from "@/components/layout/page-hero"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { CalculatorFlow } from "@/components/calculator/calculator-flow"
import { FAQ } from "@/components/sections/faq"
import { FinalCTA } from "@/components/sections/final-cta"
import { Jsonld } from "@/components/primitives/jsonld"
import { webApplicationJsonLd } from "@/lib/jsonld"
import { faqs } from "@/content/faqs"
import { buildMetadata } from "@/lib/seo"
import { useTranslations } from "next-intl"
import { site } from "@/lib/config/site.config"

export const metadata = buildMetadata({
  title: `Solar savings calculator — bill, ${site.incentive.type === "ITC" ? "tax credit" : "incentive"}, payback`,
  description: `Estimate your rooftop solar savings in ${site.copy.regionName} in 2 minutes. Bills, ${site.incentive.short}, financing and payback period — calculated instantly.`,
  path: "/calculator/",
})

function PageContent() {
  const t = useTranslations("pages.calculator")
  const calcFaqs = faqs.filter(
    (f) => f.category === "calc" || f.category === "subsidy",
  )
  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ name: "Calculator", path: "/calculator/" }]} />
      </div>
      <PageHero
        eyebrow="Calculator"
        titleHtml="Your solar <em>savings</em>, in 2 minutes."
        lead={t("description")}
      />
      <section className="tight">
        <div className="container">
          <Suspense fallback={null}>
            <CalculatorFlow variant="inline" />
          </Suspense>
        </div>
      </section>
      <FAQ items={calcFaqs} />
      <FinalCTA />
    </>
  )
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <PageContent />
      </main>
      <SiteFooter />
      <Jsonld data={webApplicationJsonLd()} />
    </>
  )
}
