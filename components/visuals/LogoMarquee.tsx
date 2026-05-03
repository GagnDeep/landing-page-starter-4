"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface LogoMarqueeProps {
  className?: string;
  logos: React.ReactNode[];
  speed?: number;
}

export function LogoMarquee({ className, logos, speed = 40 }: LogoMarqueeProps) {
  return (
    <div className={cn("overflow-hidden flex w-full relative", className)}>
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex items-center space-x-16 whitespace-nowrap px-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...logos, ...logos].map((logo, idx) => (
          <div key={idx} className="flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 motion-reduce:transition-none">
            {logo}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
