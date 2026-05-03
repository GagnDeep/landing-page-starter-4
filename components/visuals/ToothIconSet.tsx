'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ToothIconProps {
  className?: string;
  variant?: 'clean' | 'shield' | 'sparkle' | 'implant';
}

export function ToothIconSet({ className, variant = 'clean' }: ToothIconProps) {
  // Simple SVG representations using current colors
  return (
    <div className={cn("relative flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary motion-safe:transition-transform motion-safe:hover:-translate-y-1 motion-safe:duration-300", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8"
      >
        <path d="M12 21c-2 0-3.5-1.5-4-3l-1.5-6a5.5 5.5 0 0 1 11 0l-1.5 6c-.5 1.5-2 3-4 3z" />
        <path d="M10 21v-4" />
        <path d="M14 21v-4" />
        <path d="M12 17v-4" />
        <path d="M9 7h.01" />
        <path d="M15 7h.01" />

        {variant === 'shield' && (
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" className="opacity-50" strokeWidth="1" />
        )}
        {variant === 'sparkle' && (
           <path d="M18 3l1.5 1.5L21 6l-1.5 1.5L18 9l-1.5-1.5L15 6l1.5-1.5L18 3z" className="animate-pulse" />
        )}
        {variant === 'implant' && (
          <path d="M12 21v3" strokeWidth="2" strokeDasharray="1 2" />
        )}
      </svg>
    </div>
  );
}
