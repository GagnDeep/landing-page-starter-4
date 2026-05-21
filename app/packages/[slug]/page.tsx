import { notFound } from "next/navigation"
import Link from "next/link"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { PageHero } from "@/components/layout/page-hero"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { FAQ } from "@/components/sections/faq"
import { FinalCTA } from "@/components/sections/final-cta"
import { Jsonld } from "@/components/primitives/jsonld"
import { productJsonLd } from "@/lib/jsonld"
import { tiers } from "@/content/packages"
import { buildMetadata } from "@/lib/seo"
import { site } from "@/lib/config/site.config"

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return tiers.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const p = tiers.find((t) => t.slug === slug)
  if (!p) return {}
  return buildMetadata({
    title: `${p.name} — rooftop solar package`,
    description: `${p.name}: ${p.sub}. ${p.panels}, ${p.inverter}. ${p.price} after PM Surya Ghar subsidy. Installed in ${p.installTime}.`,
    path: `/packages/${p.slug}/`,
  })
}

export default async function PackagePage({ params }: PageProps) {
  const { slug } = await params
  const p = tiers.find((t) => t.slug === slug)
  if (!p) notFound()

  return (
    <>
      <SiteHeader />
      <main id="main">
        <div className="container">
          <Breadcrumbs
            items={[
              { name: "Packages", path: "/packages/" },
              { name: p.name, path: `/packages/${p.slug}/` },
            ]}
          />
        </div>
        <PageHero
          eyebrow={p.badge}
          titleHtml={p.name}
          lead={p.sub}
        />
        <section className="tight">
          <div className="container prose">
            <h2>What's in the box</h2>
            <ul>
              <li>
                <strong>Panels:</strong> {p.panels}
              </li>
              <li>
                <strong>Inverter:</strong> {p.inverter}
              </li>
              <li>
                <strong>Warranty:</strong> {p.warranty}
              </li>
              <li>
                <strong>Install time:</strong> {p.installTime}
              </li>
            </ul>
            <h2>Pricing</h2>
            <p>
              <strong>{p.price}</strong>{" "}
              <span style={{ textDecoration: "line-through", opacity: 0.5 }}>
                {p.strike}
              </span>
              <br />
              <em>{p.badge}</em>
            </p>
            <h2>Why this size</h2>
            <p>
              We sized this package around the most common Punjab home
              electricity bills. {p.sub} typically have a payback period of 3
              to 5 years, with {site.subsidy.program} bringing the upfront
              cost down by up to ₹
              {site.subsidy.max.toLocaleString("en-IN")}.
            </p>
            <p style={{ marginTop: 32 }}>
              <Link href="/calculator/" className="btn btn-primary">
                Book a free site survey
              </Link>
            </p>
          </div>
        </section>
        <FAQ />
        <FinalCTA />
      </main>
      <SiteFooter />
      <Jsonld data={productJsonLd(p)} />
    </>
  )
}
