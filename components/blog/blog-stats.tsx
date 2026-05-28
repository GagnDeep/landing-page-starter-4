"use client"

import { CountUp } from "@/components/primitives/count-up"

interface Props {
  attrs: Record<string, string>
  lines: string[]
}

interface Stat {
  value: number
  unit: string
  label: string
  decimals: number
}

function parseLine(raw: string): Stat | null {
  const parts = raw.split("|").map((s) => s.trim())
  if (parts.length < 3) return null
  const [valStr, unit, label] = parts
  if (!valStr || !label) return null
  const num = Number(valStr.replace(/[,_]/g, ""))
  if (Number.isNaN(num)) return null
  const decimals = valStr.includes(".") ? valStr.split(".")[1].length : 0
  return { value: num, unit, label, decimals }
}

export function BlogStats({ attrs, lines }: Props) {
  const stats = lines
    .map(parseLine)
    .filter((s): s is Stat => Boolean(s))
  if (!stats.length) return null

  return (
    <section
      className="bc-stats"
      aria-label={attrs.title ?? "Key statistics"}
    >
      {attrs.title && <p className="bc-stats-title">{attrs.title}</p>}
      <div className="bc-stats-grid">
        {stats.map((s, i) => {
          const isPrefix = ["$", "€", "£", "₹"].includes(s.unit)
          return (
            <div className="bc-stat" key={i}>
              <div className="bc-stat-num">
                <CountUp
                  to={s.value}
                  decimals={s.decimals}
                  prefix={isPrefix ? s.unit : ""}
                  suffix={isPrefix || !s.unit ? "" : ` ${s.unit}`}
                  format
                />
              </div>
              <div className="bc-stat-label">{s.label}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
