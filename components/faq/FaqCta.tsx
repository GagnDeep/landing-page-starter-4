import { faqContent } from "@/content/faq";
import { FadeIn } from "@/components/visuals/FadeIn";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

export function FaqCta() {
  return (
    <section className="py-24 bg-muted/20 border-t border-border text-center px-4">
      <FadeIn>
        <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <PhoneCall className="h-8 w-8 text-primary" />
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
          {faqContent.cta.headline}
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          {faqContent.cta.description}
        </p>
        <Link
          href="/contact"
          className="inline-flex h-14 items-center justify-center rounded-lg bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          {faqContent.cta.buttonText}
        </Link>
      </FadeIn>
    </section>
  );
}
