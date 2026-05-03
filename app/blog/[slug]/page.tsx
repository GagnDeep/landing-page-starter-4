import { blogContent } from "@/content/blog";
import { notFound } from "next/navigation";
import { CinematicParallax } from "@/components/visuals/cinematic-parallax";
import { StaggeredReveal, StaggerItem } from "@/components/visuals/staggered-reveal";
import { images } from "@/lib/images";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const isFeatured = blogContent.featuredPost.slug === slug;
  const post = isFeatured ? blogContent.featuredPost : blogContent.posts.find((p) => p.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | The Smile Designers Journal`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Find the post either in featured or regular posts
  const isFeatured = blogContent.featuredPost.slug === slug;
  const post = isFeatured ? blogContent.featuredPost : blogContent.posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="pb-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-end">
        <CinematicParallax
          src={images.treatments.veneers} // In a real app, this would be specific to the post
          alt={post.title}
          overlay={true}
          className="absolute inset-0 z-0"
        />
        <div className="container relative z-10 mx-auto px-6 md:px-12 pb-16">
          <StaggeredReveal className="max-w-4xl">
            <StaggerItem>
               <Link href="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 text-sm font-medium tracking-widest uppercase transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Back to Journal
               </Link>
            </StaggerItem>
            <StaggerItem>
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-sm text-white/80 font-medium">{post.date}</span>
              </div>
            </StaggerItem>
            <StaggerItem>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-medium tracking-tight leading-tight">
                {post.title}
              </h1>
            </StaggerItem>
          </StaggeredReveal>
        </div>
      </section>

      {/* Content Section (Simulated) */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <StaggeredReveal>
            <StaggerItem>
               <p className="text-xl text-muted-foreground font-light leading-relaxed mb-12">
                 {post.excerpt}
               </p>
            </StaggerItem>
            <StaggerItem className="prose prose-neutral dark:prose-invert prose-lg max-w-none">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <h2>The Aesthetic Foundation</h2>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.
              </p>
              <blockquote>
                "A smile is the universal language of kindness and confidence. We engineer it with the precision of a watchmaker and the eye of an artist."
              </blockquote>
              <p>
                Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. In hac habitasse platea dictumst. Donec est velit, scelerisque in tempor et, eleifend id odio. Donec rhoncus mi eu auctor consequat.
              </p>
            </StaggerItem>
          </StaggeredReveal>
        </div>
      </section>
    </article>
  );
}
