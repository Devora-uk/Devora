import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { getAllPosts } from "@/lib/markdown"
import { getBlogPostsForService } from "@/lib/blog-clusters"
import { BrandBadge } from "@/components/brand-badge"

type ServiceFurtherReadingProps = {
  serviceSlug: string
}

export function ServiceFurtherReading({ serviceSlug }: ServiceFurtherReadingProps) {
  const posts = getBlogPostsForService(serviceSlug, getAllPosts())

  if (posts.length === 0) return null

  return (
    <section className="section-dark section-shell-dark page-section">
      <div className="page-container page-grid-aside gap-10">
        <div>
          <BrandBadge variant="navy" className="mb-5 border-white/10 bg-white/8 text-white md:mb-6">
            Further reading
          </BrandBadge>
          <h2 className="section-heading md:section-heading-tablet text-white">
            Guides worth reading before you <span className="heading-accent after:bg-[#CCFF00]">enquire</span>.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            Practical articles on cost, timelines, SEO and conversion, written for UK businesses.
          </p>
          <Link
            href="/guides"
            className="group mt-6 inline-flex items-center gap-1.5 text-sm lowercase text-white underline-offset-4 transition-colors hover:underline"
          >
            browse all guides
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>

        <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-1">
          {posts.slice(0, 4).map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-white/20 hover:bg-white/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 md:p-6"
              >
                <h3 className="text-base font-medium text-white">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55 line-clamp-2">
                  {post.excerpt}
                </p>
                <span className="mt-3 text-xs text-white/40">
                  {post.readingTime}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
