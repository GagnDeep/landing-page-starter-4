"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import { SunMotif } from "@/components/primitives/sun-motif"
import { Icon } from "@/components/primitives/icon"
import { phone } from "@/lib/site"
import { NavMobileSheet } from "./nav-mobile-sheet"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const t = useTranslations("nav")
  const [scrolled, setScrolled] = useState(false)
  const [lang, setLang] = useState<"EN" | "ਪੰ" | "हि">("EN")
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
          <Link href="/" className="brand" aria-label="Punjab Solar home">
            <span className="brand-mark" aria-hidden="true">
              <SunMotif size={28} />
            </span>
            <span className="brand-word">
              <span className="serif">Punjab</span>
              <span className="mono brand-sub">SOLAR · EST. 2018</span>
            </span>
          </Link>

          <div className="nav-links mono">
            <Link href="/how-it-works">{t("howItWorks")}</Link>
            <Link href="/packages">{t("packages")}</Link>
            <Link href="/calculator">{t("calculator")}</Link>
            <Link href="/about">{t("whyUs")}</Link>
            <Link href="/faq">{t("faq")}</Link>
          </div>

          <div className="nav-actions">
            <div
              className="seg lang-seg"
              role="tablist"
              aria-label="Language"
            >
              {(["EN", "ਪੰ", "हि"] as const).map((l) => (
                <button
                  key={l}
                  className={lang === l ? "active" : ""}
                  onClick={() => setLang(l)}
                  disabled={l !== "EN"}
                  title={l !== "EN" ? t("comingSoon") : undefined}
                >
                  {l}
                </button>
              ))}
            </div>
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
