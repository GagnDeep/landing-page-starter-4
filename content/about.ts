import { SeoMetadata, Section } from './types';

export const seo: SeoMetadata = {
  title: "About Us | Dr. Bansal's Dental Care",
  description: "Learn more about Dr. Himal Bansal and the team. We are dedicated to providing a comfortable, modern, and compassionate dental experience in Patiala.",
};

export const hero: Section = {
  heading: "Rooted in care, driven by excellence.",
  subheading: "Our practice is built on a simple premise: treat every patient like family."
};

export const philosophy: Section = {
  heading: "Our Philosophy",
  content: "We reject the clinical, sterile atmosphere of traditional dentistry. Instead, we have cultivated a warm, relaxing environment where we prioritize long-term oral health, preventive education, and minimally invasive techniques."
};

export const drBansalBio: Section = {
  heading: "Dr. Himal Bansal",
  subheading: "Lead Dental Surgeon",
  content: "Dr. Himal Bansal founded this clinic to bring world-class dental care to SST Nagar. With extensive training in modern restorative and cosmetic procedures, he is known for his calm demeanor and pain-free techniques. He believes that patient education is just as important as the treatment itself."
};

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export const team: TeamMember[] = [
  {
    name: "Dr. Himal Bansal",
    role: "Lead Dental Surgeon",
    bio: "Specializing in painless root canals and cosmetic dentistry."
  },
  // Placeholders for future staff
  {
    name: "Staff Name",
    role: "Dental Hygienist",
    bio: "Dedicated to keeping your gums healthy and your smile bright."
  }
];

export const community: Section = {
  heading: "Proudly Serving Patiala",
  content: "We are deeply invested in the local community of SST Nagar and the greater Patiala area. We regularly participate in oral health awareness campaigns and local school programs to promote better dental habits from a young age."
};

export const bottomCta: Section = {
  heading: "Come meet the team.",
  cta: {
    label: "Book Your Visit",
    href: "/contact"
  }
};
