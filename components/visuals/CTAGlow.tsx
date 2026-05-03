'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface CTAGlowProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export function CTAGlow({ children, className, variant = 'primary', ...props }: CTAGlowProps) {
  return (
    <div className="relative group inline-block">
      {/* Glow effect behind the button */}
      <div
        className={cn(
          "absolute -inset-0.5 rounded-full blur opacity-30 group-hover:opacity-70 transition duration-500 motion-reduce:transition-none",
          variant === 'primary' ? "bg-primary" : "bg-accent"
        )}
        aria-hidden="true"
      />

      {/* Actual button */}
      <button
        className={cn(
          "relative flex items-center justify-center px-8 py-4 rounded-full font-sans font-medium transition-all duration-300 motion-reduce:transition-none",
          variant === 'primary'
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "bg-background text-foreground border border-border hover:bg-muted",
          className
        )}
        {...props}
      >
        {children}
        <span className="ml-2 group-hover:translate-x-1 transition-transform motion-reduce:transition-none" aria-hidden="true">
          →
        </span>
      </button>
    </div>
  );
}
