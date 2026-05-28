import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { PageHero } from "@/components/layout/page-hero"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { buildMetadata } from "@/lib/seo"
import { site } from "@/lib/config/site.config"

export const metadata = buildMetadata({
  title: "Terms of use",
  description: `Terms governing this website, the savings calculator and any quote issued by ${site.name}.`,
  path: "/terms/",
})

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <div className="container">
          <Breadcrumbs items={[{ name: "Terms", path: "/terms/" }]} />
        </div>
        <PageHero
          eyebrow="Terms"
          titleHtml="The boring <em>fine print</em>."
          lead="A short summary of how this site, the calculator, and any quote we issue work."
        />
        <section className="tight">
          <div className="container prose">
            <p
              className="mono"
              style={{
                fontSize: 11,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                opacity: 0.6,
              }}
            >
              Last updated: 2026-05-21
            </p>
            <h2>The calculator</h2>
            <p>
              Numbers shown by our online calculator are indicative. They use
              {" "}{site.copy.regionName} averages for tariff, generation and the
              {" "}{site.incentive.program}. Your final, binding quote is
              issued only after a free site visit.
            </p>
            <h2>The {site.copy.installDays} promise</h2>
            <p>
              We commit to power-on within {site.copy.installDays} of permit +
              utility interconnection acceptance. Force-majeure delays
              (inspector backlogs, weather events) extend that window.
              Otherwise, we pay your next month&rsquo;s bill &mdash; written
              into every contract.
            </p>
            <h2>The site</h2>
            <p>
              Content is provided as-is and may change without notice.
              Trademarks of partner brands belong to their owners.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
