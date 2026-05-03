import { homeContent } from "@/content/home";
import { FadeIn } from "@/components/visuals/FadeIn";
import Link from "next/link";
import { CreditCard, ArrowRight } from "lucide-react";

export function FinancingTeaser() {
  return (
    <section className="py-24 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-primary/5 rounded-3xl p-8 md:p-16 border border-primary/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10 hidden md:block">
            <CreditCard size={200} />
          </div>

          <div className="relative z-10 max-w-2xl">
            <FadeIn>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                {homeContent.financing.title}
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg text-muted-foreground mb-8">
                {homeContent.financing.description}
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link
                href="/pricing"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                {homeContent.financing.linkText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
