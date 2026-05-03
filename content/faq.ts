import { SEOMetadata, FAQItem, CTA } from "./types";

export const faqContent = {
  seo: {
    title: "FAQ | Boho Salon Policies & Questions",
    description: "Frequently asked questions about booking, services, and policies at Boho Salon Chandigarh.",
  } as SEOMetadata,

  hero: {
    heading: "Common Inquiries",
    subheading: "Everything you need to know before your visit.",
  },

  categories: [
    {
      name: "Booking & Appointments",
      items: [
        {
          question: "Do I need to make an appointment in advance?",
          answer: "Yes, we are a strictly appointment-only salon to ensure every client receives our undivided attention and full allotted time.",
        },
        {
          question: "What is your cancellation policy?",
          answer: "We kindly request at least 24 hours' notice for cancellations or rescheduling. Late cancellations may incur a fee of 50% of the service cost.",
        },
        {
          question: "How do I book a bridal package?",
          answer: "Bridal packages require a preliminary consultation. Please reach out via our contact form or WhatsApp to schedule a call with our bridal coordinator.",
        },
      ] as FAQItem[],
    },
    {
      name: "Nail Services",
      items: [
        {
          question: "What is a Russian Manicure?",
          answer: "A Russian Manicure (or e-file manicure) uses an electronic file to gently and meticulously remove excess cuticle, resulting in a cleaner look and longer-lasting polish application.",
        },
        {
          question: "How long do chrome gel extensions last?",
          answer: "With proper care, our gel extensions last 3-4 weeks before requiring a fill or removal.",
        },
      ] as FAQItem[],
    },
    {
      name: "Hair Services",
      items: [
        {
          question: "How should I arrive for a curly cut?",
          answer: "Please arrive with your hair completely dry, detangled, and styled how you wear it naturally (with minimal product). Do not tie it up or braid it.",
        },
        {
          question: "Do you use Olaplex?",
          answer: "Yes, Olaplex is integrated into our color services and available as a standalone deep hydration spa treatment.",
        },
      ] as FAQItem[],
    },
  ],

  cta: {
    heading: "Still have questions?",
    text: "We're happy to help clarify any details.",
    cta: {
      label: "Contact Us",
      href: "/contact",
    } as CTA,
  },
};
