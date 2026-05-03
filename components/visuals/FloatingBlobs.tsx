"use client";

import { motion, useReducedMotion } from "framer-motion";

export function FloatingBlobs() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-10 z-0">
      <motion.div
        className="absolute top-[20%] left-[10%] w-64 h-64 bg-secondary rounded-full filter blur-[60px]"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-primary rounded-full filter blur-[80px]"
        animate={{
          y: [0, 40, 0],
          scale: [1, 0.95, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
}
