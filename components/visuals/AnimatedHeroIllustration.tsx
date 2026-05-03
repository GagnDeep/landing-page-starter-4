"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedHeroIllustrationProps {
  className?: string;
}

export function AnimatedHeroIllustration({ className }: AnimatedHeroIllustrationProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={cn("relative w-full aspect-square max-w-lg mx-auto", className)}>
      {/* Base decorative circle */}
      <div className="absolute inset-4 rounded-full border border-primary/20 bg-background/50 backdrop-blur-sm" />

      {/* Animated rotating rings */}
      {mounted && (
        <>
          <div className="absolute inset-0 rounded-full border border-dashed border-primary/30 animate-spin-slow motion-reduce:animate-none [animation-duration:30s]" />
          <div className="absolute inset-8 rounded-full border-t border-r border-primary/40 animate-spin-slow motion-reduce:animate-none [animation-duration:20s] [animation-direction:reverse]" />
        </>
      )}

      {/* Center content slot (could be an image or icon) */}
      <div className="absolute inset-12 rounded-full overflow-hidden border border-border shadow-2xl bg-card flex items-center justify-center">
        <div className="w-full h-full bg-gradient-to-tr from-primary/10 via-background to-secondary/10 flex flex-col items-center justify-center gap-4">
            {/* Sparkle icons */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary absolute top-1/4 left-1/4 animate-pulse motion-reduce:animate-none">
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
            </svg>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-secondary absolute bottom-1/3 right-1/4 animate-pulse [animation-delay:1s] motion-reduce:animate-none">
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
            </svg>
            <div className="font-heading text-4xl text-foreground font-light tracking-widest text-center px-4">
              99<br/>INSTITUTE
            </div>
        </div>
      </div>
    </div>
  );
}
