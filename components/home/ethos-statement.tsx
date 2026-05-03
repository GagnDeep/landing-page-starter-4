import { homeContent } from "@/content/home";
import { StaggeredReveal, StaggerItem } from "@/components/visuals/staggered-reveal";

export function EthosStatement() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <StaggeredReveal>
          <StaggerItem>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-foreground font-medium leading-tight mb-12">
              {homeContent.ethos.quote}
            </h2>
          </StaggerItem>
          <StaggerItem>
            <div className="flex flex-col items-center gap-1">
              <span className="text-base font-medium text-primary uppercase tracking-widest">
                {homeContent.ethos.author}
              </span>
              <span className="text-sm text-muted-foreground">
                {homeContent.ethos.title}
              </span>
            </div>
          </StaggerItem>
        </StaggeredReveal>
      </div>
    </section>
  );
}
