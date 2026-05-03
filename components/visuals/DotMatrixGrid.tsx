"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface DotMatrixGridProps {
  className?: string;
  size?: number;
  spacing?: number;
  opacity?: number;
  animate?: boolean;
}

export function DotMatrixGrid({
  className,
  size = 2,
  spacing = 24,
  opacity = 0.2,
  animate = true,
}: DotMatrixGridProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}
      style={{
        backgroundImage: `radial-gradient(circle at center, var(--color-foreground) ${size}px, transparent 0)`,
        backgroundSize: `${spacing}px ${spacing}px`,
        opacity: opacity,
      }}
    >
      {mounted && animate && (
        <div
          className="absolute inset-0 bg-background motion-reduce:hidden"
          style={{
            maskImage: "radial-gradient(circle at center, transparent 0%, black 100%)",
            WebkitMaskImage: "radial-gradient(circle at center, transparent 0%, black 100%)",
            animation: "pulse-mask 8s ease-in-out infinite alternate"
          }}
        />
      )}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse-mask {
          0% { mask-size: 100% 100%; -webkit-mask-size: 100% 100%; }
          100% { mask-size: 150% 150%; -webkit-mask-size: 150% 150%; }
        }
      `}} />
    </div>
  );
}
