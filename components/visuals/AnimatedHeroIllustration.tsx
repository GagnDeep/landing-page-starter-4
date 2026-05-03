"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { siteImages } from "@/lib/images";
import { globalContent } from "@/content/global";

interface AnimatedHeroIllustrationProps {
  className?: string;
  imageAltText?: string;
  imageSrc?: string;
}

export function AnimatedHeroIllustration({
  className,
  imageSrc = siteImages.hero.salonInterior.src,
  imageAltText = siteImages.hero.salonInterior.alt
}: AnimatedHeroIllustrationProps) {
  const shouldReduceMotion = useReducedMotion();

  // Create an elegant, editorial-style framed image reveal
  return (
    <div className={cn("relative w-full max-w-2xl aspect-[4/5] mx-auto", className)}>
      {/* Decorative background shape */}
      <motion.div
        className="absolute -inset-4 md:-inset-8 rounded-[2rem] md:rounded-[4rem] border border-border bg-muted/20"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }} // Exponential easing
      />

      {/* Main Image Container */}
      <motion.div
        className="relative h-full w-full overflow-hidden rounded-[1.5rem] md:rounded-[3rem] shadow-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
      >
        <motion.div
          className="h-full w-full"
          initial={!shouldReduceMotion ? { scale: 1.1 } : false}
          animate={!shouldReduceMotion ? { scale: 1 } : false}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Image
            src={imageSrc}
            alt={imageAltText}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="object-cover object-center"
          />
        </motion.div>
      </motion.div>

      {/* Floating accent element (e.g., a "Trusted by" or a small aesthetic badge) */}
      <motion.div
        className="absolute -bottom-6 -right-6 md:-bottom-12 md:-right-12 h-32 w-32 md:h-48 md:w-48 rounded-full border border-border/50 backdrop-blur-md bg-background/30 flex items-center justify-center p-4 shadow-xl"
        initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.8, type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="text-center">
            <span className="block font-heading text-2xl md:text-4xl text-primary">{globalContent.heroBadge.rating}</span>
            <span className="block text-[10px] md:text-xs tracking-widest uppercase mt-1 text-muted-foreground">{globalContent.heroBadge.reviews}</span>
        </div>
      </motion.div>
    </div>
  );
}
