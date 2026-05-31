import Link from "next/link"
import { ArrowRight, BookOpen, MapPin, ScanSearch } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  getClusterForSlug,
  getServiceLinksForPost,
  type BlogCategory,
} from "@/lib/blog-clusters"
import { getServicePage } from "@/lib/seo-pages"

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
    <aside className="space-y-8 lg:sticky lg:top-28" aria-label="Article resources">
      <div className="border border-border bg-card p-6 rounded-2xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
          Free website review
        </p>
        <h2 className="text-lg font-semibold text-foreground mb-2 leading-snug">
          Not sure where to start?
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          Request a practical audit of your current site: structure, speed, SEO and conversion gaps.
        </p>
        <Link href="/#contact" className="block">
          <Button className="w-full rounded-full gap-2 font-medium" size="sm">
            <ScanSearch className="h-4 w-4" aria-hidden="true" />
            Request an audit
          </Button>
        </Link>
      </div>

      {servicesWithMeta.length > 0 && (
        <div className="border border-border bg-muted/30 p-6 rounded-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            Related services
          </p>
          <ul className="space-y-4">
            {servicesWithMeta.map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
                >
                  <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </span>
                  {service.description ? (
                    <span className="mt-1 block text-xs text-muted-foreground leading-relaxed">
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
        <div className="border border-border bg-card p-6 rounded-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-2">
            <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
            Topic guide
          </p>
          <h2 className="text-base font-semibold text-foreground mb-2">{cluster.title}</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {cluster.description}
          </p>
          <Link
            href={`/guides#${cluster.id}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline underline-offset-4"
          >
            View all guides
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      ) : null}

      <div className="border border-dashed border-border/80 p-6 rounded-2xl bg-gradient-to-br from-secondary/5 to-transparent">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-2">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          Sheffield studio
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Based in Sheffield, working with businesses across South Yorkshire and the UK.
        </p>
        <Link
          href="/areas-we-cover/sheffield"
          className="text-sm font-medium text-foreground hover:text-primary underline underline-offset-4 transition-colors"
        >
          Web design in Sheffield
        </Link>
      </div>
    </aside>
  )
}
