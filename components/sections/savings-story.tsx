import { useTranslations } from "next-intl"
import { Eyebrow } from "@/components/primitives/eyebrow"

export function SavingsStory() {
  const t = useTranslations("story")
  const before = 6800
  const after = 380
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
                <span className="bar-num">
                  ₹{before.toLocaleString("en-IN")}
                </span>
              </div>
            </div>
            <div className="bar-row">
              <span className="bar-label mono">{t("after")}</span>
              <div
                className="bar bar-after"
                style={{ width: `${(after / before) * 100}%` }}
              >
                <span className="bar-num">₹{after}</span>
              </div>
            </div>
            <div className="bar-axis mono">
              <span>0</span>
              <span>₹3,500</span>
              <span>₹7,000</span>
            </div>
          </div>
        </div>

        <div className="story-stats">
          <div className="story-stat">
            <div className="label">{t("annual")}</div>
            <div className="readout">₹76,800</div>
          </div>
          <div className="story-stat">
            <div className="label">{t("payback")}</div>
            <div className="readout">
              3.2<span className="unit">yrs</span>
            </div>
          </div>
          <div className="story-stat">
            <div className="label">{t("lifetime")}</div>
            <div className="readout">
              ₹22<span className="unit">L</span>
            </div>
          </div>
          <div className="story-stat">
            <div className="label">{t("co2")}</div>
            <div className="readout">
              6.6<span className="unit">t/yr</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
