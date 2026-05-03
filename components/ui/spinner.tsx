import { cn } from "@/lib/utils"
import { HugeiconsIcon } from "@hugeicons/react"
import { Loading03Icon } from "@hugeicons/core-free-icons"
import React from "react"

// Explicitly omit 'icon' from the inherited props to avoid type collision
// with HugeiconsIcon which expects its own 'icon' type.
type SpinnerProps = Omit<React.ComponentProps<"svg">, "icon">;

function Spinner({ className, ...props }: SpinnerProps) {
  const { strokeWidth, ...restProps } = props;
  const numStrokeWidth = typeof strokeWidth === 'string' ? parseFloat(strokeWidth) : strokeWidth || 2;

  return (
    <HugeiconsIcon icon={Loading03Icon} strokeWidth={numStrokeWidth} role="status" aria-label="Loading" className={cn("size-4 animate-spin", className)} {...restProps} />
  )
}

export { Spinner }
