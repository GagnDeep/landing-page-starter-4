"use client";

import * as React from "react";
import Link from "next/link";
import { Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { siteConfig } from "@/content/siteConfig";

export function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  // Prevent scrolling when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded-md"
        aria-label="Open mobile menu"
        aria-expanded={isOpen}
      >
        <HugeiconsIcon icon={Menu01Icon} size={24} />
      </button>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-background/80 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 w-[80%] max-w-sm h-[100dvh] bg-card border-l border-border shadow-2xl flex flex-col transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between p-6 border-b border-border/50">
          <span className="font-heading text-xl font-bold tracking-widest text-primary uppercase">
            {siteConfig.fullTitle}
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label="Close mobile menu"
          >
            <HugeiconsIcon icon={Cancel01Icon} size={24} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-6">
          {siteConfig.mobileNav.map((link, idx) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-2xl font-heading text-foreground/80 hover:text-primary transition-colors ${isOpen ? "animate-in slide-in-from-right-4 fade-in fill-mode-both" : ""}`}
              style={{ animationDelay: `${idx * 50}ms` }}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-8 pt-8 border-t border-border/50 flex flex-col gap-4">
             <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {siteConfig.contact.phone}
             </a>
             <div className="flex items-center gap-4 mt-4">
               <a href={siteConfig.socials.instagram.url} className="text-muted-foreground hover:text-primary transition-colors" aria-label={siteConfig.socials.instagram.label}>IG</a>
               <a href={siteConfig.socials.facebook.url} className="text-muted-foreground hover:text-primary transition-colors" aria-label={siteConfig.socials.facebook.label}>FB</a>
             </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
