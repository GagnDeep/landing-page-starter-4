import React from 'react';
import { cn } from '@/lib/utils';

interface LogoMarqueeProps {
  logos: React.ReactNode[];
  className?: string;
  speed?: 'fast' | 'normal' | 'slow';
}

export function LogoMarquee({ logos, className, speed = 'normal' }: LogoMarqueeProps) {
  const speedClass = {
    fast: 'animate-[marquee_20s_linear_infinite]',
    normal: 'animate-[marquee_30s_linear_infinite]',
    slow: 'animate-[marquee_40s_linear_infinite]',
  }[speed];

  return (
    <div className={cn("flex overflow-hidden relative w-full", className)} aria-hidden="true">
      <div className={cn("flex min-w-full shrink-0 items-center justify-around gap-16 py-4 motion-safe:hover:pause", speedClass)}>
        {logos.map((logo, i) => (
          <div key={`logo-1-${i}`} className="shrink-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            {logo}
          </div>
        ))}
      </div>
      <div className={cn("flex min-w-full shrink-0 items-center justify-around gap-16 py-4 motion-safe:hover:pause", speedClass)}>
        {logos.map((logo, i) => (
          <div key={`logo-2-${i}`} className="shrink-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            {logo}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        @media (prefers-reduced-motion) {
           .animate-\\[marquee_20s_linear_infinite\\],
           .animate-\\[marquee_30s_linear_infinite\\],
           .animate-\\[marquee_40s_linear_infinite\\] {
             animation: none !important;
           }
        }
      `}</style>
    </div>
  );
}
