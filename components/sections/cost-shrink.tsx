"use client"

import { useTranslations } from "next-intl"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { CountUp } from "@/components/primitives/count-up"
import { useInView } from "@/hooks/use-in-view"

export function CostShrink() {
  const t = useTranslations("costShrink")
  const [ref, seen] = useInView<HTMLDivElement>()
  return (
    <section className="cshrink">
      <div className="container cshrink-grid">
        <div className="cshrink-copy">
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <h2
            className="display cshrink-h"
            dangerouslySetInnerHTML={{ __html: t.raw("title") as string }}
          />
          <p
            className="cshrink-lead"
            dangerouslySetInnerHTML={{ __html: t.raw("lead") as string }}
          />
        </div>
        <div className="cshrink-stage" ref={ref}>
          <div className="cshrink-row cshrink-before">
            <div
              className="cshrink-bar cshrink-bar-before"
              style={{ width: seen ? "92%" : "8%" }}
            >
              <span className="cshrink-amt serif">₹4,500</span>
            </div>
            <span className="cshrink-lbl mono">{t("today")}</span>
          </div>
          <div className="cshrink-arrow" aria-hidden="true">
            ↓
          </div>
          <div className="cshrink-row cshrink-after">
            <div
              className="cshrink-bar cshrink-bar-after"
              style={{ width: seen ? "12%" : "92%" }}
            >
              <span className="cshrink-amt serif">₹360</span>
            </div>
            <span className="cshrink-lbl mono">{t("after")}</span>
          </div>
          <div className="cshrink-saving">
            <span className="mono cshrink-saving-eyebrow">
              {t("savingEyebrow")}
            </span>
            <span className="serif cshrink-saving-num">
              ₹<CountUp to={4140} />
            </span>
            <span className="mono cshrink-saving-suffix">
              {t("savingSuffix")}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
