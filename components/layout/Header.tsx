"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { globalContent } from "@/content/global";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className={cn(
        "absolute top-0 w-full z-50 flex items-center justify-between px-6 py-6 md:px-12",
    )}>
      {/* Brand */}
      <Link href="/" className="font-heading text-2xl tracking-wide z-10 flex-1">
        {globalContent.header.brand}
      </Link>

      {/* Main Nav (Desktop) */}
      <nav className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase font-medium flex-1 justify-center">
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
      <div className="flex-1 flex justify-end">
        <Button variant={isHome ? "secondary" : "default"} asChild className="rounded-full tracking-wider uppercase text-xs px-6">
          <Link href={globalContent.header.cta.href}>{globalContent.header.cta.label}</Link>
        </Button>
      </div>
    </header>
  );
}
