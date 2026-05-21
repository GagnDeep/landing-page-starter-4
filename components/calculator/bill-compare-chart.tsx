"use client"

import { useState, type MouseEvent } from "react"
import { useTranslations } from "next-intl"
import type { CalcInput, CalcResult } from "@/lib/calculator"

interface Props {
  data: CalcInput
  results: CalcResult
}

type RangeKey = "year" | "5yr" | "25yr"

export function BillCompareChart({ data, results }: Props) {
  const t = useTranslations("calculator")
  const [range, setRange] = useState<RangeKey>("year")

  const ranges: Record<
    RangeKey,
    { months: number; ticks: [string, string, string]; label: string }
  > = {
    year: { months: 12, ticks: ["Today", "6 months", "1 year"], label: t("year1") },
    "5yr": { months: 60, ticks: ["Today", "Year 2", "Year 5"], label: t("fiveYears") },
    "25yr": { months: 300, ticks: ["Today", "Year 12", "Year 25"], label: t("lifetime") },
  }
  const cfg = ranges[range]
  const months = cfg.months
  const inflate = 1.06

  const today: number[] = []
  const withSolar: number[] = []
  for (let i = 0; i < months; i++) {
    const x = data.bill * Math.pow(inflate, i / 12)
    today.push(x)
    withSolar.push(
      Math.max(0, x - results.monthlySavings * Math.pow(inflate, i / 12)),
    )
  }
  const maxV = Math.max(...today)
  const W = 600
  const H = 200
  const P = 24
  const PR = 16
  const PB = 28
  const xStep = (W - P - PR) / (months - 1)
  const yScale = (v: number) => H - PB - (v / maxV) * (H - PB - 16)
  const path = (arr: number[]) =>
    arr
      .map((v, i) => `${i === 0 ? "M" : "L"} ${P + i * xStep} ${yScale(v)}`)
      .join(" ")
  const fillToday = `${path(today)} L ${P + (months - 1) * xStep} ${H - PB} L ${P} ${H - PB} Z`
  const fillSolar = `${path(withSolar)} L ${P + (months - 1) * xStep} ${H - PB} L ${P} ${H - PB} Z`

  const [hover, setHover] = useState<number | null>(null)
  const onMove = (e: MouseEvent<SVGSVGElement>) => {
    const svg = e.currentTarget
    const pt = svg.createSVGPoint()
    pt.x = e.clientX
    pt.y = e.clientY
    const ctm = svg.getScreenCTM()
    if (!ctm) return
    const lp = pt.matrixTransform(ctm.inverse())
    const i = Math.max(
      0,
      Math.min(months - 1, Math.round((lp.x - P) / xStep)),
    )
    setHover(i)
  }
  const onLeave = () => setHover(null)
  const animKey = range
  const totalSaved = withSolar.reduce(
    (acc, v, i) => acc + (today[i] - v),
    0,
  )

  return (
    <div className="bill-chart">
      <div className="bc-head">
        <div className="bc-title">
          <span className="bc-saved-eyebrow mono">
            {t("saved", { label: cfg.label.toLowerCase() })}
          </span>
          <span className="bc-saved-num serif">
            ₹{Math.round(totalSaved).toLocaleString("en-IN")}
          </span>
        </div>
        <div className="bc-range seg">
          {(Object.keys(ranges) as RangeKey[]).map((k) => (
            <button
              key={k}
              className={range === k ? "active" : ""}
              onClick={() => setRange(k)}
            >
              {ranges[k].label}
            </button>
          ))}
        </div>
      </div>

      <div className="bc-legend">
        <span className="bc-leg">
          <span className="sw sw-today"></span>
          {t("withoutSolar")}
        </span>
        <span className="bc-leg">
          <span className="sw sw-solar"></span>
          {t("withSolarLeg")}
        </span>
      </div>

      <svg
        key={animKey}
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        className="bc-svg"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        {[0.25, 0.5, 0.75].map((g) => (
          <line
            key={g}
            x1={P}
            x2={W - PR}
            y1={PB + (H - PB - 16) * g}
            y2={PB + (H - PB - 16) * g}
            stroke="var(--line)"
            strokeWidth="1"
            strokeDasharray="2 4"
          />
        ))}
        <path
          d={fillToday}
          fill="rgba(184, 85, 46, 0.10)"
          className="bc-anim-fill bc-anim-today"
        />
        <path
          d={path(today)}
          fill="none"
          stroke="var(--terracotta)"
          strokeWidth="2.5"
          className="bc-anim-line bc-anim-today"
        />
        <path
          d={fillSolar}
          fill="rgba(229, 184, 68, 0.28)"
          className="bc-anim-fill bc-anim-solar"
        />
        <path
          d={path(withSolar)}
          fill="none"
          stroke="var(--gold-deep)"
          strokeWidth="2.5"
          className="bc-anim-line bc-anim-solar"
        />
        {hover != null && (
          <g>
            <line
              x1={P + hover * xStep}
              x2={P + hover * xStep}
              y1={16}
              y2={H - PB}
              stroke="var(--ink)"
              strokeWidth="1"
              strokeDasharray="3 3"
              opacity="0.4"
            />
            <circle
              cx={P + hover * xStep}
              cy={yScale(today[hover])}
              r="4"
              fill="var(--terracotta)"
            />
            <circle
              cx={P + hover * xStep}
              cy={yScale(withSolar[hover])}
              r="4"
              fill="var(--gold-deep)"
            />
          </g>
        )}
        <text x={P} y={H - 8} className="bc-axis-text">
          {cfg.ticks[0]}
        </text>
        <text
          x={W / 2}
          y={H - 8}
          textAnchor="middle"
          className="bc-axis-text"
        >
          {cfg.ticks[1]}
        </text>
        <text
          x={W - PR}
          y={H - 8}
          textAnchor="end"
          className="bc-axis-text"
        >
          {cfg.ticks[2]}
        </text>
      </svg>

      {hover != null && (
        <div className="bc-tooltip mono">
          <span>
            Month {hover + 1}: bill ₹
            {Math.round(today[hover]).toLocaleString("en-IN")} → ₹
            {Math.round(withSolar[hover]).toLocaleString("en-IN")} with solar
          </span>
        </div>
      )}

      <div className="bc-takeaway">
        <span className="bc-takeaway-icon" aria-hidden="true">
          ✦
        </span>
        <span dangerouslySetInnerHTML={{ __html: t.raw("takeaway") as string }} />
      </div>
    </div>
  )
}
