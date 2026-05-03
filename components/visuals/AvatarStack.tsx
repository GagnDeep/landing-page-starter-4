"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AvatarStackProps {
  avatars: Array<{ src: string; alt: string }>;
  limit?: number;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function AvatarStack({ avatars, limit = 4, className, size = "md" }: AvatarStackProps) {
  const shouldReduceMotion = useReducedMotion();

  const displayAvatars = avatars.slice(0, limit);
  const excessCount = avatars.length > limit ? avatars.length - limit : 0;

  const sizeClasses = {
    sm: "h-8 w-8 text-xs border-[1.5px]",
    md: "h-12 w-12 text-sm border-2",
    lg: "h-16 w-16 text-base border-[3px]",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20, scale: 0.8 },
    show: { opacity: 1, x: 0, scale: 1, transition: { type: "spring" as const, stiffness: 200, damping: 20 } },
  };

  return (
    <motion.div
      className={cn("flex items-center", className)}
      variants={shouldReduceMotion ? undefined : containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
    >
      {displayAvatars.map((avatar, idx) => (
        <motion.div
          key={idx}
          variants={shouldReduceMotion ? undefined : itemVariants}
          className={cn(
            "relative rounded-full overflow-hidden border-background shadow-sm",
            sizeClasses[size],
            idx > 0 && "-ml-3" // Overlap effect
          )}
          style={{ zIndex: 10 - idx }} // Ensure correct stacking order
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={avatar.src} alt={avatar.alt} className="h-full w-full object-cover" />
        </motion.div>
      ))}

      {excessCount > 0 && (
        <motion.div
          variants={shouldReduceMotion ? undefined : itemVariants}
          className={cn(
            "relative flex items-center justify-center rounded-full bg-muted border-background shadow-sm text-muted-foreground font-medium -ml-3 z-0",
            sizeClasses[size]
          )}
        >
          +{excessCount}
        </motion.div>
      )}
    </motion.div>
  );
}
