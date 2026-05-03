"use client";

import * as React from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";
import { siteConfig } from "@/content/siteConfig";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-background/80 backdrop-blur-md border-border py-4 shadow-sm" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="relative z-50 flex flex-col items-center group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-sm"
        >
          <span className="font-heading text-2xl md:text-3xl font-bold tracking-[0.2em] text-foreground uppercase group-hover:text-primary transition-colors">
            {siteConfig.name}
          </span>
          <span className="text-[10px] md:text-xs tracking-[0.3em] text-muted-foreground uppercase mt-[-4px]">
            {siteConfig.tagline}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {siteConfig.nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-right hover:after:origin-left"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4 z-50">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center justify-center h-10 px-6 font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 rounded-none border border-primary"
          >
            {siteConfig.actions.book}
          </Link>
          <MobileMenu />
        </div>

      </div>
    </header>
  );
}
