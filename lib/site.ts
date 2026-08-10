export const site = {
  name: "AI Wire Harness",
  tagline: "RFQ Desk",
  url: "https://aiwireharness.com",
  description: "A free request-for-quote desk for custom wire harness sourcing. We connect hardware startups directly with verified US manufacturers without markup.",
  locale: "en_US",
  primaryLocale: "en",
  hreflang: { primary: "en-US", alternates: ["en-US"] },
  legalName: "AI Wire Harness LLC",
}

export function buildMetadata(overrides: Partial<import("next").Metadata> = {}): import("next").Metadata {
  return {
    title: {
      default: `${site.name} · ${site.tagline}`,
      template: `%s | ${site.name}`,
    },
    description: site.description,
    metadataBase: new URL(site.url),
    alternates: {
      canonical: site.url,
    },
    openGraph: {
      title: `${site.name} · ${site.tagline}`,
      description: site.description,
      type: "website",
      url: site.url,
      siteName: site.name,
      locale: site.locale,
      images: [
        {
          url: "/og.png", // Must be generated later
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${site.name} · ${site.tagline}`,
      description: site.description,
      images: ["/og.png"],
    },
    ...overrides,
  }
}
