"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedHeroAuroraProps {
  className?: string;
  children?: React.ReactNode;
}

export function AnimatedHeroAurora({ className, children }: AnimatedHeroAuroraProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-background text-foreground transition-colors duration-500",
        className
      )}
    >
      {/* Background container for the animated gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30 dark:opacity-20 pointer-events-none">
        <motion.div
          animate={shouldReduceMotion ? {} : {
            x: ["-20%", "20%", "-20%"],
            y: ["-20%", "20%", "-20%"],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[20%] -left-[10%] h-[60%] w-[60%] rounded-full bg-primary/40 blur-[100px] mix-blend-multiply dark:mix-blend-screen"
        />
        <motion.div
          animate={shouldReduceMotion ? {} : {
            x: ["20%", "-20%", "20%"],
            y: ["20%", "-20%", "20%"],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[10%] -right-[10%] h-[70%] w-[50%] rounded-full bg-secondary/60 blur-[120px] mix-blend-multiply dark:mix-blend-screen"
        />
        <motion.div
          animate={shouldReduceMotion ? {} : {
            x: ["0%", "10%", "-10%", "0%"],
            y: ["10%", "-10%", "10%", "10%"],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-[20%] left-[20%] h-[50%] w-[80%] rounded-full bg-accent/30 blur-[100px] mix-blend-multiply dark:mix-blend-screen"
        />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}
