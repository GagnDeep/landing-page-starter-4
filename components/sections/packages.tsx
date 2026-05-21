"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { Icon } from "@/components/primitives/icon"
import { useInView } from "@/hooks/use-in-view"
import { tiers } from "@/content/packages"
import { cn } from "@/lib/utils"

export function Packages() {
  const t = useTranslations("packages")
  const [rowRef, rowSeen] = useInView<HTMLDivElement>({ threshold: 0.15, once: true })
  return (
    <section id="packages" className="packages-section">
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

        <div className="pkg-row" ref={rowRef}>
          {tiers.map((tier) => (
            <div
              key={tier.slug}
              className={cn("pkg-tile anim", rowSeen && "in", tier.featured && "is-featured")}
            >
              {tier.badge && (
                <span
                  className={cn(
                    "pkg-badge mono",
                    tier.featured && "gold",
                  )}
                >
                  {tier.badge}
                </span>
              )}
              <h3 className="serif">{tier.name}</h3>
              <div className="pkg-tile-sub">{tier.sub}</div>
              <div className="pkg-tile-spec mono">
                <div>
                  <span>Panels</span>
                  <span>{tier.panels}</span>
                </div>
                <div>
                  <span>Inverter</span>
                  <span>{tier.inverter}</span>
                </div>
                <div>
                  <span>Warranty</span>
                  <span>{tier.warranty}</span>
                </div>
                <div>
                  <span>Install time</span>
                  <span>{tier.installTime}</span>
                </div>
              </div>
              <div className="pkg-tile-price">
                <span className="strike mono">{tier.strike}</span>
                <span className="serif price">{tier.price}</span>
              </div>
              <Link href="/calculator" className="btn btn-primary pkg-tile-cta">
                {t("customize")} <Icon.arrow />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
