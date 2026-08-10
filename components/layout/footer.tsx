import Link from 'next/link'
import { site } from '@/lib/site'

export function Footer() {
  return (
    <footer className="border-t py-12 md:py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <span className="font-heading font-bold text-lg">{site.name}</span>
          <p className="mt-2 text-sm text-muted-foreground">{site.tagline}</p>
        </div>
        <div>
          <h3 className="font-medium mb-4 text-sm">Product</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/cassette-diff" className="hover:text-foreground">Cassette Diff</Link></li>
            <li><Link href="/pricing" className="hover:text-foreground">Pricing</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium mb-4 text-sm">Resources</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/docs/quickstart" className="hover:text-foreground">Documentation</Link></li>
            <li><Link href="/recipes/flaky-agent-tests" className="hover:text-foreground">Recipes</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium mb-4 text-sm">Legal</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="text-muted-foreground/50">Terms (stub)</li>
            <li className="text-muted-foreground/50">Privacy (stub)</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
