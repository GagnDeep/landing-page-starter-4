"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface CinematicParallaxProps {
  src: string;
  alt: string;
  className?: string;
  overlay?: boolean;
}

export function CinematicParallax({ src, alt, className, overlay = true }: CinematicParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05]);

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)}>
      <motion.div
        style={{ y, scale }}
        className="absolute inset-[-10%] w-[120%] h-[120%]"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      {overlay && (
        <div className="absolute inset-0 bg-foreground/20 mix-blend-multiply pointer-events-none" />
      )}
    </div>
  );
}
