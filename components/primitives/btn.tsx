import { cn } from "@/lib/utils"
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react"

type Variant = "primary" | "gold" | "ghost"
type Size = "sm" | "default" | "lg"

interface BaseProps {
  variant?: Variant
  size?: Size
  className?: string
  children?: ReactNode
}

const cls = (variant: Variant, size: Size, extra?: string) =>
  cn(
    "btn",
    variant === "primary" && "btn-primary",
    variant === "gold" && "btn-gold",
    variant === "ghost" && "btn-ghost",
    size === "sm" && "btn-sm",
    size === "lg" && "btn-lg",
    extra,
  )

export function Btn({
  variant = "primary",
  size = "default",
  className,
  children,
  ...rest
}: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cls(variant, size, className)} {...rest}>
      {children}
    </button>
  )
}

export function BtnLink({
  variant = "primary",
  size = "default",
  className,
  children,
  ...rest
}: BaseProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={cls(variant, size, className)} {...rest}>
      {children}
    </a>
  )
}
