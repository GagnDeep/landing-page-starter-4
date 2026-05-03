import { PageMetadata, HeroData, CallToActionData } from "./home";

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export interface ValueData {
  title: string;
  description: string;
}

export const aboutContent = {
  metadata: {
    title: "About Us | Perfect Smile Dental Clinic",
    description: "Learn about Perfect Smile Dental Clinic's legacy of trust, our dedicated team led by Dr. Sarabjeet Singh, and our commitment to painless dental care.",
  } as PageMetadata,

  hero: {
    headline: "Our Story: A Decade of Creating Confident Smiles",
    subheadline: "Built on empathy, driven by excellence, and trusted by families across Chandigarh.",
    primaryCta: { label: "Meet the Team", href: "#team" },
  } as HeroData,

  mission: {
    headline: "Our Mission",
    body: "To redefine the dental experience by providing world-class, completely painless care in a compassionate, family-friendly environment. We believe that a healthy smile is the foundation of confidence and overall well-being.",
  },

  history: {
    headline: "Over a Decade of Trust",
    body: "Founded over ten years ago, Perfect Smile Dental Clinic began with a simple vision: to eliminate the fear associated with dental visits. Today, we are proud to be one of Chandigarh's leading dental practices, known for our advanced techniques and unwavering commitment to patient comfort.",
  },

  founderDeepDive: {
    headline: "Meet Dr. Sarabjeet Singh",
    role: "Lead Dentist & Founder",
    qualifications: ["BDS, MDS (Orthodontics)", "Certified Endodontist", "Member, Indian Dental Association"],
    bio: "Dr. Sarabjeet Singh is a passionate advocate for painless dentistry. With extensive training in both pediatric orthodontics and advanced endodontics, he brings a unique blend of technical precision and gentle bedside manner. Dr. Singh believes in treating patients like family, taking the time to listen, educate, and deliver tailored treatments that stand the test of time.",
    philosophyQuote: "\"Dentistry is not just about treating teeth; it's about treating the person attached to them. When we remove fear and pain from the equation, we empower our patients to prioritize their health.\"",
  },

  team: {
    sectionTitle: "The Team Behind the Smiles",
    members: [
      { name: "Dr. Anjali Verma", role: "Associate Dentist", bio: "Specializes in restorative and cosmetic dentistry, bringing an artist's eye to every smile makeover." },
      { name: "Priya Sharma", role: "Lead Dental Hygienist", bio: "Dedicated to patient education and providing the gentlest, most thorough cleanings." },
      { name: "Rahul Khanna", role: "Patient Coordinator", bio: "Ensures your scheduling, insurance, and financing processes are seamless and stress-free." },
    ] as TeamMember[],
  },

  coreValues: {
    sectionTitle: "What Drives Us",
    values: [
      { title: "Empathy First", description: "We listen to your concerns and prioritize your comfort above all else." },
      { title: "Clinical Excellence", description: "We constantly update our skills and technology to provide the highest standard of care." },
      { title: "Absolute Integrity", description: "We recommend only what you truly need, with transparent pricing and honest advice." },
      { title: "Continuous Innovation", description: "Embracing the latest in digital dentistry to make treatments faster, safer, and painless." },
    ] as ValueData[],
  },

  facility: {
    headline: "A Modern, Safe Environment",
    body: "Our clinic is designed to be a calming oasis. We utilize digital X-rays (which reduce radiation by up to 90%), intraoral scanners to eliminate messy impressions, and state-of-the-art sterilization protocols to ensure your absolute safety.",
  },

  community: {
    headline: "Rooted in the Community",
    body: "Chandigarh is our home. We regularly participate in oral health awareness camps in local schools and offer specialized care days for the elderly, ensuring everyone has access to a healthy smile.",
  },

  finalCta: {
    headline: "Become Part of Our Patient Family",
    subheadline: "Experience the difference of truly caring dentistry.",
    cta: { label: "Schedule Your Consultation", href: "/contact" },
  } as CallToActionData,
};
