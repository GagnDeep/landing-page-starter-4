import { SEOMetadata, CTA } from "./types";

export const servicesContent = {
  seo: {
    title: "Services | Boho Salon Chandigarh",
    description: "Explore our curated menu of luxury services, from signature chrome gel extensions to bespoke curly hair treatments and premium grooming.",
  } as SEOMetadata,

  hero: {
    heading: "Curated Beauty Experiences",
    subheading: "Where meticulous technique meets artistic vision. Explore our specialized service menu.",
  },

  nails: {
    heading: "Nail Artistry",
    items: [
      { name: "Signature Gel Manicure", price: "₹1,500", description: "Premium Russian manicure with hard gel overlay." },
      { name: "Chrome Gel Extensions", price: "₹3,500", description: "Sculpted extensions with our signature flawless chrome finish." },
      { name: "Bespoke Nail Art", price: "from ₹500", description: "Hand-painted, intricate designs tailored to your aesthetic." },
      { name: "Gel Polish Removal & Care", price: "₹800", description: "Safe removal and deeply hydrating cuticle treatment." },
    ],
    highlight: {
      title: "The Chrome Standard",
      text: "Our most requested service. We source the finest metallic powders internationally to guarantee a mirror-like, chip-resistant finish.",
    },
  },

  hair: {
    heading: "Hair Expertise",
    items: [
      { name: "The Curl Transformation Cut", price: "₹2,500", description: "Specialized dry cut honoring your natural curl pattern." },
      { name: "Deep Hydration Curl Spa", price: "₹3,000", description: "Intensive moisture treatment utilizing premium Olaplex formulas." },
      { name: "Balayage & Color Placement", price: "from ₹6,500", description: "Seamless, dimensional color designed for graceful grow-out." },
      { name: "Signature Blowout", price: "₹1,200", description: "Voluminous, long-lasting styling." },
    ],
    highlight: {
      title: "Masters of Texture",
      text: "Textured hair requires a different approach. Our specialists are extensively trained in curl architecture, ensuring your natural pattern is celebrated, never compromised.",
    },
  },

  skin: {
    heading: "Skin & Grooming",
    items: [
      { name: "Boho Signature Facial", price: "₹4,500", description: "Customized 90-minute treatment focusing on hydration and glow." },
      { name: "Brow Lamination & Tint", price: "₹2,200", description: "Sculpted, full brows that last up to six weeks." },
      { name: "Luxury Threading", price: "₹300", description: "Gentle, precise shaping." },
    ],
  },

  bridal: {
    heading: "The NRI Bridal Experience",
    description: "Comprehensive beauty curation for the modern bride. We offer bespoke packages including pre-wedding skin prep, gel extensions, and styling, ensuring you look flawless across all your events.",
    cta: {
      label: "Request Bridal Lookbook",
      href: "/contact",
    } as CTA,
  },

  process: {
    heading: "Our Approach",
    steps: [
      { title: "01. Consultation", text: "Every service begins with a thorough discussion of your goals and hair/nail history." },
      { title: "02. Execution", text: "Using exclusively premium, internationally sourced products and rigorous hygiene protocols." },
      { title: "03. Aftercare", text: "We provide detailed guidance to ensure your results remain pristine long after you leave the salon." },
    ],
  },

  cta: {
    heading: "Reserve Your Time",
    buttonLabel: "Book Now",
    href: "/contact",
  },
};
