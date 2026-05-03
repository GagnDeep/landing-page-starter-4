"use client";

import { homeContent } from "@/content/home";
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon } from "@hugeicons/core-free-icons";

export function PreHeader() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible || !homeContent.preHeader) return null;

  return (
    <div className="bg-foreground text-background flex items-center justify-center py-2 px-4 text-xs tracking-wider uppercase relative">
      <p className="text-center w-full">{homeContent.preHeader}</p>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
        aria-label="Dismiss announcement"
      >
        <HugeiconsIcon icon={Cancel01Icon} className="h-4 w-4" />
      </button>
    </div>
  );
}
