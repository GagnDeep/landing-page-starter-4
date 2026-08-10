import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Set-Aside Certifications Guide",
  description: "A comprehensive guide to federal set-aside certifications including 8(a), HUBZone, SDVOSB, and WOSB. Learn how to qualify and apply for these programs.",
  path: "/set-aside-certifications"
})

export default function SetAside() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-h1 mb-8">Set-Aside Certifications Guide</h1>
      <p>Content coming in Pass 2.</p>
    </div>
  )
}
