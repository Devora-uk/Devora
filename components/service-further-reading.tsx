import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { getAllPosts } from "@/lib/markdown"
import { getBlogPostsForService } from "@/lib/blog-clusters"
import { PageEditorialSection } from "@/components/page-editorial-section"

type ServiceFurtherReadingProps = {
  serviceSlug: string
}

export function ServiceFurtherReading({ serviceSlug }: ServiceFurtherReadingProps) {
  const posts = getBlogPostsForService(serviceSlug, getAllPosts())

  if (posts.length === 0) return null

  return (
    <PageEditorialSection title="Guides worth reading before you enquire" variant="black">
      <p>
        Practical articles on cost, timelines, SEO and conversion, written for UK businesses.
      </p>
      <ul className="space-y-4">
        {posts.slice(0, 4).map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group inline-flex flex-col gap-1 transition-colors hover:underline"
            >
              <span className="text-lg font-medium text-white">{post.title}</span>
              <span className="text-sm text-white/65">{post.readingTime}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/guides"
        className="group inline-flex items-center gap-1.5 font-medium text-white transition-colors hover:underline"
      >
        browse all guides
        <ArrowUpRight
          className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </Link>
    </PageEditorialSection>
  )
}
