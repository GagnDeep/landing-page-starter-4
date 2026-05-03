import React from 'react';
import Link from 'next/link';
import { HugeiconsIcon } from "@hugeicons/react";
import { Location01Icon, Call02Icon, Mail01Icon } from "@hugeicons/core-free-icons";

import { navigation } from '@/content/home';
import { clinicInfo } from '@/content/contact';
import { ToothIconSet } from '@/components/visuals';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border mt-auto">
      <div className="container mx-auto px-4 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand & Mission (Spans 4 cols on large screens) */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <Link href="/" className="flex items-center space-x-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg w-fit">
              <ToothIconSet variant="clean" className="w-10 h-10 text-primary" />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl text-foreground leading-tight group-hover:text-primary transition-colors">
                  Dr. Bansal&apos;s
                </span>
                <span className="font-sans text-xs text-muted-foreground uppercase tracking-widest">
                  Dental Care
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground font-sans leading-relaxed max-w-sm">
              Providing expert, gentle dentistry in a calming environment. We prioritize your comfort and oral health at every step, serving the Patiala community with pride.
            </p>
          </div>

          {/* Quick Links (Spans 2 cols) */}
          <div className="lg:col-span-2 flex flex-col space-y-6">
            <h3 className="font-heading font-semibold text-lg text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              {navigation.primaryLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-sans text-muted-foreground hover:text-primary transition-colors w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Details (Spans 3 cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-6">
            <h3 className="font-heading font-semibold text-lg text-foreground">Contact Us</h3>
            <ul className="flex flex-col space-y-4 font-sans text-muted-foreground">
              <li className="flex items-start space-x-3">
                <HugeiconsIcon icon={Location01Icon} className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>
                  {clinicInfo.address.line1}<br />
                  {clinicInfo.address.line2}, {clinicInfo.address.city}<br />
                  {clinicInfo.address.state} {clinicInfo.address.pin}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <HugeiconsIcon icon={Call02Icon} className="w-5 h-5 text-primary shrink-0" />
                <a href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-primary transition-colors">
                  {clinicInfo.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <HugeiconsIcon icon={Mail01Icon} className="w-5 h-5 text-primary shrink-0" />
                <a href={`mailto:${clinicInfo.email}`} className="hover:text-primary transition-colors">
                  {clinicInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Operating Hours (Spans 3 cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-6">
            <h3 className="font-heading font-semibold text-lg text-foreground">Hours</h3>
            <ul className="flex flex-col space-y-3 font-sans text-muted-foreground">
              {clinicInfo.hours.map((hour, idx) => {
                const [day, time] = hour.split(': ');
                return (
                  <li key={idx} className="flex flex-col">
                    <span className="font-medium text-foreground">{day}</span>
                    <span>{time || "Closed"}</span>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-sm text-muted-foreground">
          <p>© {currentYear} Dr. Bansal&apos;s Dental Care. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
