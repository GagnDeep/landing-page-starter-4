"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { Icon } from "@/components/primitives/icon"
import { site } from "@/lib/config/site.config"

interface Props {
  open: boolean
  onClose: () => void
}

/**
 * Mobile navigation sheet rendered as a real accessible dialog:
 * - `role="dialog" aria-modal="true"` so assistive tech stops announcing
 *   content underneath while the sheet is open.
 * - Initial focus moves to the close button.
 * - Escape closes the sheet (matches the platform expectation set by
 *   native dialogs and shadcn primitives elsewhere in the app).
 * - Body scroll is locked while open so the under-sheet doesn't drift.
 */
export function NavMobileSheet({ open, onClose }: Props) {
  const t = useTranslations("nav")
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      id="mobile-nav-sheet"
      className="nav-mobile-sheet"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
    >
      <div className="nav-mobile-sheet-head">
        <span className="mono">{site.name.toUpperCase()}</span>
        <button
          ref={closeRef}
          className="nav-mobile-sheet-close"
          onClick={onClose}
          aria-label="Close menu"
        >
          <Icon.close />
        </button>
      </div>
      <Link href="/how-it-works" onClick={onClose}>
        {t("howItWorks")}
      </Link>
      <Link href="/packages" onClick={onClose}>
        {t("packages")}
      </Link>
      <Link href="/calculator" onClick={onClose}>
        {t("calculator")}
      </Link>
      <Link href="/subsidy" onClick={onClose}>
        Incentive
      </Link>
      <Link href="/service-areas" onClick={onClose}>
        Service areas
      </Link>
      <Link href="/case-studies" onClick={onClose}>
        Case studies
      </Link>
      <Link href="/blog" onClick={onClose}>
        {t("blog")}
      </Link>
      <Link href="/faq" onClick={onClose}>
        {t("faq")}
      </Link>
      <Link href="/contact" onClick={onClose}>
        Contact
      </Link>
    </div>
  )
}
