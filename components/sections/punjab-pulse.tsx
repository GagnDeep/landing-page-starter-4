"use client"

import { useTranslations } from "next-intl"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { CountUp } from "@/components/primitives/count-up"
import { useInView } from "@/hooks/use-in-view"
import { citiesOnMap } from "@/content/cities-on-map"

export function PunjabPulse() {
  const t = useTranslations("pulse")
  const [ref, seen] = useInView<HTMLDivElement>({ threshold: 0.3 })
  return (
    <section className="pulse">
      <div className="container">
        <div className="pulse-head">
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <h2
            className="display pulse-h"
            dangerouslySetInnerHTML={{ __html: t.raw("title") as string }}
          />
        </div>
        <div className="pulse-stage" ref={ref}>
          <svg viewBox="0 0 100 100" className="pulse-svg">
            <path
              d="M15,18 L40,12 L62,16 L78,28 L82,46 L74,62 L80,78 L62,90 L40,86 L24,72 L18,52 L12,36 Z"
              fill="var(--paper)"
              stroke="var(--line)"
              strokeWidth="0.4"
            />
            {seen &&
              citiesOnMap.map((c, i) =>
                citiesOnMap.slice(i + 1).map((d, j) => (
                  <line
                    key={i + "-" + j}
                    x1={c.x}
                    y1={c.y}
                    x2={d.x}
                    y2={d.y}
                    stroke="var(--gold)"
                    strokeWidth="0.15"
                    opacity="0.3"
                    className="pulse-line"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                )),
              )}
            {seen &&
              citiesOnMap.map((c, i) => (
                <g
                  key={c.name}
                  className="pulse-node"
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  <circle
                    cx={c.x}
                    cy={c.y}
                    r="3"
                    fill="var(--gold)"
                    opacity="0.25"
                    className="pulse-ring"
                  />
                  <circle cx={c.x} cy={c.y} r="0.9" fill="var(--gold-deep)" />
                  <text
                    x={c.x + 2}
                    y={c.y + 0.6}
                    fontSize="2"
                    fill="var(--ink)"
                    fontFamily="var(--mono)"
                  >
                    {c.name}
                  </text>
                </g>
              ))}
          </svg>
          <div className="pulse-stats">
            <div className="pulse-stat">
              <div className="ps-num serif">
                <CountUp to={23} />
              </div>
              <div className="ps-lbl mono">{t("districts")}</div>
            </div>
            <div className="pulse-stat">
              <div className="ps-num serif">
                <CountUp to={6240} />
              </div>
              <div className="ps-lbl mono">{t("homes")}</div>
            </div>
            <div className="pulse-stat">
              <div className="ps-num serif">
                <CountUp to={42} suffix="MW" />
              </div>
              <div className="ps-lbl mono">{t("totalMW")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
