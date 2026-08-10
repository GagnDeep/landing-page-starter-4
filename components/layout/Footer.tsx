import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6 md:px-12 bg-background mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <h2 className="font-heading font-bold text-lg uppercase tracking-tight text-foreground mb-2">AI Wire Harness</h2>
          <p className="text-muted-foreground text-sm max-w-xs font-sans">A free request-for-quote desk for custom wire harness sourcing. Precision matched with vetted US shops.</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-sm text-foreground uppercase tracking-tight">Navigation</h3>
          <Link href="/" className="text-muted-foreground hover:text-foreground text-sm">Home</Link>
          <Link href="/about/" className="text-muted-foreground hover:text-foreground text-sm">About</Link>
          <Link href="/rfq/" className="text-muted-foreground hover:text-foreground text-sm">RFQ Desk</Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-border text-xs text-muted-foreground">
        © {new Date().getFullYear()} AI Wire Harness LLC. All rights reserved.
      </div>
    </footer>
  )
}
