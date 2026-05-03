"use client";

import { blogContent } from "@/content/blog";
import { FadeIn } from "@/components/visuals/FadeIn";
import { Mail } from "lucide-react";

export function BlogNewsletter() {
  return (
    <section className="py-24 bg-primary text-primary-foreground text-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/10 mix-blend-overlay" />
      <div className="container relative z-10 mx-auto max-w-3xl flex flex-col items-center">
        <FadeIn>
          <Mail className="h-12 w-12 mb-6 opacity-80" />
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            {blogContent.newsletter.title}
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-lg text-primary-foreground/80 mb-8">
            {blogContent.newsletter.description}
          </p>
        </FadeIn>
        <FadeIn delay={0.3} className="w-full max-w-md">
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 h-12 rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background"
              required
            />
            <button
              type="submit"
              className="h-12 inline-flex items-center justify-center rounded-md bg-background px-8 text-sm font-semibold text-primary shadow transition-colors hover:bg-background/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              {blogContent.newsletter.buttonText}
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
