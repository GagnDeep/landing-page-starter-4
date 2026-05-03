"use client";

import { useState } from "react";
import { blogContent } from "@/content/blog";
import { cn } from "@/lib/utils";
import { StaggeredReveal, StaggerItem } from "@/components/visuals/staggered-reveal";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ArticleGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPosts = activeCategory === "all"
    ? blogContent.posts
    : blogContent.posts.filter(post => post.category.toLowerCase().replace(" ", "-") === activeCategory);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        {/* Category Filter */}
        <div className="flex overflow-x-auto pb-4 mb-12 gap-2 hide-scrollbar mask-edges">
          {blogContent.categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={cn(
                "px-5 py-2 rounded-full text-sm whitespace-nowrap transition-colors border",
                activeCategory === category.value
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-muted-foreground border-border hover:border-foreground/30"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <StaggeredReveal key={post.slug} delay={index * 0.1}>
              <StaggerItem>
                <Link href={`/blog/${post.slug}`} className="group flex flex-col h-full bg-card rounded-2xl border border-border p-6 md:p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/5 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="font-heading text-2xl text-foreground mb-4 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-8">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-foreground group-hover:text-primary transition-colors mt-auto">
                    Read <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </StaggerItem>
            </StaggeredReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
