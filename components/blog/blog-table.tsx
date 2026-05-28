import { inlineHtml } from "./parse-body"

interface Props {
  attrs: Record<string, string>
  lines: string[]
}

export function BlogTable({ attrs, lines }: Props) {
  const rows = lines
    .filter((l) => l.trim())
    .map((l) => l.split("|").map((c) => c.trim()))
  if (rows.length < 2) return null
  const [head, ...body] = rows

  return (
    <figure className="bc-table-wrap">
      <div className="bc-table-scroll">
        <table className="bc-table">
          <thead>
            <tr>
              {head.map((c, i) => (
                <th key={i}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {body.map((r, i) => (
              <tr key={i}>
                {r.map((c, j) => (
                  <td
                    key={j}
                    dangerouslySetInnerHTML={{ __html: inlineHtml(c) }}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {attrs.caption && (
        <figcaption className="bc-table-caption">{attrs.caption}</figcaption>
      )}
    </figure>
  )
}
