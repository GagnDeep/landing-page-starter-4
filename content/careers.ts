import { SEOMetadata, CTA } from "./types";

export const careersContent = {
  seo: {
    title: "Careers | Join the Boho Salon Team",
    description: "We are always looking for passionate, skilled artists to join our team in Chandigarh. Explore career opportunities, apprenticeships, and our salon culture.",
  } as SEOMetadata,

  hero: {
    heading: "Build Your Craft With Us",
    subheading: "We elevate the standard of beauty in Chandigarh. We need artists who want to do the same.",
  },

  pitch: {
    heading: "Why Boho Salon?",
    text: "We believe that to provide the best service to our clients, we must provide the best environment for our team. We reject the high-stress, quantity-over-quality model. Instead, we foster a space of continuous education, mutual respect, and artistic freedom.",
  },

  benefits: {
    heading: "The Perks of Partnership",
    items: [
      { title: "Competitive Compensation", description: "Above-market base pay with a transparent commission structure." },
      { title: "Continuing Education", description: "Regular workshops on the latest international techniques and products." },
      { title: "Quality Materials", description: "Work exclusively with premium brands like Olaplex, Dyson, and top-tier gels." },
      { title: "Work-Life Balance", description: "Predictable scheduling and respect for your time off." },
    ],
  },

  openings: {
    heading: "Current Opportunities",
    jobs: [
      {
        title: "Senior Nail Technician",
        type: "Full-Time",
        description: "Must have 3+ years experience with hard gel extensions and e-file (Russian) manicures.",
      },
      {
        title: "Curly Hair Specialist",
        type: "Full-Time",
        description: "Looking for a stylist passionate about texture, proficient in dry cutting techniques.",
      },
      {
        title: "Front Desk Coordinator",
        type: "Full-Time",
        description: "The face of Boho Salon. Must possess excellent communication skills and a welcoming demeanor.",
      },
    ],
  },

  apprenticeship: {
    heading: "The Boho Apprenticeship",
    text: "Just starting out? We offer a rigorous 6-month apprenticeship program designed to transition passionate beginners into floor-ready artists.",
  },

  applicationProcess: {
    heading: "How to Apply",
    steps: [
      "Submit your resume and digital portfolio (Instagram is fine!).",
      "Initial phone or video interview.",
      "In-person technical demonstration.",
      "Final culture-fit interview.",
    ],
  },

  cta: {
    heading: "Ready to Elevate Your Career?",
    cta: {
      label: "Email Your Portfolio",
      href: "mailto:careers@bohosalon.com",
    } as CTA,
  },
};
