import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { PageHero } from "@/components/layout/page-hero"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { FinalCTA } from "@/components/sections/final-cta"
import { Jsonld } from "@/components/primitives/jsonld"
import { caseStudies, getCaseStudy } from "@/content/case-studies"
import { buildMetadata } from "@/lib/seo"
import { caseStudyJsonLd } from "@/lib/jsonld"
import { formatMoney } from "@/lib/format"

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const c = getCaseStudy(slug)
  if (!c) return {}
  return buildMetadata({
    title: `${c.title} — ${c.systemKw} kW in ${c.district}`,
    description: `${c.subtitle}. Bill before ${formatMoney(c.beforeBill)}, after ${formatMoney(c.afterBill)}. Installed ${c.installDate}.`,
    path: `/case-studies/${c.slug}/`,
    type: "article",
    publishedTime: c.installDate,
  })
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const c = getCaseStudy(slug)
  if (!c) notFound()

  return (
    <>
      <SiteHeader />
      <main id="main">
        <div className="container">
          <Breadcrumbs
            items={[
              { name: "Case studies", path: "/case-studies/" },
              { name: c.title, path: `/case-studies/${c.slug}/` },
            ]}
          />
        </div>
        <PageHero
          eyebrow={`${c.district} · ${c.systemKw} kW · ${c.installDate}`}
          titleHtml={c.title}
          lead={c.subtitle}
        />
        <section className="tight">
          <div className="container prose">
            <p>{c.body}</p>
            <h2>Headline numbers</h2>
            <ul>
              <li>
                <strong>Bill before solar:</strong> {formatMoney(c.beforeBill)}
              </li>
              <li>
                <strong>Bill after solar:</strong> {formatMoney(c.afterBill)}
              </li>
              <li>
                <strong>System size:</strong> {c.systemKw} kW
              </li>
              <li>
                <strong>Install date:</strong> {c.installDate}
              </li>
              <li>
                <strong>Category:</strong> {c.category}
              </li>
            </ul>
          </div>
        </section>
        <FinalCTA />
      </main>
      <SiteFooter />
      <Jsonld data={caseStudyJsonLd(c)} />
    </>
  )
}
