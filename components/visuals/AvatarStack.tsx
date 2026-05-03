"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { ImageAsset } from "@/lib/images";

interface AvatarStackProps {
  avatars: ImageAsset[];
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function AvatarStack({ avatars, className, size = "md" }: AvatarStackProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16"
  };

  return (
    <div className={cn("flex items-center", className)}>
      {avatars.map((avatar, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.1, duration: 0.5 }}
          className={cn(
            "relative rounded-full border-2 border-background overflow-hidden bg-muted",
            sizeClasses[size],
            idx !== 0 && "-ml-4"
          )}
          style={{ zIndex: avatars.length - idx }}
        >
          <Image
            src={avatar.src}
            alt={avatar.alt}
            fill
            sizes="100px"
            className="object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
}
