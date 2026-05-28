import Link from "next/link"
import { useTranslations } from "next-intl"
import { SunMotif } from "@/components/primitives/sun-motif"
import { Icon } from "@/components/primitives/icon"
import { HeroCalcCard } from "./hero-calc-card"
import { whatsappLink, site } from "@/lib/config/site.config"

interface Props {
  defaultCity?: string
  titleHtml?: string
  metaLeft?: string
  lead?: string
}

/**
 * The hero headline is the most visible string on the entire site.
 * We compose it from the active market preset so a translation-key miss
 * or stale Turbopack cache cannot leave a raw "hero.titleLine2" visible
 * to a visitor. Translations still cover meta/CTAs/stats.
 */
function safeT(t: ReturnType<typeof useTranslations>, key: string, fallback: string) {
  const v = t(key)
  // next-intl returns the dotted key path when a message is missing —
  // detect that and substitute the market-driven fallback.
  if (!v || v.includes(".") && /^\w+\.\w+$/.test(v)) return fallback
  return v
}

export function Hero({
  defaultCity,
  titleHtml,
  metaLeft,
  lead,
}: Props) {
  const t = useTranslations("hero")
  const defaultHeadline = `${site.copy.regionPossessive} sun,<br/>on your <em>roof</em>.`
  const headline = titleHtml ?? defaultHeadline
  const defaultLead = `Rooftop solar designed, installed and serviced from ${site.address.locality} — ${site.copy.serviceArea}. ${site.incentive.short} handled, paperwork done, generating in ${site.copy.installDays}.`
  const heroLead = lead ?? safeT(t, "lead", defaultLead)
  const heroMetaLeft = metaLeft ?? safeT(t, "metaLeft", `${site.address.locality} · est. ${site.foundingYear}`)
  const heroMetaRight = safeT(t, "metaRight", site.businessIdLabel + " " + site.businessId)
  const ctaCalc = safeT(t, "ctaCalc", "Calculate my savings")
  const ctaWhats = safeT(t, "ctaWhats", "Text us")
  return (
    <header id="top" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-sun">
          <SunMotif size={620} color="var(--gold)" strokeOpacity={0.55} />
        </div>
        <div className="hero-grain"></div>
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="hero-meta mono">
            <span>
              <span className="dot-dot"></span>
              {heroMetaLeft}
            </span>
            <span className="sep">/</span>
            <span>{heroMetaRight}</span>
          </div>

          <h1
            className="display hero-title"
            dangerouslySetInnerHTML={{ __html: headline }}
          />

          <p className="hero-lead">{heroLead}</p>

          <div className="hero-ctas">
            <Link
              href="/calculator"
              className="btn btn-gold btn-lg"
              data-cta="hero-primary"
            >
              {ctaCalc} <Icon.arrow />
            </Link>
            <a
              href={whatsappLink()}
              className="btn btn-ghost btn-lg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Message ${site.name} on WhatsApp at ${site.phone}`}
              data-cta="hero-whatsapp"
            >
              <Icon.whatsapp /> {ctaWhats}
            </a>
          </div>

          {site.rating.count > 0 && (
            <div
              className="hero-rating mono"
              aria-label={`Rated ${site.rating.value} out of ${site.rating.best} from ${site.rating.count} customer reviews`}
            >
              <span className="hero-rating-stars" aria-hidden="true">
                {"★".repeat(Math.round(site.rating.value))}
                {"☆".repeat(site.rating.best - Math.round(site.rating.value))}
              </span>
              <strong>{site.rating.value.toFixed(1)}</strong>
              <span className="hero-rating-sep" aria-hidden="true">
                ·
              </span>
              <span>
                {site.rating.count.toLocaleString()} verified reviews
              </span>
            </div>
          )}

          <dl className="hero-stats">
            <div>
              <dd className="readout">
                {safeT(
                  t,
                  "stat1Num",
                  site.incentive.pctOfCost
                    ? `${Math.round(site.incentive.pctOfCost * 100)}%`
                    : site.currency.symbol +
                        Math.round(site.incentive.max / 1000) +
                        "k",
                )}
              </dd>
              <dt className="label">
                {safeT(t, "stat1Label", "Incentive")}
              </dt>
            </div>
            <div className="rule-v" aria-hidden="true"></div>
            <div>
              <dd className="readout">
                {safeT(
                  t,
                  "stat2Num",
                  site.copy.installDays.replace(/\D/g, "") || "21",
                )}
                <span className="unit">
                  {safeT(t, "stat2Unit", "days")}
                </span>
              </dd>
              <dt className="label">
                {safeT(t, "stat2Label", "Avg time to power-on")}
              </dt>
            </div>
            <div className="rule-v" aria-hidden="true"></div>
            <div>
              <dd className="readout">
                {safeT(t, "stat3Num", String(site.calculator.lifetimeYears))}
                <span className="unit">
                  {safeT(t, "stat3Unit", "yrs")}
                </span>
              </dd>
              <dt className="label">
                {safeT(t, "stat3Label", "Panel warranty")}
              </dt>
            </div>
          </dl>
        </div>

        <div className="hero-aside">
          <HeroCalcCard defaultCity={defaultCity} />
        </div>
      </div>
    </header>
  )
}
