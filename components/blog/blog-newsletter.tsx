import { blogContent } from "@/content/blog";
import { Input } from "@/components/ui/input";
import { MagneticButton } from "@/components/visuals/magnetic-button";

export function BlogNewsletter() {
  return (
    <section className="py-24 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6 max-w-xl text-center">
        <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
          {blogContent.newsletter.headline}
        </h2>
        <p className="text-muted-foreground mb-8">
          {blogContent.newsletter.description}
        </p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder={blogContent.newsletter.placeholder}
            className="bg-background border-border h-12 px-4 focus-visible:ring-primary flex-1"
          />
          <MagneticButton strength={10} className="h-12 whitespace-nowrap px-8">
            {blogContent.newsletter.ctaLabel}
          </MagneticButton>
        </form>
      </div>
    </section>
  );
}
