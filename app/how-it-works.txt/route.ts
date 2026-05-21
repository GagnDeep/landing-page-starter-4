/**
 * /how-it-works.txt — plain-text alternate.
 */
import { steps } from "@/content/steps"
import { site, absUrl } from "@/lib/config/site.config"

export const dynamic = "force-static"

export async function GET() {
  const lines: string[] = []
  lines.push(`# ${site.name} — How rooftop solar gets installed`)
  lines.push("")
  lines.push(
    "Six steps, 21 days end-to-end. From a free site survey to the moment your meter spins backwards.",
  )
  lines.push("")
  for (const s of steps) {
    lines.push(`${s.n}. ${s.t}`)
    lines.push(`   ${s.d}`)
    lines.push("")
  }
  lines.push(`Source: ${absUrl("/how-it-works/")}`)
  return new Response(lines.join("\n"), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  })
}
