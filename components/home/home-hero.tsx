import { CassetteDiff } from "@/components/cassette-diff"

export function HomeHero() {
  return (
    <section className="py-24 md:py-32 bg-background border-b relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6 border border-accent/20">
            Developer Preview
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Stop flaky agent tests in CI.
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl font-sans">
            Record real LLM and agent API traffic once. Replay it byte-identically on a normalized request hash, streaming and tool calls included. Untether your builds from live models.
          </p>
          <div className="flex items-center gap-4">
            <a href="/docs/quickstart" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              Start Recording
            </a>
            <a href="/docs" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              Read Docs
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <CassetteDiff />
        </div>
      </div>
    </section>
  )
}
