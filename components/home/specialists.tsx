import { homeContent } from "@/content/home";
import { imageRegistry } from "@/lib/images";
import { AvatarStack, DotMatrixGrid } from "@/components/visuals";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FeaturedSpecialists() {
  const content = homeContent.sections.featuredSpecialists;
  const avatars = [
    imageRegistry.avatar1,
    imageRegistry.avatar2,
    imageRegistry.avatar3
  ];

  return (
    <section className="py-24 border-y border-border">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{content.headline}</h2>
          <p className="text-lg text-muted-foreground">{content.subheading}</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-8">
          <AvatarStack avatars={avatars} size="lg" />
          <Button variant="outline" className="rounded-full h-12 px-8">
            <Link href="/about#team">Meet the Team</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function TreatmentDeepDive() {
  const content = homeContent.sections.treatmentDeepDive;

  return (
    <section className="relative py-32 overflow-hidden bg-background">
      <DotMatrixGrid opacity={0.3} />

      <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center relative z-10">
        <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/50 text-sm font-medium mb-8">
          The Science of Shine
        </div>
        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8">{content.headline}</h2>
        <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground font-light">
          {content.body}
        </p>
      </div>
    </section>
  );
}
