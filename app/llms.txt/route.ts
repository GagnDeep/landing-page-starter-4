/**
 * /llms.txt — curated, plain-text site index for LLMs.
 * Spec: https://llmstxt.org/
 */
import { site, absUrl } from "@/lib/config/site.config"
import { tiers } from "@/content/packages"
import { districts } from "@/content/districts"
import { posts } from "@/content/posts"

export const dynamic = "force-static"
// Refresh daily so freshly-published posts surface in LLM ingestion
// queues without a full redeploy.
export const revalidate = 86400

export async function GET() {
  const lines: string[] = []

  lines.push(`# ${site.name}`)
  lines.push("")
  lines.push(`> ${site.description}`)
  lines.push("")
  lines.push(`_Last generated: ${new Date().toISOString().slice(0, 10)}_`)
  lines.push("")
  lines.push(`Founded ${site.foundingYear} in ${site.address.locality}, ${site.copy.regionName}. ${site.copy.utilityShort} certified installer for the ${site.incentive.program}. Service across ${site.content.districts.length}+ ${site.copy.districtWordPlural} of ${site.copy.regionName}. Rated ${site.rating.value}/5 across ${site.rating.count} reviews.`)
  lines.push("")

  lines.push("## Start here")
  lines.push(`- [Home](${site.url}): Overview, calculator, packages, subsidy info.`)
  lines.push(`- [How it works](${absUrl("/how-it-works/")}): Six-step installation process, 21 days end-to-end.`)
  lines.push(`- [Packages](${absUrl("/packages/")}): Three tiers — ${tiers.map((t) => t.name).join(", ")}.`)
  lines.push(`- [Incentive explained](${absUrl("/subsidy/")}): How the ${site.incentive.program} works — ${site.incentive.short}.`)
  lines.push(`- [Calculator](${absUrl("/calculator/")}): Estimate savings, system size, payback period.`)
  lines.push("")

  lines.push("## Packages")
  for (const t of tiers) {
    lines.push(`- [${t.name}](${absUrl(`/packages/${t.slug}/`)}): ${t.sub} — ${t.price} after subsidy. ${t.panels}, ${t.inverter}.`)
  }
  lines.push("")

  lines.push(`## Service areas (${site.copy.regionName} ${site.copy.districtWordPlural})`)
  for (const d of districts.slice(0, 12)) {
    lines.push(`- [${d.name}](${absUrl(`/service-areas/${d.slug}/`)}): ~${d.sunHours}h sun, popular system size ${d.popularKw} kW.`)
  }
  lines.push(`- [All ${districts.length} ${site.copy.districtWordPlural}](${absUrl("/service-areas/")})`)
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
  lines.push(`- [RSS feed](${absUrl("/blog/rss.xml")})`)
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
      // LLM-surface text is for AI ingestion, not Google Search.
      // Keep it out of the index so it doesn't compete with HTML.
      "x-robots-tag": "noindex, follow",
    },
  })
}
