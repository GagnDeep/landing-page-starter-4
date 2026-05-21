/**
 * Structured-data builders for schema.org JSON-LD.
 *
 * Every page that needs JSON-LD imports the relevant builder and
 * renders the result via a <Jsonld /> component (see components/primitives/jsonld.tsx).
 *
 * All values pull from `lib/config/site.config.ts`.
 */
import { site, absUrl } from "./config/site.config"

const SCHEMA = "https://schema.org"

const businessId = `${site.url}#business`
const orgId = `${site.url}#organization`
const websiteId = `${site.url}#website`

// ===================================================================
// Organization + LocalBusiness + WebSite (root layout — every page)
// ===================================================================

export const orgJsonLd = () => ({
  "@context": SCHEMA,
  "@type": "Organization",
  "@id": orgId,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: absUrl(site.logo),
  email: site.email,
  telephone: site.phone,
  foundingDate: `${site.foundingYear}-01-01`,
  description: site.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  sameAs: Object.values(site.social).filter(Boolean),
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: site.phone,
      contactType: "customer service",
      email: site.email,
      areaServed: "IN-PB",
      availableLanguage: ["English", "Hindi", "Punjabi"],
    },
  ],
  taxID: site.gstin,
})

export const localBusinessJsonLd = () => ({
  "@context": SCHEMA,
  "@type": ["LocalBusiness", "SolarEnergyContractor"],
  "@id": businessId,
  name: site.name,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  image: absUrl(site.ogImage),
  logo: absUrl(site.logo),
  description: site.description,
  priceRange: site.pricing.range,
  currenciesAccepted: site.pricing.currency,
  paymentAccepted: "Cash, Credit Card, Bank Transfer, EMI",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.address.lat,
    longitude: site.address.lng,
  },
  openingHoursSpecification: site.hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.day,
    opens: h.open,
    closes: h.close,
  })),
  areaServed: { "@type": "State", name: "Punjab, India" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.rating.value,
    reviewCount: site.rating.count,
    bestRating: site.rating.best,
  },
  sameAs: Object.values(site.social).filter(Boolean),
})

export const websiteJsonLd = () => ({
  "@context": SCHEMA,
  "@type": "WebSite",
  "@id": websiteId,
  url: site.url,
  name: site.name,
  description: site.description,
  inLanguage: site.locales.map((l) => `${l}-IN`),
  publisher: { "@id": orgId },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${site.url}/blog/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
})

// ===================================================================
// FAQ + Speakable
// ===================================================================

export const faqJsonLd = (items: { q: string; a: string }[]) => ({
  "@context": SCHEMA,
  "@type": "FAQPage",
  mainEntity: items.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: { "@type": "Answer", text: it.a },
  })),
  speakable: {
    "@type": "SpeakableSpecification",
    xpath: ["/html/body//*[contains(@class,'faq-q')]"],
  },
})

// ===================================================================
// Article / BlogPosting
// ===================================================================

export const articleJsonLd = (a: {
  title: string
  description: string
  path: string
  date: string
  modified?: string
  author?: string
  image?: string
}) => ({
  "@context": SCHEMA,
  "@type": "BlogPosting",
  headline: a.title,
  description: a.description,
  image: absUrl(a.image ?? site.ogImage),
  datePublished: a.date,
  dateModified: a.modified ?? a.date,
  author: {
    "@type": a.author && a.author !== site.name ? "Person" : "Organization",
    name: a.author ?? site.name,
    url: site.url,
  },
  publisher: {
    "@type": "Organization",
    name: site.name,
    logo: { "@type": "ImageObject", url: absUrl(site.logo) },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": absUrl(a.path) },
  inLanguage: "en-IN",
})

// ===================================================================
// Breadcrumbs
// ===================================================================

export const breadcrumbJsonLd = (items: { name: string; path: string }[]) => ({
  "@context": SCHEMA,
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: absUrl(it.path),
  })),
})

// ===================================================================
// District Service pages
// ===================================================================

export const districtServiceJsonLd = (d: {
  name: string
  slug: string
  popularKw: number
  avgBill: number
}) => ({
  "@context": SCHEMA,
  "@type": "Service",
  serviceType: "Rooftop solar installation",
  name: `Rooftop solar installation in ${d.name}, Punjab`,
  description: `Tier-1 rooftop solar systems installed in ${d.name} with PM Surya Ghar subsidy handled end-to-end. Typical system: ${d.popularKw} kW.`,
  provider: {
    "@id": businessId,
  },
  areaServed: {
    "@type": "City",
    name: d.name,
    containedInPlace: { "@type": "State", name: "Punjab, India" },
  },
  offers: {
    "@type": "Offer",
    priceCurrency: site.pricing.currency,
    priceRange: site.pricing.range,
    url: absUrl(`/service-areas/${d.slug}/`),
  },
  audience: { "@type": "Audience", audienceType: "Homeowners" },
})

// ===================================================================
// Packages — Product + Offer + AggregateRating + ItemList
// ===================================================================

export const productJsonLd = (p: {
  slug: string
  name: string
  sub: string
  price: string
  strike: string
  warranty: string
  panels: string
  inverter: string
}) => ({
  "@context": SCHEMA,
  "@type": "Product",
  "@id": absUrl(`/packages/${p.slug}/#product`),
  name: p.name,
  description: p.sub,
  brand: { "@type": "Brand", name: site.name },
  category: "Solar PV System",
  url: absUrl(`/packages/${p.slug}/`),
  image: absUrl(site.ogImage),
  additionalProperty: [
    { "@type": "PropertyValue", name: "Panels", value: p.panels },
    { "@type": "PropertyValue", name: "Inverter", value: p.inverter },
    { "@type": "PropertyValue", name: "Warranty", value: p.warranty },
  ],
  offers: {
    "@type": "Offer",
    price: p.price.replace(/[₹,]/g, ""),
    priceCurrency: site.pricing.currency,
    priceValidUntil: `${new Date().getFullYear() + 1}-12-31`,
    availability: "https://schema.org/InStock",
    seller: { "@id": businessId },
    url: absUrl(`/packages/${p.slug}/`),
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.rating.value,
    reviewCount: site.rating.count,
    bestRating: site.rating.best,
  },
})

