import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { PageHero } from "@/components/layout/page-hero"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { buildMetadata } from "@/lib/seo"
import { site } from "@/lib/config/site.config"

export const metadata = buildMetadata({
  title: "Privacy policy",
  description: `How ${site.name} collects, uses and stores your information. Plain language, no tracking, no surprises.`,
  path: "/privacy/",
})

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <div className="container">
          <Breadcrumbs items={[{ name: "Privacy", path: "/privacy/" }]} />
        </div>
        <PageHero
          eyebrow="Privacy"
          titleHtml="Your data, <em>handled with care</em>."
          lead="A short, plain-language summary of what we collect, why, and how to ask us to forget you."
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
            <h2>What we collect</h2>
            <p>
              When you book a site visit we collect your name, mobile number,
              address and preferred slot. That&rsquo;s it. We do not run
              advertising trackers across this site.
            </p>
            <h2>What we use it for</h2>
            <p>
              Site-visit scheduling, permit + interconnection filings, and (if
              you become a customer) install scheduling and after-sales
              service.
            </p>
            <h2>Who sees it</h2>
            <p>
              Our internal team in {site.address.locality}. Your utility (
              {site.copy.utilityShort}) and the local building department —
              only the fields they require for your interconnection and
              permits. We never sell your data.
            </p>
            <h2>How long we keep it</h2>
            <p>
              For active customers, the lifetime of your warranty. For
              non-customers, twelve months unless you ask us to delete sooner.
            </p>
            <h2>Asking us to forget</h2>
            <p>
              Email <a href={`mailto:${site.email}`}>{site.email}</a> and
              we&rsquo;ll wipe your record within seven working days.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
