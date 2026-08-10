import { cn } from "@/lib/utils"

export function Prose({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "prose prose-sm md:prose-base dark:prose-invert max-w-[70ch]",
        "prose-headings:font-heading prose-headings:tracking-tight prose-headings:uppercase",
        "prose-p:font-sans prose-p:leading-relaxed",
        "prose-a:text-accent prose-a:no-underline hover:prose-a:underline",
        "prose-strong:text-foreground prose-strong:font-bold",
        "prose-code:font-mono prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md",
        className
      )}
    >
      {children}
    </div>
  )
}
