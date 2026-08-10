import { Metadata } from "next"
import { site } from "./site"

interface BuildMetadataProps {
  title: string
  description: string
  path: string
}

export function buildMetadata({ title, description, path }: BuildMetadataProps): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: `${site.url}${path}`,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `${site.url}${path}`,
      siteName: site.name,
      images: [
        {
          url: `${site.url}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
}
