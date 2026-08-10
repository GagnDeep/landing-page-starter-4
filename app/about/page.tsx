import { buildMetadata } from "@/lib/seo"
import { Prose } from "@/components/layout/prose"

export const metadata = buildMetadata({
  title: "About Washington DC Review",
  description: "Learn why Washington DC Review exists and our mission to demystify federal contracting for small businesses without expensive consultants.",
  path: "/about"
})

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <Prose>
          <h1 className="text-h1 mb-8">About Washington DC Review</h1>
          <p className="text-lead mb-8">
            Washington DC Review is an independent resource dedicated to helping small businesses navigate the federal contracting ecosystem without relying on expensive consultants.
          </p>
          <h2>The Problem</h2>
          <p>
            The U.S. government is the largest purchaser of goods and services in the world. They actively want to buy from small businesses, setting aside billions of dollars annually for exactly that purpose.
          </p>
          <p>
            However, the onboarding process—SAM.gov registration, navigating the Federal Procurement Data System (FPDS), and securing set-aside certifications like 8(a), HUBZone, SDVOSB, or WOSB—is shrouded in complex, bureaucratic language.
          </p>
          <p>
            This complexity has spawned an industry of "GovCon" consultants who charge thousands of dollars to complete free government forms.
          </p>
          <h2>Our Mission</h2>
          <p>
            We exist to break that funnel. Our goal is to provide clear, actionable, and accurate guides to federal contracting. We map the processes, link directly to the official {"{{VERIFY: .gov source URLs}}"}, and translate the requirements into plain English.
          </p>
          <h2>Independence and Accuracy</h2>
          <p>
            <strong>We are not affiliated with the U.S. Government.</strong> We are an independent publication. We do not sell consulting services. We do not act as an agent for your business. We provide information, not legal or business advice.
          </p>
          <p>
            Every threshold, fee, and timeline on this site is rigorously checked against official government sources. When the rules change, we update our guides.
          </p>
        </Prose>
      </div>
    </div>
  )
}
