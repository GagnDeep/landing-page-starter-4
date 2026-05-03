"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FloatingBlobsProps {
  className?: string
}

export function FloatingBlobs({ className }: FloatingBlobsProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <motion.div
        className="absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full opacity-10 mix-blend-multiply blur-[100px] filter dark:opacity-5 dark:mix-blend-screen"
        style={{ backgroundColor: "var(--primary)" }}
        animate={{
          x: ["0%", "20%", "-10%", "0%"],
          y: ["0%", "10%", "20%", "0%"],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute right-[-10%] bottom-[-10%] h-[50%] w-[50%] rounded-full opacity-10 mix-blend-multiply blur-[120px] filter dark:opacity-5 dark:mix-blend-screen"
        style={{ backgroundColor: "var(--secondary)" }}
        animate={{
          x: ["0%", "-30%", "10%", "0%"],
          y: ["0%", "-20%", "-10%", "0%"],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  )
}
