"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface AnimatedStatsProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedStats({ value, suffix = "", duration = 2, className = "" }: AnimatedStatsProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReducedMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) {
      // Intentionally not setting displayValue here, since it's cleaner to handle this in the render.
      return;
    }

    if (isInView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);

        // easeOutQuart
        const ease = 1 - Math.pow(1 - progress, 4);

        setDisplayValue(Math.floor(ease * value));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setDisplayValue(value);
        }
      };

      window.requestAnimationFrame(step);
    }
  }, [value, isInView, duration, prefersReducedMotion]);

  return (
    <span ref={ref} className={className}>
      {prefersReducedMotion ? value : displayValue}{suffix}
    </span>
  );
}
