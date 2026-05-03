import { Geist, Geist_Mono, Figtree } from "next/font/google"
import { Playfair_Display } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header, Footer } from "@/components/layout"
import { cn } from "@/lib/utils";

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-sans'
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
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
        "antialiased min-h-screen",
        fontMono.variable,
        figtree.variable,
        playfair.variable
      )}
    >
      <body className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
        <ThemeProvider>
          <Header />
          <main className="flex-grow flex flex-col pt-[88px] relative">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
