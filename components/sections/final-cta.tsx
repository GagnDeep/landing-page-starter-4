import Link from "next/link"
import { useTranslations } from "next-intl"
import { SunMotif } from "@/components/primitives/sun-motif"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { Icon } from "@/components/primitives/icon"
import { whatsappLink } from "@/lib/site"

export function FinalCTA() {
  const t = useTranslations("finalCta")
  return (
    <section className="final-cta">
      <div className="container final-inner">
        <div className="final-sun" aria-hidden="true">
          <SunMotif size={420} color="var(--gold)" strokeOpacity={0.5} />
        </div>
        <Eyebrow gold>{t("eyebrow")}</Eyebrow>
        <h2
          className="display final-title"
          dangerouslySetInnerHTML={{ __html: t.raw("title") as string }}
        />
        <p className="final-lead">{t("lead")}</p>
        <div className="final-ctas">
          <Link href="/calculator" className="btn btn-gold btn-lg">
            {t("ctaCalc")} <Icon.arrow />
          </Link>
          <a href={whatsappLink()} className="btn btn-ghost btn-lg">
            <Icon.whatsapp /> {t("ctaWhats")}
          </a>
        </div>
      </div>
    </section>
  )
}
