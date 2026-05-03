import React from 'react';
import Link from 'next/link';
import { homeContent } from '@/content/home';
import { blogContent } from '@/content/blog';

export function BlogTeaser() {
  const { blogTeaser } = homeContent;
  const recentPosts = blogContent.recentArticles.posts.slice(0, 3);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            {blogTeaser.headline}
          </h2>
          <Link
            href="/blog"
            className="inline-block font-sans text-sm font-semibold tracking-widest uppercase text-primary hover:text-foreground transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-px after:bg-primary"
          >
            {blogTeaser.cta}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentPosts.map((post, idx) => (
            <Link key={idx} href="/blog" className="group flex flex-col h-full border-b border-border pb-8">
              <span className="font-sans text-xs tracking-[0.2em] text-primary uppercase font-bold mb-4 block">
                {post.category}
              </span>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="font-sans text-muted-foreground font-light mb-6 flex-grow">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-muted-foreground uppercase tracking-widest font-semibold mt-auto">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
