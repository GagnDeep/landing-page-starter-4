"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedDentalIconSetProps {
  className?: string;
  activeIconIndex?: number;
}

export function AnimatedDentalIconSet({
  className,
  activeIconIndex = 0,
}: AnimatedDentalIconSetProps) {
  const icons = [
    { name: "Tooth", path: "M12 4c-3.31 0-6 2.69-6 6 0 1.9 1 3.56 2.5 4.5l-1.5 6.5h2l1-4h4l1 4h2l-1.5-6.5C17 13.56 18 11.9 18 10c0-3.31-2.69-6-6-6z" },
    { name: "Sparkle", path: "M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z" },
    { name: "Shield", path: "M12 2L3 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-4z" },
  ];

  return (
    <div className={cn("flex gap-4 items-center", className)}>
      {icons.map((icon, index) => {
        const isActive = index === activeIconIndex;
        return (
          <div
            key={icon.name}
            className={cn(
              "relative p-3 rounded-full transition-all duration-500 ease-out",
              isActive ? "bg-primary text-primary-foreground scale-110 shadow-lg" : "bg-muted text-muted-foreground scale-100 opacity-70 hover:opacity-100"
            )}
            title={icon.name}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className={cn(
                "w-6 h-6",
                isActive ? "animate-pulse" : ""
              )}
            >
              <path d={icon.path} />
            </svg>
            {isActive && (
              <span className="absolute -inset-1 rounded-full border border-primary animate-ping opacity-20" />
            )}
          </div>
        );
      })}
    </div>
  );
}
