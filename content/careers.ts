import { SeoMetadata, Section } from './types';

export const seo: SeoMetadata = {
  title: "Careers | Dr. Bansal's Dental Care",
  description: "Join our friendly, professional dental team in Patiala. We are always looking for passionate individuals dedicated to excellent patient care.",
};

export const hero: Section = {
  heading: "Join our growing team.",
  subheading: "We are looking for compassionate, skilled professionals who share our commitment to exceptional patient care in a calm, supportive environment."
};

export const culture: Section = {
  heading: "Why Work With Us?",
  content: "At Dr. Bansal's Dental Care, we believe that a happy team leads to happy patients. We offer a modern, fully-equipped clinical environment, emphasize work-life balance, and support continuous professional development."
};

export interface JobOpening {
  title: string;
  type: string;
  description: string;
}

export const openings: JobOpening[] = [
  {
    title: "Dental Assistant",
    type: "Full-Time",
    description: "Seeking an experienced dental assistant to support chairside procedures, manage sterilization, and help maintain our high standards of patient comfort."
  },
  {
    title: "Front Desk Coordinator",
    type: "Part-Time",
    description: "Looking for a welcoming, organized individual to manage patient scheduling, handle inquiries, and ensure the clinic runs smoothly."
  }
];

export const generalApplication: Section = {
  heading: "Don't see a perfect fit?",
  content: "We are always on the lookout for great talent. Send your resume to careers@bansaldentalpatiala.com and we will keep you in mind for future openings."
};
