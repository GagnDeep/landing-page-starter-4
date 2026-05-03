import Link from "next/link";
import { homeContent } from "@/content/home";
import { MagneticButton } from "@/components/visuals/magnetic-button";

export function CtaModule() {
  return (
    <section className="py-32 md:py-40 bg-foreground text-background text-center px-6">
      <div className="container mx-auto max-w-3xl">
        <h2 className="font-heading text-4xl md:text-6xl font-medium mb-6">
          {homeContent.ctaModule.headline}
        </h2>
        <p className="text-lg md:text-xl text-muted/80 mb-12 font-light">
          {homeContent.ctaModule.subheadline}
        </p>
        <Link href={homeContent.ctaModule.ctaPrimary.href}>
          <MagneticButton className="bg-background text-foreground hover:bg-background/90">
            {homeContent.ctaModule.ctaPrimary.label}
          </MagneticButton>
        </Link>
      </div>
    </section>
  );
}
