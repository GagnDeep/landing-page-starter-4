import { Montserrat, Playfair_Display } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { PreHeader } from "@/components/layout/PreHeader";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

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
