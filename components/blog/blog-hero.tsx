import { blogContent } from "@/content/blog";
import { CinematicParallax } from "@/components/visuals/cinematic-parallax";
import { StaggeredReveal, StaggerItem } from "@/components/visuals/staggered-reveal";
import { images } from "@/lib/images";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function BlogHero() {
  return (
    <section className="relative pt-32 pb-24 border-b border-border bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <StaggeredReveal className="mb-16">
          <StaggerItem>
            <h1 className="font-heading text-5xl md:text-7xl text-foreground font-medium tracking-tight mb-6">
              {blogContent.hero.headline}
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl leading-relaxed">
              {blogContent.hero.subheadline}
            </p>
          </StaggerItem>
        </StaggeredReveal>

        {/* Featured Post */}
        <Link href={`/blog/${blogContent.featuredPost.slug}`} className="group block">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-card rounded-3xl overflow-hidden border border-border shadow-sm transition-all duration-500 hover:shadow-xl">
            <div className="lg:col-span-7 relative h-[400px] w-full overflow-hidden">
              <CinematicParallax src={images.treatments.veneers} alt={blogContent.featuredPost.title} overlay={false} className="w-full h-full" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
            </div>
            <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  {blogContent.featuredPost.category}
                </span>
                <span className="text-sm text-muted-foreground">{blogContent.featuredPost.date}</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6 group-hover:text-primary transition-colors">
                {blogContent.featuredPost.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {blogContent.featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-primary">
                Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
