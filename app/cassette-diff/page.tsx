import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { CassetteDiff } from '@/components/cassette-diff'
import { buildMetadata } from '@/lib/seo'

// 120-160 chars
export const metadata = buildMetadata("Cassette Diff Tool", "Compare JSONMock cassette files for drift. Drop your output cassettes and diff test output seamlessly without API calls.", "/cassette-diff/")

export default function CassetteDiffPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main" className="flex-1 py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-8 text-center">
            <h1 className="font-heading text-3xl font-bold mb-4">Cassette Drift Analyzer</h1>
            <p className="text-muted-foreground">Paste two recorded API payloads to identify normalization failures and dynamic drift.</p>
          </div>
          <CassetteDiff />
        </div>
      </main>
      <Footer />
    </div>
  )
}
