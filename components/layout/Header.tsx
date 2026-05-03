"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";

import { homeContent } from "@/content/home";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CTAGlow } from "@/components/visuals";

export function Header() {
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Handle scroll effect for sticky header
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full flex flex-col">
      {/* Announcement Bar */}
      <div className="w-full bg-secondary text-secondary-foreground py-2 px-4 text-center text-sm font-medium">
        {homeContent.announcementBar.message}
        {homeContent.announcementBar.ctaText && homeContent.announcementBar.ctaHref && (
          <Link
            href={homeContent.announcementBar.ctaHref}
            className="ml-2 underline underline-offset-4 hover:text-primary transition-colors"
          >
            {homeContent.announcementBar.ctaText}
          </Link>
        )}
      </div>

      {/* Main Navigation */}
      <div
        className={cn(
          "w-full transition-all duration-300 border-b",
          isScrolled
            ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-sm border-border"
            : "bg-background border-transparent"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between">

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                {/* Simulated Logo Mark */}
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-xl">
                  P
                </div>
                <span className="font-heading font-bold text-xl tracking-tight text-foreground">
                  Perfect Smile
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {homeContent.navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === item.href
                      ? "text-primary font-semibold"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle theme"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-muted-foreground hover:text-foreground"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
              <CTAGlow>
                <Button asChild className="rounded-full px-6 font-medium shadow-md">
                  <Link href={homeContent.hero.primaryCta.href}>
                    {homeContent.hero.primaryCta.label}
                  </Link>
                </Button>
              </CTAGlow>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle theme"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-muted-foreground hover:text-foreground mr-1"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Open menu">
                    <Menu className="h-6 w-6 text-foreground" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0 flex flex-col">
                  <div className="p-6 border-b flex justify-between items-center">
                    <span className="font-heading font-bold text-xl tracking-tight text-foreground">
                      Perfect Smile
                    </span>
                  </div>
                  <nav className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
                    {homeContent.navigation.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "text-lg font-medium transition-colors hover:text-primary",
                          pathname === item.href
                            ? "text-primary font-semibold"
                            : "text-foreground"
                        )}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="p-6 border-t bg-muted/20">
                    <Button asChild className="w-full rounded-full py-6 text-lg font-medium shadow-md" size="lg">
                      <Link href={homeContent.hero.primaryCta.href} onClick={() => setIsMobileMenuOpen(false)}>
                        {homeContent.hero.primaryCta.label}
                      </Link>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
