import { PageMetadata, HeroData, CallToActionData, TestimonialData } from "./home";

export interface ServiceDetail {
  name: string;
  description: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  intro: string;
  services: ServiceDetail[];
}

export const featuresContent = {
  metadata: {
    title: "Our Dental Services | Perfect Smile Dental Clinic",
    description: "Explore our comprehensive dental services including painless root canals, pediatric braces, cosmetic dentistry, and preventive care in Chandigarh.",
  } as PageMetadata,

  hero: {
    headline: "Comprehensive Care for Every Smile",
    subheadline: "From routine checkups to complex smile restorations, we offer everything you need under one roof, delivered with a gentle touch.",
    primaryCta: { label: "Book a Consultation", href: "/contact" },
  } as HeroData,

  categories: [
    {
      id: "general",
      title: "General & Preventive Care",
      intro: "The foundation of a perfect smile is excellent health. Our preventive services are designed to stop problems before they start.",
      services: [
        { name: "Comprehensive Oral Exams", description: "Detailed checkups utilizing digital diagnostics to assess your overall oral health." },
        { name: "Professional Cleanings", description: "Gentle removal of plaque and tartar to prevent gum disease and cavities." },
        { name: "Tooth-Colored Fillings", description: "Durable, aesthetic composite fillings that blend seamlessly with your natural teeth." },
      ],
    },
    {
      id: "pediatric",
      title: "Pediatric Dentistry & Orthodontics",
      intro: "We specialize in making children feel safe and excited about their dental health, setting them up for a lifetime of confident smiles.",
      services: [
        { name: "Early Orthodontic Evaluation", description: "Assessing jaw growth and bite alignment early to prevent future complications." },
        { name: "Pediatric Braces", description: "Customized, comfortable braces tailored for growing children and teenagers." },
        { name: "Sealants & Fluoride Treatments", description: "Protecting vulnerable young teeth against decay." },
      ],
    },
    {
      id: "restorative",
      title: "Restorative & Painless Root Canals",
      intro: "When teeth are damaged or infected, we restore their function and appearance completely painlessly.",
      services: [
        { name: "Painless Root Canal Therapy", description: "Expertly saving infected teeth using advanced rotary tools and modern anesthesia for zero discomfort." },
        { name: "Dental Crowns & Bridges", description: "Custom-crafted, natural-looking restorations to protect weak teeth or replace missing ones." },
        { name: "Dental Implants", description: "The gold standard for permanent, secure tooth replacement." },
      ],
    },
    {
      id: "cosmetic",
      title: "Cosmetic Dentistry",
      intro: "Unlock your confidence with treatments designed to enhance the natural beauty of your smile.",
      services: [
        { name: "Professional Teeth Whitening", description: "Safe, highly effective treatments that lift stains and brighten your smile." },
        { name: "Porcelain Veneers", description: "Ultra-thin, custom shells that perfect the shape, color, and alignment of your teeth." },
        { name: "Complete Smile Makeovers", description: "A comprehensive, customized plan combining multiple treatments for transformative results." },
      ],
    },
  ] as ServiceCategory[],

  technology: {
    headline: "The Technology Behind the Comfort",
    items: [
      { name: "Digital Intraoral Scanners", description: "No more gag-inducing putty impressions." },
      { name: "Low-Radiation Digital X-Rays", description: "Instant, highly detailed images with maximum safety." },
      { name: "Advanced Anesthesia Delivery", description: "Ensuring you feel absolutely nothing during your procedure." },
    ],
  },

  serviceTestimonial: {
    quote: "I avoided the dentist for years because I needed a root canal and was terrified. Dr. Singh performed it so gently, I almost fell asleep in the chair. Incredible experience.",
    author: "Vikram S.",
    rating: 5,
  } as TestimonialData,

  finalCta: {
    headline: "Not sure what treatment you need?",
    subheadline: "Schedule a comprehensive exam and let us create a custom plan for you.",
    cta: { label: "Book an Appointment", href: "/contact" },
  } as CallToActionData,
};
