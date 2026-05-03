import * as React from "react"
import Link from "next/link"
import { homeContent } from "@/content/home"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  const { globalFooter, globalHeader } = homeContent

  return (
    <footer className="bg-secondary border-t border-border/40 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="font-heading text-2xl font-semibold tracking-tight text-foreground inline-block mb-4">
              {globalHeader.logo}
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              {globalFooter.brandText}
            </p>
          </div>

          {/* Links Column */}
          <div className="col-span-1">
            <h3 className="font-heading font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-3">
              {globalHeader.navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="col-span-1">
            <h3 className="font-heading font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${globalFooter.contactInfo.phone.replace(/[^0-9+]/g, '')}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {globalFooter.contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${globalFooter.contactInfo.email}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {globalFooter.contactInfo.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        <Separator className="bg-border/60 mb-8" />

        {/* Social / Legal Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {globalHeader.logo}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {globalFooter.legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
