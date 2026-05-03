"use client"

import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

interface CTAGlowProps {
  children: React.ReactNode
  className?: string
}

export function CTAGlow({ children, className }: CTAGlowProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className={cn("group relative", className)}>
      {/* Background glow that animates on hover */}
      <motion.div
        className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary to-secondary opacity-0 blur transition duration-1000 group-hover:opacity-70 group-hover:duration-200"
        animate={
          !shouldReduceMotion
            ? {
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }
            : undefined
        }
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ backgroundSize: "200% 200%" }}
        aria-hidden="true"
      />
      {/* The actual button content */}
      <div className="relative">{children}</div>
    </div>
  )
}
