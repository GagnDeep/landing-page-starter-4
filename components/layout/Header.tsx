"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { globalContent } from "@/content/global"

export function Header() {
  const pathname = usePathname()
  const isHome = pathname === "/"

  return (
    <header
      className={cn(
        "absolute top-0 z-50 flex w-full items-center justify-between px-6 py-6 md:px-12"
      )}
    >
      {/* Brand */}
      <Link
        href="/"
        className="z-10 flex-1 font-heading text-2xl tracking-wide"
      >
        {globalContent.header.brand}
      </Link>

      {/* Main Nav (Desktop) */}
      <nav className="hidden flex-1 items-center justify-center gap-8 text-sm font-medium tracking-widest uppercase md:flex">
        {globalContent.header.navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={cn(
              "transition-colors hover:text-primary",
              pathname === link.href ? "text-primary" : "text-foreground"
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* CTA */}
      <div className="flex flex-1 justify-end">
        <Button
          variant={isHome ? "secondary" : "default"}
          asChild
          className="rounded-full px-6 text-xs tracking-wider uppercase"
        >
          <Link href={globalContent.header.cta.href}>
            {globalContent.header.cta.label}
          </Link>
        </Button>
      </div>
    </header>
  )
}
