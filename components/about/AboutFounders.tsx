import { aboutContent } from "@/content/about";
import { ParallaxImage } from "@/components/visuals/ParallaxImage";
import { FadeIn } from "@/components/visuals/FadeIn";
import { images } from "@/lib/images";

export function AboutFounders() {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <FadeIn className="mb-16 md:text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            {aboutContent.founders.title}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="h-[500px] md:h-[600px] rounded-2xl overflow-hidden relative shadow-xl order-2 lg:order-1">
            <ParallaxImage
              src={images.about.teamShot.src}
              alt={images.about.teamShot.alt}
              className="w-full h-full"
            />
          </div>

          <div className="flex flex-col space-y-12 order-1 lg:order-2">
            {aboutContent.founders.profiles.map((profile, index) => (
              <FadeIn key={index} delay={index * 0.2} direction="left">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                  {profile.name}
                </h3>
                <p className="text-primary font-medium mb-4">{profile.role}</p>
                <p className="text-muted-foreground leading-relaxed">
                  {profile.bio}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
