import { useTranslations } from "next-intl"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { partners } from "@/content/partners"

export function Partners() {
  const t = useTranslations("partners")
  return (
    <section className="partners">
      <div className="container">
        <div className="section-head">
          <div>
            <Eyebrow>{t("eyebrow")}</Eyebrow>
            <h2
              className="display"
              dangerouslySetInnerHTML={{ __html: t.raw("title") as string }}
            />
          </div>
          <p className="lead">{t("lead")}</p>
        </div>
        <div className="partners-grid">
          {partners.map((p) => (
            <div key={p.n} className="partner-cell">
              <div className="serif partner-name">{p.n}</div>
              <div className="mono partner-cat">{p.c}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
