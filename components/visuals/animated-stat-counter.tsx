"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedStatCounterProps {
  value: number;
  label: string;
  suffix?: string;
  className?: string;
}

export function AnimatedStatCounter({ value, label, suffix = "", className }: AnimatedStatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hasStarted, setHasStarted] = useState(false);

  const motionValue = useSpring(0, {
    stiffness: 40,
    damping: 20,
    duration: 2000,
  });

  const roundedValue = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView && !hasStarted) {
      motionValue.set(value);
      setTimeout(() => setHasStarted(true), 0);
    }
  }, [isInView, value, motionValue, hasStarted]);

  return (
    <div ref={ref} className={cn("flex flex-col items-center justify-center text-center", className)}>
      <div className="flex items-baseline font-heading text-5xl md:text-6xl text-primary font-medium tracking-tight">
        <motion.span>{roundedValue}</motion.span>
        {suffix && <span className="text-3xl md:text-4xl ml-1">{suffix}</span>}
      </div>
      <p className="mt-2 text-sm md:text-base text-muted-foreground font-medium uppercase tracking-widest">{label}</p>
    </div>
  );
}
