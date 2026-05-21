import Link from "next/link"
import { useTranslations } from "next-intl"
import { SunMotif } from "@/components/primitives/sun-motif"
import { Icon } from "@/components/primitives/icon"
import { HeroCalcCard } from "./hero-calc-card"
import { whatsappLink } from "@/lib/site"

interface Props {
  defaultCity?: string
  titleHtml?: string
  metaLeft?: string
  lead?: string
}

export function Hero({
  defaultCity,
  titleHtml,
  metaLeft,
  lead,
}: Props) {
  const t = useTranslations("hero")
  const headline =
    titleHtml ?? `${t("titleLine1")}<br/>${t("titleLine2")}`
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
              {metaLeft ?? t("metaLeft")}
            </span>
            <span className="sep">/</span>
            <span>{t("metaRight")}</span>
          </div>

          <h1
            className="display hero-title"
            dangerouslySetInnerHTML={{ __html: headline }}
          />

          <p className="hero-lead">{lead ?? t("lead")}</p>

          <div className="hero-ctas">
            <Link href="/calculator" className="btn btn-gold btn-lg">
              {t("ctaCalc")} <Icon.arrow />
            </Link>
            <a href={whatsappLink()} className="btn btn-ghost btn-lg">
              <Icon.whatsapp /> {t("ctaWhats")}
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <div className="readout">{t("stat1Num")}</div>
              <div className="label">{t("stat1Label")}</div>
            </div>
            <div className="rule-v"></div>
            <div>
              <div className="readout">
                {t("stat2Num")}
                <span className="unit">{t("stat2Unit")}</span>
              </div>
              <div className="label">{t("stat2Label")}</div>
            </div>
            <div className="rule-v"></div>
            <div>
              <div className="readout">
                {t("stat3Num")}
                <span className="unit">{t("stat3Unit")}</span>
              </div>
              <div className="label">{t("stat3Label")}</div>
            </div>
          </div>
        </div>

        <div className="hero-aside">
          <HeroCalcCard defaultCity={defaultCity} />
        </div>
      </div>
    </header>
  )
}
