"use client";

import { blogContent } from "@/content/blog";
import { ParallaxImageWrapper } from "@/components/visuals";
import { imageRegistry } from "@/lib/images";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FeaturedArticle() {
  const content = blogContent.sections.featuredArticle;

  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <Link href="#" className="group block relative rounded-3xl overflow-hidden border border-border bg-card">
          <div className="grid md:grid-cols-2">
            <div className="aspect-[4/3] md:aspect-auto relative overflow-hidden">
              <ParallaxImageWrapper image={imageRegistry.treatmentKeratin} />
            </div>
            <div className="p-8 md:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wider">
                <span className="text-primary">{content.category}</span>
                <span>•</span>
                <span>{content.date}</span>
                <span>•</span>
                <span>{content.readTime}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 group-hover:text-primary transition-colors">{content.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{content.excerpt}</p>
              <div className="flex items-center text-primary font-medium">
                Read Article <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

export function CategoryFilters() {
  const categories = blogContent.sections.categories;
  const items = [categories.trends, categories.maintenance, categories.products, categories.news];

  return (
    <section className="py-8 border-y border-border bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">
          <Button variant="secondary" className="rounded-full">All Topics</Button>
          {items.map((item, idx) => (
            <Button key={idx} variant="ghost" className="rounded-full whitespace-nowrap text-muted-foreground">
              {item}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ArticleGrid() {
  const articles = blogContent.sections.articles;
  const items = [articles.post1, articles.post2, articles.post3, articles.post4];
  const images = [imageRegistry.colorBalayage, imageRegistry.treatmentBotox, imageRegistry.stylingBlowout, imageRegistry.productLux];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12">
          {items.map((item, idx) => (
            <Link key={idx} href="#" className="group block">
              <div className="aspect-[16/9] relative rounded-2xl overflow-hidden mb-6 border border-border">
                 <ParallaxImageWrapper image={images[idx]} />
              </div>
              <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider">
                <span className="text-primary">{item.category}</span>
                <span>•</span>
                <span>{item.readTime}</span>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.excerpt}</p>
            </Link>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button variant="outline" size="lg" className="rounded-full px-10">Load More Articles</Button>
        </div>
      </div>
    </section>
  );
}

export function BlogNewsletter() {
  const content = blogContent.sections.newsletterSignup;
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12 max-w-2xl text-center">
        <h2 className="text-3xl font-heading font-bold mb-4">{content.headline}</h2>
        <p className="text-primary-foreground/80 mb-8 text-lg">{content.body}</p>

        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <Input
            type="email"
            placeholder="Your email address"
            className="h-12 rounded-full bg-background border-border text-foreground"
          />
          <Button type="submit" variant="secondary" className="h-12 rounded-full px-8 shrink-0">
            {content.cta?.label || "Subscribe"}
          </Button>
        </form>
      </div>
    </section>
  );
}
