"use client"

import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { CountUp } from "@/components/primitives/count-up"
import { useInView } from "@/hooks/use-in-view"
import { useMounted } from "@/hooks/use-mounted"
import { site } from "@/lib/config/site.config"
import { formatMoney } from "@/lib/format"

export function LiveGeneration() {
  const t = useTranslations("liveGen")
  const baseUnits = 18420000
  const baseHomes = 3420
  const baseCo2 = 13160
  const [tick, setTick] = useState(0)
  const [ref, seen] = useInView<HTMLElement>({ threshold: 0.2, once: false })
  const mounted = useMounted()

  useEffect(() => {
    if (!seen) return
    // requestAnimationFrame + visibility gate replaces a 12.5 Hz setInterval
    // that ran even when the tab was backgrounded. Throttles updates to
    // ~4 Hz with the same on-screen rolling effect at ~3× fewer React
    // reconciliations on mobile.
    let raf = 0
    let last = performance.now()
    const loop = (now: number) => {
      if (
        now - last > 240 &&
        document.visibilityState === "visible"
      ) {
        setTick((x) => x + 3)
        last = now
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [seen])

  const units = baseUnits + tick * 6
  const co2 = baseCo2 + tick * 0.004
  const now = mounted ? new Date() : null
  const hour = now?.getHours() ?? 12
  const isDay = hour >= 6 && hour <= 18
  const dayProgress =
    now && isDay
      ? Math.max(0, Math.min(1, (hour - 6 + now.getMinutes() / 60) / 12))
      : 0

  return (
    <section className="livegen" ref={ref}>
      <div className="livegen-bg" aria-hidden="true">
        <div className="livegen-sun" />
        <div className="livegen-rays" />
      </div>

      <div className="container">
        <div className="livegen-head">
          <Eyebrow>
            <span className="dot live-dot" /> {t("eyebrow")}
          </Eyebrow>
          <h2
            className="display livegen-h"
            dangerouslySetInnerHTML={{ __html: t.raw("title") as string }}
          />
          <p className="livegen-lead">{t("lead")}</p>
        </div>

        <div className="livegen-board">
          <div className="lg-card lg-card-hero">
            <div className="lg-card-eyebrow mono">
              <span className="live-pip" />
              {t("kwh")}
            </div>
            <div className="lg-card-num serif">
              {Math.floor(units).toLocaleString(site.currency.locale)}
            </div>
            <div className="lg-card-meta mono">
              + {formatMoney(units * site.calculator.tariffByType.Home)}{" "}
              {t("saved")}
            </div>
          </div>

          <div className="lg-card">
            <div className="lg-card-eyebrow mono">{t("homes")}</div>
            <div className="lg-card-num serif">
              <CountUp to={baseHomes} />
            </div>
            <div className="lg-card-meta mono">{t("across")}</div>
          </div>

          <div className="lg-card">
            <div className="lg-card-eyebrow mono">{t("co2")}</div>
            <div className="lg-card-num serif">
              {co2.toFixed(1)}
              <i>tonnes</i>
            </div>
            <div className="lg-card-meta mono">
              ≈ {Math.round(co2 * 47)} {t("trees")}
            </div>
          </div>

          <div className="lg-card lg-card-status">
            <div className="lg-card-eyebrow mono">
              <span
                className={isDay ? "live-pip" : "live-pip live-pip-night"}
              />
              {t("status")}
            </div>
            <div className="lg-status-row">
              <div className="lg-status-time serif">
                {now
                  ? now.toLocaleTimeString(site.currency.locale, {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : "—"}
              </div>
              <div className="lg-status-tag">
                {isDay ? t("generating") : t("resting")}
              </div>
            </div>
            <div className="lg-arc-wrap">
              <svg viewBox="0 0 200 80" className="lg-arc-svg">
                <path
                  d="M 10 70 Q 100 -20 190 70"
                  fill="none"
                  stroke="rgba(229,184,68,0.3)"
                  strokeWidth="1.5"
                  strokeDasharray="2 4"
                />
                {isDay && mounted && (
                  <circle
                    cx={10 + dayProgress * 180}
                    cy={70 - Math.sin(dayProgress * Math.PI) * 60}
                    r="6"
                    fill="var(--gold)"
                    style={{ filter: "drop-shadow(0 0 8px var(--gold))" }}
                  />
                )}
              </svg>
              <div className="lg-arc-labels mono">
                <span>6 AM</span>
                <span>NOON</span>
                <span>6 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="livegen-pulse-bar">
          <div className="livegen-pulse-track">
            <div className="livegen-pulse-fill" />
          </div>
          <div className="livegen-pulse-text mono">{t("refreshing")}</div>
        </div>
      </div>
    </section>
  )
}
