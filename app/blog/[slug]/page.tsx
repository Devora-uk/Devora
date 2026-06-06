import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { getPostWithHtml, getAllPosts } from '@/lib/markdown';
import { getRelatedPostsForSlug } from '@/lib/blog-clusters';
import { BlogPostAside } from '@/components/blog-post-aside';
import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { JsonLd } from '@/components/JsonLd';
import { BrandBadge } from '@/components/brand-badge';
import { PageHero } from '@/components/page-hero';
import { PageCta } from '@/components/page-cta';
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
      locale: 'en_GB',
      siteName: 'Devora',
      publishedTime: post.date,
      modifiedTime: post.dateModified || post.date,
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
    robots: { index: true, follow: true },
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
      dateModified: post.dateModified || post.date,
      inLanguage: "en-GB",
      isAccessibleForFree: true,
      author: { "@type": "Organization", name: "Devora", url: SITE_URL },
      publisher: { "@id": `${SITE_URL}/#organization` },
      mainEntityOfPage: { "@id": `${articleUrl}#webpage` },
      keywords: post.tags,
    },
    breadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "Guides", url: `${SITE_URL}/guides` },
      { name: post.title, url: articleUrl },
    ]),
  ])
  
  return (
    <div className="min-h-screen flex flex-col bg-[#0F1729]">
      <Header />
      
      <main className="flex-1">
        <PageHero
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Guides", href: "/guides" },
            { name: post.title, href: `/blog/${post.slug}` },
          ]}
          badge={post.category || "Guide"}
          title={post.title}
          description={post.excerpt}
          actions={
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 text-sm lowercase text-[#0F1729]/55 transition-colors hover:text-[#0F1729] hover:underline"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              back to guides
            </Link>
          }
        />

        <section className="section-cream section-shell-cream page-section page-section-compact">
          <div className="page-container">
            <div className="mb-10 flex flex-wrap items-center gap-4 text-sm text-[#0F1729]/45">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                {post.readingTime}
              </span>
              <span className="flex items-center gap-1.5">
                <User className="h-3.5 w-3.5" aria-hidden="true" />
                {post.author}
              </span>
            </div>

            <div className="relative mb-12 aspect-[16/9] overflow-hidden rounded-xl border border-[#0F1729]/8">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1280px) 100vw, 90rem"
              />
            </div>

            <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(240px,280px)] md:items-start md:gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
            <article className="max-w-none min-w-0">
              <div 
                dangerouslySetInnerHTML={{ __html: post.contentHtml }} 
                className="
                  prose-sm md:prose-base lg:prose-lg max-w-none
                  prose prose-neutral
                  
                  [&_h1]:text-3xl md:[&_h1]:text-4xl [&_h1]:font-medium [&_h1]:text-[#0F1729] [&_h1]:mt-12 [&_h1]:mb-6 [&_h1]:leading-tight
                  [&_h2]:text-2xl md:[&_h2]:text-3xl [&_h2]:font-medium [&_h2]:text-[#0F1729] [&_h2]:mt-10 [&_h2]:mb-5 [&_h2]:leading-tight
                  [&_h3]:text-xl md:[&_h3]:text-2xl [&_h3]:font-medium [&_h3]:text-[#0F1729] [&_h3]:mt-8 [&_h3]:mb-4
                  [&_h4]:text-lg [&_h4]:font-medium [&_h4]:text-[#0F1729] [&_h4]:mt-6 [&_h4]:mb-3
                  
                  [&_p]:text-[#0F1729]/70 [&_p]:leading-relaxed [&_p]:mb-6 [&_p]:text-base md:[&_p]:text-lg
                  
                  [&_ul]:my-6 [&_ul]:ml-6 [&_ul]:space-y-3
                  [&_ol]:my-6 [&_ol]:ml-6 [&_ol]:space-y-3
                  [&_li]:text-[#0F1729]/70 [&_li]:leading-relaxed
                  [&_li]:marker:text-[#0F1729]/35
                  
                  [&_blockquote]:border-l-4 [&_blockquote]:border-[#CCFF00] [&_blockquote]:pl-6 [&_blockquote]:py-4 [&_blockquote]:my-8 [&_blockquote]:italic [&_blockquote]:text-[#0F1729]/65 [&_blockquote]:bg-white/60 [&_blockquote]:rounded-r-lg [&_blockquote]:pr-6
                  
                  [&_code]:bg-white/80 [&_code]:text-[#0F1729] [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono
                  [&_pre]:bg-[#0F1729] [&_pre]:text-white [&_pre]:p-6 [&_pre]:my-8 [&_pre]:rounded-xl [&_pre]:overflow-x-auto
                  [&_pre_code]:bg-transparent [&_pre_code]:text-inherit [&_pre_code]:p-0 [&_pre_code]:font-mono [&_pre_code]:text-sm
                  
                  [&_a]:text-[#0F1729] [&_a]:hover:text-[#0F1729]/70 [&_a]:underline [&_a]:underline-offset-4 [&_a]:transition-colors [&_a]:font-medium
                  
                  [&_img]:my-8 [&_img]:border [&_img]:border-[#0F1729]/8 [&_img]:rounded-xl [&_img]:w-full [&_img]:h-auto
                  
                  [&_table]:my-8 [&_table]:w-full [&_table]:border-collapse
                  [&_th]:bg-white/80 [&_th]:text-[#0F1729] [&_th]:font-medium [&_th]:px-4 [&_th]:py-3 [&_th]:text-left [&_th]:border [&_th]:border-[#0F1729]/8
                  [&_td]:px-4 [&_td]:py-3 [&_td]:border [&_td]:border-[#0F1729]/8 [&_td]:text-[#0F1729]/70
                  
                  [&_hr]:my-12 [&_hr]:border-[#0F1729]/8
                  
                  [&_strong]:font-medium [&_strong]:text-[#0F1729]
                  [&_em]:italic [&_em]:text-[#0F1729]/80
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
        
        <section className="section-dark section-shell-dark page-section page-section-compact">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-lg font-medium text-white">
              {post.author.substring(0, 1)}
            </div>
            <h3 className="section-heading md:section-heading-tablet text-white">
              Written by {post.author}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-white/60">
              Web developer at Devora specialising in building high-performance websites for established, growing, and ambitious businesses.
            </p>
          </div>
        </section>
        
        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="section-cream section-shell-cream page-section">
            <div className="page-container">
              <BrandBadge variant="lime" className="mb-6">Continue reading</BrandBadge>
              <h2 className="section-heading md:section-heading-tablet text-[#0F1729]">
                Related <span className="heading-accent">articles</span>
              </h2>
              
              <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <Link 
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group block"
                  >
                    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-[#0F1729]/8 bg-white/60 transition-all hover:border-[#0F1729]/15 hover:bg-white">
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={relatedPost.coverImage}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                      
                      <div className="flex flex-1 flex-col p-5">
                        <div className="mb-3 flex items-center gap-4 text-xs text-[#0F1729]/45">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" aria-hidden="true" />
                            {relatedPost.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" aria-hidden="true" />
                            {relatedPost.readingTime}
                          </span>
                        </div>
                        
                        <h3 className="text-base font-medium tracking-[-0.02em] text-[#0F1729] line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        
                        <p className="mt-2 flex-1 text-sm leading-6 text-[#0F1729]/55 line-clamp-3">
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
        
        <PageCta
          title={<>Ready to work <span className="heading-accent after:bg-[#CCFF00]">together</span>?</>}
          description="Let's discuss how we can help your business grow with a ground-up website design and development project."
          linkLabel="get in touch"
        />
      </main>
      <JsonLd data={structuredData} />
      
      <Footer />
    </div>
  );
}
