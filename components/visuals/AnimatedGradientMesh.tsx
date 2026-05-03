"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedGradientMeshProps {
  className?: string;
}

export function AnimatedGradientMesh({ className }: AnimatedGradientMeshProps) {
  const shouldReduceMotion = useReducedMotion();

  // We use CSS custom properties from our design system to drive the gradients
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden mix-blend-overlay opacity-40 dark:opacity-20",
        className
      )}
      aria-hidden="true"
    >
      <motion.div
        className="absolute -inset-[100%] h-[300%] w-[300%]"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, var(--color-primary) 0%, transparent 40%),
            radial-gradient(circle at 80% 20%, var(--color-secondary) 0%, transparent 40%),
            radial-gradient(circle at 20% 80%, var(--color-accent) 0%, transparent 40%)
          `,
          backgroundSize: "100% 100%",
        }}
        animate={
          !shouldReduceMotion
            ? {
                rotate: [0, 360],
              }
            : undefined
        }
        transition={{
          duration: 120, // Very slow, organic rotation
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
