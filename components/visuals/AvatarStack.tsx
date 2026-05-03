"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Avatar {
  src: string;
  alt: string;
}

interface AvatarStackProps {
  avatars: Avatar[];
  limit?: number;
  className?: string;
}

export function AvatarStack({ avatars, limit = 4, className }: AvatarStackProps) {
  const displayAvatars = avatars.slice(0, limit);
  const excess = avatars.length - limit;

  return (
    <div className={cn("flex items-center", className)}>
      {displayAvatars.map((avatar, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
          className={cn(
            "relative w-10 h-10 rounded-full border-2 border-background overflow-hidden",
            idx !== 0 && "-ml-3"
          )}
          style={{ zIndex: displayAvatars.length - idx }}
        >
          <Image
            src={avatar.src}
            alt={avatar.alt}
            fill
            className="object-cover"
            sizes="40px"
          />
        </motion.div>
      ))}

      {excess > 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: displayAvatars.length * 0.1 }}
          className={cn(
            "relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-background bg-muted text-muted-foreground text-xs font-medium -ml-3 z-0"
          )}
        >
          +{excess}
        </motion.div>
      )}
    </div>
  );
}
