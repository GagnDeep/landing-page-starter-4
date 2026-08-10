import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-heading font-bold text-lg">JSONMock</span>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link href="/docs/quickstart" className="transition-colors hover:text-foreground/80 text-foreground/60">Docs</Link>
          <Link href="/providers" className="transition-colors hover:text-foreground/80 text-foreground/60">Providers</Link>
          <Link href="/pricing" className="transition-colors hover:text-foreground/80 text-foreground/60">Pricing</Link>
          <Button asChild size="sm">
            <Link href="/docs/quickstart">Get Started</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
