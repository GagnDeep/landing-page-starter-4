"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LogoMarqueeProps {
  className?: string;
  items: React.ReactNode[];
  speed?: number; // seconds per loop
  direction?: "left" | "right";
}

export function LogoMarquee({
  className,
  items,
  speed = 30,
  direction = "left",
}: LogoMarqueeProps) {
  const animationDirection = direction === "left" ? "animate-marquee" : "animate-marquee-reverse";

  return (
    <div
      className={cn(
        "flex w-full overflow-hidden group select-none mask-image-linear-gradient",
        className
      )}
      style={
        {
          "--marquee-duration": `${speed}s`,
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        } as React.CSSProperties
      }
    >
      <div
        className={cn(
          "flex shrink-0 items-center justify-around gap-8 min-w-full",
          animationDirection
        )}
      >
        {items.map((item, i) => (
          <div key={`marquee-1-${i}`} className="flex shrink-0">
            {item}
          </div>
        ))}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "flex shrink-0 items-center justify-around gap-8 min-w-full absolute top-0 left-[100%]",
          animationDirection
        )}
      >
        {items.map((item, i) => (
          <div key={`marquee-2-${i}`} className="flex shrink-0">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
