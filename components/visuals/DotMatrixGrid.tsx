"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useId } from "react"

interface DotMatrixGridProps {
  className?: string
  size?: number
  spacing?: number
  color?: string
  animate?: boolean
}

export function DotMatrixGrid({
  className,
  size = 2,
  spacing = 24,
  color = "var(--primary)",
  animate = true,
}: DotMatrixGridProps) {
  const id = useId()

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <svg width="100%" height="100%" className="opacity-20 dark:opacity-30">
        <defs>
          <pattern
            id={`dot-matrix-${id}`}
            x="0"
            y="0"
            width={spacing}
            height={spacing}
            patternUnits="userSpaceOnUse"
          >
            <circle cx={spacing / 2} cy={spacing / 2} r={size} fill={color} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#dot-matrix-${id})`} />
      </svg>

      {animate && (
        <motion.div
          className="absolute inset-0 z-10"
          style={{
            background: `radial-gradient(circle 400px at var(--mouse-x, 50%) var(--mouse-y, 50%), transparent 0%, var(--background) 100%)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
      )}
    </div>
  )
}
