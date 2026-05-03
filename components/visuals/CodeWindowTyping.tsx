"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"

interface CodeWindowTypingProps {
  className?: string
  codeLines?: string[]
  typingSpeed?: number
}

const defaultLines = [
  "import { Artistry } from '@salon/core';",
  "import { Precision } from '@academy/techniques';",
  "",
  "const masterclass = new Precision({",
  "  focus: 'Bridal Perfection',",
  "  duration: '8 Weeks',",
  "});",
  "",
  "masterclass.execute();",
]

export function CodeWindowTyping({
  className,
  codeLines = defaultLines,
  typingSpeed = 50,
}: CodeWindowTypingProps) {
  const [displayedText, setDisplayedText] = useState("")
  const fullText = codeLines.join("\n")

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i))
      i++
      if (i > fullText.length) {
        clearInterval(interval)
      }
    }, typingSpeed)

    return () => clearInterval(interval)
  }, [fullText, typingSpeed])

  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-border bg-[#1A1B26] shadow-2xl",
        className
      )}
    >
      {/* Window Header */}
      <div className="flex items-center border-b border-[#292e42] bg-[#1f2335] px-4 py-3">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-[#f7768e]" />
          <div className="h-3 w-3 rounded-full bg-[#e0af68]" />
          <div className="h-3 w-3 rounded-full bg-[#9ece6a]" />
        </div>
        <div className="mx-auto font-mono text-xs text-[#a9b1d6] opacity-60">
          academy-module.ts
        </div>
      </div>

      {/* Code Content */}
      <div className="overflow-auto p-6">
        <pre className="font-mono text-sm leading-relaxed text-[#a9b1d6]">
          <code>
            {displayedText}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="ml-1 inline-block h-4 w-2 bg-primary align-middle"
            />
          </code>
        </pre>
      </div>
    </div>
  )
}
