import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { Alert02Icon } from "@hugeicons/core-free-icons"

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center py-24 px-6 md:px-12 text-center bg-background">
        <HugeiconsIcon icon={Alert02Icon} className="w-16 h-16 text-accent mb-6" />
        <h1 className="text-foreground mb-4">404 — Open Circuit</h1>
        <p className="text-muted-foreground font-sans max-w-md mx-auto mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Check the URL or return to the RFQ desk.
        </p>
        <div className="flex gap-4">
          <Button asChild variant="outline" className="font-heading uppercase tracking-wide">
            <Link href="/">Return Home</Link>
          </Button>
          <Button asChild className="bg-foreground text-background hover:bg-foreground/90 font-heading uppercase tracking-wide">
            <Link href="/rfq/">Go to RFQ Desk</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </>
  )
}
