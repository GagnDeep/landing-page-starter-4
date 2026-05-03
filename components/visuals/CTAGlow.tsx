"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CTAGlowProps {
  className?: string;
  children: React.ReactNode;
}

export function CTAGlow({ className, children }: CTAGlowProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={cn("relative group inline-block", className)}>
      <motion.div
        className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary to-accent opacity-30 blur transition duration-500 group-hover:opacity-60 group-hover:duration-200"
        animate={shouldReduceMotion ? {} : {
          scale: [1, 1.02, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="relative">
        {children}
      </div>
    </div>
  );
}
