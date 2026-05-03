'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface LogoMarqueeProps {
  logos: { id: string; name: string; src?: string }[];
  className?: string;
  speed?: 'slow' | 'normal' | 'fast';
}

export function LogoMarquee({ logos, className, speed = 'normal' }: LogoMarqueeProps) {
  const speedClasses = {
    slow: 'animate-marquee-slow',
    normal: 'animate-marquee',
    fast: 'animate-marquee-fast'
  };

  return (
    <div className={cn("relative flex w-full overflow-hidden border-y border-muted bg-background py-6", className)}>
      <div className={cn("flex w-max motion-reduce:animate-none", speedClasses[speed])}>
        {/* First set of logos */}
        <div className="flex shrink-0 items-center justify-around space-x-16 px-8">
          {logos.map((logo) => (
            <div key={`${logo.id}-1`} className="flex items-center text-muted-foreground font-semibold text-xl tracking-wider grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              {logo.name}
            </div>
          ))}
        </div>
        {/* Second set for seamless loop */}
        <div className="flex shrink-0 items-center justify-around space-x-16 px-8 motion-reduce:hidden" aria-hidden="true">
          {logos.map((logo) => (
            <div key={`${logo.id}-2`} className="flex items-center text-muted-foreground font-semibold text-xl tracking-wider grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              {logo.name}
            </div>
          ))}
        </div>
      </div>

      {/* Gradients for smooth fade in/out */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
