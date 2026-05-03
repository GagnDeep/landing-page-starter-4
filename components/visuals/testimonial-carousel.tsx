"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Testimonial {
  quote: string;
  author: string;
  location?: string;
}

interface TestimonialCarouselProps {
  items: Testimonial[];
  interval?: number;
  className?: string;
}

export function TestimonialCarousel({ items, interval = 6000, className }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, interval);
    return () => clearInterval(timer);
  }, [items.length, interval]);

  if (!items.length) return null;

  return (
    <div className={cn("relative min-h-[300px] flex items-center justify-center text-center", className)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex flex-col items-center justify-center p-6"
        >
          <p className="font-heading text-2xl md:text-3xl lg:text-4xl leading-relaxed text-foreground mb-8 max-w-4xl mx-auto">
            &quot;{items[currentIndex].quote}&quot;
          </p>
          <div className="flex flex-col items-center">
            <span className="font-medium text-primary text-sm uppercase tracking-widest">{items[currentIndex].author}</span>
            {items[currentIndex].location && (
              <span className="text-muted-foreground text-xs mt-1">{items[currentIndex].location}</span>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-0 flex gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-500",
              i === currentIndex ? "bg-primary scale-125" : "bg-border hover:bg-muted-foreground"
            )}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
