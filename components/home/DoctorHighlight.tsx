import { homeContent } from "@/content/home";
import { ParallaxImage } from "@/components/visuals/ParallaxImage";
import { FadeIn } from "@/components/visuals/FadeIn";
import { images } from "@/lib/images";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function DoctorHighlight() {
  return (
    <section className="py-24 md:py-32 bg-muted/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 h-[500px] md:h-[600px] rounded-2xl overflow-hidden relative shadow-xl">
            <ParallaxImage
              src={images.about.teamShot.src}
              alt={images.about.teamShot.alt}
              className="w-full h-full"
            />
          </div>

          <div className="order-1 lg:order-2 flex flex-col space-y-6">
            <FadeIn direction="left">
              <span className="text-sm font-semibold tracking-wider text-primary uppercase">
                {homeContent.doctorHighlight.title}
              </span>
            </FadeIn>
            <FadeIn delay={0.1} direction="left">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                {homeContent.doctorHighlight.name}
              </h2>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <p className="text-xl font-medium text-muted-foreground border-l-4 border-primary pl-4">
                {homeContent.doctorHighlight.credentials}
              </p>
            </FadeIn>
            <FadeIn delay={0.3} direction="left">
              <p className="text-lg leading-relaxed text-foreground/80">
                {homeContent.doctorHighlight.bio}
              </p>
            </FadeIn>
            <FadeIn delay={0.4} direction="left" className="pt-4">
              <Link href="/about" className="group inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
                {homeContent.doctorHighlight.linkText}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
