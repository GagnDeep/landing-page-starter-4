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
      areaServed: `${site.address.country}-${site.address.regionCode}`,
      availableLanguage: site.locales.map(
        (l) => site.localeNames[l] ?? l.toUpperCase(),
      ),
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
  /**
   * Enumerating every served city (not just the state) lets Google's
   * local pack and "near me" surfaces resolve the service area to each
   * district. Falls back to a State node if no districts are configured.
   */
  areaServed:
    site.content.districts.length > 0
      ? site.content.districts.map((d) => ({
          "@type": "City",
          name: d.name,
          containedInPlace: {
            "@type": "State",
            name: site.copy.regionLong,
          },
        }))
      : { "@type": "State", name: site.copy.regionLong },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.rating.value,
    reviewCount: site.rating.count,
    bestRating: site.rating.best,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Rooftop solar packages",
    itemListElement: site.content.packages.map((p) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: p.name, description: p.sub },
      price: p.price.replace(/[^\d.]/g, ""),
      priceCurrency: site.pricing.currency,
      url: absUrl(`/packages/${p.slug}/`),
    })),
  },
  knowsAbout: [
    "Rooftop solar installation",
    "Federal Residential Clean Energy Credit (Section 25D)",
    "NEM 3.0 Net Billing Tariff",
    "Tesla Powerwall 3 installation",
    "Enphase IQ8 microinverters",
    "Solar permit interconnection (PG&E, SCE, SDG&E)",
    "Title 24 compliance",
  ],
  sameAs: Object.values(site.social).filter(Boolean),
})

export const websiteJsonLd = () => ({
  "@context": SCHEMA,
  "@type": "WebSite",
  "@id": websiteId,
  url: site.url,
  name: site.name,
  description: site.description,
  inLanguage: [site.hreflang.primary, ...site.hreflang.alternates].filter(
    (l) => l !== "x-default",
  ),
  publisher: { "@id": orgId },
  // Speakable spec at the site level lets Google Assistant pick up
  // "About" + hero copy + the opening paragraph of any page when the
  // user asks a verbal question that resolves to this domain.
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".hero-lead", ".page-hero .lead", ".blog-tldr", "h1"],
  },
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
  keywords?: string[]
  articleSection?: string
  wordCount?: number
  citations?: { url: string; name?: string }[]
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
  inLanguage: site.hreflang.primary,
  // Speakable section: lets Google Assistant / AI Overviews quote the
  // opening paragraph cleanly. Maps to the .prose intro paragraph that
  // every blog post renders.
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".blog-tldr", "article.prose > p:first-of-type"],
  },
  ...(a.keywords?.length ? { keywords: a.keywords.join(", ") } : {}),
  ...(a.articleSection ? { articleSection: a.articleSection } : {}),
  ...(a.wordCount ? { wordCount: a.wordCount } : {}),
  ...(a.citations?.length
    ? {
        citation: a.citations.map((c) => ({
          "@type": "CreativeWork",
          url: c.url,
          ...(c.name ? { name: c.name } : {}),
        })),
      }
    : {}),
})

/**
 * Author entity — used on byline pages and referenced by `@id` from
 * articleJsonLd to give Google's entity graph a fully-resolved Person
 * node. Supplies E-E-A-T signals for YMYL-adjacent solar/tax content.
 */
export const personJsonLd = (p: {
  slug: string
  name: string
  jobTitle?: string
  bio?: string
  image?: string
  sameAs?: string[]
  knowsAbout?: string[]
  credentials?: { name: string; issuer?: string }[]
}) => ({
  "@context": SCHEMA,
  "@type": "Person",
  "@id": absUrl(`/authors/${p.slug}/#person`),
  name: p.name,
  url: absUrl(`/authors/${p.slug}/`),
  ...(p.jobTitle ? { jobTitle: p.jobTitle } : {}),
  ...(p.bio ? { description: p.bio } : {}),
  ...(p.image ? { image: absUrl(p.image) } : {}),
  worksFor: { "@id": orgId },
  ...(p.sameAs?.length ? { sameAs: p.sameAs } : {}),
  ...(p.knowsAbout?.length ? { knowsAbout: p.knowsAbout } : {}),
  ...(p.credentials?.length
    ? {
        hasCredential: p.credentials.map((c) => ({
          "@type": "EducationalOccupationalCredential",
          name: c.name,
          ...(c.issuer ? { credentialCategory: c.issuer } : {}),
        })),
      }
    : {}),
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
  name: `Rooftop solar installation in ${d.name}, ${site.copy.regionName}`,
  description: `Tier-1 rooftop solar systems installed in ${d.name} with ${site.incentive.short} handled end-to-end. Typical system: ${d.popularKw} kW.`,
  provider: {
    "@id": businessId,
  },
  areaServed: {
    "@type": "City",
    name: d.name,
    containedInPlace: { "@type": "State", name: site.copy.regionLong },
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
    price: p.price.replace(/[^\d.]/g, ""),
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
        price: pkg.price.replace(/[^\d.]/g, ""),
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
    value: String(
      site.calculator.perKwByType.Home *
        Number(site.content.packages[0]?.slug.match(/(\d+)kw/)?.[1] ?? 5),
    ),
  },
  supply: ["Tier-1 panels", "Microinverter/inverter", "Mounting structure", "Net meter"],
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
  name: site.incentive.program,
  description: site.incentive.long,
  serviceType: "Residential rooftop solar incentive",
  provider: {
    "@type": "GovernmentOrganization",
    name: site.incentive.authority,
  },
  audience: { "@type": "Audience", audienceType: `${site.address.countryName} homeowners` },
  areaServed: { "@type": "Country", name: site.address.countryName },
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
      unitText: `${site.currency.code}/month`,
    },
    {
      "@type": "QuantitativeValue",
      name: "After bill",
      value: c.afterBill,
      unitText: `${site.currency.code}/month`,
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
