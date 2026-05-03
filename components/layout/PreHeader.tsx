"use client"

import { homeContent } from "@/content/home"
import { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { Cancel01Icon } from "@hugeicons/core-free-icons"

export function PreHeader() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible || !homeContent.preHeader) return null

  return (
    <div className="relative flex items-center justify-center bg-foreground px-4 py-2 text-xs tracking-wider text-background uppercase">
      <p className="w-full text-center">{homeContent.preHeader}</p>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-1/2 right-4 -translate-y-1/2 transition-opacity hover:opacity-70"
        aria-label="Dismiss announcement"
      >
        <HugeiconsIcon icon={Cancel01Icon} className="h-4 w-4" />
      </button>
    </div>
  )
}
