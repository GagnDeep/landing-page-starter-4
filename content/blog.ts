import { SeoMetadata, Section } from './types';

export const seo: SeoMetadata = {
  title: "Dental Blog & Oral Health Tips | Dr. Bansal's Dental Care",
  description: "Read the latest news, oral hygiene tips, and clinic updates from Dr. Himal Bansal and the team.",
};

export const hero: Section = {
  heading: "Notes on a healthy smile.",
  subheading: "Expert advice, oral health tips, and clinic news from Dr. Bansal's desk."
};

export const categories: string[] = [
  "Oral Hygiene",
  "Kids Dental",
  "Cosmetics",
  "Clinic News"
];

export const newsletter: Section = {
  heading: "Get oral health tips in your inbox.",
  content: "Sign up for our occasional newsletter for practical advice on maintaining your dental health between visits.",
  cta: {
    label: "Subscribe",
    href: "#"
  }
};
