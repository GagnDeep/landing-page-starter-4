export interface SEO {
  title: string;
  description: string;
}

export interface SectionContent {
  headline?: string;
  subheading?: string;
  body?: string;
  cta?: {
    label: string;
    href?: string;
  };
  [key: string]: any;
}

export interface PageContent {
  seo: SEO;
  sections: Record<string, SectionContent>;
}
