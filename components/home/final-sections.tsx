"use client";

import { homeContent } from "@/content/home";
import { Button } from "@/components/ui/button";
import { CTAGlow } from "@/components/visuals";
import Link from "next/link";
import { Input } from "@/components/ui/input";

export function SocialProof() {
  const content = homeContent.sections.socialProof;

  // Placeholder array to map blank squares for the instagram feed
  const feed = [1, 2, 3, 4];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl font-heading font-bold mb-2">{content.headline}</h2>
        <a href="https://instagram.com" className="text-muted-foreground hover:text-primary transition-colors inline-block mb-12">
          {content.subheading}
        </a>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {feed.map((i) => (
            <div key={i} className="aspect-square bg-muted/50 rounded-xl flex items-center justify-center border border-border">
              <span className="text-muted-foreground/30 text-sm">@AmilsHairLounge</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Newsletter() {
  const content = homeContent.sections.newsletter;

  return (
    <section className="py-24 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-6 md:px-12 max-w-2xl text-center">
        <h2 className="text-3xl font-heading font-bold mb-4">{content.headline}</h2>
        <p className="text-muted-foreground mb-8">{content.subheading}</p>

        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <Input
            type="email"
            placeholder="Your email address"
            className="h-12 rounded-full bg-background border-border"
          />
          <Button type="submit" className="h-12 rounded-full px-8 shrink-0">
            {content.cta?.label || "Subscribe"}
          </Button>
        </form>
      </div>
    </section>
  );
}

export function PreFooterCTA() {
  const content = homeContent.sections.preFooterCta;

  return (
    <section className="py-32 flex flex-col items-center justify-center text-center px-6">
      <h2 className="text-4xl md:text-6xl font-heading font-bold mb-10 max-w-2xl">
        {content.headline}
      </h2>
      <CTAGlow>
        <Button size="lg" className="h-16 px-10 text-lg rounded-full" asChild>
          <Link href={content.cta?.href || "/contact"}>{content.cta?.label || "Book Now"}</Link>
        </Button>
      </CTAGlow>
    </section>
  );
}
