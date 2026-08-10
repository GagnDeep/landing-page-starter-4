import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main" className="flex-1 flex flex-col items-center justify-center container mx-auto px-4 py-24 text-center">
        <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4 text-foreground">404</h1>
        <p className="text-muted-foreground text-lg mb-8 max-w-md">
          The page you are looking for does not exist or has been moved.
        </p>
        <Button asChild>
          <Link href="/">Return to Homepage</Link>
        </Button>
      </main>
      <Footer />
    </div>
  )
}
