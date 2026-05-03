import { cn } from "@/lib/utils";

interface ProseProps {
  children?: React.ReactNode;
  className?: string;
  dangerouslySetInnerHTML?: { __html: string };
}

export function Prose({ children, className, dangerouslySetInnerHTML }: ProseProps) {
  if (dangerouslySetInnerHTML) {
    return (
      <div
        className={cn(
          "prose prose-stone dark:prose-invert max-w-4xl mx-auto py-16 px-6 md:px-12",
          "prose-headings:font-heading prose-headings:font-bold prose-h3:text-2xl",
          "prose-p:text-muted-foreground prose-p:leading-relaxed",
          "prose-a:text-primary hover:prose-a:text-primary/80 transition-colors",
          className
        )}
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      />
    );
  }

  return (
    <div
      className={cn(
        "prose prose-stone dark:prose-invert max-w-4xl mx-auto py-16 px-6 md:px-12",
        "prose-headings:font-heading prose-headings:font-bold prose-h3:text-2xl",
        "prose-p:text-muted-foreground prose-p:leading-relaxed",
        "prose-a:text-primary hover:prose-a:text-primary/80 transition-colors",
        className
      )}
    >
      {children}
    </div>
  );
}
