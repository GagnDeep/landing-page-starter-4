"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionDividerProps {
  className?: string;
  delay?: number;
}

export function SectionDivider({ className, delay = 0 }: SectionDividerProps) {
  return (
    <div className={cn("w-full flex justify-center items-center py-16", className)}>
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay }}
        className="w-full max-w-sm h-[1px] bg-border origin-center"
      />
    </div>
  );
}
