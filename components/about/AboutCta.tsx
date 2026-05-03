import { aboutContent } from "@/content/about";
import { FadeIn } from "@/components/visuals/FadeIn";
import Link from "next/link";
import { CalendarRange } from "lucide-react";

export function AboutCta() {
  return (
    <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/10 mix-blend-overlay" />
      <div className="container mx-auto px-4 md:px-8 text-center relative z-10 max-w-3xl">
        <FadeIn>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">
            {aboutContent.cta.headline}
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <Link
            href="/contact"
            className="inline-flex h-16 items-center justify-center rounded-lg bg-background px-10 text-lg font-semibold text-primary shadow-xl transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            <CalendarRange className="mr-3 h-6 w-6" />
            {aboutContent.cta.buttonText}
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
