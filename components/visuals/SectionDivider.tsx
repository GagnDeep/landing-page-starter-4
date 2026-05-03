"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SectionDividerProps {
  className?: string;
  type?: "wave" | "blob" | "curve";
  color?: string; // CSS color or variable like var(--background)
  flipVertical?: boolean;
}

export function SectionDivider({
  className,
  type = "curve",
  color = "var(--background)",
  flipVertical = false,
}: SectionDividerProps) {

  const getPath = () => {
    switch(type) {
      case "wave":
        return "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,106.7C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z";
      case "blob":
        return "M0,192L60,170.7C120,149,240,107,360,117.3C480,128,600,192,720,202.7C840,213,960,171,1080,144C1200,117,1320,107,1380,101.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z";
      case "curve":
      default:
        return "M0,160L1440,32L1440,320L0,320Z";
    }
  };

  return (
    <div className={cn("w-full overflow-hidden leading-[0]", className, flipVertical ? "rotate-180" : "")}>
      <svg
        className="block relative w-full h-[50px] md:h-[100px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path fill={color} d={getPath()}></path>
      </svg>
    </div>
  );
}
