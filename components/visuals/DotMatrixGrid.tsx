import React from 'react';
import { cn } from '@/lib/utils';

export function DotMatrixGrid({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 pointer-events-none -z-10", className)} aria-hidden="true">
      <svg width="100%" height="100%">
        <defs>
          <pattern id="dotGrid" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="var(--border)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotGrid)" />
      </svg>
      {/* Subtle fade overlay to soften the grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-transparent to-[var(--background)] opacity-80" />
    </div>
  );
}
