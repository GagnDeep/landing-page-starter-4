import { blogContent } from "@/content/blog";
import { siteImages } from "@/lib/images";
import { AnimatedGradientMesh } from "@/components/visuals";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = [blogContent.featuredPost, ...blogContent.posts].find((p) => p.slug === resolvedParams.slug);
  if (!post) return {};
  return {
    title: `${post.title} | The Journal`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = [blogContent.featuredPost, ...blogContent.posts].find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="flex flex-col min-h-screen pt-24 pb-32">
      {/* Hero */}
      <header className="relative py-24 px-6 md:px-12 text-center bg-muted/10 border-b border-border overflow-hidden">
        <AnimatedGradientMesh className="opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            <div className="flex items-center justify-center gap-4 text-xs tracking-widest uppercase text-muted-foreground">
                <span className="text-primary">{post.category}</span>
                <span>&bull;</span>
                <span>{post.date}</span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-tight">
                {post.title}
            </h1>
        </div>
      </header>

      {/* Featured Image */}
      <div className="max-w-5xl mx-auto w-full px-6 -mt-12 relative z-20">
          <div className="relative aspect-video md:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-xl border border-border">
              <Image src={siteImages.blog.post1.src} alt={post.title} fill className="object-cover" priority />
          </div>
      </div>

      {/* Content (Simulated rich text block) */}
      <div className="max-w-3xl mx-auto w-full px-6 py-24 prose prose-lg dark:prose-invert prose-headings:font-heading prose-headings:font-normal prose-a:text-primary hover:prose-a:text-primary/80">
          <p className="lead text-xl text-muted-foreground mb-12">
              {post.excerpt}
          </p>
          <p>{post.content}</p>
          <blockquote>
              &ldquo;The essence of boho-modern aesthetic is finding the perfect balance between organic warmth and clinical precision.&rdquo;
          </blockquote>
      </div>
    </article>
  );
}
