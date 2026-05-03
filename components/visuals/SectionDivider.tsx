"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SectionDividerProps {
  className?: string;
  type?: "line" | "diamonds" | "minimal";
}

export function SectionDivider({ className, type = "minimal" }: SectionDividerProps) {
  if (type === "line") {
    return (
      <div className={cn("w-full py-12 flex items-center justify-center", className)}>
        <div className="w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    );
  }

  if (type === "diamonds") {
    return (
      <div className={cn("w-full py-16 flex items-center justify-center gap-4", className)}>
        <div className="w-24 h-px bg-gradient-to-r from-transparent to-primary/50" />
        <div className="w-2 h-2 rotate-45 border border-primary/50" />
        <div className="w-3 h-3 rotate-45 bg-primary/20 flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-primary" />
        </div>
        <div className="w-2 h-2 rotate-45 border border-primary/50" />
        <div className="w-24 h-px bg-gradient-to-l from-transparent to-primary/50" />
      </div>
    );
  }

  // minimal
  return (
    <div className={cn("w-full py-24 flex flex-col items-center justify-center gap-2", className)}>
      <div className="w-px h-16 bg-gradient-to-b from-transparent to-border" />
    </div>
  );
}
