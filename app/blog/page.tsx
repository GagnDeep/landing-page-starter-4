import { blogContent } from "@/content/blog";
import { PageHero } from "@/components/ui/page-hero";
import { FeaturedArticle, CategoryFilters, ArticleGrid, BlogNewsletter } from "@/components/blog";

export const metadata = {
  title: blogContent.seo.title,
  description: blogContent.seo.description,
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        headline={blogContent.sections.hero.headline || "The Lounge Edit"}
        subheading={blogContent.sections.hero.subheading}
      />
      <FeaturedArticle />
      <CategoryFilters />
      <ArticleGrid />
      <BlogNewsletter />
    </>
  );
}
