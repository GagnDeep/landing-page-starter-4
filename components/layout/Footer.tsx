import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  InstagramIcon,
  Facebook01Icon,
  TwitterIcon,
} from "@hugeicons/core-free-icons"
import { globalContent } from "@/content/global"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { footer } = globalContent

  return (
    <footer className="rounded-t-[3rem] bg-foreground px-6 py-16 text-background md:px-12">
      <div className="mx-auto mb-16 grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-4">
        {/* Brand Col */}
        <div className="col-span-1 md:col-span-1">
          <Link
            href="/"
            className="mb-4 block font-heading text-3xl tracking-wide"
          >
            {footer.brand}
          </Link>
          <p className="mb-6 max-w-xs text-sm opacity-70">
            {footer.description}
          </p>
          <div className="flex gap-4">
            <Link
              href={footer.socialLinks.instagram}
              className="transition-colors hover:text-primary"
              aria-label="Instagram"
            >
              <HugeiconsIcon icon={InstagramIcon} className="h-5 w-5" />
            </Link>
            <Link
              href={footer.socialLinks.facebook}
              className="transition-colors hover:text-primary"
              aria-label="Facebook"
            >
              <HugeiconsIcon icon={Facebook01Icon} className="h-5 w-5" />
            </Link>
            <Link
              href={footer.socialLinks.twitter}
              className="transition-colors hover:text-primary"
              aria-label="Twitter"
            >
              <HugeiconsIcon icon={TwitterIcon} className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Links & Info dynamically rendered */}
        {footer.sections.map((section) => (
          <div key={section.heading}>
            <h4 className="mb-6 text-xs font-semibold tracking-widest text-muted uppercase">
              {section.heading}
            </h4>
            <ul className="space-y-4 text-sm opacity-80">
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Location */}
        <div>
          <h4 className="mb-6 text-xs font-semibold tracking-widest text-muted uppercase">
            {footer.location.heading}
          </h4>
          <address className="text-sm leading-relaxed whitespace-pre-wrap not-italic opacity-80">
            {footer.location.address}
          </address>
        </div>
      </div>

      {/* Sub-footer */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-background/20 pt-8 text-xs opacity-60 md:flex-row">
        <p>
          &copy; {currentYear} {footer.legal.copyright}
        </p>
        <div className="flex gap-6">
          {footer.legal.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
