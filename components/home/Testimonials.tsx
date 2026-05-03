import { homeContent } from "@/content/home";
import { HoverCard } from "@/components/visuals/HoverCard";
import { FadeIn } from "@/components/visuals/FadeIn";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <FadeIn className="mb-16 md:text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            {homeContent.testimonials.title}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {homeContent.testimonials.reviews.map((review, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <HoverCard className="p-8 h-full flex flex-col bg-muted/10 border-border/50">
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg italic text-foreground/90 leading-relaxed mb-8 flex-grow">
                  &quot;{review.quote}&quot;
                </p>
                <div className="flex items-center gap-4 border-t border-border pt-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center font-heading font-bold text-primary">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{review.author}</p>
                    <p className="text-sm text-muted-foreground">Verified Patient</p>
                  </div>
                </div>
              </HoverCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
