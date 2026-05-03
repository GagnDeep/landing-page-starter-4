import {
  BlogHero,
  BlogFeatured,
  BlogGrid,
  BlogNewsletter
} from "@/components/blog";
import { blogContent } from "@/content/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: blogContent.meta.title,
  description: blogContent.meta.description,
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogFeatured />
      <BlogGrid />
      <BlogNewsletter />
    </>
  );
}
