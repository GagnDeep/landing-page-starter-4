"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { HugeiconsIcon } from "@hugeicons/react"
import { Sun03Icon, Moon02Icon } from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className={cn("text-muted-foreground", className)} disabled>
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn(
        "text-muted-foreground hover:text-foreground transition-colors duration-300",
        className
      )}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <HugeiconsIcon
        icon={Sun03Icon}
        className="h-5 w-5 rotate-0 scale-100 transition-transform duration-300 dark:-rotate-90 dark:scale-0"
      />
      <HugeiconsIcon
        icon={Moon02Icon}
        className="absolute h-5 w-5 rotate-90 scale-0 transition-transform duration-300 dark:rotate-0 dark:scale-100"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
