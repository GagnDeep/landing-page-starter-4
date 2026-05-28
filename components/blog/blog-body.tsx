import type { BlogBlock } from "./parse-body"
import { BlogCallout } from "./blog-callout"
import { BlogStats } from "./blog-stats"
import { BlogCompare } from "./blog-compare"
import { BlogTable } from "./blog-table"
import { BlogFaq } from "./blog-faq"
import { BlogSteps } from "./blog-steps"
import { BlogChecklist } from "./blog-checklist"
import { BlogCta } from "./blog-cta"
import { BlogQuote } from "./blog-quote"
import { inlineHtml } from "./parse-body"

interface Props {
  blocks: BlogBlock[]
}

export function BlogBody({ blocks }: Props) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return (
              <h2 id={b.id} key={i}>
                {b.text}
              </h2>
            )
          case "h3":
            return (
              <h3 id={b.id} key={i}>
                {b.text}
              </h3>
            )
          case "p":
            return (
              <p key={i} dangerouslySetInnerHTML={{ __html: b.html }} />
            )
          case "ul":
            return (
              <ul key={i}>
                {b.items.map((it, j) => (
                  <li
                    key={j}
                    dangerouslySetInnerHTML={{ __html: inlineHtml(it) }}
                  />
                ))}
              </ul>
            )
          case "ol":
            return (
              <ol key={i}>
                {b.items.map((it, j) => (
                  <li
                    key={j}
                    dangerouslySetInnerHTML={{ __html: inlineHtml(it) }}
                  />
                ))}
              </ol>
            )
          case "widget":
            return renderWidget(b.name, b.attrs, b.lines, i)
          default:
            return null
        }
      })}
    </>
  )
}

function renderWidget(
  name: string,
  attrs: Record<string, string>,
  lines: string[],
  key: number,
) {
  switch (name) {
    case "callout":
      return <BlogCallout key={key} attrs={attrs} lines={lines} />
    case "stats":
      return <BlogStats key={key} attrs={attrs} lines={lines} />
    case "compare":
      return <BlogCompare key={key} attrs={attrs} lines={lines} />
    case "table":
      return <BlogTable key={key} attrs={attrs} lines={lines} />
    case "faq":
      return <BlogFaq key={key} attrs={attrs} lines={lines} />
    case "steps":
      return <BlogSteps key={key} attrs={attrs} lines={lines} />
    case "checklist":
      return <BlogChecklist key={key} attrs={attrs} lines={lines} />
    case "cta":
      return <BlogCta key={key} attrs={attrs} lines={lines} />
    case "quote":
      return <BlogQuote key={key} attrs={attrs} lines={lines} />
    default:
      return null
  }
}
