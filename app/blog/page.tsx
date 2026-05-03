import { BlogHero } from '@/components/blog/BlogHero'
import { ArticleGrid } from '@/components/blog/ArticleGrid'
import { Newsletter } from '@/components/blog/Newsletter'

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <ArticleGrid />
      <Newsletter />
    </>
  )
}
