"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface LogoMarqueeProps {
  children: ReactNode;
  speed?: number;
}

export function LogoMarquee({ children, speed = 40 }: LogoMarqueeProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className="flex flex-wrap justify-center gap-8 py-4 opacity-70">
        {children}
      </div>
    );
  }

  return (
    <div className="relative flex w-full overflow-hidden whitespace-nowrap py-4">
      {/* Soft gradient mask for edges */}
      <div className="absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-background to-transparent" />

      <motion.div
        className="flex items-center gap-16 px-8 min-w-max"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {/* Render twice for seamless loop */}
        <div className="flex gap-16">{children}</div>
        <div className="flex gap-16">{children}</div>
      </motion.div>
    </div>
  );
}
