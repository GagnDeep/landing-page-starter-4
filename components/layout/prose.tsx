import { cn } from "@/lib/utils"

export function Prose({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn("prose prose-neutral dark:prose-invert max-w-none prose-headings:font-heading prose-a:text-primary hover:prose-a:text-primary/80 prose-p:text-body prose-headings:tracking-tight", className)}>
      {children}
    </div>
  )
}
