import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/siteConfig";
import { homeContent } from "@/content/home";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-card border-t border-border pt-16 md:pt-24 pb-8 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="mb-6 flex flex-col items-start focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-card rounded-sm">
              <span className="font-heading text-4xl font-bold tracking-[0.2em] text-foreground uppercase">
                {siteConfig.name}
              </span>
              <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase mt-[-2px]">
                {siteConfig.tagline}
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-8">
              {homeContent.footer.description}
            </p>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
              className="text-2xl font-heading text-foreground hover:text-primary transition-colors tracking-wider"
            >
              {siteConfig.contact.phone}
            </a>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold tracking-wider text-foreground uppercase mb-2">Services</h4>
              {homeContent.footer.links.services.map(link => (
                <Link key={link} href="/features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold tracking-wider text-foreground uppercase mb-2">Academy</h4>
              {homeContent.footer.links.academy.map(link => (
                <Link key={link} href="/features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold tracking-wider text-foreground uppercase mb-2">Company</h4>
              {homeContent.footer.links.company.map(link => (
                <Link key={link} href={`/${link.toLowerCase().replace(' us', '')}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold tracking-wider text-foreground uppercase mb-2">Legal</h4>
              {homeContent.footer.links.legal.map(link => (
                <Link key={link} href={`/${link.toLowerCase().replace(' of service', '').replace(' policy', '')}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border gap-4 relative z-10">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} {siteConfig.fullTitle}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href={siteConfig.socials.instagram.url} className="text-xs text-muted-foreground tracking-widest hover:text-primary uppercase transition-colors">
              {siteConfig.socials.instagram.label}
            </a>
            <a href={siteConfig.socials.facebook.url} className="text-xs text-muted-foreground tracking-widest hover:text-primary uppercase transition-colors">
              {siteConfig.socials.facebook.label}
            </a>
            <a href={siteConfig.socials.youtube.url} className="text-xs text-muted-foreground tracking-widest hover:text-primary uppercase transition-colors">
              {siteConfig.socials.youtube.label}
            </a>
          </div>
        </div>
      </div>

      {/* Giant background text decoration */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-full overflow-hidden flex justify-center pointer-events-none opacity-[0.03] select-none z-0">
          <span className="font-heading font-bold text-[15vw] leading-none whitespace-nowrap text-foreground">
              GLAMOUR
          </span>
      </div>
    </footer>
  );
}
