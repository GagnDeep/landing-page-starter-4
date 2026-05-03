"use client";

import Link from "next/link";
import { homeContent } from "@/content/home";
import { contactContent } from "@/content/contact";
import { MapPin, Phone, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    // Only set year after component has mounted to prevent hydration errors
    const year = new Date().getFullYear();
    // A small timeout ensures we don't synchronously set state during the initial effect cycle,
    // avoiding the cascading render warning while still preventing hydration mismatches.
    const timer = setTimeout(() => {
      setCurrentYear(year);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className="w-full border-t border-border bg-muted/30 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8">

          {/* Brand & Mission */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center gap-2 group mb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <span className="font-heading text-xl font-bold">D</span>
              </div>
              <span className="font-heading text-xl font-semibold tracking-tight">
                {homeContent.footer.clinicName}
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              {homeContent.footer.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-heading text-lg font-medium">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              {homeContent.navigation.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit">
                FAQ
              </Link>
              <Link href="/careers" className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit">
                Careers
              </Link>
            </nav>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-heading text-lg font-medium">Contact Us</h3>
            <ul className="flex flex-col space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  {contactContent.location.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  {contactContent.contactDetails.phone.value}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  {contactContent.contactDetails.email.value}
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-heading text-lg font-medium">Hours</h3>
            <ul className="flex flex-col space-y-3">
              {contactContent.hours.schedule.map((slot, idx) => (
                <li key={idx} className="flex flex-col">
                  <span className="text-sm font-medium text-foreground">{slot.days}</span>
                  <span className="text-sm text-muted-foreground">{slot.hours}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between border-t border-border/50 pt-8 md:flex-row gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {currentYear || ""} {homeContent.footer.clinicName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
