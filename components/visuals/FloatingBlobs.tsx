"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface FloatingBlobsProps {
  className?: string;
  blobCount?: number;
}

export function FloatingBlobs({ className, blobCount = 3 }: FloatingBlobsProps) {
  const [mounted, setMounted] = useState(false);
  const [blobs, setBlobs] = useState<Array<{ size: number, top: number, left: number, animationDuration: number, delay: number }>>([]);

  useEffect(() => {
    const newBlobs = Array.from({ length: blobCount }).map(() => ({
      size: 200 + Math.random() * 200,
      top: Math.random() * 100,
      left: Math.random() * 100,
      animationDuration: 10 + Math.random() * 20,
      delay: Math.random() * -20,
    }));
    const timeout = setTimeout(() => {
      setBlobs(newBlobs);
      setMounted(true);
    }, 0);
    return () => clearTimeout(timeout);
  }, [blobCount]);

  if (!mounted) return null;

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none -z-10", className)} aria-hidden="true">
      {blobs.map((blob, i) => (
        <div
          key={`blob-${i}`}
          className="absolute rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 dark:opacity-20 bg-primary animate-float"
          style={{
            width: `${blob.size}px`,
            height: `${blob.size}px`,
            top: `${blob.top}%`,
            left: `${blob.left}%`,
            animationDuration: `${blob.animationDuration}s`,
            animationDelay: `${blob.delay}s`,
            backgroundColor: i % 2 === 0 ? 'var(--secondary)' : 'var(--accent)',
          }}
        />
      ))}
    </div>
  );
}
