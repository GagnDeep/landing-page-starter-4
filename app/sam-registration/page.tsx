import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "SAM.gov Registration Guide",
  description: "A complete step-by-step guide to registering your business on SAM.gov, obtaining your UEI, and getting your CAGE code without paying a consultant.",
  path: "/sam-registration"
})

export default function SamRegistration() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-h1 mb-8">SAM.gov Registration Guide</h1>
      <p>Content coming in Pass 2.</p>
    </div>
  )
}
