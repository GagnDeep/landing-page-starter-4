import Link from "next/link"
import { useTranslations } from "next-intl"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { Icon } from "@/components/primitives/icon"
import { site } from "@/lib/config/site.config"

// Bullet list — describes the paperwork we file. Tailored per incentive type.
const itemsByType: Record<string, string[]> = {
  ITC: [
    "City building permit + plan review",
    "Utility interconnection (NEM 3.0) application",
    "HOA mount-design approval (if required)",
    "Net-billing tariff election",
    "IRS Form 5695 worksheet at commissioning",
    "Property-tax exclusion filing (CA §73)",
  ],
  DBT: [
    "National Portal registration",
    "DISCOM (PSPCL) feasibility application",
    "Vendor empanelment proof",
    "Net-metering agreement",
    "Subsidy claim with installation invoice",
    "Bank-account linkage for direct transfer",
  ],
  credit: [
    "Utility net-metering application",
    "City permit + structural review",
    "Tariff credit registration",
    "Interconnection inspection",
    "Performance verification",
    "Documentation handoff to homeowner",
  ],
  rebate: [
    "State rebate application",
    "Utility interconnection",
    "Building permit",
    "Inspection scheduling",
    "Rebate claim with invoice",
    "Bank-account linkage for payment",
  ],
}

export function Subsidy() {
  const t = useTranslations("subsidy")
  const items = itemsByType[site.incentive.type] ?? itemsByType.ITC
  return (
    <section className="subsidy-band">
      <div className="container subsidy-grid">
        <div>
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <h2
            className="display subsidy-title"
            dangerouslySetInnerHTML={{ __html: t.raw("title") as string }}
          />
          <p className="subsidy-lead">{t("lead")}</p>
          <div className="subsidy-table mono">
            <div className="subsidy-row head">
              <span>{t("tableHeadSize")}</span>
              <span>{t("tableHeadAmount")}</span>
            </div>
            <div className="subsidy-row">
              <span>{t("row1kw")}</span>
              <span>{t("row1amt")}</span>
            </div>
            <div className="subsidy-row">
              <span>{t("row2kw")}</span>
              <span>{t("row2amt")}</span>
            </div>
            <div className="subsidy-row">
              <span>{t("row3kw")}</span>
              <span>{t("row3amt")}</span>
            </div>
          </div>
          <Link href="/calculator" className="btn btn-primary btn-lg">
            {t("cta")} <Icon.arrow />
          </Link>
        </div>
        <div className="subsidy-aside">
          <div className="subsidy-card card dark">
            <Eyebrow gold>{t("asideEyebrow")}</Eyebrow>
            <ul className="subsidy-list">
              {items.map((it) => (
                <li key={it}>
                  <Icon.check /> {it}
                </li>
              ))}
            </ul>
            <div className="subsidy-card-foot mono">{t("asideFoot")}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
