export interface SeoMetadata {
  title: string;
  description: string;
}

export interface Cta {
  label: string;
  href: string;
}

export interface Section {
  heading?: string;
  subheading?: string;
  content?: string;
  cta?: Cta;
}

export interface Link {
  label: string;
  href: string;
}

export interface NavMenu {
  primaryLinks: Link[];
  secondaryLinks?: Link[];
}
