import type { Metadata, Viewport } from "next"
import { Chivo, Inter, Roboto_Mono } from "next/font/google"
import { NextIntlClientProvider } from "next-intl"
import { getLocale, getMessages } from "next-intl/server"

import "./globals.css"
import { cn } from "@/lib/utils"

const chivo = Chivo({
  subsets: ["latin"],
  variable: "--font-chivo",
  weight: ["600", "700", "800"],
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
})

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9f9fb" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0c10" },
  ],
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL("https://aiwireharness.com"),
  alternates: { canonical: "https://aiwireharness.com" },
  title: "AI Wire Harness — RFQ Desk",
  description: "Request quotes for custom wire harnesses from vetted US shops.",
  openGraph: {
    type: "website",
    url: "https://aiwireharness.com",
    title: "AI Wire Harness — RFQ Desk",
    description: "Request quotes for custom wire harnesses from vetted US shops.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale()
  const messages = await getMessages()
  return (
    <html
      lang="en"
      className={cn(chivo.variable, inter.variable, robotoMono.variable)}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col font-sans">
        <a href="#main" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
