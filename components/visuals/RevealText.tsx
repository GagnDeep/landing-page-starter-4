"use client";

import { motion, useReducedMotion } from "framer-motion";

interface RevealTextProps {
  children: string;
  className?: string;
  delay?: number;
}

export function RevealText({ children, className = "", delay = 0 }: RevealTextProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <span className={className}>{children}</span>;
  }

  return (
    <span className={`relative inline-block overflow-hidden ${className}`}>
      <motion.span
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.16, 1, 0.3, 1], // ease-out-expo
        }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  );
}
