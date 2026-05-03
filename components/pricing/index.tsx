import { pricingContent } from "@/content/pricing";
import { Button } from "@/components/ui/button";
import { CTAGlow } from "@/components/visuals";
import Link from "next/link";
import { Info } from "lucide-react";

export function PricingDisclaimer() {
  const content = pricingContent.sections.disclaimer;
  return (
    <div className="container mx-auto px-6 md:px-12 py-12">
      <div className="bg-muted/50 border border-border rounded-xl p-4 flex items-start gap-4 max-w-4xl mx-auto">
        <Info className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
        <p className="text-sm text-muted-foreground leading-relaxed">{content.body}</p>
      </div>
    </div>
  );
}

export function PricingTables() {
  const tables = pricingContent.sections.pricingTables;
  const categories = [tables.treatments, tables.color, tables.styling, tables.spa];

  return (
    <section className="py-12 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {categories.map((cat: any, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-heading font-bold mb-6 pb-4 border-b border-border">{cat.category}</h3>
              <ul className="space-y-6">
                {cat.items.map((item: any, i: number) => (
                  <li key={i} className="flex justify-between items-baseline group">
                    <span className="text-foreground font-medium pr-4 bg-background relative z-10 group-hover:text-primary transition-colors">{item.name}</span>
                    <div className="flex-1 border-b-2 border-dotted border-border/60 relative -top-1" />
                    <span className="text-muted-foreground font-heading pl-4 bg-background relative z-10">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PricingMemberships() {
  const content = pricingContent.sections.memberships;
  return (
    <section className="py-24 bg-secondary/20 border-y border-border">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
        <h2 className="text-3xl font-heading font-bold mb-6">{content.headline}</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">{content.body}</p>
      </div>
    </section>
  );
}

export function PricingCTA() {
  const content = pricingContent.sections.bookingCta;
  return (
    <section className="py-32 flex flex-col items-center justify-center text-center px-6">
      <h2 className="text-4xl md:text-5xl font-heading font-bold mb-10 max-w-2xl">
        {content.headline}
      </h2>
      <CTAGlow>
        <Button size="lg" className="h-16 px-10 text-lg rounded-full" asChild>
          <Link href={content.cta?.href || "/contact"}>{content.cta?.label || "Book Your Appointment"}</Link>
        </Button>
      </CTAGlow>
    </section>
  );
}
