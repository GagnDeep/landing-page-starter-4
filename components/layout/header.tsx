import Link from "next/link"
import { site } from "@/lib/site"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="bg-muted text-muted-foreground py-1 text-center text-xs font-semibold uppercase tracking-wider border-b border-border">
        This is an independent guide to federal contracting for small businesses. Not affiliated with the U.S. Government.
      </div>
      <div className="container flex h-16 items-center justify-between mx-auto px-4 md:px-8">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-heading font-bold text-xl">{site.name}</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/sam-registration.html" className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground">
              SAM.gov
            </Link>
            <Link href="/set-aside-certifications.html" className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground">
              Set-Asides
            </Link>
            <Link href="/gsa-schedules.html" className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground">
              GSA Schedules
            </Link>
            <Link href="/about.html" className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground">
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
