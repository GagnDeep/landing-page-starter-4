"use client";

import Link from "next/link";
import { homeContent } from "@/content/home";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  const { footer, navigation } = homeContent;

  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand & Description */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-xl">
                P
              </div>
              <span className="font-heading font-bold text-xl tracking-tight">
                Perfect Smile
              </span>
            </Link>
            <p className="text-secondary-foreground/80 leading-relaxed text-sm max-w-sm">
              {footer.brandDescription}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4 lg:ml-8">
            <h3 className="font-heading font-semibold text-lg">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-secondary-foreground/80 hover:text-primary text-sm font-medium transition-colors w-fit"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-semibold text-lg">{homeContent.servicesOverview.sectionTitle}</h3>
            <nav className="flex flex-col gap-3">
              {homeContent.servicesOverview.services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="text-secondary-foreground/80 hover:text-primary text-sm font-medium transition-colors w-fit"
                >
                  {service.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-semibold text-lg">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-secondary-foreground/80">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>{footer.contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-secondary-foreground/80">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href={`tel:${footer.contactInfo.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-primary transition-colors">
                  {footer.contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-secondary-foreground/80">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href={`mailto:${footer.contactInfo.email}`} className="hover:text-primary transition-colors">
                  {footer.contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-secondary-foreground/80">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <span className="whitespace-pre-line">{footer.contactInfo.hours.replace(" | ", "\n")}</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/60">
          <p>{footer.copyright}</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
