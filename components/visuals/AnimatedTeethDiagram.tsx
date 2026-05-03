"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTeethDiagramProps {
  className?: string;
  activeSection?: "none" | "crown" | "root" | "enamel";
}

export function AnimatedTeethDiagram({ className, activeSection = "none" }: AnimatedTeethDiagramProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={cn("relative flex items-center justify-center p-8", className)}>
      <motion.svg
        viewBox="0 0 200 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[200px] h-auto"
        initial="hidden"
        animate="visible"
      >
        {/* Enamel / Outer layer */}
        <motion.path
          d="M40 80 C 40 20, 160 20, 160 80 C 160 140, 140 180, 100 180 C 60 180, 40 140, 40 80 Z"
          fill="var(--background)"
          stroke="var(--primary)"
          strokeWidth="4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className={cn(
            "transition-colors duration-500",
            activeSection === "enamel" || activeSection === "crown" ? "fill-primary/20" : ""
          )}
        />

        {/* Root */}
        <motion.path
          d="M70 160 C 70 250, 60 280, 85 280 C 100 280, 100 200, 100 200 C 100 200, 100 280, 115 280 C 140 280, 130 250, 130 160"
          fill="transparent"
          stroke="var(--muted-foreground)"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
          className={cn(
            "transition-colors duration-500",
            activeSection === "root" ? "stroke-primary" : ""
          )}
        />

        {/* Pulp/Nerve Line (Animated Pulse) */}
        <motion.path
          d="M100 80 L 100 180 M 85 270 C 85 220, 100 200, 100 180 M 115 270 C 115 220, 100 200, 100 180"
          fill="transparent"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="4 4"
          initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
          animate={shouldReduceMotion ? {} : {
            opacity: [0.3, 1, 0.3],
            strokeDashoffset: [0, -20]
          }}
          transition={{
            opacity: { duration: 2, repeat: Infinity },
            strokeDashoffset: { duration: 2, repeat: Infinity, ease: "linear" }
          }}
          className={cn(
            "transition-opacity duration-500",
            activeSection === "none" ? "opacity-50" : (activeSection === "root" ? "opacity-100" : "opacity-10")
          )}
        />
      </motion.svg>
    </div>
  );
}
