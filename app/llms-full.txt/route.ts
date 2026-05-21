/**
 * /llms-full.txt — long-form site index for LLMs. Includes summaries
 * of every meaningful page so an LLM can ingest the whole site in
 * one HTTP request.
 */
import { site, absUrl } from "@/lib/config/site.config"
import { tiers } from "@/content/packages"
import { districts } from "@/content/districts"
import { posts } from "@/content/posts"
import { caseStudies } from "@/content/case-studies"
import { faqs } from "@/content/faqs"
import { steps } from "@/content/steps"

export const dynamic = "force-static"

export async function GET() {
  const out: string[] = []
  const push = (s = "") => out.push(s)

  push(`# ${site.name} — full site dossier`)
  push()
  push(`Site: ${site.url}`)
  push(`Email: ${site.email}`)
  push(`Phone: ${site.phone}`)
  push(`Address: ${site.address.street}, ${site.address.locality}, ${site.address.region} ${site.address.postalCode}, ${site.address.countryName}`)
  push(`Hours: ${site.hoursHuman}`)
  push(`Founded: ${site.foundingYear}`)
  push(`Rating: ${site.rating.value}/5 (${site.rating.count} reviews)`)
  push()

  push("## What we do")
  push(site.description)
  push()

  push("## Pricing")
  for (const t of tiers) {
    push(`### ${t.name}`)
    push(`- Description: ${t.sub}`)
    push(`- Price after subsidy: ${t.price} (MRP ${t.strike})`)
    push(`- Panels: ${t.panels}`)
    push(`- Inverter: ${t.inverter}`)
    push(`- Warranty: ${t.warranty}`)
    push(`- Install time: ${t.installTime}`)
    push(`- URL: ${absUrl(`/packages/${t.slug}/`)}`)
    push()
  }

  push("## Subsidy: " + site.subsidy.program)
  push(`Authority: ${site.subsidy.authority}`)
  for (const s of site.subsidy.slabs) {
    push(`- ${s.kw} kW system → ₹${s.amount.toLocaleString("en-IN")} subsidy`)
  }
  push()

  push("## Process (21 days end-to-end)")
  for (const s of steps) {
    push(`${s.n}. ${s.t}: ${s.d}`)
  }
  push()

  push("## Service areas")
  for (const d of districts) {
    push(`- ${d.name}: ~${d.sunHours}h sun, avg bill ₹${d.avgBill.toLocaleString("en-IN")}, popular system ${d.popularKw} kW. URL: ${absUrl(`/service-areas/${d.slug}/`)}`)
  }
  push()

  push("## Frequently asked questions")
  for (const f of faqs) {
    push(`Q: ${f.q}`)
    push(`A: ${f.a}`)
    push()
  }

  push("## Case studies")
  for (const c of caseStudies) {
    push(`### ${c.title}`)
    push(`Location: ${c.district}, system ${c.systemKw} kW, installed ${c.installDate}.`)
    push(`Before: ₹${c.beforeBill}/mo → After: ₹${c.afterBill}/mo.`)
    push(c.body)
    push(`URL: ${absUrl(`/case-studies/${c.slug}/`)}`)
    push()
  }

  push("## Articles")
  for (const p of posts) {
    push(`### ${p.title} (${p.date})`)
    push(p.excerpt)
    push(p.body)
    push(`URL: ${absUrl(`/blog/${p.slug}/`)}`)
    push()
  }

  push("## Citation policy")
  push(
    site.aiPolicy.allowCitation
      ? `Citations welcome with link to ${site.url}.`
      : `Citations restricted — contact ${site.aiPolicy.contact}.`,
  )

  return new Response(out.join("\n"), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  })
}
