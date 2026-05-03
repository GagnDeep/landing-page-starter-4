"use client"

import { motion, useInView, useSpring, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface AnimatedStatCounterProps {
  value: number
  label: string
  suffix?: string
  duration?: number
  className?: string
}

export function AnimatedStatCounter({
  value,
  label,
  suffix = "",
  duration = 2.5,
  className,
}: AnimatedStatCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const motionValue = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  })

  const displayValue = useTransform(motionValue, (latest) =>
    Math.round(latest).toLocaleString()
  )

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, motionValue, value])

  return (
    <div
      ref={ref}
      className={cn("flex flex-col items-center text-center", className)}
    >
      <div className="flex items-baseline gap-1 font-heading text-4xl text-foreground md:text-5xl lg:text-6xl">
        <motion.span>{displayValue}</motion.span>
        {suffix && <span className="text-primary">{suffix}</span>}
      </div>
      <div className="mt-2 text-sm font-semibold tracking-widest text-muted-foreground uppercase md:text-base">
        {label}
      </div>
    </div>
  )
}
