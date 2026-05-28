"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import { SunMotif } from "@/components/primitives/sun-motif"
import { Icon } from "@/components/primitives/icon"
import { phone } from "@/lib/site"
import { NavMobileSheet } from "./nav-mobile-sheet"
import { cn } from "@/lib/utils"
import { site } from "@/lib/config/site.config"

// Derive the brand wordmark — first space-delimited word + the rest as the sub.
const brandWords = site.name.split(" ")
const brandHead = brandWords[0]
const brandTail = brandWords.slice(1).join(" ") || "SOLAR"

// Language toggle codes (currently visual-only; "EN" always active).
const langCodes = site.locales.map((l) => l.toUpperCase()) as readonly string[]

export function SiteHeader() {
  const t = useTranslations("nav")
  const [scrolled, setScrolled] = useState(false)
  const [lang, setLang] = useState<string>(langCodes[0] ?? "EN")
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <nav className={cn("nav", scrolled && "is-scrolled")}>
        <div className="container nav-inner">
          <Link href="/" className="brand" aria-label={`${site.name} home`}>
            <span className="brand-mark" aria-hidden="true">
              <SunMotif size={28} />
            </span>
            <span className="brand-word">
              <span className="serif">{brandHead}</span>
              <span className="mono brand-sub">
                {brandTail.toUpperCase()} · EST. {site.foundingYear}
              </span>
            </span>
          </Link>

          <div className="nav-links mono">
            <Link href="/how-it-works">{t("howItWorks")}</Link>
            <Link href="/packages">{t("packages")}</Link>
            <Link href="/calculator">{t("calculator")}</Link>
            <Link href="/blog">{t("blog")}</Link>
            <Link href="/about">{t("whyUs")}</Link>
            <Link href="/faq">{t("faq")}</Link>
          </div>

          <div className="nav-actions">
            {/* Language toggle only renders when 2+ locales ship actual
                translated content. A disabled "coming soon" toggle was
                a dead control in the prior build and dragged trust. */}
            {langCodes.length > 1 && (
              <div
                className="seg lang-seg"
                role="tablist"
                aria-label="Language"
              >
                {langCodes.map((l) => (
                  <button
                    key={l}
                    role="tab"
                    aria-selected={lang === l}
                    className={lang === l ? "active" : ""}
                    onClick={() => setLang(l)}
                  >
                    {l}
                  </button>
                ))}
              </div>
            )}
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="btn btn-ghost btn-sm nav-phone"
            >
              <Icon.phone /> {t("phone")}
            </a>
            <Link href="/calculator" className="btn btn-primary btn-sm">
              {t("getQuote")} <Icon.arrow />
            </Link>
            <button
              className="nav-mobile-trigger"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-controls="mobile-nav-sheet"
              aria-expanded={mobileOpen}
            >
              <Icon.menu />
            </button>
          </div>
        </div>
      </nav>
      <NavMobileSheet
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  )
}
