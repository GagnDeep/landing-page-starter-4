import { useTranslations } from "next-intl"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { steps } from "@/content/steps"

export function HowItWorks() {
  const t = useTranslations("howItWorks")
  return (
    <section id="how">
      <div className="container">
        <div className="section-head how-head">
          <div>
            <Eyebrow>{t("eyebrow")}</Eyebrow>
            <h2
              className="display how-h"
              dangerouslySetInnerHTML={{ __html: t.raw("title") as string }}
            />
          </div>
          <p className="lead">{t("lead")}</p>
        </div>

        <div className="how-stack">
          {steps.map((s, i) => (
            <article
              key={s.n}
              className="how-row"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="how-row-num serif">{s.n}</div>
              <div className="how-row-body">
                <h4 className="serif how-row-t">{s.t}</h4>
                <p className="how-row-d">{s.d}</p>
              </div>
              <div className="how-row-bar" aria-hidden="true">
                <div className="how-row-bar-fill" />
              </div>
            </article>
          ))}
        </div>

        <div className="how-promise">
          <span className="how-promise-icon serif">✦</span>
          <span className="how-promise-text">
            <strong>{t("promise")}</strong>
          </span>
        </div>
      </div>
    </section>
  )
}
