/**
 * /subsidy.txt — plain-text PM Surya Ghar reference.
 */
import { site, absUrl } from "@/lib/config/site.config"

export const dynamic = "force-static"

export async function GET() {
  const lines: string[] = []
  lines.push(`# ${site.subsidy.program}`)
  lines.push("")
  lines.push(`Authority: ${site.subsidy.authority}`)
  lines.push(
    `What it is: A central government Direct Benefit Transfer to Indian homeowners who install grid-tied rooftop solar between 1 kW and 10 kW.`,
  )
  lines.push("")
  lines.push("## Subsidy slabs")
  for (const s of site.subsidy.slabs) {
    lines.push(`- ${s.kw} kW system → ₹${s.amount.toLocaleString("en-IN")}`)
  }
  lines.push("")
  lines.push("## How the claim works (Punjab Solar handles all of this)")
  lines.push(
    "1. National Portal registration (with PAN, Aadhaar, bank details).",
  )
  lines.push(
    "2. Empanelled-vendor quote (we are empanelled).",
  )
  lines.push(
    "3. DISCOM feasibility application to PSPCL.",
  )
  lines.push(
    "4. Install + commissioning inspection.",
  )
  lines.push(
    "5. Net-meter installation + final inspection.",
  )
  lines.push(
    "6. Subsidy DBT into the homeowner's bank account (22–30 days post commissioning).",
  )
  lines.push("")
  lines.push(`Source: ${absUrl("/subsidy/")}`)
  return new Response(lines.join("\n"), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  })
}
