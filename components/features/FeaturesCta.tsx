import { featuresContent } from "@/content/features";
import { FadeIn } from "@/components/visuals/FadeIn";
import Link from "next/link";
import { CalendarRange } from "lucide-react";

export function FeaturesCta() {
  return (
    <section className="py-24 bg-primary text-primary-foreground text-center px-4">
      <FadeIn>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-8">
          {featuresContent.cta.headline}
        </h2>
        <Link
          href="/contact"
          className="inline-flex h-14 items-center justify-center rounded-lg bg-background px-8 text-base font-semibold text-primary shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
        >
          <CalendarRange className="mr-3 h-5 w-5" />
          {featuresContent.cta.buttonText}
        </Link>
      </FadeIn>
    </section>
  );
}
