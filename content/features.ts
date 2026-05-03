import { SEOMetadata, CTA } from "./types"

export const featuresContent = {
  seo: {
    title: "The Boho Experience | Features & Specialties",
    description:
      "Discover what sets Boho Salon apart. From rigorous hygiene standards and international product lines to our specialized NRI client services.",
  } as SEOMetadata,

  hero: {
    heading: "Beyond Standard Beauty",
    subheading:
      "An elevated approach to salon culture, prioritizing technique, hygiene, and the client experience.",
  },

  philosophy: {
    heading: "The Boho Philosophy",
    text: "We recognized a gap in the market for a truly international salon experience in Chandigarh. Boho Salon was built to provide uncompromising quality, utilizing global techniques in an environment that feels simultaneously luxurious and relaxed. We do not rush; we craft.",
  },

  features: [
    {
      title: "The NRI Standard",
      description:
        "We understand the expectations of our global clientele. Our booking systems, hygiene protocols, and service longevity are designed to match and exceed the standards of top salons in London, Toronto, and New York.",
    },
    {
      title: "Clinical-Grade Hygiene",
      description:
        "Your safety is non-negotiable. We utilize hospital-grade autoclaves for all metal implements, single-use files and buffers, and strict sanitization between every client.",
    },
    {
      title: "Master Technicians",
      description:
        "Our staff does not learn on the job. Every technician and stylist undergoes rigorous internal training and continuing education to master the latest global trends.",
    },
  ],

  technology: {
    heading: "The Toolkit",
    items: [
      {
        name: "Premium Gels",
        description:
          "Sourced directly from Japan and Korea for unmatched durability.",
      },
      {
        name: "Dyson Styling",
        description: "Minimizing heat damage for healthier hair.",
      },
      {
        name: "Olaplex Integration",
        description:
          "Standard in our color and curl treatments to protect hair integrity.",
      },
    ],
  },

  sustainability: {
    heading: "Conscious Craft",
    text: "Luxury shouldn't cost the earth. We are actively reducing single-use plastics, responsibly recycling chemical waste, and choosing cruelty-free product partners whenever possible.",
  },

  hygieneGuarantee: {
    heading: "Our Hygiene Promise",
    points: [
      "Autoclave sterilization for all tools.",
      "New, sealed pouches opened in front of you.",
      "Single-use buffers, files, and foot bath liners.",
      "Thorough station sanitization between appointments.",
    ],
  },

  cta: {
    heading: "Experience the Difference",
    cta: {
      label: "Book Your Visit",
      href: "/contact",
    } as CTA,
  },
}
