/**
 * /packages.txt — plain-text alternate of the packages page,
 * served at /packages.txt for cheap LLM ingestion.
 */
import { tiers } from "@/content/packages"
import { site, absUrl } from "@/lib/config/site.config"

export const dynamic = "force-static"

export async function GET() {
  const lines: string[] = []
  lines.push(`# ${site.name} — Rooftop Solar Packages`)
  lines.push("")
  lines.push(
    `Three pre-built packages for ${site.copy.regionName} homes. Tier-1 components only. ${site.incentive.short} already applied to the listed price.`,
  )
  lines.push("")
  for (const t of tiers) {
    lines.push(`## ${t.name}`)
    lines.push(`Best for: ${t.sub}`)
    lines.push(`Panels: ${t.panels}`)
    lines.push(`Inverter: ${t.inverter}`)
    lines.push(`Price after incentive: ${t.price} (sticker ${t.strike})`)
    lines.push(`Warranty: ${t.warranty}`)
    lines.push(`Install time: ${t.installTime}`)
    lines.push(`URL: ${absUrl(`/packages/${t.slug}/`)}`)
    lines.push("")
  }
  return new Response(lines.join("\n"), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
      "x-robots-tag": "noindex, follow",
    },
  })
}
