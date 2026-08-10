import Link from "next/link"
import { site } from "@/lib/site"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container flex flex-col gap-4 py-10 md:h-24 md:flex-row md:py-0 items-center justify-between mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by {site.name}. Not affiliated with the U.S. Government or any federal agency.
          </p>
        </div>
        <nav className="flex gap-4">
          <Link href="/about.html" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
        </nav>
      </div>
    </footer>
  )
}
