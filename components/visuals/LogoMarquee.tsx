"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface LogoMarqueeProps {
  className?: string;
  logos: string[];
  speed?: "slow" | "normal" | "fast";
  direction?: "left" | "right";
}

export function LogoMarquee({
  className,
  logos,
  speed = "normal",
  direction = "left"
}: LogoMarqueeProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const speedClass = {
    slow: "[animation-duration:60s]",
    normal: "[animation-duration:40s]",
    fast: "[animation-duration:20s]",
  }[speed];

  const directionClass = direction === "left" ? "animate-marquee" : "animate-marquee-reverse";

  // Double the logos to create the infinite loop effect
  const displayLogos = [...logos, ...logos, ...logos];

  return (
    <div className={cn("relative flex w-full overflow-hidden bg-background py-8", className)}>
      {/* Fade edges */}
      <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-16 px-8",
          mounted ? directionClass : "",
          mounted ? speedClass : "",
          "motion-reduce:animate-none motion-reduce:justify-center motion-reduce:flex-wrap motion-reduce:gap-8"
        )}
      >
        {mounted ? displayLogos.map((logo, idx) => (
          <div
            key={`${logo}-${idx}`}
            className="flex items-center justify-center grayscale transition-all duration-300 hover:grayscale-0"
          >
            <span className="text-xl font-heading font-bold text-muted-foreground tracking-widest uppercase">
              {logo}
            </span>
          </div>
        )) : (
          logos.map((logo, idx) => (
            <div key={logo} className="flex items-center justify-center grayscale">
              <span className="text-xl font-heading font-bold text-muted-foreground tracking-widest uppercase">
                {logo}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
