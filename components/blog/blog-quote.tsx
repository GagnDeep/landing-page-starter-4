import { inlineHtml } from "./parse-body"

interface Props {
  attrs: Record<string, string>
  lines: string[]
}

export function BlogQuote({ attrs, lines }: Props) {
  const text = lines.filter((l) => l.trim()).join(" ")
  if (!text) return null
  return (
    <figure className="bc-quote">
      <blockquote
        className="bc-quote-text serif"
        dangerouslySetInnerHTML={{ __html: inlineHtml(text) }}
      />
      {attrs.attribution && (
        <figcaption className="bc-quote-attr mono">
          — {attrs.attribution}
        </figcaption>
      )}
    </figure>
  )
}
