import { aboutContent } from "@/content/about";
import { StaggeredReveal, StaggerItem } from "@/components/visuals/staggered-reveal";
import { images } from "@/lib/images";
import Image from "next/image";

// Map members to images based on the content strings
const memberImages: Record<string, string> = {
  "Dr. Shobit Sethi": images.people.drSethi,
  "Dr. Ananya Sharma": images.people.patient3, // Placeholders
  "Dr. Rahul Verma": images.people.patient2,
};

export function TheTeam() {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <StaggeredReveal className="mb-16 md:mb-24 text-center max-w-2xl mx-auto">
          <StaggerItem>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
               {aboutContent.team.title}
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-muted-foreground text-lg leading-relaxed">
               {aboutContent.team.description}
            </p>
          </StaggerItem>
        </StaggeredReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {aboutContent.team.members.map((member, i) => (
             <StaggeredReveal key={member.name} delay={i * 0.1}>
                <StaggerItem className="group cursor-pointer">
                   <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden mb-6">
                      <Image
                        src={memberImages[member.name] || images.abstract.textureLight}
                        alt={member.name}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      />
                   </div>
                   <h3 className="font-heading text-2xl text-foreground mb-2">
                     {member.name}
                   </h3>
                   <p className="text-primary text-xs uppercase tracking-widest font-medium mb-4">
                     {member.role}
                   </p>
                   <p className="text-sm text-muted-foreground leading-relaxed">
                     {member.bio}
                   </p>
                </StaggerItem>
             </StaggeredReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
