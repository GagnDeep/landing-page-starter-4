import { aboutContent } from "@/content/about";
import { FadeIn } from "@/components/visuals/FadeIn";

export function AboutMilestones() {
  return (
    <section className="py-24 bg-muted/20 border-y border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <FadeIn className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            {aboutContent.milestones.title}
          </h2>
        </FadeIn>

        <div className="relative border-l-2 border-primary/30 ml-4 md:ml-0 md:border-l-0">
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -ml-[1px] w-0.5 bg-primary/30" />

          <div className="space-y-12">
            {aboutContent.milestones.events.map((event, index) => (
              <FadeIn key={index} delay={index * 0.1} direction="up" className="relative flex flex-col md:flex-row items-center md:justify-between group">
                {/* Mobile Dot */}
                <div className="md:hidden absolute -left-5 top-1 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />

                {/* Desktop layout: Alternate left/right based on index */}
                <div className={`md:w-5/12 ml-6 md:ml-0 pl-4 md:pl-0 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:order-3 md:text-left md:pl-12"}`}>
                  <span className="font-heading text-2xl font-bold text-primary mb-2 block">{event.year}</span>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>

                {/* Desktop Center Dot */}
                <div className="hidden md:flex absolute left-1/2 -ml-3 h-6 w-6 rounded-full bg-background border-4 border-primary items-center justify-center z-10 transition-transform group-hover:scale-125" />

                <div className={`hidden md:block md:w-5/12 ${index % 2 === 0 ? "md:order-3" : ""}`} />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
