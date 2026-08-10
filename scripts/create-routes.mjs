import fs from "fs"
import path from "path"

const routes = [
  "engagements",
  "perspectives",
  "engagements/fractional-cto",
  "engagements/diligence",
  "engagements/exam-readiness",
  "perspectives/custodian-data",
  "review",
  "consultation",
  "founder"
]

routes.forEach(route => {
  const title = route.split("/").pop()
  const content = `import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "${title} | Halyard",
  path: "/${route}/",
  description: "Fractional CTO practice for RIAs and wealth managers of ten to two hundred staff. Independent technology diligence, exam readiness, and architecture.",
})

export default function Page() {
  return (
    <main id="main" className="min-h-screen p-8 max-w-3xl mx-auto">
      <h1 className="font-heading text-4xl mb-8 capitalize">${title}</h1>
      <p className="text-muted-foreground">Content for ${route} goes here. {'{{VERIFY: need content from founder}}'}</p>
    </main>
  )
}
`
  fs.mkdirSync(path.join("app", route), { recursive: true })
  fs.writeFileSync(path.join("app", route, "page.tsx"), content)
})
