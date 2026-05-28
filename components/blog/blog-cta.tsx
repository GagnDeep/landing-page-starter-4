import Link from "next/link"
import { inlineHtml } from "./parse-body"

interface Props {
  attrs: Record<string, string>
  lines: string[]
}

export function BlogCta({ attrs, lines }: Props) {
  const href = attrs.href ?? "/calculator/"
  const label = attrs.label ?? "Run my numbers"
  const body = lines.filter((l) => l.trim()).join(" ")
  const isExternal = href.startsWith("http")

  return (
    <aside className="bc-cta" role="complementary">
      <div className="bc-cta-body">
        {attrs.title && <p className="bc-cta-title">{attrs.title}</p>}
        {body && (
          <p
            className="bc-cta-text"
            dangerouslySetInnerHTML={{ __html: inlineHtml(body) }}
          />
        )}
      </div>
      {isExternal ? (
        <a
          className="bc-cta-btn"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {label} <span aria-hidden="true">→</span>
        </a>
      ) : (
        <Link className="bc-cta-btn" href={href}>
          {label} <span aria-hidden="true">→</span>
        </Link>
      )}
    </aside>
  )
}
