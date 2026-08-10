import Link from "next/link"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Page Not Found",
  description: "The page you are looking for does not exist on Washington DC Review. Return home to access our federal contracting guides.",
  path: "/404"
})

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-32 flex flex-col items-center justify-center text-center">
      <h1 className="text-display font-bold mb-4">404</h1>
      <h2 className="text-h2 mb-6">Page Not Found</h2>
      <p className="text-body text-muted-foreground mb-8 max-w-md">
        The page you are looking for does not exist or has been moved. Use the navigation above or return home.
      </p>
      <Link href="/" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
        Return Home
      </Link>
    </div>
  )
}
