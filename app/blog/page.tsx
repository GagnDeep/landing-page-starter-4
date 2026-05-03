import { blogContent } from "@/content/blog";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: blogContent.meta.title,
  description: blogContent.meta.description,
};

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-background">
        <div className="absolute inset-0 z-0 opacity-30">
          <AnimatedGradientMesh />
        </div>
        <div className="container relative z-10 px-4 md:px-6 mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-semibold text-primary mb-6 tracking-tight">
            {blogContent.hero.heading}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {blogContent.hero.subheading}
          </p>
        </div>
      </section>

      {/* 2 & 3. Categories Filter & Search (Mocked search for UI) */}
      <section className="py-8 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <Button variant="secondary" className="rounded-full">
                All
              </Button>
              {blogContent.categories.map((category) => (
                <Button key={category} variant="outline" className="rounded-full">
                  {category}
                </Button>
              ))}
            </div>
            <div className="relative w-full md:w-auto max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="w-full pl-9 rounded-full bg-background"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Article Grid (Empty State) */}
      <section className="py-20 bg-background flex-1">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center py-20 px-4 text-center border-2 border-dashed border-border rounded-2xl bg-muted/10">
            <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Search className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-heading font-medium text-foreground mb-4">
              Coming Soon
            </h3>
            <p className="text-muted-foreground max-w-md">
              {blogContent.placeholders.emptyState}
            </p>
          </div>
        </div>
      </section>

      {/* 5. Newsletter Signup */}
      <section className="py-20 bg-primary/5 border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-heading font-semibold text-foreground">
              {blogContent.newsletter.heading}
            </h2>
            <p className="text-muted-foreground">
              {blogContent.newsletter.description}
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" action="#">
              <Input
                type="email"
                placeholder="Enter your email"
                required
                className="bg-background rounded-full"
              />
              <Button type="submit" className="rounded-full shrink-0">
                {blogContent.newsletter.cta}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
