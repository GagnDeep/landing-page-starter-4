"use client"

import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

interface DotMatrixGridProps {
  className?: string
  size?: number // spacing between dots
  dotSize?: number // size of the dot itself
  dotColor?: string
  maskDirection?: "top" | "bottom" | "center" | "none"
}

export function DotMatrixGrid({
  className,
  size = 24,
  dotSize = 2,
  dotColor = "var(--color-muted-foreground)",
  maskDirection = "center",
}: DotMatrixGridProps) {
  const shouldReduceMotion = useReducedMotion()

  // Generate SVG pattern content
  const patternId = "dot-matrix-pattern"

  const getMaskStyle = () => {
    switch (maskDirection) {
      case "top":
        return { maskImage: "linear-gradient(to bottom, transparent, black)" }
      case "bottom":
        return { maskImage: "linear-gradient(to top, transparent, black)" }
      case "center":
        return {
          maskImage:
            "radial-gradient(circle at center, black, transparent 80%)",
        }
      case "none":
      default:
        return {}
    }
  }

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-[-1] opacity-30",
        className
      )}
      style={{ ...getMaskStyle(), WebkitMaskImage: getMaskStyle().maskImage }}
      aria-hidden="true"
    >
      <motion.svg
        className="h-full w-full"
        animate={
          !shouldReduceMotion
            ? {
                y: [0, -size],
              }
            : undefined
        }
        transition={{
          duration: 3, // Very slow, subtle crawl
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <defs>
          <pattern
            id={patternId}
            width={size}
            height={size}
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx={dotSize / 2}
              cy={dotSize / 2}
              r={dotSize / 2}
              fill={dotColor}
            />
          </pattern>
        </defs>
        {/* We make the rect slightly larger than 100% to ensure smooth infinite scrolling without cutting off */}
        <rect
          x="0"
          y="0"
          width="100%"
          height="200%"
          fill={`url(#${patternId})`}
        />
      </motion.svg>
    </div>
  )
}
