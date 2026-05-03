import { SEOMetadata, CTA } from "./types";

export const pricingContent = {
  seo: {
    title: "Pricing & Memberships | Boho Salon",
    description: "Transparent pricing for our luxury salon services. View our tiers for nails, hair, skin, and exclusive bridal packages.",
  } as SEOMetadata,

  hero: {
    heading: "Transparent Luxury",
    subheading: "An investment in meticulous craftsmanship and premium products.",
  },

  philosophy: {
    text: "Our pricing reflects the time, expertise, and quality of materials dedicated to each service. We do not compromise on products, and our technicians take the time necessary to ensure flawless results.",
  },

  categories: [
    {
      name: "Essential Care",
      description: "Our foundation services, executed perfectly.",
      services: [
        { name: "Classic Manicure", price: "₹1,000" },
        { name: "Classic Pedicure", price: "₹1,200" },
        { name: "Women's Haircut", price: "₹1,500" },
        { name: "Root Touch-up", price: "₹2,500" },
      ],
    },
    {
      name: "Signature Boho",
      description: "Our most requested, specialized services.",
      isHighlighted: true,
      services: [
        { name: "Russian Gel Manicure", price: "₹1,800" },
        { name: "Chrome Gel Extensions", price: "₹3,500" },
        { name: "Curly Hair Dry Cut", price: "₹2,500" },
        { name: "Olaplex Curl Spa", price: "₹3,000" },
      ],
    },
    {
      name: "Luxury & Bridal",
      description: "Comprehensive transformations.",
      services: [
        { name: "Bridal Gel Hands & Feet", price: "₹6,500" },
        { name: "Full Balayage & Tone", price: "from ₹8,000" },
        { name: "Signature Glow Facial", price: "₹4,500" },
      ],
    },
  ],

  policies: {
    cancellation: {
      heading: "Cancellation Policy",
      text: "We require 24 hours notice for cancellations. Late cancellations or no-shows may be subject to a fee of 50% of the scheduled service.",
    },
    payment: {
      heading: "Accepted Methods",
      text: "We accept all major credit cards, UPI, and cash.",
    },
  },

  whatsIncluded: {
    heading: "Always Included",
    points: [
      "Complimentary artisanal coffee or green tea",
      "High-speed Wi-Fi",
      "Personalized consultation",
      "Product recommendations",
    ],
  },

  cta: {
    heading: "Ready to Book?",
    cta: {
      label: "View Full Menu & Schedule",
      href: "/contact",
    } as CTA,
  },
};
