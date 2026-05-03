import { PageMetadata } from "./home";

export interface BenefitData {
  title: string;
  description: string;
}

export interface JobPosition {
  id: string;
  title: string;
  type: string; // e.g., "Full-time", "Part-time"
  description: string;
  requirements: string[];
}

export const careersContent = {
  metadata: {
    title: "Careers | Perfect Smile Dental Clinic",
    description: "Join the team at Perfect Smile Dental Clinic in Chandigarh. We are looking for compassionate, skilled dental professionals to grow with us.",
  } as PageMetadata,

  hero: {
    headline: "Join the Perfect Smile Family",
    subheadline: "Build a rewarding career in a modern, supportive environment focused on exceptional patient care rather than quotas.",
  },

  culture: {
    headline: "Why Work With Us?",
    blocks: [
      { title: "Patient-First Philosophy", description: "We practice ethical dentistry. You'll never be pressured to upsell; your only goal is to provide the best possible care for the patient in the chair." },
      { title: "State-of-the-Art Facility", description: "Work with the best tools available. From digital scanners to advanced rotary endodontics, we invest in technology that makes your job easier and safer." },
      { title: "Supportive Team Culture", description: "We believe in collaboration, not competition. You'll be joining a tight-knit family that supports each other's professional growth." },
    ] as BenefitData[],
  },

  benefits: {
    headline: "Benefits & Perks",
    items: [
      "Highly Competitive Compensation",
      "Comprehensive Health Coverage",
      "Continuing Education Allowance",
      "Paid Time Off & Holidays",
      "Family Dental Care Benefits",
      "Modern, Ergonomic Workstations",
    ],
  },

  testimonials: [
    { quote: "Working here is completely different from corporate dentistry. Dr. Singh actually listens to the staff and prioritizes high-quality care over high patient volume.", author: "Priya S., Lead Hygienist" },
    { quote: "The clinic is beautiful and the technology is top-notch. It makes coming to work every day a pleasure.", author: "Anjali V., Associate Dentist" },
  ],

  openings: {
    headline: "Open Positions",
    noOpeningsMessage: "We are currently fully staffed, but we are always looking to connect with talented professionals. Please send your resume to careers@perfectsmilechandigarh.com.",
    positions: [
      {
        id: "dental-hygienist",
        title: "Registered Dental Hygienist",
        type: "Full-time",
        description: "We are seeking a gentle, patient-focused hygienist to join our preventive care team. The ideal candidate loves educating patients and has a warm chairside manner.",
        requirements: [
          "Valid Dental Hygiene License",
          "Minimum 2 years clinical experience",
          "Proficiency with digital X-rays",
          "Excellent communication skills",
        ],
      },
      {
        id: "patient-coordinator",
        title: "Front Desk / Patient Coordinator",
        type: "Full-time",
        description: "Be the first smiling face our patients see! We need an organized, empathetic coordinator to manage scheduling, insurance verification, and patient onboarding.",
        requirements: [
          "Previous experience in a dental or medical office",
          "Familiarity with dental billing and insurance",
          "Strong multitasking abilities",
          "Warm, professional phone etiquette",
        ],
      },
    ] as JobPosition[],
  },

  generalApplication: {
    headline: "Don't see a perfect fit?",
    body: "We are always eager to meet passionate dental professionals. Send your resume and a brief cover letter telling us why you'd be a great addition to our team.",
    cta: { label: "Email Your Resume", href: "mailto:careers@perfectsmilechandigarh.com" },
  },
};
