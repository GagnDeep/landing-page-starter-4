"use client"

import { useSyncExternalStore } from "react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { PageHero } from "@/components/layout/page-hero"
import { Icon } from "@/components/primitives/icon"
import { whatsappLink } from "@/lib/site"

interface QuotePayload {
  ref: string
  form: { name: string; phone: string; address: string; date: string; slot: string }
  data: { city: string }
  results: { sysKw: number; net: number; subsidy: number }
  pkg: { label: string; brand: string; inverter: string; delta: number } | null
  ts: number
}

const subscribe = () => () => {}
const readPayload = (): QuotePayload | null => {
  try {
    const raw = sessionStorage.getItem("psl-quote")
    return raw ? (JSON.parse(raw) as QuotePayload) : null
  } catch {
    return null
  }
}

export default function ThanksPage() {
  const t = useTranslations("thanks")
  const payload = useSyncExternalStore(subscribe, readPayload, () => null)
  const loaded = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  )

  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Booking confirmed"
          titleHtml={`<em>Thank you</em>${payload ? `, ${payload.form.name.split(" ")[0]}` : ""}.`}
          lead={t("lead")}
        />
        <section className="tight">
          <div className="container" style={{ maxWidth: 760 }}>
            {loaded && !payload && (
              <p className="lead">
                {t("noBooking")}{" "}
                <Link href="/calculator/" className="btn btn-primary btn-sm">
                  {t("newQuote")} <Icon.arrow />
                </Link>
              </p>
            )}
            {payload && (
              <div className="done-card card">
                <div className="done-row mono">
                  <span>Reference</span>
                  <span className="bold">{payload.ref}</span>
                </div>
                {payload.pkg && (
                  <div className="done-row mono">
                    <span>System</span>
                    <span>
                      {payload.pkg.label} · {payload.results.sysKw} kW
                    </span>
                  </div>
                )}
                <div className="done-row mono">
                  <span>City</span>
                  <span>{payload.data.city}</span>
                </div>
                <div className="done-row mono">
                  <span>Site visit</span>
                  <span>
                    {payload.form.date || "Within 48 hrs"} ·{" "}
                    {payload.form.slot}
                  </span>
                </div>
                <div className="done-row mono">
                  <span>Address</span>
                  <span className="addr">{payload.form.address}</span>
                </div>
              </div>
            )}
            <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href={whatsappLink()} className="btn btn-gold btn-lg">
                <Icon.whatsapp /> WhatsApp us
              </a>
              <Link href="/" className="btn btn-ghost btn-lg">
                Back home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
