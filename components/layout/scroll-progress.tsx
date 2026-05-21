"use client"

import { useEffect, useState } from "react"

/**
 * Thin progress bar under the page nav that tracks scroll position.
 * Disabled when user prefers reduced motion.
 */
export function ScrollProgress() {
  const [pct, setPct] = useState(0)
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setEnabled(!mq.matches)
    const onChange = () => setEnabled(!mq.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  useEffect(() => {
    if (!enabled) return
    let raf = 0
    const update = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      setPct(max > 0 ? (h.scrollTop / max) * 100 : 0)
      raf = 0
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [enabled])

  if (!enabled) return null
  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress-fill" style={{ width: `${pct}%` }} />
    </div>
  )
}
