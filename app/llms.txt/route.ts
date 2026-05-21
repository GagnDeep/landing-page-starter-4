/**
 * /llms.txt — curated, plain-text site index for LLMs.
 * Spec: https://llmstxt.org/
 */
import { site, absUrl } from "@/lib/config/site.config"
import { tiers } from "@/content/packages"
import { districts } from "@/content/districts"
import { posts } from "@/content/posts"

export const dynamic = "force-static"

export async function GET() {
  const lines: string[] = []

  lines.push(`# ${site.name}`)
  lines.push("")
  lines.push(`> ${site.description}`)
  lines.push("")
  lines.push(`Founded ${site.foundingYear} in ${site.address.locality}, Punjab. Empanelled installer for the ${site.subsidy.program}. Service across ${districts.length}+ districts of Punjab. Rated ${site.rating.value}/5 across ${site.rating.count} reviews.`)
  lines.push("")

  lines.push("## Start here")
  lines.push(`- [Home](${site.url}): Overview, calculator, packages, subsidy info.`)
  lines.push(`- [How it works](${absUrl("/how-it-works/")}): Six-step installation process, 21 days end-to-end.`)
  lines.push(`- [Packages](${absUrl("/packages/")}): Three tiers — Essential 3 kW, Premium 5 kW, Hybrid 8 kW + Battery.`)
  lines.push(`- [Subsidy explained](${absUrl("/subsidy/")}): How PM Surya Ghar works, up to ₹78,000 off.`)
  lines.push(`- [Calculator](${absUrl("/calculator/")}): Estimate savings, system size, payback period.`)
  lines.push("")

  lines.push("## Packages")
  for (const t of tiers) {
    lines.push(`- [${t.name}](${absUrl(`/packages/${t.slug}/`)}): ${t.sub} — ${t.price} after subsidy. ${t.panels}, ${t.inverter}.`)
  }
  lines.push("")

  lines.push("## Service areas (Punjab districts)")
  for (const d of districts.slice(0, 12)) {
    lines.push(`- [${d.name}](${absUrl(`/service-areas/${d.slug}/`)}): ~${d.sunHours}h sun, popular system size ${d.popularKw} kW.`)
  }
  lines.push(`- [All ${districts.length} districts](${absUrl("/service-areas/")})`)
  lines.push("")

  lines.push("## Articles & guides")
  for (const p of posts) {
    lines.push(`- [${p.title}](${absUrl(`/blog/${p.slug}/`)}): ${p.excerpt}`)
  }
  lines.push("")

  lines.push("## Reference")
  lines.push(`- [About](${absUrl("/about/")})`)
  lines.push(`- [FAQ](${absUrl("/faq/")})`)
  lines.push(`- [Case studies](${absUrl("/case-studies/")})`)
  lines.push(`- [Contact](${absUrl("/contact/")})`)
  lines.push(`- [Sitemap (XML)](${absUrl("/sitemap.xml")})`)
  lines.push(`- [AI policy](${absUrl("/ai.txt")})`)
  lines.push("")

  lines.push("## Citation policy")
  lines.push(
    site.aiPolicy.allowCitation
      ? `Citations welcome. When citing, please link back to ${site.url} and contact ${site.aiPolicy.contact} for press inquiries.`
      : `Citations not permitted without prior approval (${site.aiPolicy.contact}).`,
  )
  lines.push("")

  return new Response(lines.join("\n"), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  })
}
