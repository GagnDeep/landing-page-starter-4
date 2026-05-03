import { blogContent } from "@/content/blog";
import { FadeIn } from "@/components/visuals/FadeIn";
import { ParallaxImage } from "@/components/visuals/ParallaxImage";
import { images } from "@/lib/images";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export function BlogFeatured() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <FadeIn className="mb-8">
          <h2 className="text-lg font-semibold text-primary uppercase tracking-wider">{blogContent.featuredPost.category} Highlight</h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn delay={0.1} className="h-[400px] md:h-[500px] rounded-2xl overflow-hidden relative shadow-lg">
            <ParallaxImage
              src={images.blog.placeholder1.src}
              alt={images.blog.placeholder1.alt}
              className="w-full h-full"
              priority
            />
          </FadeIn>

          <div className="flex flex-col space-y-6">
            <FadeIn delay={0.2}>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                  {blogContent.featuredPost.category}
                </span>
                <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {blogContent.featuredPost.date}</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">
                {blogContent.featuredPost.title}
              </h3>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {blogContent.featuredPost.excerpt}
              </p>
            </FadeIn>
            <FadeIn delay={0.5} className="pt-4">
              <Link href="#" className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group">
                Read Full Article
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
