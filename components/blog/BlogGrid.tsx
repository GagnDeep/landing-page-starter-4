"use client";

import { blogContent } from "@/content/blog";
import { HoverCard } from "@/components/visuals/HoverCard";
import { FadeIn } from "@/components/visuals/FadeIn";
import { useState } from "react";
import { images } from "@/lib/images";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";

export function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const placeholders = [images.blog.placeholder2, images.blog.placeholder3, images.blog.placeholder1];

  return (
    <section className="py-24 bg-muted/10 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">

        {/* Category Filter */}
        <FadeIn className="mb-12 flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === "All"
                ? "bg-primary text-primary-foreground"
                : "bg-background border border-border text-foreground hover:bg-muted"
            }`}
          >
            All
          </button>
          {blogContent.categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-background border border-border text-foreground hover:bg-muted"
              }`}
            >
              {cat}
            </button>
          ))}
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogContent.posts.map((post, index) => {
            const img = placeholders[index % placeholders.length];
            // Simple filter logic for visual sake
            if (activeCategory !== "All" && post.category !== activeCategory) return null;

            return (
              <FadeIn key={index} delay={index * 0.1}>
                <Link href={`#`} className="block h-full group">
                  <HoverCard className="h-full flex flex-col bg-background border-border/50 overflow-hidden">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground"><Calendar className="h-3 w-3" /> {post.date}</span>
                      </div>
                      <h3 className="font-heading text-xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm flex-grow">
                        {post.excerpt}
                      </p>
                    </div>
                  </HoverCard>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
