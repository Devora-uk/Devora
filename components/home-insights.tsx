import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { getAllPosts } from "@/lib/markdown"
import { featuredPostSlugs } from "@/lib/blog-clusters"

export function HomeInsights() {
  const postBySlug = new Map(getAllPosts().map((p) => [p.slug, p]))
  const posts = featuredPostSlugs
    .slice(0, 3)
    .map((slug) => postBySlug.get(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))

  if (posts.length === 0) return null

  return (
    <section
      className="bg-white px-4 py-20 md:px-6 md:py-28"
      aria-labelledby="insights-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-[#5C5C5C]">Insights</p>
            <h2
              id="insights-heading"
              className="text-4xl font-black leading-[0.93] tracking-[-0.04em] text-[#0A0A0A] md:text-5xl"
            >
              Practical guides for smarter websites.
            </h2>
          </div>
          <Link
            href="/guides"
            className="link-inline shrink-0 font-bold text-[#0A0A0A] hover:text-[#333]"
          >
            View all guides
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#0A0A0A]/8 bg-[#F5F5F3] transition-all hover:border-[#0A0A0A]/16 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-black leading-snug tracking-[-0.02em] text-[#0A0A0A] line-clamp-2 group-hover:text-[#333] transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-base leading-7 text-[#444] line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#5C5C5C] transition-all group-hover:gap-2.5 group-hover:text-[#0A0A0A]">
                    Read more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
