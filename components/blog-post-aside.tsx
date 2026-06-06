import Link from "next/link"
import { ArrowUpRight, BookOpen, MapPin, ScanSearch } from "lucide-react"
import {
  getClusterForSlug,
  getServiceLinksForPost,
  type BlogCategory,
} from "@/lib/blog-clusters"
import { getServicePage } from "@/lib/seo-pages"
import { BrandBadge } from "@/components/brand-badge"

type BlogPostAsideProps = {
  slug: string
  category?: BlogCategory
  relatedServiceSlugs?: string[]
}

export function BlogPostAside({
  slug,
  relatedServiceSlugs,
}: BlogPostAsideProps) {
  const cluster = getClusterForSlug(slug)
  const serviceLinks = getServiceLinksForPost(slug, relatedServiceSlugs)
  const servicesWithMeta = serviceLinks.map((link) => {
    const slugPart = link.href.replace("/services/", "")
    const page = getServicePage(slugPart)
    return page
      ? { href: link.href, title: page.title, description: `${page.intro.slice(0, 100)}…` }
      : { href: link.href, title: link.label, description: "" }
  })

  return (
    <aside className="space-y-5 md:sticky md:top-28 md:space-y-6" aria-label="Article resources">
      <div className="rounded-xl border border-[#0F1729]/8 bg-white/60 p-6">
        <BrandBadge variant="lime" className="mb-4">
          Free website review
        </BrandBadge>
        <h2 className="text-base font-medium text-[#0F1729] mb-2 leading-snug">
          Not sure where to start?
        </h2>
        <p className="text-sm text-[#0F1729]/55 leading-relaxed mb-5">
          Request a practical audit of your current site: structure, speed, SEO and conversion gaps.
        </p>
        <Link
          href="/#contact"
          className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0F1729] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#162038]"
        >
          <ScanSearch className="h-4 w-4" aria-hidden="true" />
          Request an audit
        </Link>
      </div>

      {servicesWithMeta.length > 0 && (
        <div className="rounded-xl border border-[#0F1729]/8 bg-white/40 p-6">
          <p className="text-xs font-medium uppercase tracking-wider text-[#0F1729]/45 mb-4">
            Related services
          </p>
          <ul className="space-y-4">
            {servicesWithMeta.map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F1729]/20 rounded-lg"
                >
                  <span className="font-medium text-[#0F1729] transition-colors group-hover:underline">
                    {service.title}
                  </span>
                  {service.description ? (
                    <span className="mt-1 block text-xs text-[#0F1729]/45 leading-relaxed">
                      {service.description}
                    </span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {cluster ? (
        <div className="rounded-xl border border-[#0F1729]/8 bg-white/60 p-6">
          <p className="text-xs font-medium uppercase tracking-wider text-[#0F1729]/45 mb-2 flex items-center gap-2">
            <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
            Topic guide
          </p>
          <h2 className="text-base font-medium text-[#0F1729] mb-2">{cluster.title}</h2>
          <p className="text-sm text-[#0F1729]/55 leading-relaxed mb-4">
            {cluster.description}
          </p>
          <Link
            href={`/guides#${cluster.id}`}
            className="group inline-flex items-center gap-1 text-sm lowercase text-[#0F1729]/55 transition-colors hover:text-[#0F1729] hover:underline underline-offset-4"
          >
            view all guides
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      ) : null}

      <div className="rounded-xl border border-dashed border-[#0F1729]/15 bg-white/30 p-6">
        <p className="text-xs font-medium uppercase tracking-wider text-[#0F1729]/45 mb-2 flex items-center gap-2">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          UK studio
        </p>
        <p className="text-sm text-[#0F1729]/55 leading-relaxed mb-4">
          Remote-first across the UK, with roots in Sheffield and South Yorkshire.
        </p>
        <Link
          href="/areas-we-cover/sheffield"
          className="text-sm font-medium text-[#0F1729] underline underline-offset-4 transition-colors hover:text-[#0F1729]/70"
        >
          Web design in Sheffield
        </Link>
      </div>
    </aside>
  )
}
