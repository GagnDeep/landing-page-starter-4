import { cn } from "@/lib/utils"
import { inlineHtml } from "./parse-body"

interface Props {
  attrs: Record<string, string>
  lines: string[]
}

const KIND = new Set(["tip", "note", "warn", "savings"])

export function BlogCallout({ attrs, lines }: Props) {
  const rawType = (attrs.type ?? "tip").toLowerCase()
  const type = KIND.has(rawType) ? rawType : "tip"
  const title = attrs.title
  const body = lines.filter((l) => l.trim()).join(" ")

  return (
    <aside
      className={cn("bc-callout", `bc-callout--${type}`)}
      role="note"
    >
      <span className="bc-callout-mark mono" aria-hidden="true">
        {type === "warn" ? "!" : type === "savings" ? "$" : type === "note" ? "·" : "★"}
      </span>
      <div className="bc-callout-body">
        {title && <p className="bc-callout-title">{title}</p>}
        <p
          className="bc-callout-text"
          dangerouslySetInnerHTML={{ __html: inlineHtml(body) }}
        />
      </div>
    </aside>
  )
}
