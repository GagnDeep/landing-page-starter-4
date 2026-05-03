"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedGradientMeshProps {
  className?: string;
  intensity?: "light" | "medium" | "heavy";
}

export function AnimatedGradientMesh({ className, intensity = "medium" }: AnimatedGradientMeshProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={cn("absolute inset-0 bg-background overflow-hidden", className)} />;
  }

  const opacityClass = {
    light: "opacity-30",
    medium: "opacity-60",
    heavy: "opacity-100",
  }[intensity];

  return (
    <div className={cn("absolute inset-0 bg-background overflow-hidden pointer-events-none", className)}>
      <div className={cn("absolute inset-0 mix-blend-soft-light", opacityClass)}>
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary rounded-full blur-[100px] animate-pulse [animation-duration:8s] motion-reduce:animate-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-secondary rounded-full blur-[100px] animate-pulse [animation-duration:10s] [animation-delay:2s] motion-reduce:animate-none" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-accent rounded-full blur-[80px] animate-pulse [animation-duration:12s] [animation-delay:4s] motion-reduce:animate-none" />
      </div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50" />
    </div>
  );
}
