import { cn } from "@/lib/utils"
import { HugeiconsIcon } from "@hugeicons/react"
import { Loading03Icon } from "@hugeicons/core-free-icons"

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  // Extract strokeWidth from props and cast to number, or default to 2
  const { strokeWidth, ...restProps } = props;
  const numStrokeWidth = typeof strokeWidth === 'string' ? parseFloat(strokeWidth) : strokeWidth || 2;

  return (
    <HugeiconsIcon icon={Loading03Icon} strokeWidth={numStrokeWidth} role="status" aria-label="Loading" className={cn("size-4 animate-spin", className)} {...restProps as any} />
  )
}

export { Spinner }
