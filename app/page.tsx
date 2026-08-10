import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { RFQDesk } from "@/components/sections/RFQDesk"
import { Button } from "@/components/ui/button"
import { buildMetadata, site } from "@/lib/site"
import { HugeiconsIcon } from "@hugeicons/react"
import { CheckmarkBadge01Icon, DocumentCodeIcon, ShieldIcon, Link01Icon, Task01Icon, ArrowRightDoubleIcon, File01Icon, BubbleChatIcon } from "@hugeicons/core-free-icons"
import { Jsonld } from "@/components/primitives/jsonld"
import { orgJsonLd, websiteJsonLd, faqJsonLd } from "@/lib/jsonld"

export const metadata = buildMetadata({
  title: `${site.name} · ${site.tagline}`,
  description: "A free request-for-quote desk for custom wire harness sourcing. Precision matched with vetted US shops. We help hardware and manufacturing engineers.",
})

const faqs = [
  { q: "How do the shops get paid?", a: "You pay the shop directly based on the PO you issue them. We do not intermediate the transaction or mark up the parts." },
  { q: "Is this free for buyers?", a: "Yes. Our platform is completely free for hardware teams. We charge our vetted manufacturing partners a small fee for qualified introductions." },
  { q: "Do you handle ITAR data?", a: "Yes. Our intake system can securely route ITAR-controlled drawings only to verified, ITAR-registered US facilities. Check the ITAR requirement in the RFQ desk." }
]

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        {/* Section 1: Split Hero with RFQ Desk */}
        <section className="bg-background section-pad border-b border-border">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <span className="font-heading uppercase tracking-widest text-accent text-sm font-bold">Custom Harness Sourcing</span>
              <h1 className="text-foreground leading-[1.05]">
                Stop emailing BOMs into the void.
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl font-sans max-w-lg leading-relaxed">
                Submit your specs once. Get competitive quotes from vetted, compliance-ready US harness shops. Built for engineering teams moving fast.
              </p>
              <div className="flex gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <HugeiconsIcon icon={CheckmarkBadge01Icon} className="text-accent w-5 h-5" /> Free for buyers
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <HugeiconsIcon icon={ShieldIcon} className="text-accent w-5 h-5" /> Vetted US shops only
                </div>
              </div>
            </div>
            <div className="w-full">
              <RFQDesk />
            </div>
          </div>
        </section>

        {/* Section 2: Logo / Trust band (Empty state representing data) */}
        <section className="bg-muted py-12 border-b border-border">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <p className="font-heading uppercase text-xs tracking-widest text-muted-foreground mb-8">Capabilities within network</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">
              <div className="flex items-center gap-2 font-mono text-sm"><HugeiconsIcon icon={DocumentCodeIcon} className="w-5 h-5" /> IPC/WHMA-A-620</div>
              <div className="flex items-center gap-2 font-mono text-sm"><HugeiconsIcon icon={DocumentCodeIcon} className="w-5 h-5" /> AS9100</div>
              <div className="flex items-center gap-2 font-mono text-sm"><HugeiconsIcon icon={DocumentCodeIcon} className="w-5 h-5" /> UL Listed</div>
              <div className="flex items-center gap-2 font-mono text-sm"><HugeiconsIcon icon={DocumentCodeIcon} className="w-5 h-5" /> ITAR Registered</div>
              <div className="flex items-center gap-2 font-mono text-sm"><HugeiconsIcon icon={DocumentCodeIcon} className="w-5 h-5" /> Nadcap</div>
            </div>
          </div>
        </section>

        {/* Section 3: Two-column alternating explainer (Left media) */}
        <section className="bg-background section-pad">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="bg-muted rounded-xl aspect-square border border-border flex flex-col items-center justify-center p-8 relative overflow-hidden">
              <svg width="100%" height="100%" viewBox="0 0 400 400" className="absolute inset-0 opacity-10" aria-hidden="true">
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
              <div className="relative z-10 w-full max-w-xs space-y-4 font-mono text-sm">
                <div className="p-3 border border-accent/30 bg-background text-foreground flex justify-between"><span>CON-01</span><span>TE 776273-1</span></div>
                <div className="w-0.5 h-6 bg-accent mx-auto"></div>
                <div className="p-3 border border-chart-2/30 bg-background text-foreground flex justify-between"><span>W-01</span><span>18AWG GXL RED</span></div>
                <div className="w-0.5 h-6 bg-accent mx-auto"></div>
                <div className="p-3 border border-chart-3/30 bg-background text-foreground flex justify-between"><span>CON-02</span><span>DEUTSCH DT04-2P</span></div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-muted rounded-md text-foreground"><HugeiconsIcon icon={Link01Icon} className="w-5 h-5" /></div>
                <h2 className="text-xl md:text-2xl font-bold font-heading">Stop hunting for capacity.</h2>
              </div>
              <p className="text-muted-foreground font-sans">
                Finding a shop with open capacity for an EV high-voltage harnesses prototype run or an AS9100 aerospace assembly takes weeks of calls. EV high-voltage harnesses are the fastest-growing segment, yet standard sourcing models fail them. We maintain active status on dozens of US facilities and route your RFQ only to those who can meet your lead time and compliance needs.
              </p>
              <ul className="space-y-3 pt-4 font-sans text-sm text-foreground">
                <li className="flex gap-3"><HugeiconsIcon icon={CheckmarkBadge01Icon} className="text-accent w-5 h-5 shrink-0" /> Match by certification (ITAR, UL, etc.)</li>
                <li className="flex gap-3"><HugeiconsIcon icon={CheckmarkBadge01Icon} className="text-accent w-5 h-5 shrink-0" /> Match by tooling availability</li>
                <li className="flex gap-3"><HugeiconsIcon icon={CheckmarkBadge01Icon} className="text-accent w-5 h-5 shrink-0" /> Match by production volume (10 to 10k+)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Numbered Process Stepper */}
        <section className="bg-card section-pad border-y border-border">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="max-w-2xl mb-12">
              <span className="font-heading uppercase tracking-widest text-muted-foreground text-sm font-bold flex gap-2 items-center">
                <HugeiconsIcon icon={Task01Icon} className="w-4 h-4" /> How It Works
              </span>
              <h2 className="mt-2 text-foreground">From spec to PO in days.</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-6 left-12 right-12 h-px bg-border -z-10"></div>
              {[
                { n: "01", title: "Upload Package", desc: "Submit BOMs, wire lists, and drawings securely. We parse your requirements.", icon: File01Icon },
                { n: "02", title: "Smart Routing", desc: "We match your spec against vetted shops with the exact tooling and capacity you need.", icon: ArrowRightDoubleIcon },
                { n: "03", title: "Compare Quotes", desc: "Receive 2-3 competitive quotes directly from the manufacturers. No middleman markup.", icon: BubbleChatIcon }
              ].map((step) => (
                <div key={step.n} className="bg-background p-6 border border-border rounded-lg relative">
                  <div className="bg-muted text-foreground font-mono text-sm font-bold w-12 h-12 flex items-center justify-center rounded-full mb-6 border border-border">
                    <HugeiconsIcon icon={step.icon} className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground uppercase tracking-tight mb-2">{step.title}</h3>
                  <p className="text-muted-foreground font-sans text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Matrix Table */}
        <section className="bg-background section-pad">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="mb-12">
              <span className="font-heading uppercase tracking-widest text-muted-foreground text-sm font-bold">The Difference</span>
              <h2 className="mt-2 text-foreground">RFQ Desk vs. Traditional Sourcing</h2>
            </div>
            <div className="w-full overflow-x-auto border border-border rounded-lg">
              <table className="w-full text-left font-sans text-sm whitespace-nowrap min-w-[600px]">
                <thead className="bg-muted text-foreground font-heading uppercase tracking-wide border-b border-border">
                  <tr>
                    <th className="p-4 font-semibold">Feature</th>
                    <th className="p-4 font-semibold border-l border-border bg-background">AI Wire Harness</th>
                    <th className="p-4 font-semibold border-l border-border">Manual Sourcing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { f: "Shop Vetting", a: "Pre-vetted, site audits on file", b: "You do the diligence" },
                    { f: "Compliance Matching", a: "Automated (AS9100, ITAR, etc.)", b: "Manual verification" },
                    { f: "Tooling Verification", a: "Checked before quoting", b: "Discovered during quoting" },
                    { f: "Cost to Buyer", a: "Free (Shops pay for intros)", b: "Internal engineering hours" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-muted/50 transition-colors">
                      <td className="p-4 font-medium text-foreground">{row.f}</td>
                      <td className="p-4 border-l border-border bg-background/50 font-mono text-accent">{row.a}</td>
                      <td className="p-4 border-l border-border text-muted-foreground">{row.b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 6: Stats strip */}
        <section className="bg-foreground text-background py-16 border-y border-foreground relative overflow-hidden">
          <svg width="100%" height="100%" viewBox="0 0 400 400" className="absolute inset-0 opacity-5" aria-hidden="true">
            <pattern id="grid3" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid3)" />
          </svg>
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-background/20 relative z-10">
            <div className="px-4 text-center">
              <div className="font-mono text-3xl md:text-4xl text-accent mb-2">{"{{VERIFY: Number of vetted shops}}"}</div>
              <div className="font-heading uppercase tracking-widest text-xs text-background/80">Vetted US Shops</div>
            </div>
            <div className="px-4 text-center">
              <div className="font-mono text-3xl md:text-4xl text-accent mb-2">24h</div>
              <div className="font-heading uppercase tracking-widest text-xs text-background/80">Avg Quote Turnaround</div>
            </div>
            <div className="px-4 text-center">
              <div className="font-mono text-3xl md:text-4xl text-accent mb-2">{"{{VERIFY: Target EV growth stat}}"}</div>
              <div className="font-heading uppercase tracking-widest text-xs text-background/80">EV Segment Growth</div>
            </div>
            <div className="px-4 text-center">
              <div className="font-mono text-3xl md:text-4xl text-accent mb-2">$0</div>
              <div className="font-heading uppercase tracking-widest text-xs text-background/80">Cost to Buyers</div>
            </div>
          </div>
        </section>

        {/* Section 7: FAQ Accordion */}
        <section className="bg-background section-pad">
          <div className="max-w-3xl mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <span className="font-heading uppercase tracking-widest text-muted-foreground text-sm font-bold flex items-center justify-center gap-2">
                <HugeiconsIcon icon={BubbleChatIcon} className="w-5 h-5 text-accent" /> FAQ
              </span>
              <h2 className="mt-2 text-foreground">Common Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-border rounded-lg bg-card overflow-hidden">
                  <summary className="font-heading text-foreground font-bold p-4 cursor-pointer hover:bg-muted/50 transition-colors uppercase tracking-tight marker:content-none flex justify-between items-center">
                    {faq.q}
                    <span className="text-accent group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="p-4 border-t border-border font-sans text-muted-foreground text-sm bg-background">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: Conversion Band */}
        <section className="bg-accent text-accent-foreground py-24 text-center relative overflow-hidden">
          <svg width="100%" height="100%" viewBox="0 0 400 400" className="absolute inset-0 opacity-5 mix-blend-overlay" aria-hidden="true">
            <pattern id="grid2" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="currentColor"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid2)" />
          </svg>
          <div className="relative z-10 max-w-2xl mx-auto px-6 md:px-12 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold font-heading">Ready to source?</h2>
            <p className="font-sans text-lg opacity-90 max-w-md mx-auto">
              Submit your harness spec today and have quotes from capable US shops by tomorrow.
            </p>
            <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90 font-heading uppercase tracking-wide mt-4">
              <a href="#main">Start RFQ</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <Jsonld data={[orgJsonLd(), websiteJsonLd(), faqJsonLd(faqs)]} />
    </>
  )
}
