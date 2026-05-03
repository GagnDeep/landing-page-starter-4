"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedHeroIllustrationProps {
  className?: string
  strokeColor?: string
}

export function AnimatedHeroIllustration({
  className,
  strokeColor = "var(--primary)",
}: AnimatedHeroIllustrationProps) {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 1 + i * 0.5
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 3, bounce: 0 } as any,
          opacity: { delay, duration: 0.5 },
        },
      }
    },
  }

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center",
        className
      )}
    >
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 400 400"
        initial="hidden"
        animate="visible"
        className="max-w-[400px] opacity-80"
        style={{ stroke: strokeColor }}
      >
        {/* Stylized Scissors (Salon Metaphor) */}
        <motion.path
          d="M 150 250 L 250 150 M 150 150 L 250 250"
          fill="transparent"
          strokeWidth="3"
          strokeLinecap="round"
          variants={draw}
          custom={0}
        />
        <motion.circle
          cx="135"
          cy="265"
          r="15"
          fill="transparent"
          strokeWidth="3"
          variants={draw}
          custom={1}
        />
        <motion.circle
          cx="135"
          cy="135"
          r="15"
          fill="transparent"
          strokeWidth="3"
          variants={draw}
          custom={1}
        />

        {/* Abstract Sparkle/Stars (Beauty/Elegance) */}
        <motion.path
          d="M 300 100 Q 300 120 320 120 Q 300 120 300 140 Q 300 120 280 120 Q 300 120 300 100"
          fill={strokeColor}
          strokeWidth="1"
          variants={draw}
          custom={2}
          className="opacity-50"
        />
        <motion.path
          d="M 80 280 Q 80 290 90 290 Q 80 290 80 300 Q 80 290 70 290 Q 80 290 80 280"
          fill={strokeColor}
          strokeWidth="1"
          variants={draw}
          custom={2.5}
          className="opacity-50"
        />

        {/* Geometry (Academy/Precision Metaphor) */}
        <motion.rect
          x="100"
          y="100"
          width="200"
          height="200"
          fill="transparent"
          strokeWidth="1"
          strokeDasharray="4 4"
          variants={draw}
          custom={3}
          className="opacity-30"
        />
      </motion.svg>
    </div>
  )
}
