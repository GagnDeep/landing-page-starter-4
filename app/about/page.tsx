import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Breadcrumbs } from "@/components/primitives/Breadcrumbs"
import { Prose } from "@/components/primitives/Prose"
import { buildMetadata, site } from "@/lib/site"
import { HugeiconsIcon } from "@hugeicons/react"
import { ZapIcon, Factory01Icon } from "@hugeicons/core-free-icons"
import { Jsonld } from "@/components/primitives/jsonld"
import { orgJsonLd, websiteJsonLd, articleJsonLd } from "@/lib/jsonld"

export const metadata = buildMetadata({
  title: "About AI Wire Harness",
  description: "A specialized routing desk for hardware startups. Get quotes from vetted, compliance-ready US wire harness shops. No middleman markup.",
})

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="bg-muted border-b border-border py-8">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <Breadcrumbs items={[{ name: "About", url: "/about/" }]} className="mb-4" />
            <h1 className="text-foreground">About AI Wire Harness</h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">
          <Prose>
            <p className="text-xl font-bold">
              We built AI Wire Harness because finding the right manufacturing partner shouldn&apos;t be the hardest part of building hardware.
            </p>

            <p>
              Hardware and manufacturing engineers at EV, robotics, medical-device, and aerospace startups waste countless hours blindly emailing BOMs and wire lists to shops they found on Google, only to discover weeks later that the shop doesn&apos;t have the right tooling, capacity, or certifications (like AS9100 or ITAR).
            </p>

            <div className="bg-muted p-6 my-8 border-l-4 border-accent rounded-r-md">
              <h2 className="!mt-0 !mb-2 flex items-center gap-2 text-xl font-bold"><HugeiconsIcon icon={ZapIcon} className="text-accent" /> The Problem with Directories</h2>
              <p className="!mb-0">
                Broad directories competing with Thomasnet lack the specific tooling and capability data required for wire harnesses. They provide a list of names, leaving you to do the vetting.
              </p>
            </div>

            <h2>Our Approach</h2>
            <p>
              We are not a CAD tool and we don&apos;t compete with Siemens, Zuken, Dassault, PTC or Altium. We are a specialized routing desk.
            </p>
            <p>
              We maintain active, detailed capabilities on vetted US harness shops. When you submit a clean, structured quote request through our RFQ Desk, we route it only to the two or three shops that are a perfect fit for your specific requirements.
            </p>

            <h2>For Buyers</h2>
            <ul>
              <li><strong>Free to use.</strong> The shops pay for qualified introductions.</li>
              <li><strong>No middleman markup.</strong> You transact directly with the manufacturer.</li>
              <li><strong>Speed.</strong> Skip the discovery phase and go straight to quoting with capable partners.</li>
            </ul>

            <hr />

            <div className="flex gap-4 items-center">
              <HugeiconsIcon icon={Factory01Icon} className="w-12 h-12 text-muted-foreground" />
              <div>
                <strong className="block text-foreground uppercase tracking-wide font-heading">Engineered for Hardware Teams</strong>
                <span className="text-sm text-muted-foreground">Focus on design. Let us handle the sourcing connections.</span>
              </div>
            </div>
          </Prose>
        </div>
      </main>
      <Footer />
      <Jsonld data={[
        orgJsonLd(),
        websiteJsonLd(),
        articleJsonLd({
          headline: "About AI Wire Harness",
          datePublished: "2024-01-01",
          dateModified: new Date().toISOString(),
          url: `${site.url}/about/`
        })
      ]} />
    </>
  )
}
