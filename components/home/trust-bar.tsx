import { homeContent } from "@/content/home";

export function TrustBar() {
  return (
    <section className="py-12 bg-background border-b border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-8">
          {homeContent.trustBar.title}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {homeContent.trustBar.affiliations.map((affiliation) => (
            <span key={affiliation} className="text-sm font-medium text-foreground">
              {affiliation}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
