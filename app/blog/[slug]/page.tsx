import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { getPostWithHtml, getAllPosts } from '@/lib/markdown';
import { getRelatedPostsForSlug } from '@/lib/blog-clusters';
import { BlogPostAside } from '@/components/blog-post-aside';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { JsonLd } from '@/components/JsonLd';
import { absoluteUrl, breadcrumbSchema, graphSchema, webPageSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/seo-pages';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPostWithHtml(resolvedParams.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    };
  }
  
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    alternates: {
      canonical: absoluteUrl(`/blog/${post.slug}`),
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: absoluteUrl(`/blog/${post.slug}`),
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [{ url: post.coverImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllPosts();
  if (!posts || posts.length === 0) {
    console.log('No blog posts found for static generation');
    return [];
  }
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = await getPostWithHtml(resolvedParams.slug);
  const allPosts = getAllPosts();
  const relatedPosts = getRelatedPostsForSlug(resolvedParams.slug, allPosts, 3);
  
  if (!post) {
    notFound();
  }

  const articleUrl = absoluteUrl(`/blog/${post.slug}`)
  const structuredData = graphSchema([
    webPageSchema({ path: `/blog/${post.slug}`, name: post.title, description: post.excerpt }),
    {
      "@type": "BlogPosting",
      "@id": `${articleUrl}#blogposting`,
      headline: post.title,
      description: post.excerpt,
      image: absoluteUrl(post.coverImage),
      datePublished: post.date,
      dateModified: post.date,
      author: { "@type": "Organization", name: "Devora", url: SITE_URL },
      publisher: { "@id": `${SITE_URL}/#organization` },
      mainEntityOfPage: { "@id": `${articleUrl}#webpage` },
      keywords: post.tags,
    },
    breadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "Blog", url: `${SITE_URL}/blog` },
      { name: post.title, url: articleUrl },
    ]),
  ])
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section with Background Image */}
        <section className="relative min-h-[50vh] bg-primary text-primary-foreground py-12 md:py-16 px-6 mt-20 overflow-hidden">
          {/* Background Image */}
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover absolute inset-0"
            priority
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
          
          {/* Content Container */}
          <div className="relative z-10 container mx-auto">
            <div className="max-w-6xl mx-auto">
              {/* Back button */}
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors font-light mb-8 group"
                aria-label="Back to blog"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                <span>Back to blog</span>
              </Link>

              {/* Article metadata */}
              <div className="mb-8">
                <div className="flex items-center gap-6 text-primary-foreground/70 font-light text-sm mb-6 flex-wrap">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readingTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {post.tags.slice(0, 3).map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-xs text-primary-foreground/70 uppercase tracking-wider font-light px-3 py-1 border border-primary-foreground/30 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Main headline in semi-transparent container */}
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-primary-foreground/20">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tighter mb-4 text-primary-foreground">
                  {post.title}
                </h1>
                
                <p className="text-base md:text-lg text-primary-foreground/90 max-w-3xl font-light leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Article Content */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16 items-start">
            <article className="max-w-none min-w-0">
              <div 
                dangerouslySetInnerHTML={{ __html: post.contentHtml }} 
                className="
                  prose-sm md:prose-base lg:prose-lg max-w-none
                  prose prose-neutral
                  dark:prose-invert
                  
                  [&_h1]:text-3xl md:[&_h1]:text-4xl [&_h1]:font-bold [&_h1]:text-foreground [&_h1]:mt-12 [&_h1]:mb-6 [&_h1]:leading-tight
                  [&_h2]:text-2xl md:[&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-5 [&_h2]:leading-tight
                  [&_h3]:text-xl md:[&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-8 [&_h3]:mb-4
                  [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-foreground [&_h4]:mt-6 [&_h4]:mb-3
                  
                  [&_p]:text-foreground [&_p]:leading-relaxed [&_p]:mb-6 [&_p]:text-base md:[&_p]:text-lg [&_p]:font-light
                  
                  [&_ul]:my-6 [&_ul]:ml-6 [&_ul]:space-y-3
                  [&_ol]:my-6 [&_ol]:ml-6 [&_ol]:space-y-3
                  [&_li]:text-foreground [&_li]:leading-relaxed [&_li]:font-light
                  [&_li]:marker:text-primary
                  
                  [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-6 [&_blockquote]:py-4 [&_blockquote]:my-8 [&_blockquote]:italic [&_blockquote]:text-foreground/80 [&_blockquote]:bg-muted/50 [&_blockquote]:rounded-r-lg [&_blockquote]:pr-6
                  
                  [&_code]:bg-muted [&_code]:text-primary [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono
                  [&_pre]:bg-slate-900 [&_pre]:text-slate-50 [&_pre]:p-6 [&_pre]:my-8 [&_pre]:rounded-2xl [&_pre]:overflow-x-auto [&_pre]:border [&_pre]:border-slate-800
                  [&_pre_code]:bg-transparent [&_pre_code]:text-inherit [&_pre_code]:p-0 [&_pre_code]:font-mono [&_pre_code]:text-sm
                  
                  [&_a]:text-primary [&_a]:hover:text-primary/80 [&_a]:underline [&_a]:underline-offset-4 [&_a]:transition-colors [&_a]:font-medium
                  
                  [&_img]:my-8 [&_img]:border [&_img]:border-border [&_img]:rounded-2xl [&_img]:w-full [&_img]:h-auto [&_img]:shadow-lg
                  
                  [&_table]:my-8 [&_table]:w-full [&_table]:border-collapse
                  [&_th]:bg-muted [&_th]:text-foreground [&_th]:font-semibold [&_th]:px-4 [&_th]:py-3 [&_th]:text-left [&_th]:border [&_th]:border-border
                  [&_td]:px-4 [&_td]:py-3 [&_td]:border [&_td]:border-border [&_td]:text-foreground
                  
                  [&_hr]:my-12 [&_hr]:border-border
                  
                  [&_strong]:font-semibold [&_strong]:text-foreground
                  [&_em]:italic [&_em]:text-foreground/90
                "
              />
            </article>
            <BlogPostAside
              slug={post.slug}
              category={post.category}
              relatedServiceSlugs={post.relatedServices}
            />
            </div>
          </div>
        </section>
        
        {/* Author Section */}
        <section className="py-16 bg-muted border-t border-border">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground flex items-center justify-center font-light text-xl mx-auto mb-6 rounded-full">
                {post.author.substring(0, 1)}
              </div>
              <h3 className="text-2xl font-light text-foreground mb-3 tracking-wide">
                Written by {post.author}
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed mb-6 max-w-2xl mx-auto">
                Professional web developer at Devora specialising in building high-performance websites for established, growing, and ambitious businesses.
              </p>
            </div>
          </div>
        </section>
        
        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-background border-t border-border">
            <div className="max-w-6xl mx-auto px-6">
              <div className="mb-12">
                <div className="text-xs text-muted-foreground uppercase tracking-wider font-light mb-6">Continue reading</div>
                <h2 className="text-4xl md:text-5xl font-light text-foreground leading-tight tracking-tight">
                  Related articles
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link 
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group block"
                  >
                    <article className="space-y-4">
                      <div className="relative aspect-[16/9] overflow-hidden border border-border rounded-2xl">
                        <Image
                          src={relatedPost.coverImage}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-4 text-muted-foreground text-xs font-light">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{relatedPost.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{relatedPost.readingTime}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-light text-foreground group-hover:text-primary transition-colors leading-tight tracking-tight">
                          {relatedPost.title}
                        </h3>
                        
                        <p className="text-muted-foreground font-light leading-relaxed">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Newsletter CTA */}
        <section className="py-20 bg-primary text-primary-foreground px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-light text-primary-foreground mb-6 leading-tight tracking-tight">
                Ready to work together?
              </h2>
              <p className="text-lg text-primary-foreground/90 font-light leading-relaxed max-w-2xl mx-auto">
                Let's discuss how we can help your business grow with a ground-up website design and development project.
              </p>
            </div>
            
            <Link href="/#contact">
              <Button size="lg" className="rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-light gap-2">
                Get in touch <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <JsonLd data={structuredData} />
      
      <Footer />
    </div>
  );
}
