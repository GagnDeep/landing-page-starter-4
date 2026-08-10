import { ExposureReview } from "@/components/sections/exposure-review"
import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon, Target01Icon, MailValidation01Icon, Shield01Icon } from "@hugeicons/core-free-icons"
import Link from "next/link"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Halyard | Fractional CTO for RIAs",
  path: "/",
})

export default function Home() {
  return (
    <main id="main">
      {/* 1. Hero with Signature Component */}
      <section className="py-20 md:py-32 bg-background border-b border-border">
        <div className="container grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-xl">
            <span className="text-eyebrow">Fractional CTO Practice</span>
            <h1 className="text-display mb-6">Fiduciary technology for RIAs.</h1>
            <p className="text-lead">
              For wealth managers of 10 to 200 staff. Past an outsourced IT vendor, short of a full-time hire. Independent technology diligence, exam readiness, and architecture without translation.
            </p>
            <Button asChild size="lg" className="h-12 px-8">
              <Link href="/consultation/">
                Book a Consultation <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="w-full">
            <ExposureReview />
          </div>
        </div>
      </section>

      {/* 2. Alternating Explainer: The Problem */}
      <section className="py-20 md:py-32 bg-muted border-b border-border">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square bg-background rounded-lg border border-border flex items-center justify-center p-12">
             <svg viewBox="0 0 100 100" className="w-full h-full text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 80 L80 20 M20 20 L80 80" className="opacity-20" />
                <circle cx="50" cy="50" r="30" className="opacity-50" />
                <circle cx="50" cy="50" r="10" />
             </svg>
          </div>
          <div className="max-w-md">
            <span className="text-eyebrow">The Chasm</span>
            <h2 className="text-h2 mt-0">Generalists bill six weeks of discovery.</h2>
            <p>
              When your operating principal has a bad technology quarter, the instinct is to escalate the vendor or weigh a full-time CTO hire. IT generalists do not understand custodian feeds, portfolio accounting, or SEC examination readiness natively. We do.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Three-Column Bento Grid: Offerings */}
      <section className="py-20 md:py-32 bg-background border-b border-border">
        <div className="container">
          <span className="text-eyebrow">Practice Areas</span>
          <h2 className="text-h2 mt-0 mb-12 max-w-2xl">Domain fluency from day one. No translation required.</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors">
              <HugeiconsIcon icon={Target01Icon} className="w-8 h-8 text-primary mb-6" />
              <h3 className="text-h3 mt-0">Fractional CTO</h3>
              <p className="text-muted-foreground text-sm">Strategic technology leadership, vendor management, and architectural oversight for your firm on a retained basis.</p>
            </div>
            <div className="p-8 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors">
              <HugeiconsIcon icon={MailValidation01Icon} className="w-8 h-8 text-primary mb-6" />
              <h3 className="text-h3 mt-0">Independent Diligence</h3>
              <p className="text-muted-foreground text-sm">Fixed-scope assessments of technology platforms, cybersecurity posture, and operational risks before acquisitions or major migrations.</p>
            </div>
            <div className="p-8 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors">
              <HugeiconsIcon icon={Shield01Icon} className="w-8 h-8 text-primary mb-6" />
              <h3 className="text-h3 mt-0">Exam Readiness</h3>
              <p className="text-muted-foreground text-sm">Targeted review of your technology stack against current regulatory priorities, data lineage, and access controls.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Comparison Matrix: The Halyard Difference */}
      <section className="py-20 md:py-32 bg-primary/5 border-b border-border">
        <div className="container max-w-4xl">
          <span className="text-eyebrow">Approach</span>
          <h2 className="text-h2 mt-0 mb-12">The right instrument for the scale.</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 font-mono text-xs font-normal text-muted-foreground uppercase tracking-wider">Consideration</th>
                  <th className="py-4 font-mono text-xs font-normal text-muted-foreground uppercase tracking-wider">Outsourced IT</th>
                  <th className="py-4 font-mono text-xs font-normal text-primary font-semibold uppercase tracking-wider">Halyard Fractional</th>
                  <th className="py-4 font-mono text-xs font-normal text-muted-foreground uppercase tracking-wider">Full-Time CTO</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-border/50">
                  <td className="py-4 font-medium">Domain Expertise</td>
                  <td className="py-4 text-muted-foreground">General business</td>
                  <td className="py-4 text-foreground font-medium">RIA & Wealth specific</td>
                  <td className="py-4 text-muted-foreground">Varies by hire</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-4 font-medium">Strategic Focus</td>
                  <td className="py-4 text-muted-foreground">Helpdesk & uptime</td>
                  <td className="py-4 text-foreground font-medium">Architecture & risk</td>
                  <td className="py-4 text-muted-foreground">Architecture & risk</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-4 font-medium">Cost Structure</td>
                  <td className="py-4 text-muted-foreground">Low / Per-seat</td>
                  <td className="py-4 text-foreground font-medium">Mid / Retainer</td>
                  <td className="py-4 text-muted-foreground">High / Salary + Equity</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-4 font-medium">Time to Impact</td>
                  <td className="py-4 text-muted-foreground">Immediate</td>
                  <td className="py-4 text-foreground font-medium">Days (No translation)</td>
                  <td className="py-4 text-muted-foreground">Months (Hiring + Onboarding)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Process Stepper */}
      <section className="py-20 md:py-32 bg-background border-b border-border">
        <div className="container max-w-3xl">
          <span className="text-eyebrow">Methodology</span>
          <h2 className="text-h2 mt-0 mb-12">How we engage.</h2>

          <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-3.5 before:w-px before:bg-border">
            <div className="relative pl-10">
              <div className="absolute left-0 top-1 w-7 h-7 bg-background border border-primary rounded-full flex items-center justify-center font-mono text-xs text-primary">1</div>
              <h3 className="text-xl font-medium mb-2">Discovery Memorandum</h3>
              <p className="text-muted-foreground">A fixed-scope, two-week assessment of your current architecture, vendor sprawl, and operational risks, culminating in a private memorandum.</p>
            </div>
            <div className="relative pl-10">
              <div className="absolute left-0 top-1 w-7 h-7 bg-background border border-primary rounded-full flex items-center justify-center font-mono text-xs text-primary">2</div>
              <h3 className="text-xl font-medium mb-2">Strategic Alignment</h3>
              <p className="text-muted-foreground">We map the required technology interventions against your firm&apos;s growth objectives, AUM targets, and compliance requirements.</p>
            </div>
            <div className="relative pl-10">
              <div className="absolute left-0 top-1 w-7 h-7 bg-background border border-primary rounded-full flex items-center justify-center font-mono text-xs text-primary">3</div>
              <h3 className="text-xl font-medium mb-2">Retained Execution</h3>
              <p className="text-muted-foreground">Ongoing fractional leadership to execute the roadmap, govern vendors, and ensure exam readiness without the overhead of a full-time executive.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Quote Band (Inverted) */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground border-b border-border">
        <div className="container max-w-4xl text-center">
          <blockquote className="font-heading text-3xl md:text-5xl leading-tight mb-8">
            &quot;A practice, not a web asset. The site is a credibility instrument for few, dense pages.&quot;
          </blockquote>
          <p className="font-mono text-sm tracking-widest uppercase opacity-80">— The Halyard Mandate</p>
        </div>
      </section>

      {/* 7. Feature Stat Strip */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-border/50">
            <div>
              <div className="font-mono text-3xl text-primary mb-2">10-200</div>
              <div className="text-xs font-mono uppercase text-muted-foreground tracking-wider">Target Staff Size</div>
            </div>
            <div>
              <div className="font-mono text-3xl text-primary mb-2">{"{{VERIFY: stat 2}}"}</div>
              <div className="text-xs font-mono uppercase text-muted-foreground tracking-wider">Metric Two</div>
            </div>
            <div>
              <div className="font-mono text-3xl text-primary mb-2">{"{{VERIFY: stat 3}}"}</div>
              <div className="text-xs font-mono uppercase text-muted-foreground tracking-wider">Metric Three</div>
            </div>
            <div>
              <div className="font-mono text-3xl text-primary mb-2">0</div>
              <div className="text-xs font-mono uppercase text-muted-foreground tracking-wider">Translation Required</div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final Conversion */}
      <section className="py-24 md:py-32 bg-muted">
        <div className="container max-w-xl text-center">
          <h2 className="text-h2 mt-0 mb-6">Ready for a candid conversation?</h2>
          <p className="text-lead mx-auto mb-8">
            Schedule a consultation to discuss your current technology posture, vendor challenges, or upcoming diligence needs.
          </p>
          <Button asChild size="lg" className="h-14 px-8 text-lg">
            <Link href="/consultation/">Book Consultation</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
