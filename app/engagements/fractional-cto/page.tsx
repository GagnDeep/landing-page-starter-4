import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "fractional-cto | Halyard",
  path: "/engagements/fractional-cto/",
  description: "Fractional CTO practice for RIAs and wealth managers of ten to two hundred staff. Independent technology diligence, exam readiness, and architecture.",
})

export default function Page() {
  return (
    <main id="main" className="min-h-screen p-8 max-w-3xl mx-auto">
      <h1 className="font-heading text-4xl mb-8 capitalize">fractional-cto</h1>
      <p className="text-muted-foreground">Content for engagements/fractional-cto goes here. {'{{VERIFY: need content from founder}}'}</p>
    </main>
  )
}
