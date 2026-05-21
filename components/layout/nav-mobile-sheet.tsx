"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { Icon } from "@/components/primitives/icon"

interface Props {
  open: boolean
  onClose: () => void
}

export function NavMobileSheet({ open, onClose }: Props) {
  const t = useTranslations("nav")
  if (!open) return null
  return (
    <div className="nav-mobile-sheet">
      <div className="nav-mobile-sheet-head">
        <span className="mono">PUNJAB SOLAR</span>
        <button
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
        Subsidy
      </Link>
      <Link href="/service-areas" onClick={onClose}>
        Service areas
      </Link>
      <Link href="/case-studies" onClick={onClose}>
        Case studies
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
