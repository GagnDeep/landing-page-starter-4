"use client"

import { useState } from "react"
import { parseFaqLines, inlineHtml } from "./parse-body"

interface Props {
  attrs: Record<string, string>
  lines: string[]
}

export function BlogFaq({ attrs, lines }: Props) {
  const items = parseFaqLines(lines)
  const [open, setOpen] = useState<number | null>(0)
  if (!items.length) return null

  return (
    <section
      className="bc-faq"
      aria-label={attrs.title ?? "Frequently asked questions"}
    >
      {attrs.title && <p className="bc-faq-title">{attrs.title}</p>}
      <div className="bc-faq-list">
        {items.map((it, i) => {
          const isOpen = open === i
          return (
            <div
              key={i}
              className={"bc-faq-item" + (isOpen ? " is-open" : "")}
            >
              <button
                type="button"
                className="bc-faq-q"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span className="bc-faq-num mono">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="bc-faq-q-text serif">{it.q}</span>
                <span className="bc-faq-toggle" aria-hidden="true">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <p
                  className="bc-faq-a"
                  dangerouslySetInnerHTML={{ __html: inlineHtml(it.a) }}
                />
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
