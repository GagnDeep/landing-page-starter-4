"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedStatCounterProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function AnimatedStatCounter({
  value,
  label,
  suffix = "",
  prefix = "",
  className
}: AnimatedStatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hasStarted, setHasStarted] = useState(false);

  // Use a spring physics simulation for the counting effect
  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.5
  });

  // Transform the raw spring value into a rounded integer
  const displayValue = useTransform(springValue, (current) => Math.round(current));

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);
      springValue.set(value);
    }
  }, [isInView, hasStarted, springValue, value]);

  return (
    <div ref={ref} className={cn("flex flex-col items-center justify-center text-center", className)}>
      <div className="flex items-baseline gap-1 text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
        {prefix && <span>{prefix}</span>}
        <motion.span>{displayValue}</motion.span>
        {suffix && <span>{suffix}</span>}
      </div>
      <div className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
