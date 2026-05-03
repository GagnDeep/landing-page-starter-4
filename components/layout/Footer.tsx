import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { InstagramIcon, Facebook01Icon, TwitterIcon } from "@hugeicons/core-free-icons";
import { globalContent } from "@/content/global";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { footer } = globalContent;

  return (
    <footer className="bg-foreground text-background py-16 px-6 md:px-12 rounded-t-[3rem]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand Col */}
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="font-heading text-3xl tracking-wide block mb-4">
            {footer.brand}
          </Link>
          <p className="text-sm opacity-70 mb-6 max-w-xs">
            {footer.description}
          </p>
          <div className="flex gap-4">
            <Link href={footer.socialLinks.instagram} className="hover:text-primary transition-colors" aria-label="Instagram">
              <HugeiconsIcon icon={InstagramIcon} className="h-5 w-5" />
            </Link>
            <Link href={footer.socialLinks.facebook} className="hover:text-primary transition-colors" aria-label="Facebook">
              <HugeiconsIcon icon={Facebook01Icon} className="h-5 w-5" />
            </Link>
            <Link href={footer.socialLinks.twitter} className="hover:text-primary transition-colors" aria-label="Twitter">
              <HugeiconsIcon icon={TwitterIcon} className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Links & Info dynamically rendered */}
        {footer.sections.map((section) => (
            <div key={section.heading}>
              <h4 className="font-semibold tracking-widest uppercase text-xs mb-6 text-muted">{section.heading}</h4>
              <ul className="space-y-4 text-sm opacity-80">
                  {section.links.map((link) => (
                      <li key={link.label}><Link href={link.href} className="hover:text-primary transition-colors">{link.label}</Link></li>
                  ))}
              </ul>
            </div>
        ))}

        {/* Location */}
        <div>
          <h4 className="font-semibold tracking-widest uppercase text-xs mb-6 text-muted">{footer.location.heading}</h4>
          <address className="text-sm opacity-80 not-italic leading-relaxed whitespace-pre-wrap">
            {footer.location.address}
          </address>
        </div>
      </div>

      {/* Sub-footer */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
        <p>&copy; {currentYear} {footer.legal.copyright}</p>
        <div className="flex gap-6">
          {footer.legal.links.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-primary transition-colors">{link.label}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
