import { ReadinessChecklist } from "@/components/sections/signature-tool"
import { Jsonld } from "@/components/primitives/jsonld"
import { organizationJsonLd, websiteJsonLd } from "@/lib/jsonld"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Federal Contracting Guide",
  description: "An independent guide to SAM.gov registration, set-aside certifications, and GSA Schedules for small businesses without expensive consultants.",
  path: "/"
})

export default function HomePage() {
  return (
    <>
      <Jsonld data={[organizationJsonLd(), websiteJsonLd()]} />

      {/* 1. Hero */}
      <section className="bg-background section-pad border-b border-border">
        <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-bold tracking-wider uppercase text-primary mb-4 block">Federal Contracting Guide</span>
            <h1 className="text-display mb-6">Win Federal Contracts Without the Consultants.</h1>
            <p className="text-lead mb-8">
              An independent, step-by-step guide to SAM.gov registration, set-aside certifications, and GSA Schedules for small businesses. We show you the exact rules, fees, and timelines so you can do it yourself.
            </p>
            <div className="flex gap-4">
              <a href="#eligibility" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
                Check Eligibility
              </a>
            </div>
          </div>
          <div className="hidden md:block border border-border bg-card p-4 rounded-xl shadow-sm rotate-1 hover:rotate-0 transition-transform duration-300">
            <svg viewBox="0 0 400 300" className="w-full h-auto" aria-hidden="true">
              <rect x="50" y="50" width="80" height="60" rx="4" fill="var(--color-muted)" stroke="var(--color-border)" strokeWidth="2" />
              <text x="90" y="85" textAnchor="middle" fill="var(--color-foreground)" fontSize="12" fontWeight="bold">Small Biz</text>

              <line x1="130" y1="80" x2="180" y2="80" stroke="var(--color-primary)" strokeWidth="2" strokeDasharray="4 4" />
              <polygon points="175,76 185,80 175,84" fill="var(--color-primary)" />

              <rect x="185" y="50" width="100" height="60" rx="4" fill="var(--color-primary)" stroke="var(--color-primary)" strokeWidth="2" />
              <text x="235" y="80" textAnchor="middle" fill="var(--color-primary-foreground)" fontSize="12" fontWeight="bold">SAM.gov</text>
              <text x="235" y="95" textAnchor="middle" fill="var(--color-primary-foreground)" fontSize="10">Registration</text>

              <path d="M 235 110 L 235 150 M 231 145 L 235 155 L 239 145" stroke="var(--color-primary)" strokeWidth="2" fill="var(--color-primary)" />

              <rect x="185" y="160" width="100" height="60" rx="4" fill="var(--color-accent)" stroke="var(--color-border)" strokeWidth="2" />
              <text x="235" y="190" textAnchor="middle" fill="var(--color-foreground)" fontSize="12" fontWeight="bold">Set-Asides</text>
              <text x="235" y="205" textAnchor="middle" fill="var(--color-muted-foreground)" fontSize="10">8(a), WOSB</text>

              <path d="M 285 190 L 330 190 M 325 186 L 335 190 L 325 194" stroke="var(--color-primary)" strokeWidth="2" fill="var(--color-primary)" />

              <rect x="335" y="150" width="50" height="80" rx="4" fill="var(--color-secondary)" stroke="var(--color-border)" strokeWidth="2" />
              <text x="360" y="190" textAnchor="middle" fill="var(--color-foreground)" fontSize="14" fontWeight="bold">Bids</text>
            </svg>
          </div>
        </div>
      </section>

      {/* 2. Signature Component Anchor */}
      <section id="eligibility" className="bg-muted section-pad border-b border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-sm font-bold tracking-wider uppercase text-primary mb-2 block">Step 1</span>
            <h2 className="text-h2 mb-4">Are you ready for federal contracting?</h2>
            <p className="text-body mx-auto text-muted-foreground">
              Before you spend months preparing a bid, verify your baseline eligibility.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <ReadinessChecklist />
          </div>
        </div>
      </section>

      {/* 3. The Problem with Consultants (Alternating background) */}
      <section className="bg-background section-pad border-b border-border">
        <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 border border-border bg-card p-6 rounded-xl shadow-sm text-center">
             <div className="text-4xl font-heading font-bold text-destructive mb-2">{"{{VERIFY: Average cost of a SAM.gov consultant}}"}</div>
             <p className="text-sm text-muted-foreground">What consultants charge for a free registration.</p>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-h2 mb-6">The Information Gap</h2>
            <p className="text-body mb-4">
              The SBA and GSA provide massive amounts of documentation, but it's disorganized and difficult to sequence. This creates a market for expensive "GovCon" consultants who charge thousands to fill out free government forms.
            </p>
            <p className="text-body">
              This site exists to break that funnel. We map the exact steps, link directly to the official {"{{VERIFY: .gov source URLs}}"}, and tell you plainly what you need to prepare.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Core Guides Grid */}
      <section className="bg-accent section-pad border-b border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-12">
            <h2 className="text-h2 mb-4">The Playbook</h2>
            <p className="text-body text-accent-foreground/80">Everything you need to get registered and certified, completely free.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border p-6 rounded-lg hover:border-primary transition-colors flex flex-col h-full">
              <h3 className="text-xl font-heading font-bold mb-3">SAM.gov Registration</h3>
              <p className="text-body text-muted-foreground mb-6 flex-1">
                The mandatory first step. How to get your UEI and CAGE code without paying a third party.
              </p>
              <a href="/sam-registration.html" className="text-sm font-medium text-primary hover:underline underline-offset-4 mt-auto">Read the guide &rarr;</a>
            </div>
            <div className="bg-card border border-border p-6 rounded-lg hover:border-primary transition-colors flex flex-col h-full">
              <h3 className="text-xl font-heading font-bold mb-3">Set-Aside Certifications</h3>
              <p className="text-body text-muted-foreground mb-6 flex-1">
                How to qualify for 8(a), HUBZone, SDVOSB, or WOSB status to access sheltered contracts.
              </p>
              <a href="/set-aside-certifications.html" className="text-sm font-medium text-primary hover:underline underline-offset-4 mt-auto">Read the guide &rarr;</a>
            </div>
            <div className="bg-card border border-border p-6 rounded-lg hover:border-primary transition-colors flex flex-col h-full">
              <h3 className="text-xl font-heading font-bold mb-3">GSA Schedules</h3>
              <p className="text-body text-muted-foreground mb-6 flex-1">
                The long game. How to get on the Multiple Award Schedule (MAS) to streamline purchasing.
              </p>
              <a href="/gsa-schedules.html" className="text-sm font-medium text-primary hover:underline underline-offset-4 mt-auto">Read the guide &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Process Stepper */}
      <section className="bg-background section-pad border-b border-border">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <h2 className="text-h2 mb-12 text-center">How to Win Your First Contract</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">1</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Register</h3>
                <p className="text-body text-muted-foreground">Complete your SAM.gov profile and receive your Unique Entity ID (UEI).</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">2</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Certify</h3>
                <p className="text-body text-muted-foreground">Apply for set-aside statuses you qualify for to reduce competition.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">3</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Research</h3>
                <p className="text-body text-muted-foreground">Use FPDS to find agencies already buying what you sell.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">4</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Bid</h3>
                <p className="text-body text-muted-foreground">Respond to solicitations matching your capabilities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Comparison Matrix */}
      <section className="bg-muted section-pad border-b border-border overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
           <h2 className="text-h2 mb-8">Consultants vs. Doing It Yourself</h2>
           <div className="overflow-x-auto pb-4">
             <table className="w-full text-left border-collapse min-w-[600px]">
               <thead>
                 <tr>
                   <th className="border-b border-border p-4 font-bold bg-background">Approach</th>
                   <th className="border-b border-border p-4 font-bold bg-background">Cost</th>
                   <th className="border-b border-border p-4 font-bold bg-background">Time to SAM.gov</th>
                   <th className="border-b border-border p-4 font-bold bg-background">Who Does the Work</th>
                 </tr>
               </thead>
               <tbody className="bg-card">
                 <tr>
                   <td className="border-b border-border p-4 font-medium">GovCon Consultants</td>
                   <td className="border-b border-border p-4 text-destructive">{"{{VERIFY: Average SAM.gov consultant fee}}"}</td>
                   <td className="border-b border-border p-4">{"{{VERIFY: Average consultant processing time}}"}</td>
                   <td className="border-b border-border p-4 text-muted-foreground">You still provide all documents. They type it in.</td>
                 </tr>
                 <tr>
                   <td className="border-b border-border p-4 font-medium text-primary">DIY (Using Our Guides)</td>
                   <td className="border-b border-border p-4 text-primary font-bold">Free ($0)</td>
                   <td className="border-b border-border p-4">1-2 hours of data entry</td>
                   <td className="border-b border-border p-4 text-muted-foreground">You input your data directly to the .gov portal.</td>
                 </tr>
               </tbody>
             </table>
           </div>
        </div>
      </section>

      {/* 7. Timeline / Free Resources */}
      <section className="bg-background section-pad border-b border-border">
        <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-h2 mb-4">Official Help is Free</h2>
            <p className="text-body mb-6 text-muted-foreground">
              If you get stuck, you do not have to pay a consultant. The government funds APEX Accelerators (formerly PTACs) specifically to help small businesses with this process for free.
            </p>
            <a href="https://www.apexaccelerators.us/#/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary hover:underline underline-offset-4">Find your local APEX Accelerator &rarr;</a>
          </div>
          <div className="border border-border bg-card p-8 rounded-xl shadow-sm">
             <h3 className="text-xl font-bold mb-4">Expected Timelines</h3>
             <ul className="space-y-4">
               <li className="flex justify-between items-center border-b border-border pb-2">
                 <span>SAM.gov UEI Generation</span>
                 <span className="font-medium">{"{{VERIFY: Current UEI wait time}}"}</span>
               </li>
               <li className="flex justify-between items-center border-b border-border pb-2">
                 <span>CAGE Code Assignment</span>
                 <span className="font-medium">{"{{VERIFY: Current CAGE code wait time}}"}</span>
               </li>
               <li className="flex justify-between items-center pb-2">
                 <span>8(a) Certification</span>
                 <span className="font-medium">{"{{VERIFY: 8(a) processing time}}"}</span>
               </li>
             </ul>
          </div>
        </div>
      </section>

      {/* 8. Final Conversion */}
      <section className="bg-primary text-primary-foreground section-pad text-center">
        <div className="container mx-auto px-4 md:px-8 max-w-2xl">
          <h2 className="text-h2 mb-6">Start Your Registration Today</h2>
          <p className="text-lg mb-8 text-primary-foreground/80">
            Stop letting complex documentation hold you back from the largest buyer in the world.
          </p>
          <a href="/sam-registration.html" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-background text-foreground hover:bg-background/90 h-11 px-8">
            Read the SAM.gov Guide
          </a>
        </div>
      </section>
    </>
  )
}
