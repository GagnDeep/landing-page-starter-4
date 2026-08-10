import type { Metadata, Viewport } from "next"
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

const headingFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "oklch(0.99 0 0)" },
    { media: "(prefers-color-scheme: dark)", color: "oklch(0.12 0 0)" },
  ],
}

export const metadata: Metadata = {
  title: {
    template: "%s | Washington DC Review",
    default: "Washington DC Review",
  },
  description: "An independent guide to federal contracting for small businesses.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${headingFont.variable} ${sansFont.variable} font-sans antialiased bg-background text-foreground selection:bg-primary selection:text-primary-foreground min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
