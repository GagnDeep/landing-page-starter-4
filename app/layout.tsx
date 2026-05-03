import { Montserrat, Playfair_Display } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { PreHeader } from "@/components/layout/PreHeader"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { cn } from "@/lib/utils"
import { Toaster } from "sonner"
import { Metadata, Viewport } from "next"
import { homeContent } from "@/content/home"
import { siteImages } from "@/lib/images"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f5f2" }, // Mapped approx from OKLCH cream
    { media: "(prefers-color-scheme: dark)", color: "#1f1d1c" }, // Mapped approx from OKLCH espresso
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL("https://bohosalon.com"), // Placeholder URL
  title: {
    default: homeContent.seo.title,
    template: "%s | Boho Salon",
  },
  description: homeContent.seo.description,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://bohosalon.com",
    title: homeContent.seo.title,
    description: homeContent.seo.description,
    siteName: "Boho Salon",
    images: [
      {
        url: siteImages.hero.salonInterior.src,
        width: 1200,
        height: 630,
        alt: homeContent.seo.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeContent.seo.title,
    description: homeContent.seo.description,
    images: [siteImages.hero.salonInterior.src],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const fontSans = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontHeading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontSans.variable,
        fontHeading.variable,
        "font-sans"
      )}
    >
      <body className="flex min-h-screen flex-col">
        <ThemeProvider>
          <PreHeader />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
