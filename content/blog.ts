import { SEOMetadata } from "./types";

export const blogContent = {
  seo: {
    title: "The Journal | Boho Salon",
    description: "Insights on nail trends, curly hair care, and the art of modern beauty from the experts at Boho Salon.",
  } as SEOMetadata,

  hero: {
    heading: "The Journal",
    subheading: "Notes on craft, care, and culture from the Boho Salon team.",
  },

  categories: ["All", "Nail Art", "Curl Care", "Skin Rituals", "Salon News"],

  featuredPost: {
    title: "Why We Swear by the Russian Manicure",
    excerpt: "Demystifying the technique that revolutionized our nail services and why it's the only standard we accept.",
    content: "The Russian Manicure technique involves using an e-file to meticulously remove the cuticle, allowing polish to be applied deeper, extending the life of your manicure by weeks. Unlike traditional methods that push or clip, this dry technique minimizes trauma and ensures a pristine, flawless finish. We pair this with our signature hard gels to create structural integrity for the nail, meaning your luxury chrome finish won't chip during travel.",
    date: "October 12, 2024",
    category: "Nail Art",
    slug: "why-we-swear-by-the-russian-manicure",
  },

  posts: [
    {
      title: "The Transition: Embracing Your Natural Curls",
      excerpt: "A step-by-step guide to recovering from heat damage and chemical straightening.",
      content: "Transitioning back to natural curls after years of heat styling or chemical treatments requires patience and a completely revamped routine. The foundation lies in deep, structural hydration. We utilize Olaplex treatments to rebuild broken disulfide bonds before executing a specialized dry cut, ensuring we understand your unique curl architecture. The goal isn't just to cut hair; it's to retrain it to find its natural, beautiful shape.",
      date: "September 28, 2024",
      category: "Curl Care",
      slug: "embracing-natural-curls",
    },
    {
      title: "Chrome Nails: The Trend That Became a Classic",
      excerpt: "How metallic finishes evolved from a passing fad to a bridal staple.",
      content: "What began as an edgy editorial look has rapidly transitioned into the most requested bridal aesthetic. The high-shine metallic finish offers a sophisticated twist on the traditional French tip or neutral palette. Our international powders, imported directly from Japan, provide a mirror-like finish that catches the light beautifully in wedding photography while maintaining extreme durability throughout multiple events.",
      date: "September 15, 2024",
      category: "Nail Art",
      slug: "chrome-nails-classic",
    },
    {
      title: "Pre-Wedding Skincare Timeline for the NRI Bride",
      excerpt: "When to start your facials and how to manage skin stress while traveling.",
      content: "Long-haul flights combined with pre-wedding stress are a recipe for skin barrier compromise. The ideal timeline begins six months prior, focusing heavily on hydration and gentle exfoliation. However, for brides arriving weeks before the event, our protocol shifts to intense barrier repair and soothing oxygen facials. We strongly advise against any aggressive extractions or peels within two weeks of your first event.",
      date: "August 30, 2024",
      category: "Skin Rituals",
      slug: "nri-bride-skincare-timeline",
    },
    {
      title: "The Importance of Autoclave Sterilization",
      excerpt: "Why UV boxes aren't enough, and how we guarantee clinical hygiene.",
      content: "Hygiene is the unseen foundation of luxury. While many salons rely on UV light boxes or liquid sanitizers, Boho Salon utilizes medical-grade autoclaves. This ensures that every metal implement is sterilized under high pressure and temperature, eliminating all bacteria and spores. Every tool is opened from a sealed, indicator-marked pouch directly in front of you, providing absolute peace of mind.",
      date: "August 10, 2024",
      category: "Salon News",
      slug: "autoclave-sterilization",
    },
  ],

  labels: {
    loadMore: "Load More",
    readArticle: "Read Article",
  },

  newsletter: {
    heading: "Get the latest from The Journal",
    description: "Trends and tips delivered straight to your inbox.",
    buttonLabel: "Subscribe",
  },
};
