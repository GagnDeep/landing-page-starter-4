"use client"

import { useEffect, useRef, useState } from "react"

export interface UseInViewOpts {
  threshold?: number
  once?: boolean
}

export function useInView<T extends Element = HTMLDivElement>(
  opts: UseInViewOpts = { threshold: 0.25, once: true },
) {
  const ref = useRef<T | null>(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setSeen(true)
            if (opts.once) io.unobserve(el)
          } else if (!opts.once) {
            setSeen(false)
          }
        })
      },
      { threshold: opts.threshold ?? 0.25 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [opts.once, opts.threshold])

  return [ref, seen] as const
}
