"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface CodeWindowTypingProps {
  className?: string;
  codeLines: string[];
}

export function CodeWindowTyping({ className, codeLines }: CodeWindowTypingProps) {
  const [mounted, setMounted] = useState(false);
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    setMounted(true);

    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < codeLines.length) {
        currentLine++;
        setVisibleLines(currentLine);
      } else {
        clearInterval(interval);
      }
    }, 800);

    return () => clearInterval(interval);
  }, [codeLines.length]);

  return (
    <div className={cn("rounded-xl border border-border bg-card/80 backdrop-blur shadow-2xl overflow-hidden flex flex-col", className)}>
      {/* Window Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
        <div className="w-3 h-3 rounded-full bg-destructive/80" />
        <div className="w-3 h-3 rounded-full bg-secondary/80" />
        <div className="w-3 h-3 rounded-full bg-primary/80" />
        <div className="ml-4 text-xs text-muted-foreground font-mono">
          academy_curriculum.ts
        </div>
      </div>

      {/* Window Body */}
      <div className="p-6 font-mono text-sm leading-relaxed overflow-auto flex-grow">
        {mounted ? (
          codeLines.map((line, index) => (
            <div
              key={index}
              className={cn(
                "transition-opacity duration-300",
                index < visibleLines ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
              )}
            >
              <span className="text-muted-foreground select-none mr-4 inline-block w-4 text-right">
                {index + 1}
              </span>
              <span dangerouslySetInnerHTML={{ __html: line }} />
            </div>
          ))
        ) : (
          <div className="opacity-0">Loading...</div>
        )}

        {/* Blinking cursor */}
        {mounted && visibleLines < codeLines.length && (
          <div className="animate-pulse inline-block w-2 h-4 bg-primary ml-1 translate-y-1 motion-reduce:animate-none" />
        )}
      </div>
    </div>
  );
}
