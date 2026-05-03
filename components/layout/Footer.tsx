import Link from "next/link"
import { homeContent } from "@/content/home"
import { LogoMarquee } from "@/components/visuals/LogoMarquee"

export function Footer() {
  const { footer } = homeContent

  return (
    <footer className="border-t border-border/40 bg-background pt-16 pb-8 text-sm">
      {/* Visual Component Integration */}
      <div className="container mx-auto mb-20 px-4 md:px-8">
        <h4 className="mb-8 text-center font-heading text-xl text-muted-foreground md:text-2xl">
          Trusted by Premium Brands
        </h4>
        <div className="opacity-50">
          {/* Temporary text nodes for Marquee since we don't have actual brand logos yet */}
          <LogoMarquee
            items={[
              <span
                key="1"
                className="font-heading text-2xl font-bold tracking-widest uppercase"
              >
                L&apos;Oréal
              </span>,
              <span
                key="2"
                className="font-heading text-2xl font-bold tracking-widest uppercase"
              >
                MAC
              </span>,
              <span
                key="3"
                className="font-heading text-2xl font-bold tracking-widest uppercase"
              >
                Bobbi Brown
              </span>,
              <span
                key="4"
                className="font-heading text-2xl font-bold tracking-widest uppercase"
              >
                Kérastase
              </span>,
              <span
                key="5"
                className="font-heading text-2xl font-bold tracking-widest uppercase"
              >
                Huda Beauty
              </span>,
            ]}
            speed={40}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand & Newsletter */}
          <div className="flex flex-col gap-4 md:col-span-2">
            <Link href="/" className="inline-block">
              <span className="font-heading text-3xl font-bold tracking-tight">
                Ajay<span className="text-primary">Sir</span>
              </span>
            </Link>
            <p className="mt-2 max-w-sm text-base leading-relaxed text-muted-foreground">
              {footer.newsletterHeadline}. {footer.newsletterSubtext}
            </p>
            {/* Simple Newsletter form stub */}
            <form className="mt-2 flex max-w-md">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 rounded-none border-b border-border bg-transparent px-0 py-2 text-foreground transition-colors focus:border-primary focus:outline-none"
              />
              <button
                type="submit"
                className="border-b border-primary px-4 text-xs font-semibold tracking-wider text-primary uppercase transition-colors hover:text-foreground"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold tracking-wider text-foreground uppercase">
              Explore
            </h4>
            <nav className="flex flex-col gap-3">
              <Link
                href="/about"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                About the Founder
              </Link>
              <Link
                href="/services"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Salon Services
              </Link>
              <Link
                href="/academy"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                The Academy
              </Link>
              <Link
                href="/pricing"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Investment
              </Link>
            </nav>
          </div>

          {/* Contact & Socials */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold tracking-wider text-foreground uppercase">
              Connect
            </h4>
            <div className="flex flex-col gap-3 text-muted-foreground">
              <p>{footer.address}</p>
              <a
                href={`mailto:${footer.email}`}
                className="transition-colors hover:text-primary"
              >
                {footer.email}
              </a>
              <a
                href={`tel:${footer.phone.replace(/[^0-9+]/g, "")}`}
                className="transition-colors hover:text-primary"
              >
                {footer.phone}
              </a>
            </div>
            <div className="mt-2 flex gap-4">
              {/* Stubs for socials */}
              <a
                href="#"
                className="text-xs font-semibold tracking-wider text-muted-foreground uppercase transition-colors hover:text-primary"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-xs font-semibold tracking-wider text-muted-foreground uppercase transition-colors hover:text-primary"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>

        {/* Legal Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 text-xs tracking-wider text-muted-foreground uppercase md:flex-row">
          <p>
            © {new Date().getFullYear()} Hair Makeup Academy. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-primary"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
