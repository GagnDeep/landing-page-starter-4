import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { buildMetadata } from '@/lib/seo'

// 120-160 chars
export const metadata = buildMetadata("About Us", "About JSONMock and our mission. Learn how our team helps developers achieve fast, deterministic continuous integrations.", "/about/")

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main" className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-heading text-4xl font-bold mb-6">About JSONMock</h1>
          <div className="prose prose-slate dark:prose-invert">
            <p>JSONMock is built for developers who need deterministic LLM agent tests. We created this because we were tired of flaky CI runs and paying for live model calls during basic assertions.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
