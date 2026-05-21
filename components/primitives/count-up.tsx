"use client"

import { useEffect, useState } from "react"
import { useInView } from "@/hooks/use-in-view"

interface Props {
  to: number
  duration?: number
  prefix?: string
  suffix?: string
  decimals?: number
  format?: boolean
}

export function CountUp({
  to,
  duration = 1400,
  prefix = "",
  suffix = "",
  decimals = 0,
  format = true,
}: Props) {
  const [ref, seen] = useInView<HTMLSpanElement>()
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!seen) return
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setVal(to * eased)
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [seen, to, duration])

  const num = decimals > 0 ? val.toFixed(decimals) : Math.round(val)
  const formatted =
    format && decimals === 0 ? Number(num).toLocaleString("en-IN") : num
  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}
