"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { homeContent } from "@/content/home"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()
  const { globalHeader } = homeContent

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="font-heading text-2xl font-semibold tracking-tight text-foreground transition-colors hover:text-primary">
              {globalHeader.logo}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {globalHeader.navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA & Actions */}
          <div className="hidden md:flex items-center gap-4">
             {/* Note: In a real app we might add a theme toggle here, but focusing on the requested layout first */}
            <Button size="lg" className="rounded-full px-8">
              {globalHeader.cta}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l border-border/40 bg-background/95 backdrop-blur-md">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">Access site navigation links and booking functionality.</SheetDescription>
                <div className="flex flex-col h-full py-6">
                  <div className="flex-shrink-0 mb-12">
                    <Link href="/" onClick={() => setIsOpen(false)} className="font-heading text-2xl font-semibold tracking-tight text-foreground">
                      {globalHeader.logo}
                    </Link>
                  </div>

                  <nav className="flex flex-col gap-6 flex-grow">
                    {globalHeader.navLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "text-xl font-medium transition-colors hover:text-primary",
                          pathname === link.href ? "text-primary" : "text-foreground"
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>

                  <div className="mt-auto pb-8">
                    <Button size="lg" className="w-full rounded-full" onClick={() => setIsOpen(false)}>
                      {globalHeader.cta}
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </header>
  )
}
