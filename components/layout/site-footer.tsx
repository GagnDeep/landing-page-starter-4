import { useTranslations } from "next-intl"
import { SunMotif } from "@/components/primitives/sun-motif"

export function SiteFooter() {
  const t = useTranslations("footer")
  return (
    <footer className="site-foot">
      <div className="container foot-grid">
        <div className="foot-brand">
          <SunMotif size={36} />
          <div>
            <div className="serif foot-name">Punjab Solar</div>
            <div className="mono foot-sub">Patiala · since 2018</div>
          </div>
        </div>
        <div className="foot-col">
          <div className="label">{t("office")}</div>
          <p>{t("officeText")}</p>
        </div>
        <div className="foot-col">
          <div className="label">{t("contact")}</div>
          <p>{t("contactText")}</p>
        </div>
        <div className="foot-col">
          <div className="label">{t("empanelled")}</div>
          <p>{t("empanelledText")}</p>
        </div>
      </div>
      <div className="foot-bottom mono container">
        <span>{t("copyright")}</span>
        <span>{t("tagline")}</span>
      </div>
    </footer>
  )
}
