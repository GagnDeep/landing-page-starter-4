/**
 * /subsidy.txt — plain-text incentive reference.
 */
import { site, absUrl } from "@/lib/config/site.config"
import { formatMoney } from "@/lib/format"

export const dynamic = "force-static"

export async function GET() {
  const lines: string[] = []
  lines.push(`# ${site.incentive.program}`)
  lines.push("")
  lines.push(`Authority: ${site.incentive.authority}`)
  lines.push(`Type: ${site.incentive.type}`)
  lines.push(site.incentive.long)
  lines.push("")
  if (site.incentive.slabs) {
    lines.push("## Tiers")
    for (const s of site.incentive.slabs) {
      lines.push(`- ${s.kw} kW system → ${formatMoney(s.amount)}`)
    }
  } else if (site.incentive.pctOfCost) {
    lines.push("## How it scales")
    lines.push(
      `- ${Math.round(site.incentive.pctOfCost * 100)}% of installed cost, with no system-size cap for residential.`,
    )
  }
  lines.push("")
  lines.push(`## How the claim works (${site.name} handles all of this)`)
  lines.push("1. Free site survey + system design.")
  lines.push("2. Local permit + utility interconnection application.")
  lines.push("3. Install + city building inspection.")
  lines.push("4. Permission-to-operate from the utility.")
  lines.push(
    site.incentive.type === "DBT"
      ? "5. Subsidy DBT into the homeowner's bank account."
      : site.incentive.type === "ITC"
        ? "5. IRS Form 5695 worksheet handed to the homeowner at commissioning."
        : "5. Documentation handoff for the local incentive claim.",
  )
  lines.push("")
  lines.push(`Source: ${absUrl("/subsidy/")}`)
  return new Response(lines.join("\n"), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
      "x-robots-tag": "noindex, follow",
    },
  })
}
