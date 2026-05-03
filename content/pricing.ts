import { PageContent } from "./types";

export const pricingContent: PageContent = {
  seo: {
    title: "Pricing | Amil's Hair Lounge",
    description:
      "Transparent pricing for our premium salon services in Patiala. Explore costs for hair botox, keratin, coloring, and styling.",
  },
  sections: {
    hero: {
      headline: "Transparent Luxury",
      subheading: "Clear, upfront pricing for premium, transformative services.",
    },
    disclaimer: {
      body: "Please note: All prices listed are starting prices. Final costs may vary based on hair length, density, and the specific needs determined during your consultation.",
    },
    pricingTables: {
      treatments: {
        category: "Signature Treatments",
        items: [
          { name: "Hair Botox", price: "From ₹4,500" },
          { name: "Keratin Therapy", price: "From ₹5,000" },
          { name: "Nanoplastia", price: "From ₹6,000" },
          { name: "Olaplex Standalone Treatment", price: "From ₹2,500" },
        ]
      },
      color: {
        category: "Color Services",
        items: [
          { name: "Global Root Touch-up", price: "From ₹1,200" },
          { name: "Global Color", price: "From ₹3,500" },
          { name: "Balayage / Ombre", price: "From ₹5,500" },
          { name: "Highlights (Partial / Full)", price: "From ₹3,000 / ₹5,000" },
        ]
      },
      styling: {
        category: "Cuts & Styling",
        items: [
          { name: "Women's Precision Cut & Blowdry", price: "From ₹800" },
          { name: "Men's Classic Cut", price: "From ₹400" },
          { name: "Signature Blowout", price: "From ₹500" },
          { name: "Event Styling / Updo", price: "From ₹1,500" },
        ]
      },
      spa: {
        category: "Spa & Essentials",
        items: [
          { name: "Luxury Hair Spa", price: "From ₹1,500" },
          { name: "Purifying Scalp Treatment", price: "From ₹1,200" },
          { name: "Deep Conditioning Mask", price: "From ₹800" },
        ]
      }
    },
    memberships: {
      headline: "Lounge Packages",
      body: "Ask in-salon about our bundled packages for regular treatment maintenance and color upkeep, designed to offer our loyal clients exceptional value.",
    },
    bookingCta: {
      headline: "Ready to elevate your look?",
      cta: { label: "Book Your Appointment", href: "/contact" },
    },
  },
};
