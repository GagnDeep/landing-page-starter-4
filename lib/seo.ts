import type { Metadata } from "next"
import { site, absUrl } from "./config/site.config"

export interface BuildMetadataInput {
  title?: string
  description?: string
  path?: string
  image?: string
  noIndex?: boolean
  type?: "website" | "article"
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  keywords?: string[]
}

/**
 * Centralised metadata builder.
 * - Auto-sets canonical + hreflang for en/hi/pa locales.
 * - Generates Open Graph + Twitter cards.
 * - Article-type when blog post passes publishedTime.
 */
export function buildMetadata({
  title,
  description = site.description,
  path = "/",
  image = site.ogImage,
  noIndex,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  keywords,
}: BuildMetadataInput = {}): Metadata {
  const url = absUrl(path)
  const fullTitle = title ? `${title} | ${site.name}` : `${site.name} — ${site.tagline}`
  const ogImageUrl = image?.startsWith("http") ? image : absUrl(image ?? site.ogImage)

  return {
    title,
    description,
    keywords,
    authors: authors?.map((name) => ({ name })),
    alternates: {
      canonical: url,
      languages: {
        [site.hreflang.primary]: url,
        ...Object.fromEntries(
          site.hreflang.alternates.map((alt) => [alt, url]),
        ),
      },
    },
    openGraph: {
      type,
      url,
      siteName: site.name,
      title: fullTitle,
      description,
      locale: site.primaryLocale,
      alternateLocale: site.hreflang.alternates
        .filter((l) => l !== "x-default")
        .map((l) => l.replace("-", "_")),
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title ?? site.name,
        },
      ],
      ...(type === "article" && {
        publishedTime,
        modifiedTime,
        authors,
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false, nocache: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
          },
        },
    verification: {
      google: site.verification.google || undefined,
      ...(site.verification.bing || site.verification.facebook
        ? {
            other: {
              ...(site.verification.bing
                ? { "msvalidate.01": site.verification.bing }
                : {}),
              ...(site.verification.facebook
                ? { "facebook-domain-verification": site.verification.facebook }
                : {}),
            } as Record<string, string>,
          }
        : {}),
    },
    other: {
      "geo.region": `${site.address.country}-${site.address.regionCode}`,
      "geo.placename": site.address.locality,
      "geo.position": `${site.address.lat};${site.address.lng}`,
      ICBM: `${site.address.lat}, ${site.address.lng}`,
    },
  }
}
