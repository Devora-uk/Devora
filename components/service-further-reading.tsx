import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getAllPosts } from "@/lib/markdown"
import { getBlogPostsForService } from "@/lib/blog-clusters"

type ServiceFurtherReadingProps = {
  serviceSlug: string
}

export function ServiceFurtherReading({ serviceSlug }: ServiceFurtherReadingProps) {
  const posts = getBlogPostsForService(serviceSlug, getAllPosts())

  if (posts.length === 0) return null

  return (
    <section className="bg-background px-4 py-16 md:px-6 md:py-24 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1fr]">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-accent">
              Further reading
            </p>
            <h2 className="text-4xl font-black leading-[0.98] tracking-[-0.045em] md:text-5xl">
              Guides worth reading before you enquire.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Practical articles on cost, timelines, SEO and conversion, written for UK businesses.
            </p>
            <Link
              href="/guides"
              className="mt-6 inline-flex items-center gap-2 font-bold text-foreground underline underline-offset-4 hover:text-primary transition-colors"
            >
              Browse all guides
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <ul className="grid gap-px overflow-hidden border border-black/10 bg-black/10">
            {posts.slice(0, 4).map((post) => (
              <li key={post.slug} className="bg-white">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col p-6 hover:bg-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
                >
                  <h3 className="text-lg font-black tracking-[-0.02em] group-hover:text-background">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground group-hover:text-background/80 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="mt-3 text-xs font-semibold text-accent group-hover:text-background/90">
                    {post.readingTime}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
