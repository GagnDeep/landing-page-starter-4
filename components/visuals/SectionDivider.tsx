"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionDividerProps {
  className?: string
  type?: "wave" | "line" | "diamond"
}

export function SectionDivider({
  className,
  type = "diamond",
}: SectionDividerProps) {
  if (type === "line") {
    return (
      <div
        className={cn(
          "flex w-full items-center justify-center py-12",
          className
        )}
      >
        <motion.div
          className="relative h-px w-full max-w-sm bg-border"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
        </motion.div>
      </div>
    )
  }

  if (type === "wave") {
    return (
      <div
        className={cn(
          "w-full overflow-hidden leading-0 text-secondary dark:text-muted/20",
          className
        )}
      >
        <svg
          className="relative block h-[50px] w-[calc(100%+1.3px)] md:h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-current"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </svg>
      </div>
    )
  }

  // Diamond
  return (
    <div
      className={cn("flex w-full items-center justify-center py-16", className)}
    >
      <motion.div
        initial={{ rotate: 0, opacity: 0, scale: 0 }}
        whileInView={{ rotate: 45, opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: "spring" }}
        className="relative h-4 w-4 border border-primary"
      >
        <div className="absolute inset-[3px] bg-primary/20" />
      </motion.div>
    </div>
  )
}
