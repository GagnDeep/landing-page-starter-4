import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface Props {
  children: ReactNode
  className?: string
  gold?: boolean
}

export function Eyebrow({ children, className, gold }: Props) {
  return (
    <span className={cn("eyebrow", gold && "gold-eyebrow", className)}>
      <span className="dot" aria-hidden="true" />
      {children}
    </span>
  )
}
