import { cn } from "@/lib/utils"
import { createElement, type ReactNode } from "react"

interface Props {
  as?: "h1" | "h2" | "h3"
  html?: string
  children?: ReactNode
  className?: string
}

export function DisplayHeading({
  as = "h2",
  html,
  children,
  className,
}: Props) {
  if (html) {
    return createElement(as, {
      className: cn("display", className),
      dangerouslySetInnerHTML: { __html: html },
    })
  }
  return createElement(
    as,
    { className: cn("display", className) },
    children,
  )
}
