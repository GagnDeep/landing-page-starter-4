import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { HomeHero } from '@/components/home/home-hero'
import { HugeiconsIcon } from "@hugeicons/react"
import { DatabaseIcon, Layers01Icon, ZapIcon, Settings02Icon, ArrowRight01Icon, QuestionIcon, CheckmarkCircle01Icon, PlayCircleIcon } from "@hugeicons/core-free-icons"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main" className="flex-1">
        {/* Section 1: Hero with Signature Component */}
        <HomeHero />

        {/* Section 2: Stat Strip (Metrics) */}
        <section className="py-16 bg-muted/30 border-b">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-border">
            <div className="py-4">
              <p className="font-heading text-4xl font-bold text-foreground mb-2 flex items-center justify-center"><HugeiconsIcon icon={ZapIcon} className="w-8 h-8 mr-2 text-primary" />0ms</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Network Latency</p>
            </div>
            <div className="py-4">
              <p className="font-heading text-4xl font-bold text-foreground mb-2 flex items-center justify-center"><HugeiconsIcon icon={CheckmarkCircle01Icon} className="w-8 h-8 mr-2 text-primary" />100%</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Deterministic Replays</p>
            </div>
            <div className="py-4">
              <p className="font-heading text-4xl font-bold text-foreground mb-2 flex items-center justify-center"><HugeiconsIcon icon={DatabaseIcon} className="w-8 h-8 mr-2 text-primary" />$0</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Live API Costs in CI</p>
            </div>
          </div>
        </section>

        {/* Section 3: Bento Grid Explainer */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <span className="text-sm font-bold tracking-wider uppercase text-primary mb-2 block">Architecture</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold">How JSONMock Works</h2>
              <p className="text-muted-foreground mt-4 max-w-2xl text-lg">We capture and replay the exact bytes returned by your LLM provider, avoiding manual mock drift.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 md:col-span-2 bg-muted border-border">
                <HugeiconsIcon icon={DatabaseIcon} className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-xl mb-2">Immutable Cassettes</h3>
                <p className="text-muted-foreground">Every LLM request is hashed based on parameters. Responses are written to a `.jsonmock` cassette file committed alongside your tests.</p>
              </Card>
              <Card className="p-6 bg-muted border-border">
                <HugeiconsIcon icon={ZapIcon} className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-heading font-semibold text-xl mb-2">Byte-Identical Replay</h3>
                <p className="text-muted-foreground">We simulate streaming chunks exactly as the provider returned them.</p>
              </Card>
              <Card className="p-6 bg-muted border-border">
                <HugeiconsIcon icon={Layers01Icon} className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-heading font-semibold text-xl mb-2">Tool Call Sequencing</h3>
                <p className="text-muted-foreground">Agents execute complex sequences. We guarantee parallel and serial tool call blocks replay exactly in order.</p>
              </Card>
              <Card className="p-6 md:col-span-2 bg-muted border-border">
                <HugeiconsIcon icon={Settings02Icon} className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-xl mb-2">Normalization Pipeline</h3>
                <p className="text-muted-foreground">Dynamic identifiers (like `call_xxx` IDs from OpenAI) are normalized during recording so exact replay assertions pass.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 4: Two-column Alternating (Right Media) */}
        <section className="py-24 bg-muted/50 border-y">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-bold tracking-wider uppercase text-primary mb-2 block">Problem</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Hand-written fixtures are a fantasy.</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Developers write mocks based on documentation, not reality. Over time, APIs drift, edge cases appear, and the manual mock diverges from real behavior. Your tests pass, but production breaks.
              </p>
              <p className="text-muted-foreground text-lg">
                JSONMock captures the actual wire response. When your agent tests pass locally against JSONMock, you know they will pass in production.
              </p>
            </div>
            <div className="bg-background rounded-lg border shadow-sm p-6 overflow-hidden flex items-center justify-center min-h-[300px]">
              {/* Inline SVG: Diagram */}
              <svg viewBox="0 0 400 300" className="w-full h-auto text-foreground" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="40" width="120" height="60" rx="4" className="fill-muted stroke-border" strokeWidth="2" />
                <text x="80" y="75" textAnchor="middle" className="font-mono text-sm fill-foreground">Agent Code</text>

                <path d="M140 70 L260 70" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)" />
                <text x="200" y="60" textAnchor="middle" className="font-sans text-xs fill-muted-foreground">Request</text>

                <rect x="260" y="40" width="120" height="60" rx="4" className="fill-primary/20 stroke-primary" strokeWidth="2" />
                <text x="320" y="75" textAnchor="middle" className="font-mono text-sm fill-foreground">JSONMock Proxy</text>

                <path d="M320 100 L320 180" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
                <text x="330" y="140" className="font-sans text-xs fill-muted-foreground">Cache Miss</text>

                <rect x="260" y="180" width="120" height="60" rx="4" className="fill-muted stroke-border" strokeWidth="2" />
                <text x="320" y="215" textAnchor="middle" className="font-mono text-sm fill-foreground">Live LLM API</text>

                <path d="M260 210 L80 210 L80 100" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
                <text x="170" y="200" className="font-sans text-xs fill-muted-foreground">Write Cassette</text>

                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" className="fill-current" />
                  </marker>
                </defs>
              </svg>
            </div>
          </div>
        </section>

        {/* Section 5: Comparison Matrix */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center max-w-2xl mx-auto">
              <span className="text-sm font-bold tracking-wider uppercase text-primary mb-2 block">Compare</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold flex items-center justify-center gap-3"><HugeiconsIcon icon={Layers01Icon} className="w-10 h-10 text-primary" /> Why not just use generic API mocking?</h2>
            </div>
            <div className="overflow-x-auto w-full border rounded-lg">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-muted">
                    <th className="p-4 border-b font-semibold text-sm">Feature</th>
                    <th className="p-4 border-b border-l font-semibold text-sm w-1/3">Standard Mocking</th>
                    <th className="p-4 border-b border-l font-semibold text-sm w-1/3 text-primary">JSONMock</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-sm">
                  <tr>
                    <td className="p-4">SSE Streaming Simulation</td>
                    <td className="p-4 border-l text-muted-foreground">Manual setup required</td>
                    <td className="p-4 border-l font-medium">Automatic byte-replay</td>
                  </tr>
                  <tr>
                    <td className="p-4">Agent Tool Call IDs</td>
                    <td className="p-4 border-l text-muted-foreground">Static, causes validation errors</td>
                    <td className="p-4 border-l font-medium">Normalized dynamically</td>
                  </tr>
                  <tr>
                    <td className="p-4">Request Hashing</td>
                    <td className="p-4 border-l text-muted-foreground">URL/Method only</td>
                    <td className="p-4 border-l font-medium">Deep AST inspection of LLM params</td>
                  </tr>
                  <tr>
                    <td className="p-4">Maintenance</td>
                    <td className="p-4 border-l text-muted-foreground">High drift risk</td>
                    <td className="p-4 border-l font-medium">Zero drift (re-record on demand)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 6: Numbered Process Stepper */}
        <section className="py-24 bg-muted border-y">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="mb-16 text-center">
              <span className="text-sm font-bold tracking-wider uppercase text-primary mb-2 block">Quickstart</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold flex items-center justify-center gap-3"><HugeiconsIcon icon={PlayCircleIcon} className="w-10 h-10 text-primary" /> Three steps to deterministic tests</h2>
            </div>
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-border before:z-0">
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active z-10">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background text-primary font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  1
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border bg-card shadow-sm">
                  <h3 className="font-heading font-semibold mb-2 flex items-center"><HugeiconsIcon icon={ArrowRight01Icon} className="w-5 h-5 mr-2 text-muted-foreground" />Install the proxy</h3>
                  <p className="text-sm text-muted-foreground">Add the JSONMock SDK to your test environment and route API traffic through the local proxy server.</p>
                </div>
              </div>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active z-10">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background text-primary font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  2
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border bg-card shadow-sm">
                  <h3 className="font-heading font-semibold mb-2 flex items-center"><HugeiconsIcon icon={ArrowRight01Icon} className="w-5 h-5 mr-2 text-muted-foreground" />Run in Record Mode</h3>
                  <p className="text-sm text-muted-foreground">Run your test suite once. JSONMock connects to the live API, proxies the responses, and saves cassettes locally.</p>
                </div>
              </div>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active z-10">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background text-primary font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  3
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border bg-card shadow-sm">
                  <h3 className="font-heading font-semibold mb-2 flex items-center"><HugeiconsIcon icon={ArrowRight01Icon} className="w-5 h-5 mr-2 text-muted-foreground" />Commit and Replay</h3>
                  <p className="text-sm text-muted-foreground">Commit the `.jsonmock` files. Future CI runs will replay these exact bytes, failing instantly if request schemas change.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Accordion FAQ */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="mb-12 text-center">
              <span className="text-sm font-bold tracking-wider uppercase text-primary mb-2 block">Support</span>
              <h2 className="font-heading text-3xl font-bold flex items-center justify-center gap-3"><HugeiconsIcon icon={QuestionIcon} className="w-8 h-8 text-primary" /> Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              <div className="border rounded-md p-4">
                <h3 className="font-semibold mb-2 flex items-center"><HugeiconsIcon icon={ArrowRight01Icon} className="w-5 h-5 mr-2 text-muted-foreground" />Does this work with Anthropic?</h3>
                <p className="text-muted-foreground text-sm">Yes, we support OpenAI, Anthropic, and standard OpenAI-compatible endpoints natively, with specific normalization rules for each.</p>
              </div>
              <div className="border rounded-md p-4">
                <h3 className="font-semibold mb-2 flex items-center"><HugeiconsIcon icon={ArrowRight01Icon} className="w-5 h-5 mr-2 text-muted-foreground" />How do I handle sensitive data?</h3>
                <p className="text-muted-foreground text-sm">Our redaction feature allows you to define JSONPath rules to strip PII before the cassette is written to disk.</p>
              </div>
              <div className="border rounded-md p-4">
                <h3 className="font-semibold mb-2 flex items-center"><HugeiconsIcon icon={ArrowRight01Icon} className="w-5 h-5 mr-2 text-muted-foreground" />What if my prompt includes a timestamp?</h3>
                <p className="text-muted-foreground text-sm">JSONMock allows you to ignore specific JSON pointers in the request body during hashing, so non-deterministic fields don&apos;t cause cache misses.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Final Conversion Band */}
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="font-heading text-4xl font-bold mb-6 flex items-center justify-center gap-4"><HugeiconsIcon icon={CheckmarkCircle01Icon} className="w-12 h-12" /> Stop paying for CI flakes.</h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Get deterministic agent tests today. Open source core, ready for your pipeline.
            </p>
            <a href="/docs/quickstart" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background text-foreground hover:bg-muted h-12 px-8 py-3">
              Read the Quickstart
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
