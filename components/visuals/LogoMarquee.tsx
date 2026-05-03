"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoMarqueeProps {
  logos: React.ReactNode[];
  speed?: number; // duration in seconds
  className?: string;
}

export function LogoMarquee({ logos, speed = 30, className }: LogoMarqueeProps) {
  const shouldReduceMotion = useReducedMotion();

  // Duplicate logos to ensure seamless looping
  const marqueeContent = [...logos, ...logos, ...logos];

  if (shouldReduceMotion) {
    return (
      <div className={cn("flex flex-wrap items-center justify-center gap-8 bg-muted/30 py-8", className)}>
        {logos.map((logo, idx) => (
          <div key={idx} className="flex items-center justify-center min-w-[120px] grayscale opacity-60">
            {logo}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex overflow-hidden w-full bg-muted/30 py-8 relative group",
        className
      )}
    >
      {/* Gradient masks for smooth fade in/out on edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <motion.div
        className="flex shrink-0 items-center gap-16 pr-16"
        animate={{
          x: ["0%", "-33.333333%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {marqueeContent.map((logo, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 min-w-[120px]"
          >
            {logo}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
