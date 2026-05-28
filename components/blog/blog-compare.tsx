"use client"

import { CountUp } from "@/components/primitives/count-up"

interface Props {
  attrs: Record<string, string>
  lines: string[]
}

interface Row {
  kind: "before" | "after"
  label: string
  value: number
  symbol: string
}

function parseRow(raw: string): Row | null {
  const parts = raw.split("|").map((s) => s.trim())
  if (parts.length < 3) return null
  const kind = parts[0].toLowerCase() === "after" ? "after" : "before"
  const label = parts[1]
  const value = Number(parts[2].replace(/[,_$]/g, ""))
  const symbol = parts[3] ?? "$"
  if (Number.isNaN(value)) return null
  return { kind, label, value, symbol }
}

export function BlogCompare({ attrs, lines }: Props) {
  const rows = lines.map(parseRow).filter((r): r is Row => Boolean(r))
  if (rows.length < 2) return null
  const max = Math.max(...rows.map((r) => r.value)) || 1

  return (
    <section
      className="bc-compare"
      aria-label={attrs.title ?? "Comparison"}
    >
      {attrs.title && <p className="bc-compare-title">{attrs.title}</p>}
      <div className="bc-compare-bars">
        {rows.map((r, i) => (
          <div className={`bc-compare-row bc-compare-row--${r.kind}`} key={i}>
            <span className="bc-compare-label mono">{r.label}</span>
            <div
              className="bc-compare-bar"
              style={{ width: `${Math.max(6, (r.value / max) * 100)}%` }}
            >
              <span className="bc-compare-val">
                <CountUp
                  to={r.value}
                  prefix={r.symbol === "$" ? "$" : ""}
                  suffix={r.symbol === "$" ? "" : ` ${r.symbol}`}
                />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
