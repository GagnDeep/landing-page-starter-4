"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number; // ms per char
  delay?: number; // initial delay
  cursorClassName?: string;
}

export function TypewriterText({
  text,
  className,
  speed = 50,
  delay = 500,
  cursorClassName,
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      const t = setTimeout(() => {
        setDisplayedText(text);
        setCompleted(true);
      }, 0);
      return () => clearTimeout(t);
    }

    const timer = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, text]);

  useEffect(() => {
    if (!started || completed) return;

    if (displayedText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    } else {
      const t = setTimeout(() => {
        setCompleted(true);
      }, 0);
      return () => clearTimeout(t);
    }
  }, [displayedText, started, text, speed, completed]);

  return (
    <span className={cn("inline-block", className)}>
      {displayedText}
      {!completed && (
        <span
          className={cn(
            "inline-block w-[2px] h-[1em] bg-current align-text-bottom ml-1 animate-pulse",
            cursorClassName
          )}
        />
      )}
    </span>
  );
}
