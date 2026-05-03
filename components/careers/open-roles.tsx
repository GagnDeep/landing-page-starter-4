import { careersContent } from "@/content/careers";
import { StaggeredReveal, StaggerItem } from "@/components/visuals/staggered-reveal";
import { ArrowRight } from "lucide-react";

export function OpenRoles() {
  return (
    <section className="py-24 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <StaggeredReveal className="mb-16">
          <StaggerItem>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground">
              {careersContent.openRoles.title}
            </h2>
          </StaggerItem>
        </StaggeredReveal>

        <div className="space-y-6">
          {careersContent.openRoles.roles.map((role, index) => (
            <StaggeredReveal key={role.id} delay={index * 0.1}>
              <StaggerItem className="group bg-background rounded-2xl border border-border p-8 hover:shadow-md hover:border-primary/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                  <div>
                    <h3 className="font-heading text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      {role.title}
                    </h3>
                    <span className="inline-block bg-muted text-muted-foreground text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      {role.type}
                    </span>
                  </div>
                  <button className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-border group-hover:border-primary group-hover:bg-primary/5 transition-colors shrink-0">
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </button>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {role.description}
                </p>
                <div className="mt-6 md:hidden">
                   <span className="text-primary text-sm font-medium uppercase tracking-widest flex items-center gap-2">
                     Apply Now <ArrowRight className="w-4 h-4" />
                   </span>
                </div>
              </StaggerItem>
            </StaggeredReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
