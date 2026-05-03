import { SeoMetadata, Section } from './types';

export const seo: SeoMetadata = {
  title: "Services & Treatments | Dr. Bansal's Dental Care",
  description: "Comprehensive dental services including general care, scaling and polishing, cosmetic dentistry, orthodontics, and painless root canals.",
};

export const hero: Section = {
  heading: "Comprehensive dental care for all ages.",
  subheading: "From routine hygiene to advanced restorative treatments, our modern clinic is equipped to handle all your oral health needs."
};

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  services: string[];
}

export const generalDentistry: ServiceCategory = {
  id: "general",
  title: "General & Preventive Care",
  description: "The foundation of a healthy smile. We focus on catching issues early and maintaining pristine oral hygiene.",
  services: [
    "Comprehensive Oral Examinations",
    "Professional Scaling and Polishing",
    "Tooth-Colored Composite Fillings",
    "Digital X-Rays and Diagnostics",
    "Fluoride Treatments"
  ]
};

export const cosmeticDentistry: ServiceCategory = {
  id: "cosmetic",
  title: "Cosmetic Dentistry",
  description: "Enhance the natural beauty of your smile with treatments designed to boost your confidence.",
  services: [
    "Professional Teeth Whitening",
    "Porcelain Veneers",
    "Aesthetic Bonding",
    "Smile Makeovers"
  ]
};

export const specializedCare: ServiceCategory = {
  id: "endodontics",
  title: "Specialized & Restorative Care",
  description: "Advanced techniques to save damaged teeth and restore your bite's full function with minimal discomfort.",
  services: [
    "Painless Root Canal Therapy (Endodontics)",
    "Crowns and Bridges",
    "Dental Implants",
    "Extractions (including Wisdom Teeth)"
  ]
};

export const orthodontics: ServiceCategory = {
  id: "orthodontics",
  title: "Orthodontics & Braces",
  description: "Straighten your teeth and correct bite issues with modern, discreet orthodontic solutions.",
  services: [
    "Traditional Metal Braces",
    "Ceramic (Clear) Braces",
    "Clear Aligners",
    "Retainers"
  ]
};

export const pediatricDentistry: ServiceCategory = {
  id: "pediatric",
  title: "Pediatric Dentistry",
  description: "A gentle, patient approach to ensure children build positive associations with dental visits.",
  services: [
    "Child Friendly Dental Exams",
    "Pit and Fissure Sealants",
    "Preventive Orthodontic Assessments",
    "Cavity Prevention and Management"
  ]
};

export const technology: Section = {
  heading: "Modern Tools, Better Care",
  content: "We utilize advanced digital radiography (lowering radiation exposure), intraoral cameras, and modern sterilization protocols to ensure your safety and treatment precision."
};

export const bottomCta: Section = {
  heading: "Not sure what you need?",
  subheading: "Book a consultation, and we'll craft a personalized treatment plan for you.",
  cta: {
    label: "Schedule Consultation",
    href: "/contact"
  }
};
