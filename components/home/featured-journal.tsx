import Link from "next/link";
import { blogContent } from "@/content/blog";
import { homeContent } from "@/content/home";
import { StaggeredReveal, StaggerItem } from "@/components/visuals/staggered-reveal";

export function FeaturedJournal() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
              {homeContent.featuredJournal.title}
            </h2>
            <p className="text-muted-foreground max-w-lg">
              {homeContent.featuredJournal.description}
            </p>
          </div>
          <Link href={homeContent.featuredJournal.cta.href} className="text-primary font-medium text-sm tracking-widest uppercase hover:underline underline-offset-4">
            {homeContent.featuredJournal.cta.label}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogContent.posts.slice(0, 3).map((post, index) => (
            <StaggeredReveal key={post.slug} delay={index * 0.1}>
              <StaggerItem className="group cursor-pointer">
                <div className="border-t border-border pt-6 mt-6 transition-colors duration-300 group-hover:border-primary">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-medium uppercase tracking-widest text-primary">{post.category}</span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="font-heading text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </StaggerItem>
            </StaggeredReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
