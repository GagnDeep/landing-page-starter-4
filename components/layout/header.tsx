"use client";

import * as React from "react";
import Link from "next/link";
import { homeContent } from "@/content/home";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { useScroll, useMotionValueEvent } from "framer-motion";

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-heading font-medium text-xl tracking-tight text-foreground">
            The Smile Designers
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {homeContent.header.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button asChild className="hidden md:inline-flex rounded-full px-6">
            <Link href={homeContent.header.cta.href}>{homeContent.header.cta.label}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
