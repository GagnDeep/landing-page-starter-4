import { SeoMetadata, Section,NavMenu } from './types';

export const seo: SeoMetadata = {
  title: "Dr. Bansal's Dental Care | Gentle, Professional Dentistry in Patiala",
  description: "Welcome to Dr. Bansal's Dental Care in SST Nagar, Patiala. Experience a calm, friendly, and highly professional dental clinic designed for your comfort and lasting oral health.",
};

export const preHeader: string = "Now accepting new patients. Call +91 XXXXX XXXXX for appointments.";

export const hero: Section = {
  heading: "Dental care that feels like home.",
  subheading: "Expert, gentle dentistry in a calming environment. We prioritize your comfort and oral health at every step.",
  cta: {
    label: "Book an Appointment",
    href: "/contact"
  }
};

export const valueProposition: Section = {
  heading: "Why Choose Dr. Bansal's?",
  content: "We believe a visit to the dentist should be a reassuring experience, not an anxious one. Our clinic is designed to be a quiet, welcoming space where modern technology meets traditional, compassionate care."
};

export interface ServiceCard {
  title: string;
  description: string;
  href: string;
}

export const servicesOverview: ServiceCard[] = [
  {
    title: "General Dentistry",
    description: "Routine check-ups, scaling, polishing, and preventive care to keep your smile healthy.",
    href: "/features#general"
  },
  {
    title: "Cosmetic Dentistry",
    description: "Teeth whitening, veneers, and smile makeovers tailored to your natural features.",
    href: "/features#cosmetic"
  },
  {
    title: "Pediatric Care",
    description: "Gentle, patient-focused treatments to ensure a positive experience for your children.",
    href: "/features#pediatric"
  }
];

export const featurePainlessRootCanals: Section = {
  heading: "Rest easy with our painless procedures.",
  content: "Advanced endodontic technology means root canals and deep restorative work are quicker and far more comfortable than ever before.",
  cta: {
    label: "Learn More",
    href: "/features#endodontics"
  }
};

export const featurePediatric: Section = {
  heading: "Smiles that grow healthy.",
  content: "Our pediatric focus ensures that your child's first visits are fun, educational, and completely fear-free.",
  cta: {
    label: "View Kids Dental Care",
    href: "/features#pediatric"
  }
};

export const meetDrBansal: Section = {
  heading: "Meet Dr. Himal Bansal",
  content: "With years of dedicated practice, Dr. Bansal brings a meticulous, gentle approach to dentistry. His goal is to provide honest advice and exceptional treatment to the Patiala community.",
  cta: {
    label: "Read Our Story",
    href: "/about"
  }
};

export const testimonialsSection: Section = {
  heading: "What Our Patients Say",
  subheading: "Don't just take our word for it. Hear from our community in SST Nagar."
};

export const newPatientExperience: Section = {
  heading: "Your First Visit",
  content: "We take the time to listen. Your first consultation involves a comprehensive exam, a discussion of your goals, and a transparent treatment plan with no hidden surprises."
};

export const finalCta: Section = {
  heading: "Ready for a brighter, healthier smile?",
  subheading: "Schedule your consultation today and take the first step towards optimal oral health.",
  cta: {
    label: "Schedule Consultation",
    href: "/contact"
  }
};
export const navigation: NavMenu = {
  primaryLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" }
  ]
};
