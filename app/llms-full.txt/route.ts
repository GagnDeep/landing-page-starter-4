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
import { formatMoney } from "@/lib/format"

export const dynamic = "force-static"

/**
 * Strip `:::widget … :::` fenced blocks from a body so the
 * llms-full.txt passthrough stays readable for crawlers.
 * Headings and list markers are preserved (they're plain markdown).
 */
function stripWidgets(body: string): string {
  const lines = body.split("\n")
  const out: string[] = []
  let inWidget = false
  for (const line of lines) {
    if (/^:::([a-z]+)/.test(line)) {
      inWidget = true
      continue
    }
    if (/^:::\s*$/.test(line)) {
      inWidget = false
      continue
    }
    if (!inWidget) out.push(line)
  }
  return out.join("\n")
}

export async function GET() {
  const out: string[] = []
  const push = (s = "") => out.push(s)

  push(`# ${site.name} — full site dossier`)
  push()
  push(`Site: ${site.url}`)
  push(`Email: ${site.email}`)
  push(`Phone: ${site.phone}`)
  push(
    `Address: ${site.address.street}, ${site.address.locality}, ${site.address.region} ${site.address.postalCode}, ${site.address.countryName}`,
  )
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
    push(`- Price after incentive: ${t.price} (sticker ${t.strike})`)
    push(`- Panels: ${t.panels}`)
    push(`- Inverter: ${t.inverter}`)
    push(`- Warranty: ${t.warranty}`)
    push(`- Install time: ${t.installTime}`)
    push(`- URL: ${absUrl(`/packages/${t.slug}/`)}`)
    push()
  }

  push(`## Incentive: ${site.incentive.program}`)
  push(`Authority: ${site.incentive.authority}`)
  push(`Type: ${site.incentive.type}`)
  push(site.incentive.long)
  if (site.incentive.slabs) {
    for (const s of site.incentive.slabs) {
      push(`- ${s.kw} kW system → ${formatMoney(s.amount)}`)
    }
  } else if (site.incentive.pctOfCost) {
    push(
      `- ${Math.round(site.incentive.pctOfCost * 100)}% of installed cost, claimed via the local tax authority.`,
    )
  }
  push()

  push("## Process (21 days end-to-end)")
  for (const s of steps) {
    push(`${s.n}. ${s.t}: ${s.d}`)
  }
  push()

  push(`## Service areas (${site.copy.regionName} ${site.copy.districtWordPlural})`)
  for (const d of districts) {
    push(
      `- ${d.name}: ~${d.sunHours}h sun, avg bill ${formatMoney(d.avgBill)}, popular system ${d.popularKw} kW. URL: ${absUrl(`/service-areas/${d.slug}/`)}`,
    )
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
    push(
      `Location: ${c.district}, system ${c.systemKw} kW, installed ${c.installDate}.`,
    )
    push(
      `Before: ${formatMoney(c.beforeBill)}/mo → After: ${formatMoney(c.afterBill)}/mo.`,
    )
    push(c.body)
    push(`URL: ${absUrl(`/case-studies/${c.slug}/`)}`)
    push()
  }

  push("## Articles")
  for (const p of posts) {
    push(`### ${p.title} (${p.date})`)
    push(p.excerpt)
    push(stripWidgets(p.body))
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
      "x-robots-tag": "noindex, follow",
    },
  })
}
