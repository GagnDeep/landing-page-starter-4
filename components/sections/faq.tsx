"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { faqs as allFaqs, type FAQ as FAQItem } from "@/content/faqs"

interface Props {
  filter?: FAQItem["category"]
  items?: FAQItem[]
}

export function FAQ({ filter, items }: Props) {
  const t = useTranslations("faq")
  const list =
    items ??
    (filter ? allFaqs.filter((f) => f.category === filter) : allFaqs)
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq">
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

        <div className="faq-list">
          {list.map((it, i) => (
            <div
              key={i}
              className={"faq-item" + (open === i ? " is-open" : "")}
            >
              <button
                className="faq-summary"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="faq-num mono">
                  Q.{String(i + 1).padStart(2, "0")}
                </span>
                <span className="serif faq-q">{it.q}</span>
                <span className="faq-toggle" aria-hidden="true">
                  +
                </span>
              </button>
              <div className="faq-body">
                <p className="faq-a">{it.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
