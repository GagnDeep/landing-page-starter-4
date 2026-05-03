export interface PageMetadata {
  title: string;
  description: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface AnnouncementBarData {
  message: string;
  ctaText?: string;
  ctaHref?: string;
}

export interface HeroData {
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export interface TrustBarData {
  stats: { value: string; label: string }[];
  accreditations: string[];
}

export interface IntroductionData {
  headline: string;
  body: string;
}

export interface ServiceOverviewData {
  title: string;
  description: string;
  href: string;
  iconType: string;
}

export interface SpotlightData {
  headline: string;
  body: string;
  cta: { label: string; href: string };
}

export interface FeatureData {
  title: string;
  description: string;
}

export interface TestimonialData {
  quote: string;
  author: string;
  rating: number;
}

export interface StepData {
  stepNumber: number;
  title: string;
  description: string;
}

export interface FAQData {
  question: string;
  answer: string;
}

export interface CallToActionData {
  headline: string;
  subheadline?: string;
  cta: { label: string; href: string };
}

export interface GlobalFooterData {
  brandDescription: string;
  contactInfo: {
    address: string;
    phone: string;
    email: string;
    hours: string;
  };
  copyright: string;
}

export const homeContent = {
  metadata: {
    title: "Perfect Smile Dental Clinic | Painless & Expert Care in Chandigarh",
    description: "Experience world-class, painless dental care at Perfect Smile Dental Clinic in Chandigarh. Specializing in pediatric braces and painless root canals with a legacy of patient trust.",
  } as PageMetadata,

  announcementBar: {
    message: "Welcome to Perfect Smile! We are currently accepting new patients.",
    ctaText: "Book Now",
    ctaHref: "/contact",
  } as AnnouncementBarData,

  navigation: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ] as NavigationItem[],

  hero: {
    headline: "Your Family's Trusted Home for a Painless Perfect Smile",
    subheadline: "Experience world-class, compassionate dental care tailored for every generation. Specializing in pediatric orthodontics and painless root canals.",
    primaryCta: { label: "Book an Appointment", href: "/contact" },
    secondaryCta: { label: "Explore Our Services", href: "/features" },
  } as HeroData,

  trustBar: {
    stats: [
      { value: "10+", label: "Years of Trust" },
      { value: "5000+", label: "Happy Smiles" },
      { value: "4.6", label: "Star Rating" },
    ],
    accreditations: ["ADA Certified", "Chandigarh Top Dentist Award"],
  } as TrustBarData,

  introduction: {
    headline: "Redefining the Dental Experience",
    body: "We understand that visiting the dentist can be daunting. That's why we've dedicated the last decade to perfecting the art of painless, anxiety-free dentistry. From the moment you walk through our doors, our warm environment and expert team ensure your comfort is our highest priority.",
  } as IntroductionData,

  servicesOverview: {
    sectionTitle: "Comprehensive Care for Every Smile",
    services: [
      { title: "General Dentistry", description: "Routine checkups, cleanings, and preventive care to keep your smile healthy.", href: "/features#general", iconType: "tooth" },
      { title: "Pediatric Braces", description: "Gentle, expert orthodontic care designed specifically for children and teens.", href: "/features#pediatric", iconType: "child" },
      { title: "Painless Root Canals", description: "Advanced endodontic treatments utilizing state-of-the-art technology for maximum comfort.", href: "/features#restorative", iconType: "shield" },
      { title: "Cosmetic Dentistry", description: "Transform your confidence with teeth whitening, veneers, and smile makeovers.", href: "/features#cosmetic", iconType: "sparkle" },
    ] as ServiceOverviewData[],
  },

  spotlightPediatric: {
    headline: "Gentle Care for Growing Smiles",
    body: "Early orthodontic intervention can guide your child's dental development, preventing complex issues later. Dr. Sarabjeet Singh and our team provide a reassuring, fun environment that kids love, ensuring their journey to a perfect smile is positive and stress-free.",
    cta: { label: "Learn About Pediatric Care", href: "/features#pediatric" },
  } as SpotlightData,

  spotlightRootCanal: {
    headline: "The Myth of the Painful Root Canal",
    body: "Forget what you've heard. With our modern anesthesia techniques and advanced rotary endodontics, a root canal at Perfect Smile is virtually indistinguishable from a routine filling. We save your natural tooth quickly, efficiently, and painlessly.",
    cta: { label: "Discover Painless RCT", href: "/features#restorative" },
  } as SpotlightData,

  whyChooseUs: {
    sectionTitle: "Why Chandigarh Families Choose Us",
    features: [
      { title: "State-of-the-Art Technology", description: "We invest in the latest digital imaging and laser dentistry for precise, comfortable treatments." },
      { title: "Painless Methodology", description: "Advanced numbing techniques and a gentle touch guarantee a stress-free experience." },
      { title: "Family-Centric Environment", description: "A welcoming clinic designed to make patients of all ages feel completely at ease." },
      { title: "Transparent Pricing", description: "Clear, upfront cost explanations and flexible financing options for every budget." },
    ] as FeatureData[],
  },

  founder: {
    headline: "Meet Dr. Sarabjeet Singh",
    role: "Lead Dentist & Founder",
    bio: "With over a decade of clinical excellence, Dr. Singh has transformed thousands of smiles. His philosophy is simple: combine world-class dental expertise with genuine, empathetic patient care. He specializes in making complex procedures like root canals completely painless and is a trusted name in pediatric orthodontics.",
    cta: { label: "Read Our Story", href: "/about" },
  },

  testimonials: [
    { quote: "I was terrified of getting a root canal, but Dr. Singh made it completely painless. The staff is incredibly warm and professional.", author: "Priya M.", rating: 5 },
    { quote: "My daughter actually looks forward to her braces adjustments! They really know how to handle kids here.", author: "Rahul V.", rating: 5 },
    { quote: "The cleanest, most modern dental clinic in Chandigarh. They explain everything clearly before starting any procedure.", author: "Anita K.", rating: 5 },
  ] as TestimonialData[],

  howItWorks: {
    sectionTitle: "Your Journey to a Perfect Smile",
    steps: [
      { stepNumber: 1, title: "Book a Consultation", description: "Schedule a convenient time online or over the phone." },
      { stepNumber: 2, title: "Comprehensive Exam", description: "We assess your oral health using comfortable, digital diagnostics." },
      { stepNumber: 3, title: "Custom Treatment Plan", description: "We discuss your options, costs, and timeline transparently." },
      { stepNumber: 4, title: "Enjoy Your Smile", description: "Experience painless treatment and step out with confidence." },
    ] as StepData[],
  },

  insuranceBlock: {
    headline: "We Make Dental Care Accessible",
    body: "We partner with major insurance providers and offer flexible, in-house financing options so you can focus on your health, not your wallet.",
    cta: { label: "View Pricing & Insurance", href: "/pricing" },
  },

  faqSnippets: [
    { question: "Is a root canal really painless?", answer: "Yes. With modern local anesthesia and our specialized techniques, the procedure is very similar to getting a routine filling." },
    { question: "At what age should my child first see an orthodontist?", answer: "The ADA recommends a first orthodontic evaluation by age 7 to spot subtle problems with jaw growth and emerging teeth." },
    { question: "Do you accept new patients?", answer: "Absolutely! We are always happy to welcome new families to our clinic." },
  ] as FAQData[],

  finalCta: {
    headline: "Ready for Your Perfect Smile?",
    subheadline: "Join thousands of happy patients who trust us with their dental care.",
    cta: { label: "Schedule Your Visit Today", href: "/contact" },
  } as CallToActionData,

  footer: {
    brandDescription: "Perfect Smile Dental Clinic delivers painless, expert dental care for the whole family in a warm, state-of-the-art environment.",
    contactInfo: {
      address: "123 Healthcare Sector, Chandigarh, 160001",
      phone: "+91 98765 43210",
      email: "hello@perfectsmilechandigarh.com",
      hours: "Mon - Sat: 9:00 AM - 7:00 PM | Sun: Closed",
    },
    copyright: "© 2024 Perfect Smile Dental Clinic. All rights reserved.",
  } as GlobalFooterData,
};
