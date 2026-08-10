import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "GSA Schedules Guide",
  description: "A complete guide to getting your business on the GSA Multiple Award Schedule (MAS). Learn the requirements, timelines, and how to submit a successful offer.",
  path: "/gsa-schedules"
})

export default function GsaSchedules() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-h1 mb-8">GSA Schedules Guide</h1>
      <p>Content coming in Pass 2.</p>
    </div>
  )
}
