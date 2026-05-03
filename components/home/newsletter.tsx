import { Input } from "@/components/ui/input";
import { MagneticButton } from "@/components/visuals/magnetic-button";
import { homeContent } from "@/content/home";

export function Newsletter() {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6 max-w-xl text-center">
        <h2 className="font-heading text-3xl mb-4">{homeContent.newsletter.headline}</h2>
        <p className="text-muted mb-8 font-light">{homeContent.newsletter.subheadline}</p>
        <form className="flex gap-2">
          <Input
            type="email"
            placeholder={homeContent.newsletter.placeholder}
            className="bg-background/10 border-background/20 text-background placeholder:text-muted focus-visible:ring-background/30 h-auto py-3 px-4"
          />
          <MagneticButton strength={10} className="bg-background text-foreground hover:bg-background/90 px-6 py-3 whitespace-nowrap">
            {homeContent.newsletter.ctaLabel}
          </MagneticButton>
        </form>
      </div>
    </section>
  );
}
