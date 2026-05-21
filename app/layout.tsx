import type { Metadata, Viewport } from "next"
import { Fraunces, Geist, JetBrains_Mono } from "next/font/google"
import { NextIntlClientProvider } from "next-intl"
import { getLocale, getMessages } from "next-intl/server"

import "./globals.css"
import { cn } from "@/lib/utils"
import { site, absUrl } from "@/lib/config/site.config"
import { Jsonld } from "@/components/primitives/jsonld"
import {
  orgJsonLd,
  localBusinessJsonLd,
  websiteJsonLd,
} from "@/lib/jsonld"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  axes: ["opsz", "SOFT"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
})

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
  preload: true,
})

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
})

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: site.brand.paper },
    { media: "(prefers-color-scheme: dark)", color: site.brand.ink },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light",
}

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "rooftop solar Punjab",
    "PM Surya Ghar subsidy",
    "solar installation Patiala",
    "solar panels Amritsar",
    "solar panels Ludhiana",
    "PSPCL net metering",
    "residential solar India",
    "Punjab Solar",
  ],
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  creator: site.name,
  publisher: site.legalName,
  formatDetection: { telephone: true, email: true, address: true },
  category: "business",
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: ["hi_IN", "pa_IN"],
    siteName: site.name,
    url: site.url,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [
      {
        url: absUrl(site.ogImage),
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [absUrl(site.ogImage)],
  },
  alternates: {
    canonical: site.url,
    languages: {
      "en-IN": site.url,
      "hi-IN": site.url,
      "pa-IN": site.url,
      "x-default": site.url,
    },
    types: {
      "application/rss+xml": absUrl("/blog/rss.xml"),
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: site.appleTouchIcon, sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  verification: {
    google: site.verification.google || undefined,
    ...(site.verification.bing
      ? { other: { "msvalidate.01": site.verification.bing } }
      : {}),
  },
  other: {
    "geo.region": "IN-PB",
    "geo.placename": site.address.locality,
    "geo.position": `${site.address.lat};${site.address.lng}`,
    ICBM: `${site.address.lat}, ${site.address.lng}`,
  },
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale()
  const messages = await getMessages()
  return (
    <html
      lang={locale}
      className={cn(fraunces.variable, geist.variable, mono.variable)}
    >
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Jsonld
          data={[orgJsonLd(), localBusinessJsonLd(), websiteJsonLd()]}
        />
      </body>
    </html>
  )
}
