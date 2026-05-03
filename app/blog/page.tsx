import { BlogHero } from "@/components/blog/blog-hero";
import { ArticleGrid } from "@/components/blog/article-grid";
import { BlogNewsletter } from "@/components/blog/blog-newsletter";

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      <BlogHero />
      <ArticleGrid />
      <BlogNewsletter />
    </div>
  );
}
