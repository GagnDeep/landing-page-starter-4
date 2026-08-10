import { site } from "./site"

export function buildMetadata(pageTitle: string, description?: string, relativeUrl: string = "/") {
  const url = `${site.url}${relativeUrl}`
  const title = `${pageTitle} | ${site.name}`
  const desc = description || site.description

  return {
    title,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: desc,
      url,
      type: "website",
      images: ["/og-image.png"],
    },
    twitter: {
      title,
      description: desc,
      card: "summary_large_image",
      images: ["/og-image.png"],
    },
  }
}

export function orgJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description: site.description,
  }
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
  }
}
