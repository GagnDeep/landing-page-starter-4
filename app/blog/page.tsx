import { blogContent } from "@/content/blog";
import { siteImages } from "@/lib/images";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimatedGradientMesh } from "@/components/visuals";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: blogContent.seo.title,
  description: blogContent.seo.description,
};

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 03. Journal Hero */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden pt-24 px-6 md:px-12 bg-muted/20 border-b border-border text-center">
        <AnimatedGradientMesh className="z-0 opacity-20" />
        <div className="z-10 max-w-3xl mx-auto space-y-6">
          <h1 className="font-heading text-5xl md:text-7xl leading-tight tracking-tight">
            {blogContent.hero.heading}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            {blogContent.hero.subheading}
          </p>
        </div>
      </section>

      {/* 05. Category Filters */}
      <nav className="border-b border-border sticky top-0 z-40 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto py-4">
            <ul className="flex items-center gap-4 text-sm tracking-widest uppercase font-medium min-w-max">
            {blogContent.categories.map((category, idx) => (
                <li key={idx}>
                    <button className={`px-4 py-2 rounded-full transition-colors ${idx === 0 ? 'bg-primary text-primary-foreground' : 'hover:bg-muted text-muted-foreground hover:text-foreground'}`}>
                        {category}
                    </button>
                </li>
            ))}
            </ul>
        </div>
      </nav>

      <section className="py-24 max-w-7xl mx-auto w-full px-6 space-y-24">
          {/* 04. Featured Article */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 group">
              <Link href={`/blog/${blogContent.featuredPost.slug}`} className="relative aspect-[4/3] lg:aspect-auto rounded-[2rem] overflow-hidden shadow-sm order-2 lg:order-1 border border-border/50">
                  <Image src={siteImages.blog.post1.src} alt={siteImages.blog.post1.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </Link>
              <div className="flex flex-col justify-center space-y-6 order-1 lg:order-2">
                  <div className="flex items-center gap-4 text-xs tracking-widest uppercase text-muted-foreground">
                      <span className="text-primary">{blogContent.featuredPost.category}</span>
                      <span>&bull;</span>
                      <span>{blogContent.featuredPost.date}</span>
                  </div>
                  <h2 className="font-heading text-4xl md:text-5xl group-hover:text-primary transition-colors">
                      <Link href={`/blog/${blogContent.featuredPost.slug}`}>{blogContent.featuredPost.title}</Link>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                      {blogContent.featuredPost.excerpt}
                  </p>
                  <Button variant="link" className="px-0 w-fit text-foreground hover:text-primary tracking-widest uppercase text-xs" asChild>
                      <Link href={`/blog/${blogContent.featuredPost.slug}`}>{blogContent.labels.readArticle} &rarr;</Link>
                  </Button>
              </div>
          </div>

          {/* 06-09. Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {blogContent.posts.slice(0, 3).map((post, idx) => (
                  <div key={idx} className="group flex flex-col space-y-6">
                      <Link href={`/blog/${post.slug}`} className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden shadow-sm border border-border/50">
                          <Image src={idx % 2 === 0 ? siteImages.blog.post2.src : siteImages.blog.post1.src} alt="Blog thumbnail" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                      </Link>
                      <div className="flex flex-col flex-1 space-y-4">
                          <div className="flex items-center gap-3 text-[10px] tracking-widest uppercase text-muted-foreground">
                              <span className="text-primary">{post.category}</span>
                              <span>&bull;</span>
                              <span>{post.date}</span>
                          </div>
                          <h3 className="font-heading text-2xl group-hover:text-primary transition-colors">
                              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                          </h3>
                          <p className="text-muted-foreground leading-relaxed flex-1">
                              {post.excerpt}
                          </p>
                      </div>
                  </div>
              ))}
          </div>

          {/* 10. Newsletter Signup Break */}
          <div className="bg-accent/10 border border-accent/20 rounded-[3rem] p-12 md:p-24 text-center space-y-8">
              <h2 className="font-heading text-4xl">{blogContent.newsletter.heading}</h2>
              <p className="text-muted-foreground max-w-lg mx-auto">{blogContent.newsletter.description}</p>
              <form className="flex w-full max-w-md mx-auto items-center space-x-2 pt-4" action="/api/newsletter">
                <Input type="email" placeholder="Your email address" className="bg-background rounded-full" />
                <Button type="submit" className="rounded-full px-6">{blogContent.newsletter.buttonLabel}</Button>
              </form>
          </div>

          {/* 11-13. Article Grid Continued */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {blogContent.posts.slice(3).map((post, idx) => (
                  <div key={idx} className="group flex flex-col space-y-6">
                      <Link href={`/blog/${post.slug}`} className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden shadow-sm border border-border/50">
                          <Image src={siteImages.blog.post1.src} alt="Blog thumbnail" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                      </Link>
                      <div className="flex flex-col flex-1 space-y-4">
                          <div className="flex items-center gap-3 text-[10px] tracking-widest uppercase text-muted-foreground">
                              <span className="text-primary">{post.category}</span>
                              <span>&bull;</span>
                              <span>{post.date}</span>
                          </div>
                          <h3 className="font-heading text-2xl group-hover:text-primary transition-colors">
                              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                          </h3>
                          <p className="text-muted-foreground leading-relaxed flex-1">
                              {post.excerpt}
                          </p>
                      </div>
                  </div>
              ))}
          </div>

          {/* 14. Pagination */}
          <div className="flex justify-center pt-8 border-t border-border/50">
             <Button variant="outline" className="rounded-full tracking-widest uppercase text-xs">{blogContent.labels.loadMore}</Button>
          </div>
      </section>
    </div>
  );
}
