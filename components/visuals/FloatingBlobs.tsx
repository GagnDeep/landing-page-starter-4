"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface FloatingBlobsProps {
  className?: string;
}

export function FloatingBlobs({ className }: FloatingBlobsProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none -z-10", className)}>
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <filter id="blurFilter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
          </filter>
        </defs>
        <motion.circle
          cx="20%"
          cy="30%"
          r="150"
          fill="var(--secondary)"
          opacity="0.1"
          filter="url(#blurFilter)"
          animate={{
            cy: ["30%", "35%", "30%"],
            cx: ["20%", "22%", "20%"],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="80%"
          cy="70%"
          r="200"
          fill="var(--primary)"
          opacity="0.05"
          filter="url(#blurFilter)"
          animate={{
            cy: ["70%", "65%", "70%"],
            cx: ["80%", "78%", "80%"],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
