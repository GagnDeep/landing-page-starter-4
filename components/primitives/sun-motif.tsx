interface Props {
  size?: number
  color?: string
  strokeOpacity?: number
  className?: string
}

export function SunMotif({
  size = 220,
  color = "currentColor",
  strokeOpacity = 0.9,
  className,
}: Props) {
  const rays = 24
  return (
    <svg
      width={size}
      height={size}
      viewBox="-100 -100 200 200"
      className={["sun-motif", className].filter(Boolean).join(" ")}
      aria-hidden="true"
    >
      <circle r="34" fill={color} />
      {Array.from({ length: rays }).map((_, i) => {
        const a = (i / rays) * Math.PI * 2
        const x1 = Math.cos(a) * 44
        const y1 = Math.sin(a) * 44
        const x2 = Math.cos(a) * (i % 2 === 0 ? 88 : 70)
        const y2 = Math.sin(a) * (i % 2 === 0 ? 88 : 70)
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={color}
            strokeOpacity={strokeOpacity}
            strokeWidth={i % 2 === 0 ? 1.5 : 1}
            strokeLinecap="round"
          />
        )
      })}
      <circle
        r="92"
        fill="none"
        stroke={color}
        strokeOpacity="0.18"
        strokeWidth="0.6"
        strokeDasharray="2 6"
      />
    </svg>
  )
}
