import { homeContent } from "@/content/home";
import { FadeIn } from "@/components/visuals/FadeIn";
import Link from "next/link";
import { CalendarRange } from "lucide-react";

export function FinalCta() {
  return (
    <section className="relative py-32 overflow-hidden bg-primary text-primary-foreground">
      {/* We use a tailored background effect for the dark CTA block */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-30 mix-blend-overlay">
        <div className="absolute top-[-50%] left-[-20%] w-[70%] h-[150%] rounded-full bg-secondary filter blur-[120px]" />
        <div className="absolute bottom-[-50%] right-[-20%] w-[70%] h-[150%] rounded-full bg-background filter blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 text-center max-w-3xl">
        <FadeIn>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            {homeContent.finalCta.headline}
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-xl text-primary-foreground/80 mb-12">
            {homeContent.finalCta.subheadline}
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <Link
            href="/contact"
            className="inline-flex h-16 items-center justify-center rounded-lg bg-background px-10 text-lg font-semibold text-primary shadow-xl transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            <CalendarRange className="mr-3 h-6 w-6" />
            {homeContent.finalCta.buttonText}
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
