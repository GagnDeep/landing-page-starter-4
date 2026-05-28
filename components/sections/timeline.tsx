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

        <ol className="tl-track" role="list">
          {timeline.map((day, i) => (
            <li
              key={i}
              className="tl-card"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="tl-card-head">
                <span className="tl-card-icon-wrap" aria-hidden="true">
                  <TimelineIcon name={day.icon} />
                </span>
                <span className="tl-card-day mono">{day.d}</span>
              </div>
              <h3 className="tl-card-t serif">{day.t}</h3>
              <p className="tl-card-s">{day.s}</p>
            </li>
          ))}
        </ol>

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
