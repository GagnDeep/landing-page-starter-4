import { homeContent } from "@/content/home";
import { TestimonialCarousel as Carousel } from "@/components/visuals/testimonial-carousel";
import { AnimatedStatCounter } from "@/components/visuals/animated-stat-counter";

export function StatsAndTestimonials() {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 pb-24 border-b border-border">
          <AnimatedStatCounter value={10} suffix="+" label="Years of Excellence" />
          <AnimatedStatCounter value={5000} suffix="+" label="Smiles Designed" />
          <AnimatedStatCounter value={4} suffix=".9" label="Global Rating" />
          <AnimatedStatCounter value={40} suffix="+" label="Countries Served" />
        </div>

        <div>
          <h2 className="text-center font-heading text-3xl md:text-4xl text-foreground mb-16">
            {homeContent.testimonials.title}
          </h2>
          <Carousel items={homeContent.testimonials.items} />
        </div>
      </div>
    </section>
  );
}
