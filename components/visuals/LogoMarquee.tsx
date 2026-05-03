"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import React from "react"

interface LogoMarqueeProps {
  className?: string
  items: React.ReactNode[]
  speed?: number // Duration for one full loop in seconds
  direction?: "left" | "right"
}

export function LogoMarquee({
  className,
  items,
  speed = 30,
  direction = "left",
}: LogoMarqueeProps) {
  // Duplicate items to ensure seamless scrolling
  const duplicatedItems = [...items, ...items, ...items]

  return (
    <div className={cn("relative flex w-full overflow-hidden", className)}>
      <motion.div
        className="flex shrink-0 items-center gap-16 px-8 md:gap-24 md:px-12"
        animate={{
          x: direction === "left" ? ["0%", "-33.33%"] : ["-33.33%", "0%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 opacity-60 grayscale transition-opacity duration-300 hover:opacity-100 hover:grayscale-0"
          >
            {item}
          </div>
        ))}
      </motion.div>

      {/* Edge Gradients for smooth fade out */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background to-transparent" />
    </div>
  )
}
