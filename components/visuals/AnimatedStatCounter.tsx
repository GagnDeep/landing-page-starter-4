'use client';

import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedStatCounterProps {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedStatCounter({ value, label, suffix = '', duration = 2000, className }: AnimatedStatCounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCount(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const end = value;
          // Calculate an interval that runs at roughly 60fps
          const incrementTime = (duration / end) * 2;

          const timer = setInterval(() => {
            start += Math.max(1, Math.ceil(end / 50));
            if (start > end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, incrementTime);

          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <div ref={elementRef} className={cn("flex flex-col items-center justify-center p-6", className)}>
      <div className="text-4xl font-heading font-bold text-foreground">
        {count}{suffix}
      </div>
      <div className="text-sm font-sans text-muted-foreground mt-2 uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
}
