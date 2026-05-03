"use client"

import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FloatingBlobsProps {
  className?: string
  colors?: [string, string, string] // Expecting valid CSS color values
}

export function FloatingBlobs({
  className,
  colors = [
    "var(--color-primary)",
    "var(--color-secondary)",
    "var(--color-accent)",
  ],
}: FloatingBlobsProps) {
  const shouldReduceMotion = useReducedMotion()

  // If reduced motion is preferred, we just show static, slightly opaque shapes
  const duration = shouldReduceMotion ? 0 : 20

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      {/* Blob 1 - Top Left */}
      <motion.div
        className="absolute -top-24 -left-24 h-96 w-96 rounded-full opacity-30 mix-blend-multiply blur-3xl dark:opacity-20 dark:mix-blend-screen"
        style={{ backgroundColor: colors[0] }}
        animate={
          !shouldReduceMotion
            ? {
                x: [0, 40, -20, 0],
                y: [0, -30, 50, 0],
                scale: [1, 1.1, 0.9, 1],
              }
            : undefined
        }
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      {/* Blob 2 - Bottom Right */}
      <motion.div
        className="absolute -right-24 -bottom-24 h-96 w-96 rounded-full opacity-30 mix-blend-multiply blur-3xl dark:opacity-20 dark:mix-blend-screen"
        style={{ backgroundColor: colors[1] }}
        animate={
          !shouldReduceMotion
            ? {
                x: [0, -50, 20, 0],
                y: [0, 40, -40, 0],
                scale: [1, 0.9, 1.1, 1],
              }
            : undefined
        }
        transition={{
          duration: duration * 1.2, // slightly different duration to avoid syncing
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
      />
      {/* Blob 3 - Center */}
      <motion.div
        className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 mix-blend-multiply blur-3xl dark:opacity-10 dark:mix-blend-screen"
        style={{ backgroundColor: colors[2] }}
        animate={
          !shouldReduceMotion
            ? {
                x: ["-50%", "-40%", "-60%", "-50%"],
                y: ["-50%", "-60%", "-40%", "-50%"],
                scale: [1, 1.2, 0.8, 1],
              }
            : undefined
        }
        transition={{
          duration: duration * 1.5,
          repeat: Infinity,
          ease: "linear",
          delay: 4,
        }}
      />
    </div>
  )
}
