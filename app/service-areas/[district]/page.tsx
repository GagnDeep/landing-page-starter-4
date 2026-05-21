import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { Hero } from "@/components/sections/hero"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { QuickCheck } from "@/components/sections/quick-check"
import { Packages } from "@/components/sections/packages"
import { Subsidy } from "@/components/sections/subsidy"
import { Testimonials } from "@/components/sections/testimonials"
import { FAQ } from "@/components/sections/faq"
import { FinalCTA } from "@/components/sections/final-cta"
import { Jsonld } from "@/components/primitives/jsonld"
import { districts, getDistrict } from "@/content/districts"
import { buildMetadata } from "@/lib/seo"
import { districtServiceJsonLd } from "@/lib/jsonld"
import { site } from "@/lib/config/site.config"

interface PageProps {
  params: Promise<{ district: string }>
}

export function generateStaticParams() {
  return districts.map((d) => ({ district: d.slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { district } = await params
  const d = getDistrict(district)
  if (!d) return {}
  return buildMetadata({
    title: `Rooftop solar in ${d.name}, Punjab — ${d.popularKw} kW installs`,
    description: `Rooftop solar designed, installed and serviced for ${d.name} homes. PM Surya Ghar subsidy filed, paperwork handled, ${d.sunHours}h average sun. Generating in 21 days.`,
    path: `/service-areas/${d.slug}/`,
  })
}

export default async function DistrictPage({ params }: PageProps) {
  const { district } = await params
  const d = getDistrict(district)
  if (!d) notFound()

  const titleHtml = `Solar in <em>${d.name}</em>,<br/>install in 21 days.`
  const lead =
    d.hero ??
    `Rooftop solar designed, installed and serviced for ${d.name} homes. Subsidy filed, paperwork handled, generating in 21 days.`

  return (
    <>
      <SiteHeader />
      <main id="main">
        <div className="container">
          <Breadcrumbs
            items={[
              { name: "Service areas", path: "/service-areas/" },
              { name: d.name, path: `/service-areas/${d.slug}/` },
            ]}
          />
        </div>
        <Hero
          defaultCity={d.name}
          titleHtml={titleHtml}
          metaLeft={`${d.name} · Punjab`}
          lead={lead}
        />
        <section className="tight">
          <div className="container">
            <div className="prose" style={{ maxWidth: "none" }}>
              <h2>Solar in {d.name} — by the numbers</h2>
              <ul>
                <li>
                  <strong>Average daily sun:</strong> {d.sunHours} hours
                </li>
                <li>
                  <strong>Typical residential bill:</strong> ₹
                  {d.avgBill.toLocaleString("en-IN")}/month
                </li>
                <li>
                  <strong>Most-installed system size:</strong> {d.popularKw} kW
                </li>
                <li>
                  <strong>PM Surya Ghar subsidy:</strong> up to ₹
                  {site.subsidy.max.toLocaleString("en-IN")} off
                </li>
              </ul>
            </div>
          </div>
        </section>
        <QuickCheck />
        <Packages />
        <Subsidy />
        <Testimonials filter={d.slug} />
        <FAQ />
        <FinalCTA />
      </main>
      <SiteFooter />
      <Jsonld data={districtServiceJsonLd(d)} />
    </>
  )
}
