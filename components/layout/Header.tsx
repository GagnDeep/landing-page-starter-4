import Link from "next/link"

export function Header() {
  return (
    <header className="border-b border-border py-4 px-6 md:px-12 flex items-center justify-between bg-background sticky top-0 z-50">
      <Link href="/" className="font-heading font-bold text-xl uppercase tracking-tight text-foreground">
        AI Wire Harness
      </Link>
      <nav className="flex gap-6">
        <Link href="/about/" className="text-muted-foreground hover:text-foreground transition-colors font-sans text-sm uppercase tracking-wide">About</Link>
        <Link href="/rfq/" className="text-accent hover:text-accent-foreground hover:bg-accent transition-colors font-sans text-sm uppercase tracking-wide border border-accent px-4 py-1.5 rounded-sm">RFQ Desk</Link>
      </nav>
    </header>
  )
}
