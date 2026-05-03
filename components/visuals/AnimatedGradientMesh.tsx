"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AnimatedGradientMesh() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className="absolute inset-0 z-0 bg-secondary/20 pointer-events-none" />
    );
  }

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40 dark:opacity-20">
      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/60 mix-blend-multiply filter blur-[100px]"
        animate={{
          x: ["0%", "10%", "0%"],
          y: ["0%", "5%", "0%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 mix-blend-multiply filter blur-[100px]"
        animate={{
          x: ["0%", "-10%", "0%"],
          y: ["0%", "-5%", "0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
}
