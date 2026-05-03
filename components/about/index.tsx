import { aboutContent } from "@/content/about";
import { ParallaxImageWrapper, AvatarStack, CTAGlow } from "@/components/visuals";
import { imageRegistry } from "@/lib/images";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function VisionMission() {
  const content = aboutContent.sections.visionMission;
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-heading font-medium mb-8">{content.headline}</h2>
        <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed font-light">{content.body}</p>
      </div>
    </section>
  );
}

export function TheJourney() {
  const content = aboutContent.sections.theJourney;
  return (
    <section className="py-24 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden">
          <ParallaxImageWrapper image={imageRegistry.salonInterior} />
        </div>
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">{content.headline}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{content.body}</p>
        </div>
      </div>
    </section>
  );
}

export function MeetTheTeam() {
  const content = aboutContent.sections.team;
  const avatars = [imageRegistry.avatar1, imageRegistry.avatar2, imageRegistry.avatar3];

  return (
    <section className="py-24" id="team">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{content.headline}</h2>
        <p className="text-muted-foreground mb-16 max-w-2xl mx-auto">{content.subheading}</p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {content.members?.map((member: any, idx: number) => (
            <div key={idx} className="bg-card border border-border rounded-2xl p-6 shadow-sm">
              <div className="aspect-square relative rounded-xl overflow-hidden mb-6">
                 <ParallaxImageWrapper image={avatars[idx] || imageRegistry.avatar1} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-1">{member.name}</h3>
              <p className="text-sm text-primary mb-4 font-medium uppercase tracking-wider">{member.role}</p>
              <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TheSpace() {
  const content = aboutContent.sections.space;

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">{content.headline}</h2>
        <p className="text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed">{content.body}</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="aspect-[4/5] rounded-xl overflow-hidden relative col-span-2 row-span-2">
            <ParallaxImageWrapper image={imageRegistry.salonInterior} />
          </div>
          <div className="aspect-square rounded-xl overflow-hidden relative">
            <ParallaxImageWrapper image={imageRegistry.productLux} />
          </div>
          <div className="aspect-square rounded-xl overflow-hidden relative">
            <ParallaxImageWrapper image={imageRegistry.stylingBlowout} />
          </div>
          <div className="aspect-square rounded-xl overflow-hidden relative col-span-2">
            <ParallaxImageWrapper image={imageRegistry.stylistTeam} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function CoreValues() {
  const content = aboutContent.sections.coreValues;
  const values = [content.quality, content.community, content.expertise];

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">{content.headline}</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {values.map((val, idx) => (
            <div key={idx} className="text-center md:text-left">
              <div className="text-4xl font-heading text-secondary/50 mb-4">0{idx + 1}</div>
              <h3 className="text-xl font-bold mb-4">{val.title}</h3>
              <p className="text-primary-foreground/80 leading-relaxed">{val.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutCTAs() {
  const careers = aboutContent.sections.careersTeaser;
  const final = aboutContent.sections.finalCta;

  return (
    <section className="py-32">
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
        <div className="bg-secondary/20 p-12 rounded-3xl border border-border text-center">
          <h2 className="text-2xl font-heading font-bold mb-4">{careers.headline}</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">{careers.body}</p>
          <Button variant="outline" className="rounded-full px-8" asChild>
             <Link href={careers.cta?.href || "/careers"}>{careers.cta?.label || "Careers"}</Link>
          </Button>
        </div>

        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-10">{final.headline}</h2>
          <CTAGlow>
            <Button size="lg" className="rounded-full h-16 px-10 text-lg" asChild>
              <Link href={final.cta?.href || "/contact"}>{final.cta?.label || "Contact Us"}</Link>
            </Button>
          </CTAGlow>
        </div>
      </div>
    </section>
  );
}
