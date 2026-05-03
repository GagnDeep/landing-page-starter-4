import { homeContent } from "@/content/home";
import { FadeIn } from "@/components/visuals/FadeIn";
import { MapPin, Clock, Phone } from "lucide-react";

export function LocationMap() {
  return (
    <section className="py-24 bg-muted/20 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          <div className="flex flex-col space-y-8">
            <FadeIn>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                {homeContent.location.title}
              </h2>
            </FadeIn>

            <div className="space-y-6">
              <FadeIn delay={0.1} className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Address</p>
                  <p className="text-muted-foreground">{homeContent.location.address}</p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2} className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Hours</p>
                  <p className="text-muted-foreground">{homeContent.location.hours}</p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3} className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Direct Line</p>
                  <p className="text-muted-foreground">{homeContent.location.phone}</p>
                </div>
              </FadeIn>
            </div>
          </div>

          <FadeIn delay={0.4} className="h-[400px] lg:h-[500px] w-full bg-muted rounded-2xl overflow-hidden border border-border flex items-center justify-center shadow-inner relative">
            {/* Placeholder for actual Google Maps iframe integration */}
            <div className="absolute inset-0 bg-secondary/10 flex flex-col items-center justify-center text-center p-6">
              <MapPin className="h-12 w-12 text-primary/40 mb-4" />
              <p className="text-muted-foreground font-medium">Interactive Map Integration</p>
              <p className="text-sm text-muted-foreground/60 mt-2">Sector 18A, Chandigarh</p>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
