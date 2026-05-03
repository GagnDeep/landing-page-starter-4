"use client"

import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

interface LogoMarqueeProps {
  className?: string
  logos: Array<{ src: string; alt: string }>
  speed?: number // duration of one full scroll cycle in seconds
}

export function LogoMarquee({
  className,
  logos,
  speed = 40,
}: LogoMarqueeProps) {
  const shouldReduceMotion = useReducedMotion()

  // If reduced motion is preferred, we just show a static flex row, wrapping.
  if (shouldReduceMotion) {
    return (
      <div
        className={cn(
          "flex flex-wrap justify-center gap-8 py-8 opacity-50 grayscale",
          className
        )}
      >
        {logos.map((logo, idx) => (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            key={`static-${idx}`}
            src={logo.src}
            alt={logo.alt}
            className="h-12 w-auto object-contain"
          />
        ))}
      </div>
    )
  }

  // Duplicate the logos array so we have enough content to scroll seamlessly
  const scrollContent = [...logos, ...logos, ...logos]

  return (
    <div
      className={cn(
        "mask-image-fade-horizontal relative flex w-full overflow-hidden py-12",
        className
      )}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
      }}
    >
      <motion.div
        className="flex w-max flex-nowrap gap-16 pr-16 opacity-60 grayscale transition-all duration-500 hover:grayscale-0"
        animate={{
          x: ["0%", "-33.333333%"], // Move exactly one set of logos over
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {scrollContent.map((logo, idx) => (
          <div
            key={`marquee-${idx}`}
            className="relative flex h-10 w-32 items-center justify-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-10 w-auto object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
