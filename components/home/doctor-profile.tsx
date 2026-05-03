import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/content/home";
import { images } from "@/lib/images";
import { StaggeredReveal, StaggerItem } from "@/components/visuals/staggered-reveal";

export function DoctorProfile() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="lg:col-span-5 relative">
            <StaggeredReveal>
              <StaggerItem>
                 <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                    <Image
                      src={images.people.drSethi}
                      alt={homeContent.doctorProfile.name}
                      fill
                      className="object-cover"
                    />
                 </div>
              </StaggerItem>
            </StaggeredReveal>
          </div>

          <div className="lg:col-span-7">
            <StaggeredReveal>
              <StaggerItem>
                <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-2">
                  {homeContent.doctorProfile.name}
                </h2>
              </StaggerItem>
              <StaggerItem>
                <p className="text-primary text-sm tracking-widest uppercase font-medium mb-8">
                  {homeContent.doctorProfile.credentials}
                </p>
              </StaggerItem>
              <StaggerItem>
                <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                  {homeContent.doctorProfile.bio}
                </p>
              </StaggerItem>
              <StaggerItem>
                 <Link
                  href={homeContent.doctorProfile.cta.href}
                  className="inline-flex items-center gap-4 group"
                 >
                    <span className="text-sm tracking-widest uppercase font-medium group-hover:text-primary transition-colors">
                      {homeContent.doctorProfile.cta.label}
                    </span>
                    <div className="w-12 h-[1px] bg-foreground group-hover:bg-primary group-hover:w-16 transition-all duration-300" />
                 </Link>
              </StaggerItem>
            </StaggeredReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
