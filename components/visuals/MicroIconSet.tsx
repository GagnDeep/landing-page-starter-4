"use client"

import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

interface MicroIconSetProps {
  icons: React.ReactNode[] // Expected to be SVG elements or Icon components
  className?: string
  staggerDelay?: number
}

export function MicroIconSet({
  icons,
  className,
  staggerDelay = 0.15,
}: MicroIconSetProps) {
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 24,
      },
    },
  }

  return (
    <motion.div
      className={cn("flex items-center gap-4 text-muted-foreground", className)}
      variants={shouldReduceMotion ? undefined : containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
    >
      {icons.map((icon, idx) => (
        <motion.div
          key={idx}
          variants={shouldReduceMotion ? undefined : itemVariants}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-muted/50"
          whileHover={
            !shouldReduceMotion
              ? {
                  scale: 1.1,
                  color: "var(--color-primary)",
                  backgroundColor: "var(--color-primary-foreground)",
                }
              : undefined
          }
        >
          {icon}
        </motion.div>
      ))}
    </motion.div>
  )
}
