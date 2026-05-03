import Link from "next/link";
import { homeContent } from "@/content/home";
import { images } from "@/lib/images";
import Image from "next/image";
import { StaggeredReveal, StaggerItem } from "@/components/visuals/staggered-reveal";

const serviceImages: Record<string, string> = {
  "Porcelain Veneers": images.treatments.veneers,
  "Dental Implants": images.treatments.implants,
  "Invisalign Elite": images.treatments.invisalign,
};

export function SignatureTreatments() {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <StaggeredReveal className="mb-16 md:mb-24">
          <StaggerItem>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
              {homeContent.services.title}
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-muted-foreground text-lg max-w-xl">
              {homeContent.services.description}
            </p>
          </StaggerItem>
        </StaggeredReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {homeContent.services.items.map((item, index) => (
            <Link key={item.title} href={item.href} className="group block">
              <StaggeredReveal delay={index * 0.1}>
                <StaggerItem>
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl mb-6">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
                    <Image
                      src={serviceImages[item.title] || images.abstract.textureLight}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                  </div>
                  <h3 className="font-heading text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </StaggerItem>
              </StaggeredReveal>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
