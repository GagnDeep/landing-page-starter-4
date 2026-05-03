import { pricingContent } from "@/content/pricing"
import { Button } from "@/components/ui/button"
import { AnimatedGradientMesh, CTAGlow } from "@/components/visuals"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: pricingContent.seo.title,
  description: pricingContent.seo.description,
}

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* 03. Pricing Hero */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden border-b border-border bg-muted/10 px-6 pt-24 text-center md:px-12">
        <AnimatedGradientMesh className="z-0 opacity-20" />
        <div className="z-10 mx-auto max-w-3xl space-y-6">
          <h1 className="font-heading text-5xl leading-tight tracking-tight md:text-7xl">
            {pricingContent.hero.heading}
          </h1>
          <p className="text-lg leading-relaxed font-light text-muted-foreground md:text-xl">
            {pricingContent.hero.subheading}
          </p>
        </div>
      </section>

      {/* 04. Pricing Philosophy */}
      <section className="mx-auto w-full max-w-3xl px-6 py-16 text-center">
        <p className="font-heading text-xl leading-relaxed text-muted-foreground italic md:text-2xl">
          &ldquo;{pricingContent.philosophy.text}&rdquo;
        </p>
      </section>

      {/* 05 - 08. Pricing Tiers */}
      <section className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {pricingContent.categories.map((category, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col rounded-[2.5rem] border p-8 md:p-10 ${category.isHighlighted ? "z-10 scale-100 border-primary bg-primary text-primary-foreground shadow-xl md:scale-105" : "bg-card text-card-foreground shadow-sm"}`}
            >
              {category.isHighlighted && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-foreground px-4 py-1.5 text-xs font-bold tracking-widest text-background uppercase">
                  {pricingContent.labels.mostPopular}
                </span>
              )}
              <div className="mb-8">
                <h3
                  className={`mb-2 font-heading text-3xl ${category.isHighlighted ? "text-primary-foreground" : "text-foreground"}`}
                >
                  {category.name}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${category.isHighlighted ? "opacity-90" : "text-muted-foreground"}`}
                >
                  {category.description}
                </p>
              </div>

              <ul className="mb-12 flex-grow space-y-6">
                {category.services.map((service, sIdx) => (
                  <li
                    key={sIdx}
                    className="flex items-baseline justify-between border-b border-dashed border-border/50 pb-2"
                  >
                    <span className="font-medium">{service.name}</span>
                    <span
                      className={`font-medium ${category.isHighlighted ? "opacity-90" : "text-primary"}`}
                    >
                      {service.price}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={category.isHighlighted ? "secondary" : "outline"}
                className="w-full rounded-full"
                asChild
              >
                <Link href="/contact">{pricingContent.labels.bookTier}</Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* 12. Policies & 14. What's Included */}
      <section className="mx-auto mt-12 grid w-full max-w-7xl grid-cols-1 gap-16 border-t border-border px-6 py-24 md:grid-cols-3">
        <div className="space-y-6">
          <h3 className="text-sm font-semibold tracking-wider uppercase">
            {pricingContent.policies.cancellation.heading}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {pricingContent.policies.cancellation.text}
          </p>
        </div>
        <div className="space-y-6">
          <h3 className="text-sm font-semibold tracking-wider uppercase">
            {pricingContent.policies.payment.heading}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {pricingContent.policies.payment.text}
          </p>
        </div>
        <div className="space-y-6">
          <h3 className="text-sm font-semibold tracking-wider uppercase">
            {pricingContent.whatsIncluded.heading}
          </h3>
          <ul className="space-y-3">
            {pricingContent.whatsIncluded.points.map((point, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm text-muted-foreground"
              >
                <span className="text-primary">✦</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 18. Booking CTA */}
      <section className="border-t border-border bg-muted/30 px-6 py-24 text-center md:py-32">
        <div className="mx-auto max-w-2xl space-y-8">
          <h2 className="font-heading text-4xl md:text-5xl">
            {pricingContent.cta.heading}
          </h2>
          <CTAGlow className="inline-block">
            <Button
              size="lg"
              className="mt-4 rounded-full px-12 text-sm tracking-widest uppercase"
              asChild
            >
              <Link href={pricingContent.cta.cta.href}>
                {pricingContent.cta.cta.label}
              </Link>
            </Button>
          </CTAGlow>
        </div>
      </section>
    </div>
  )
}
