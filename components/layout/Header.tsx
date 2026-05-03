"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon, Cancel01Icon, Call02Icon } from "@hugeicons/core-free-icons";

import { navigation, preHeader } from '@/content/home';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/lib/utils';
import { CTAGlow, ToothIconSet } from '@/components/visuals';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col w-full">
      {/* Pre-Header Notification Bar */}
      <div className="w-full bg-primary text-primary-foreground text-xs md:text-sm py-2 px-4 text-center font-sans tracking-wide transition-colors">
        {preHeader}
      </div>

      {/* Main Navigation */}
      <div
        className={cn(
          "w-full transition-all duration-300 border-b",
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-border py-3 shadow-sm"
            : "bg-background border-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">

          {/* Logo / Brand Anchor */}
          <Link href="/" className="flex items-center space-x-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg">
            <ToothIconSet variant="shield" className="w-10 h-10 md:w-12 md:h-12 text-primary" />
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg md:text-xl text-foreground leading-tight group-hover:text-primary transition-colors">
                Dr. Bansal's
              </span>
              <span className="font-sans text-xs text-muted-foreground uppercase tracking-widest">
                Dental Care
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.primaryLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "font-sans text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-2 py-1",
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <Link href="/contact" tabIndex={-1}>
              <CTAGlow variant="primary" className="px-6 py-2.5 text-sm">
                Book Appointment
              </CTAGlow>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-4 lg:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <HugeiconsIcon icon={mobileMenuOpen ? Cancel01Icon : Menu01Icon} className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-[110px] bottom-0 bg-background/98 backdrop-blur-xl border-t border-border transition-transform duration-500 ease-in-out z-40 overflow-y-auto",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col px-6 py-8 space-y-6">
          <nav className="flex flex-col space-y-4">
            {navigation.primaryLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "font-heading text-2xl font-semibold transition-colors border-b border-border/50 pb-4",
                    isActive ? "text-primary" : "text-foreground hover:text-primary"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-6 flex flex-col space-y-6">
            <div className="flex items-center space-x-3 text-muted-foreground">
              <HugeiconsIcon icon={Call02Icon} className="w-5 h-5 text-primary" />
              <span className="font-sans font-medium">+91 XXXXX XXXXX</span>
            </div>
            <Link href="/contact" className="w-full" tabIndex={mobileMenuOpen ? 0 : -1}>
              <CTAGlow variant="primary" className="w-full py-4 text-lg justify-center">
                Book Appointment
              </CTAGlow>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
