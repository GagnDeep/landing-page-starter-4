"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingBlobsProps {
  className?: string;
  colors?: [string, string]; // CSS color values
}

export function FloatingBlobs({ className, colors = ["var(--primary)", "var(--accent)"] }: FloatingBlobsProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return null;

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <motion.div
        animate={shouldReduceMotion ? {} : {
          y: [0, -20, 0],
          x: [0, 10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[10%] left-[10%] w-64 h-64 rounded-full mix-blend-multiply dark:mix-blend-screen opacity-20 blur-3xl"
        style={{ backgroundColor: colors[0] }}
      />
      <motion.div
        animate={shouldReduceMotion ? {} : {
          y: [0, 30, 0],
          x: [0, -20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full mix-blend-multiply dark:mix-blend-screen opacity-20 blur-3xl"
        style={{ backgroundColor: colors[1] }}
      />
    </div>
  );
}
