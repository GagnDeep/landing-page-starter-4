"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedGradientMeshProps {
  className?: string
  colors?: string[] // Array of hex or var() strings
  speed?: number // Animation duration in seconds
}

export function AnimatedGradientMesh({
  className,
  colors = ["var(--primary)", "var(--secondary)", "var(--background)"],
  speed = 15,
}: AnimatedGradientMeshProps) {
  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      <motion.div
        className="absolute inset-0 opacity-40 mix-blend-multiply blur-3xl dark:mix-blend-screen"
        animate={{
          background: [
            `radial-gradient(circle at 0% 0%, ${colors[0]} 0%, transparent 50%)`,
            `radial-gradient(circle at 100% 100%, ${colors[1]} 0%, transparent 50%)`,
            `radial-gradient(circle at 0% 100%, ${colors[2]} 0%, transparent 50%)`,
            `radial-gradient(circle at 100% 0%, ${colors[0]} 0%, transparent 50%)`,
            `radial-gradient(circle at 0% 0%, ${colors[0]} 0%, transparent 50%)`,
          ],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      {/* Noise overlay for texture */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}
