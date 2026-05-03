import { pricingContent } from "@/content/pricing";
import { Button } from "@/components/ui/button";
import { AnimatedGradientMesh, CTAGlow } from "@/components/visuals";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: pricingContent.seo.title,
  description: pricingContent.seo.description,
};

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 03. Pricing Hero */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden pt-24 px-6 md:px-12 text-center bg-muted/10 border-b border-border">
        <AnimatedGradientMesh className="z-0 opacity-20" />
        <div className="z-10 max-w-3xl mx-auto space-y-6">
          <h1 className="font-heading text-5xl md:text-7xl leading-tight tracking-tight">
            {pricingContent.hero.heading}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            {pricingContent.hero.subheading}
          </p>
        </div>
      </section>

      {/* 04. Pricing Philosophy */}
      <section className="py-16 px-6 max-w-3xl mx-auto w-full text-center">
        <p className="font-heading text-xl md:text-2xl leading-relaxed italic text-muted-foreground">
          &ldquo;{pricingContent.philosophy.text}&rdquo;
        </p>
      </section>

      {/* 05 - 08. Pricing Tiers */}
      <section className="py-16 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingContent.categories.map((category, idx) => (
                <div key={idx} className={`relative flex flex-col p-8 md:p-10 rounded-[2.5rem] border ${category.isHighlighted ? 'bg-primary text-primary-foreground shadow-xl scale-100 md:scale-105 z-10 border-primary' : 'bg-card text-card-foreground shadow-sm'}`}>
                    {category.isHighlighted && (
                        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs font-bold tracking-widest uppercase py-1.5 px-4 rounded-full">
                            {pricingContent.labels.mostPopular}
                        </span>
                    )}
                    <div className="mb-8">
                        <h3 className={`font-heading text-3xl mb-2 ${category.isHighlighted ? 'text-primary-foreground' : 'text-foreground'}`}>{category.name}</h3>
                        <p className={`text-sm leading-relaxed ${category.isHighlighted ? 'opacity-90' : 'text-muted-foreground'}`}>{category.description}</p>
                    </div>

                    <ul className="space-y-6 mb-12 flex-grow">
                        {category.services.map((service, sIdx) => (
                            <li key={sIdx} className="flex justify-between items-baseline border-b border-dashed border-border/50 pb-2">
                                <span className="font-medium">{service.name}</span>
                                <span className={`font-medium ${category.isHighlighted ? 'opacity-90' : 'text-primary'}`}>{service.price}</span>
                            </li>
                        ))}
                    </ul>

                    <Button variant={category.isHighlighted ? "secondary" : "outline"} className="w-full rounded-full" asChild>
                        <Link href="/contact">{pricingContent.labels.bookTier}</Link>
                    </Button>
                </div>
            ))}
        </div>
      </section>

      {/* 12. Policies & 14. What's Included */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full border-t border-border mt-12 grid grid-cols-1 md:grid-cols-3 gap-16">
         <div className="space-y-6">
            <h3 className="font-semibold tracking-wider uppercase text-sm">{pricingContent.policies.cancellation.heading}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{pricingContent.policies.cancellation.text}</p>
         </div>
         <div className="space-y-6">
            <h3 className="font-semibold tracking-wider uppercase text-sm">{pricingContent.policies.payment.heading}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{pricingContent.policies.payment.text}</p>
         </div>
         <div className="space-y-6">
             <h3 className="font-semibold tracking-wider uppercase text-sm">{pricingContent.whatsIncluded.heading}</h3>
             <ul className="space-y-3">
                 {pricingContent.whatsIncluded.points.map((point, idx) => (
                     <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                         <span className="text-primary">✦</span>
                         <span>{point}</span>
                     </li>
                 ))}
             </ul>
         </div>
      </section>

      {/* 18. Booking CTA */}
      <section className="py-24 md:py-32 px-6 bg-muted/30 text-center border-t border-border">
        <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="font-heading text-4xl md:text-5xl">{pricingContent.cta.heading}</h2>
            <CTAGlow className="inline-block">
                <Button size="lg" className="rounded-full px-12 tracking-widest uppercase text-sm mt-4" asChild>
                    <Link href={pricingContent.cta.cta.href}>{pricingContent.cta.cta.label}</Link>
                </Button>
            </CTAGlow>
        </div>
      </section>
    </div>
  );
}
