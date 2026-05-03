import Link from "next/link";
import { contactContent } from "@/content/contact";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 pt-20 pb-10 border-t border-border mt-auto">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-heading text-3xl font-bold tracking-tight">
                Amil's<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Elevating everyday elegance through premium hair treatments and expert styling in Patiala.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/features#treatments" className="hover:text-primary transition-colors">Hair Botox</Link></li>
              <li><Link href="/features#treatments" className="hover:text-primary transition-colors">Keratin Therapy</Link></li>
              <li><Link href="/features#color" className="hover:text-primary transition-colors">Color & Balayage</Link></li>
              <li><Link href="/features#cuts" className="hover:text-primary transition-colors">Precision Cuts</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Lounge</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Journal</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Visit Us</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex flex-col">
                <span className="font-medium text-foreground">Address</span>
                <span>{contactContent.sections.details.address.value}</span>
              </li>
              <li className="flex flex-col pt-2">
                <span className="font-medium text-foreground">Hours</span>
                <span>{contactContent.sections.hours.weekdays}</span>
                <span>{contactContent.sections.hours.weekends}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50 text-xs text-muted-foreground">
          <p>© {currentYear} Amil's Hair Lounge. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <a href={contactContent.sections.details.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
