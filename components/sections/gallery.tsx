"use client"

import { useTranslations } from "next-intl"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { StripePlaceholder } from "@/components/primitives/stripe-placeholder"
import { useInView } from "@/hooks/use-in-view"
import { gallery } from "@/content/gallery"

export function Gallery() {
  const t = useTranslations("gallery")
  const [gridRef, gridSeen] = useInView<HTMLDivElement>({ threshold: 0.1, once: true })
  return (
    <section className="gallery">
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
        <div className="gallery-grid" ref={gridRef}>
          {gallery.map((it, i) => (
            <figure key={i} className={`gallery-item anim${gridSeen ? " in" : ""}`}>
              <StripePlaceholder
                label={`${it.city} · ${it.size}`}
                aspect={it.a}
              />
              <figcaption>
                <span className="serif">{it.city}</span>
                <span className="mono">
                  {it.size} · {it.type}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
