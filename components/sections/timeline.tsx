import { useTranslations } from "next-intl"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { timeline } from "@/content/timeline"
import { TimelineIcon } from "@/components/primitives/timeline-icon"

export function Timeline() {
  const t = useTranslations("timeline")
  return (
    <section className="timeline">
      <div className="container">
        <div className="section-head">
          <div>
            <Eyebrow>{t("eyebrow")}</Eyebrow>
            <h2
              className="display tl-h"
              dangerouslySetInnerHTML={{ __html: t.raw("title") as string }}
            />
          </div>
          <p className="lead">{t("lead")}</p>
        </div>

        <div className="tl-rail-wrap">
          <div className="tl-rail" />
          <div className="tl-track">
            {timeline.map((day, i) => (
              <article
                key={i}
                className="tl-card"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="tl-card-step mono">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="tl-card-icon-wrap" aria-hidden="true">
                  <TimelineIcon name={day.icon} />
                </div>
                <div className="tl-card-day mono">{day.d}</div>
                <div className="tl-card-t serif">{day.t}</div>
                <div className="tl-card-s">{day.s}</div>
                <div className="tl-card-pin" aria-hidden="true">
                  <span className="tl-card-pin-dot" />
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="tl-finish">
          <div className="tl-finish-flag">
            <span className="serif">{t("finishMain")}</span>
            <span className="mono tl-finish-sub">{t("finishSub")}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
