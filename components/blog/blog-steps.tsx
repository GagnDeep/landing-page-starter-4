import { inlineHtml } from "./parse-body"

interface Props {
  attrs: Record<string, string>
  lines: string[]
}

interface Step {
  n: string
  title: string
  body: string
}

function parseStep(raw: string): Step | null {
  // "1. File IRS Form 5695 | Add the credit on line 5a…"
  const m = raw.match(/^\s*(\d+)\.\s*(.+)$/)
  if (!m) return null
  const rest = m[2]
  const [title, ...bodyParts] = rest.split("|").map((s) => s.trim())
  return {
    n: m[1].padStart(2, "0"),
    title: title ?? "",
    body: bodyParts.join(" | "),
  }
}

export function BlogSteps({ attrs, lines }: Props) {
  const steps = lines
    .map(parseStep)
    .filter((s): s is Step => Boolean(s))
  if (!steps.length) return null

  return (
    <section className="bc-steps" aria-label={attrs.title ?? "Steps"}>
      {attrs.title && <p className="bc-steps-title">{attrs.title}</p>}
      <ol className="bc-steps-list">
        {steps.map((s) => (
          <li className="bc-step" key={s.n}>
            <span className="bc-step-n mono">{s.n}</span>
            <div className="bc-step-body">
              <p className="bc-step-title">{s.title}</p>
              {s.body && (
                <p
                  className="bc-step-text"
                  dangerouslySetInnerHTML={{ __html: inlineHtml(s.body) }}
                />
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
