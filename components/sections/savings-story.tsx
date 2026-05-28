import { useTranslations } from "next-intl"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { site } from "@/lib/config/site.config"
import { formatMoney, formatMoneyCompact } from "@/lib/format"

export function SavingsStory() {
  const t = useTranslations("story")
  // Use a representative case study from the active market.
  const sample =
    site.content.caseStudies[0] ?? {
      beforeBill: site.copy.defaultBill,
      afterBill: Math.round(site.copy.defaultBill * 0.05),
    }
  const before = sample.beforeBill
  const after = sample.afterBill
  const annual = (before - after) * 12
  const lifetime = annual * site.calculator.lifetimeYears * site.calculator.lifetimeInflator
  const co2t = Math.round((sample.beforeBill * 12 * site.calculator.kgCo2PerKwh) / 1000)
  return (
    <section className="story">
      <div className="container story-grid">
        <div className="story-copy">
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <h2
            className="display story-h"
            dangerouslySetInnerHTML={{ __html: t.raw("title") as string }}
          />
          <p className="story-lead">{t("lead")}</p>

          <div className="story-bars">
            <div className="bar-row">
              <span className="bar-label mono">{t("before")}</span>
              <div className="bar bar-before" style={{ width: "100%" }}>
                <span className="bar-num">{formatMoney(before)}</span>
              </div>
            </div>
            <div className="bar-row">
              <span className="bar-label mono">{t("after")}</span>
              <div
                className="bar bar-after"
                style={{ width: `${(after / before) * 100}%` }}
              >
                <span className="bar-num">{formatMoney(after)}</span>
              </div>
            </div>
            <div className="bar-axis mono">
              <span>0</span>
              <span>{formatMoney(Math.round(before / 2))}</span>
              <span>{formatMoney(before)}</span>
            </div>
          </div>
        </div>

        <div className="story-stats">
          <div className="story-stat">
            <div className="label">{t("annual")}</div>
            <div className="readout">{formatMoney(annual)}</div>
          </div>
          <div className="story-stat">
            <div className="label">{t("payback")}</div>
            <div className="readout">
              {(sample.systemKw ? (sample.systemKw * site.calculator.perKwByType.Home * (1 - (site.incentive.pctOfCost ?? 0))) / annual : 4).toFixed(1)}
              <span className="unit">yrs</span>
            </div>
          </div>
          <div className="story-stat">
            <div className="label">{t("lifetime")}</div>
            <div className="readout">{formatMoneyCompact(lifetime)}</div>
          </div>
          <div className="story-stat">
            <div className="label">{t("co2")}</div>
            <div className="readout">
              {co2t}
              <span className="unit">t/yr</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
