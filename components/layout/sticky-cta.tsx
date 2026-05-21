"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { site, whatsappLink, telLink } from "@/lib/config/site.config"

/**
 * Mobile-only sticky CTA bar. Reveals after the user scrolls past
 * the hero (~600px). Hidden on >=720px where the page header is
 * always visible.
 */
export function StickyCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className="sticky-cta"
      data-visible={visible}
      aria-hidden={!visible}
      role="region"
      aria-label="Quick contact"
    >
      <Link href="/calculator/" className="btn btn-gold btn-sm sticky-cta-primary">
        Get quote
      </Link>
      <a
        href={whatsappLink(`Hi ${site.name}, I want to book a site visit.`)}
        className="btn btn-primary btn-sm"
        aria-label="WhatsApp us"
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp
      </a>
      <a
        href={telLink()}
        className="btn btn-ghost btn-sm sticky-cta-tel"
        aria-label="Call us"
      >
        Call
      </a>
    </div>
  )
}
