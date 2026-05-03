"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SmoothMaskRevealProps {
  beforeImage: string;
  afterImage: string;
  alt: string;
  className?: string;
}

export function SmoothMaskReveal({ beforeImage, afterImage, alt, className }: SmoothMaskRevealProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full aspect-[4/3] overflow-hidden rounded-2xl select-none group cursor-ew-resize", className)}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
      onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
      onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
    >
      {/* Before Image (Base layer) */}
      <Image src={beforeImage} alt={`Before ${alt}`} fill className="object-cover pointer-events-none" priority />

      {/* After Image (Clipped layer) */}
      <motion.div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <Image src={afterImage} alt={`After ${alt}`} fill className="object-cover pointer-events-none" priority />
      </motion.div>

      {/* Slider Line */}
      <motion.div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10 flex items-center justify-center pointer-events-none"
        style={{ left: `${sliderPosition}%`, x: "-50%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Slider Handle */}
        <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="flex gap-1">
            <div className="w-0.5 h-3 bg-muted-foreground/50 rounded-full" />
            <div className="w-0.5 h-3 bg-muted-foreground/50 rounded-full" />
          </div>
        </div>
      </motion.div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-background/80 backdrop-blur px-3 py-1 text-xs uppercase tracking-widest rounded shadow-sm text-foreground">Before</div>
      <div className="absolute top-4 right-4 bg-background/80 backdrop-blur px-3 py-1 text-xs uppercase tracking-widest rounded shadow-sm text-foreground">After</div>
    </div>
  );
}
