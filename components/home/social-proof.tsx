import { homeContent } from "@/content/home";
import { LogoMarquee } from "@/components/visuals";

export function Testimonials() {
  const content = homeContent.sections.testimonials;

  // Static placeholders for masonry
  const reviews = [
    { text: "The Keratin treatment here completely changed my morning routine. Flawless every time.", author: "Priya S.", rating: 5 },
    { text: "Hands down the best salon in Patiala. The atmosphere is purely luxurious.", author: "Aman K.", rating: 5 },
    { text: "Amil's team fixed a terrible color job I had done elsewhere. The balayage is stunning.", author: "Neha M.", rating: 5 },
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{content.headline}</h2>
        <p className="text-muted-foreground mb-16">{content.subheading}</p>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-card p-8 rounded-2xl border border-border shadow-sm text-left">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6">"{review.text}"</p>
              <p className="font-medium font-heading">{review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Partners() {
  const content = homeContent.sections.partners;

  const placeholderLogos = [
    <div className="text-2xl font-heading font-bold text-muted-foreground">L'ORÉAL</div>,
    <div className="text-2xl font-heading font-bold text-muted-foreground">OLAPLEX</div>,
    <div className="text-2xl font-heading font-bold text-muted-foreground">KÉRASTASE</div>,
    <div className="text-2xl font-heading font-bold text-muted-foreground">SCHWARZKOPF</div>,
  ];

  return (
    <section className="py-20 border-t border-border">
      <div className="container mx-auto px-6 md:px-12 text-center mb-10">
         <h3 className="text-sm uppercase tracking-widest text-muted-foreground font-medium">{content.headline}</h3>
      </div>
      <LogoMarquee logos={placeholderLogos} speed={30} />
    </section>
  );
}
