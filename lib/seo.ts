import { Metadata } from "next"
import { site } from "./site"

interface MetadataProps {
  title: string
  description?: string
  path: string
  ogImage?: string
}

export function buildMetadata({
  title,
  description = site.description,
  path,
  ogImage = "/og-image.jpg"
}: MetadataProps): Metadata {
  const url = `${site.url}${path.startsWith("/") ? path : `/${path}`}`
  const fullTitle = title.includes("|") ? title : `${title} | ${site.name}`

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      images: [
        {
          url: `${site.url}${ogImage}`,
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${site.url}${ogImage}`],
    },
    alternates: {
      canonical: url,
    },
  }
}
