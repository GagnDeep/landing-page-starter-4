import { homeContent } from "@/content/home";
import { HoverCard } from "@/components/visuals/HoverCard";
import { FadeIn } from "@/components/visuals/FadeIn";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export function BlogTeaser() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              {homeContent.blogTeaser.title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link href="/blog" className="group inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {homeContent.blogTeaser.posts.map((post, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Link href={`/blog#`} className="block h-full">
                <HoverCard className="p-8 h-full flex flex-col bg-muted/5 border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </HoverCard>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
