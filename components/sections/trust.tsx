"use client"

import { useTranslations } from "next-intl"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { CountUp } from "@/components/primitives/count-up"
import { stats } from "@/content/stats"
import { reasons } from "@/content/reasons"

const STAT_NUMS: { to: number; prefix?: string; suffix?: string; decimals?: number }[] = [
  { to: 1247 },
  { to: 8.4, suffix: " MW", decimals: 1 },
  { to: 23, suffix: "/23" },
  { to: 4.9, suffix: "★", decimals: 1 },
]

export function Trust() {
  const t = useTranslations("trust")
  return (
    <section id="trust">
      <div className="container">
        <div className="trust-stats">
          {stats.map((s, i) => (
            <div key={s.l} className="trust-stat">
              <div className="readout">
                <CountUp
                  to={STAT_NUMS[i].to}
                  prefix={STAT_NUMS[i].prefix}
                  suffix={STAT_NUMS[i].suffix}
                  decimals={STAT_NUMS[i].decimals ?? 0}
                  format={false}
                />
              </div>
              <div className="label">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="section-head trust-head">
          <div>
            <Eyebrow>{t("eyebrow")}</Eyebrow>
            <h2
              className="display"
              dangerouslySetInnerHTML={{ __html: t.raw("title") as string }}
            />
          </div>
          <p className="lead">{t("lead")}</p>
        </div>

        <div className="reasons-grid">
          {reasons.map((r, i) => (
            <div key={r.t} className="reason">
              <div className="reason-num mono">0{i + 1}</div>
              <h4 className="serif">{r.t}</h4>
              <p>{r.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
