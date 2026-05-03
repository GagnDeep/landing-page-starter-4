export interface SEOMetadata {
  title: string;
  description: string;
}

export interface LinkItem {
  label: string;
  href: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface ImageAlt {
  src: string;
  alt: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  location?: string;
  service?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
