import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { SeoPage } from "@/lib/seo-pages"
import { PageEditorialSection } from "@/components/page-editorial-section"
import { ServiceFurtherReading } from "@/components/service-further-reading"

type RelatedLink = {
  href: string
  label: string
  title: string
}

type SeoPageContentProps = {
  page: SeoPage
  relatedLinks?: RelatedLink[]
  showFurtherReading?: boolean
}

export function SeoPageContent({
  page,
  relatedLinks = [],
  showFurtherReading = false,
}: SeoPageContentProps) {
  return (
    <>
      <PageEditorialSection title="Who this is for" variant="cream">
        <ul className="space-y-3">
          {page.audience.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--navy)]" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </PageEditorialSection>

      <PageEditorialSection title="What is included" variant="black">
        <ul className="space-y-3">
          {page.included.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </PageEditorialSection>

      <PageEditorialSection title="Built for search, trust and enquiries" variant="cream">
        {page.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p>
          Explore{" "}
          <Link href="/areas-we-cover" className="underline underline-offset-4">
            our coverage across the UK
          </Link>
          ,{" "}
          <Link href="/case-studies" className="underline underline-offset-4">
            case studies
          </Link>{" "}
          and{" "}
          <Link href="/guides" className="underline underline-offset-4">
            website strategy guides
          </Link>
          .
        </p>
      </PageEditorialSection>

      <PageEditorialSection title="Why Devora" variant="black">
        {page.why.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </PageEditorialSection>

      <PageEditorialSection title="How we work" variant="cream">
        <ol className="space-y-4">
          {page.process.map((item, index) => (
            <li key={item} className="flex gap-4">
              <span className="text-sm font-bold tabular-nums text-[var(--navy)]/40">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      </PageEditorialSection>

      {relatedLinks.length > 0 && (
        <PageEditorialSection title="Useful next pages" variant="black">
          <ul className="space-y-4">
            {relatedLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group inline-flex flex-col gap-1 transition-colors hover:underline"
                >
                  <span className="text-sm font-semibold uppercase tracking-[0.14em] text-white/50">
                    {link.label}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-lg font-medium text-white">
                    {link.title}
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </PageEditorialSection>
      )}

      {showFurtherReading && <ServiceFurtherReading serviceSlug={page.slug} />}

      <PageEditorialSection title="Questions buyers ask" variant="cream" id="faqs">
        <div className="space-y-6">
          {page.faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="text-lg font-bold tracking-tight text-[var(--navy)]">
                {faq.question}
              </h3>
              <p className="mt-3">{faq.answer}</p>
            </div>
          ))}
        </div>
      </PageEditorialSection>
    </>
  )
}
