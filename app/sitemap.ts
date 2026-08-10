import { MetadataRoute } from 'next'
import { site } from '@/lib/site'

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/docs',
    '/docs/quickstart',
    '/docs/recording',
    '/providers',
    '/providers/openai',
    '/providers/anthropic',
    '/recipes/flaky-agent-tests',
    '/cassette-diff',
    '/pricing',
  ]

  return routes.map((route) => ({
    url: `${site.url}${route}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
