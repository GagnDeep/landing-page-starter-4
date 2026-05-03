"use client";

import React from "react";
import Link from "next/link";
import { homeContent } from "@/content/home";
import { MapPin, Phone, Mail } from "lucide-react";
import { SectionDivider } from "./visuals/SectionDivider";

export function Footer() {
  const { footer } = homeContent;

  return (
    <footer className="relative mt-24 bg-primary text-primary-foreground">
      {/* Visual Divider pointing up from the previous section */}
      <div className="absolute top-0 left-0 w-full transform -translate-y-[99%]">
         <SectionDivider type="curve" color="var(--primary)" />
      </div>

      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand & Mission */}
          <div className="space-y-4">
            <h3 className="font-heading text-2xl font-bold tracking-tight text-accent">
              {homeContent.header.logoText}
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Experience painless, compassionate dental care in a welcoming environment.
              We are open 24/7 for your family&apos;s needs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold text-accent">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/about" className="text-primary-foreground/80 hover:text-white transition-colors">About Us</Link>
              <Link href="/services" className="text-primary-foreground/80 hover:text-white transition-colors">Treatments</Link>
              <Link href="/pricing" className="text-primary-foreground/80 hover:text-white transition-colors">Pricing & Insurance</Link>
              <Link href="/blog" className="text-primary-foreground/80 hover:text-white transition-colors">Dental Journal</Link>
            </nav>
          </div>

          {/* Legal & Careers */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold text-accent">Information</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/faq" className="text-primary-foreground/80 hover:text-white transition-colors">FAQ</Link>
              <Link href="/careers" className="text-primary-foreground/80 hover:text-white transition-colors">Careers</Link>
              <Link href="/privacy" className="text-primary-foreground/80 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-primary-foreground/80 hover:text-white transition-colors">Terms of Service</Link>
            </nav>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold text-accent">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">{footer.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-primary-foreground/80">{footer.phone}</span>
                  <span className="text-destructive font-semibold">{footer.emergencyPhone}</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span className="text-primary-foreground/80">{footer.email}</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60">
            {footer.copyright}
          </p>
          <p className="text-xs text-primary-foreground/40">
            Images provided by <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-foreground/60">Unsplash</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
