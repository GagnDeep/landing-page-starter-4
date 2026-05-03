"use client";

import { homeContent } from "@/content/home";
import { FadeIn } from "@/components/visuals/FadeIn";
import { Mail } from "lucide-react";

export function NewsletterSignup() {
  return (
    <section className="py-24 bg-muted/20 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <FadeIn>
            <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Mail className="h-8 w-8 text-primary" />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              {homeContent.newsletter.title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-muted-foreground mb-8">
              {homeContent.newsletter.description}
            </p>
          </FadeIn>
          <FadeIn delay={0.3} className="w-full max-w-md">
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder={homeContent.newsletter.placeholder}
                className="flex-1 h-12 rounded-md border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                required
              />
              <button
                type="submit"
                className="h-12 inline-flex items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {homeContent.newsletter.buttonText}
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