export const packageItemListJsonLd = (
  packages: { slug: string; name: string; price: string; sub: string }[],
) => ({
  "@context": SCHEMA,
  "@type": "ItemList",
  name: "Rooftop Solar Packages",
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  numberOfItems: packages.length,
  itemListElement: packages.map((pkg, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: absUrl(`/packages/${pkg.slug}/`),
    item: {
      "@type": "Product",
      name: pkg.name,
      description: pkg.sub,
      offers: {
        "@type": "Offer",
        price: pkg.price.replace(/[₹,]/g, ""),
        priceCurrency: site.pricing.currency,
      },
    },
  })),
})

// ===================================================================
// HowTo
// ===================================================================

export const howToJsonLd = (steps: { n: string; t: string; d: string }[]) => ({
  "@context": SCHEMA,
  "@type": "HowTo",
  name: "How rooftop solar gets installed",
  description:
    "Six steps from booking a free site survey to net-meter power-on, typically completed in 21 days.",
  totalTime: "P21D",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: site.pricing.currency,
    value: "108000",
  },
  supply: ["Tier-1 panels", "IP65 inverter", "Mounting structure", "Net meter"],
  tool: ["Drone survey", "Roof inclinometer"],
  step: steps.map((s) => ({
    "@type": "HowToStep",
    position: parseInt(s.n, 10),
    name: s.t,
    text: s.d,
    url: absUrl(`/how-it-works/#step-${s.n}`),
  })),
})

// ===================================================================
// Government Service (subsidy)
// ===================================================================

export const govServiceJsonLd = () => ({
  "@context": SCHEMA,
  "@type": "GovernmentService",
  name: site.subsidy.program,
  description:
    "Central government rooftop solar subsidy for Indian residential homeowners — up to ₹78,000 off installations between 1 kW and 10 kW.",
  serviceType: "Residential rooftop solar subsidy",
  provider: {
    "@type": "GovernmentOrganization",
    name: site.subsidy.authority,
  },
  audience: { "@type": "Audience", audienceType: "Indian homeowners" },
  areaServed: { "@type": "Country", name: "India" },
  serviceOperator: { "@id": businessId },
  termsOfService: absUrl("/subsidy/"),
})

// ===================================================================
// Case Studies
// ===================================================================

export const caseStudyJsonLd = (c: {
  slug: string
  title: string
  subtitle: string
  customer: string
  district: string
  systemKw: number
  beforeBill: number
  afterBill: number
  installDate: string
  body: string
}) => ({
  "@context": SCHEMA,
  "@type": "Article",
  headline: c.title,
  description: c.subtitle,
  articleSection: "Case Study",
  datePublished: c.installDate,
  author: { "@id": orgId },
  publisher: { "@id": orgId },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": absUrl(`/case-studies/${c.slug}/`),
  },
  about: {
    "@type": "Service",
    name: `${c.systemKw} kW rooftop solar installation`,
    provider: { "@id": businessId },
    areaServed: { "@type": "City", name: c.district },
  },
  // Numeric outcome for LLM citation
  mentions: [
    {
      "@type": "QuantitativeValue",
      name: "Before bill",
      value: c.beforeBill,
      unitText: "INR/month",
    },
    {
      "@type": "QuantitativeValue",
      name: "After bill",
      value: c.afterBill,
      unitText: "INR/month",
    },
    {
      "@type": "QuantitativeValue",
      name: "System size",
      value: c.systemKw,
      unitText: "kW",
    },
  ],
})

// ===================================================================
// Review (used on Product / LocalBusiness)
// ===================================================================

export const reviewJsonLd = (r: {
  author: string
  body: string
  rating?: number
  date?: string
  itemName?: string
}) => ({
  "@context": SCHEMA,
  "@type": "Review",
  reviewBody: r.body,
  author: { "@type": "Person", name: r.author },
  reviewRating: {
    "@type": "Rating",
    ratingValue: r.rating ?? site.rating.value,
    bestRating: site.rating.best,
  },
  datePublished: r.date,
  itemReviewed: { "@type": "Service", name: r.itemName ?? "Rooftop solar installation" },
})

// ===================================================================
// WebApplication (calculator)
// ===================================================================

export const webApplicationJsonLd = () => ({
  "@context": SCHEMA,
  "@type": "WebApplication",
  name: `${site.name} Solar Calculator`,
  url: absUrl("/calculator/"),
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: 0, priceCurrency: site.pricing.currency },
  browserRequirements: "Modern browser with JavaScript",
  provider: { "@id": orgId },
})

// ===================================================================
// AboutPage / ContactPage / generic page
// ===================================================================

export const aboutPageJsonLd = () => ({
  "@context": SCHEMA,
  "@type": "AboutPage",
  url: absUrl("/about/"),
  name: `About ${site.name}`,
  primaryImageOfPage: { "@type": "ImageObject", url: absUrl(site.ogImage) },
  about: { "@id": orgId },
})

export const contactPageJsonLd = () => ({
  "@context": SCHEMA,
  "@type": "ContactPage",
  url: absUrl("/contact/"),
  name: `Contact ${site.name}`,
  mainEntity: { "@id": businessId },
})
