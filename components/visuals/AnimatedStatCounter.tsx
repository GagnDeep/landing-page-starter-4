"use client";

import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedStatCounterProps {
  endValue: number;
  suffix?: string;
  prefix?: string;
  duration?: number; // ms
  className?: string;
}

export function AnimatedStatCounter({
  endValue,
  suffix = "",
  prefix = "",
  duration = 2000,
  className,
}: AnimatedStatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  // Create a simple custom intersection observer hook logic if framer-motion useInView fails
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      const timeout = setTimeout(() => {
        setCount(endValue);
      }, 0);
      return () => clearTimeout(timeout);
    }

    let startTime: number;
    let animationFrameId: number;

    const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);

    const updateCounter = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      const easedPercentage = easeOutQuart(percentage);
      const currentCount = Math.floor(easedPercentage * endValue);

      setCount(currentCount);

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        setCount(endValue);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrameId);
  }, [endValue, duration, isInView]);

  return (
    <span ref={ref} className={cn("inline-flex font-heading tabular-nums", className)}>
      {prefix}{count}{suffix}
    </span>
  );
}
