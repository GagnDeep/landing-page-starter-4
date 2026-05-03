import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-serif',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ['300', '400', '500'],
  variable: "--font-sans",
})

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", cormorant.variable, jakarta.variable, "font-sans")}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <ThemeProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
