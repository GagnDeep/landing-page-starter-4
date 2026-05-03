"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface AvatarStackProps {
  avatars: string[];
  limit?: number;
  className?: string;
  avatarClassName?: string;
}

export function AvatarStack({
  avatars,
  limit = 4,
  className,
  avatarClassName,
}: AvatarStackProps) {
  const displayAvatars = avatars.slice(0, limit);
  const excessCount = Math.max(0, avatars.length - limit);

  return (
    <div className={cn("flex items-center -space-x-3", className)}>
      {displayAvatars.map((src, idx) => (
        <div
          key={`avatar-${idx}`}
          className={cn(
            "relative w-10 h-10 rounded-full border-2 border-background overflow-hidden transition-transform hover:z-10 hover:scale-110",
            avatarClassName
          )}
          style={{ zIndex: displayAvatars.length - idx }}
        >
          <Image
            src={src}
            alt={`User avatar ${idx + 1}`}
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
      ))}
      {excessCount > 0 && (
        <div
          className={cn(
            "relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-background bg-muted text-xs font-medium text-muted-foreground transition-transform hover:z-10 hover:scale-110",
            avatarClassName
          )}
          style={{ zIndex: 0 }}
        >
          +{excessCount}
        </div>
      )}
    </div>
  );
}
