'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function AnimatedGradientMesh({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none -z-10", className)}>
      <div
        className={cn(
          "absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[100px] transition-transform duration-[10000ms] ease-in-out motion-reduce:transition-none",
          mounted ? "translate-x-1/4 translate-y-1/4" : ""
        )}
      />
      <div
        className={cn(
          "absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent/20 blur-[120px] transition-transform duration-[12000ms] ease-in-out motion-reduce:transition-none",
          mounted ? "-translate-x-1/4 -translate-y-1/4" : ""
        )}
      />
      <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px]" />
    </div>
  );
}
