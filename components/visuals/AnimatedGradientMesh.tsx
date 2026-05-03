"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedGradientMeshProps {
  className?: string;
  colors?: string[];
  speed?: "slow" | "medium" | "fast";
}

export function AnimatedGradientMesh({
  className,
  colors = ["var(--primary)", "var(--secondary)", "var(--accent)"],
  speed = "medium",
}: AnimatedGradientMeshProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timeout);
  }, []);

  if (!mounted) {
    return <div className={cn("w-full h-full bg-primary/10", className)} />;
  }

  const speedClass = {
    slow: "duration-[10000ms]",
    medium: "duration-[5000ms]",
    fast: "duration-[2000ms]",
  }[speed];

  return (
    <div
      className={cn(
        "relative overflow-hidden w-full h-full isolation-auto",
        className
      )}
      style={{
        background: `radial-gradient(circle at 50% 50%, ${colors[0]} 0%, transparent 60%)`,
      }}
    >
      <div
        className={cn(
          "absolute -inset-[100%] opacity-50 mix-blend-multiply dark:mix-blend-screen animate-spin-slow",
          speedClass
        )}
        style={{
          background: `conic-gradient(from 0deg at 50% 50%, ${colors.join(", ")}, ${colors[0]})`,
          filter: "blur(100px)",
        }}
      />
    </div>
  );
}
