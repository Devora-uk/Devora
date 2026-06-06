import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { JsonLd } from "@/components/JsonLd"
import { BrandBadge } from "@/components/brand-badge"
import { PageHero } from "@/components/page-hero"
import { PageCta } from "@/components/page-cta"
import { getIndustryPage, getServicePage, servicePages, SITE_URL } from "@/lib/seo-pages"
import { ServiceFurtherReading } from "@/components/service-further-reading"
import { absoluteUrl, breadcrumbSchema, faqSchema, graphSchema, serviceSchema, webPageSchema } from "@/lib/schema"

type ServicePageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const page = getServicePage(slug)

  if (!page) return { title: "Service Not Found" }

  const path = `/services/${page.slug}`

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      title: `${page.metaTitle} | Devora`,
      description: page.metaDescription,
      url: absoluteUrl(path),
      type: "website",
      locale: "en_GB",
      images: [{ url: "/devora-office.png", width: 1200, height: 630, alt: `${page.title} by Devora` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.metaTitle} | Devora`,
      description: page.metaDescription,
      images: ["/devora-office.png"],
    },
    robots: { index: true, follow: true },
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const page = getServicePage(slug)

  if (!page) notFound()

  const path = `/services/${page.slug}`
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: page.title, href: path },
  ]

  const relatedServices = (page.relatedServices || [])
    .map((relatedSlug) => getServicePage(relatedSlug))
    .filter(Boolean)

  const relatedIndustries = (page.relatedIndustries || [])
    .map((relatedSlug) => getIndustryPage(relatedSlug))
    .filter(Boolean)

  return (
    <div className="min-h-screen flex flex-col bg-[#0F1729]">
      <Header />
      <main className="flex-1">
        <PageHero
          breadcrumbs={breadcrumbs}
          badge="Devora service"
          title={page.h1}
          aside={page.intro}
          actions={
            <>
              <Link href="/#contact">
                <Button size="lg" className="w-full rounded-full bg-[#0F1729] px-7 font-medium text-white hover:bg-[#162038] transition-colors sm:w-auto">
                  Request a free website audit
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="w-full rounded-full border-[#0F1729]/20 bg-transparent px-7 font-medium text-[#0F1729] hover:border-[#0F1729]/40 transition-all sm:w-auto">
                  View case studies
                </Button>
              </Link>
            </>
          }
        />

        <section className="section-cream section-shell-cream page-section">
          <div className="page-container page-grid-aside gap-10 md:gap-12">
            <div>
              <BrandBadge variant="lime" className="mb-6">Commercial fit</BrandBadge>
              <h2 className="section-heading md:section-heading-tablet text-[#0F1729]">Who this is <span className="heading-accent">for</span></h2>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {page.audience.map((item) => (
                <div key={item} className="rounded-xl border border-[#0F1729]/8 bg-white/60 p-5">
                  <CheckCircle2 className="mb-4 h-4 w-4 text-[#0F1729]/35" aria-hidden="true" />
                  <p className="font-medium text-[#0F1729]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-dark section-shell-dark page-section">
          <div className="page-container page-grid-3 gap-8 md:gap-10">
            <div>
              <h2 className="section-heading md:section-heading-tablet text-white">What is included</h2>
              <ul className="mt-8 space-y-3">
                {page.included.map((item) => (
                  <li key={item} className="border-b border-white/10 pb-3 text-sm text-white/60">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="section-heading md:section-heading-tablet text-white">Why Devora</h2>
              <ul className="mt-8 space-y-3">
                {page.why.map((item) => (
                  <li key={item} className="border-b border-white/10 pb-3 text-sm text-white/60">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="section-heading md:section-heading-tablet text-white">Process</h2>
              <ol className="mt-8 space-y-3">
                {page.process.map((item, index) => (
                  <li key={item} className="border-b border-white/10 pb-3 text-sm text-white/60">
                    <span className="mr-3 text-white/30">0{index + 1}</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="section-cream section-shell-cream page-section">
          <div className="page-container page-grid-aside gap-10">
            <div>
              <BrandBadge variant="lime" className="mb-6">Buyer context</BrandBadge>
              <h2 className="section-heading md:section-heading-tablet text-[#0F1729]">Built for search, trust and <span className="heading-accent">enquiries</span>.</h2>
            </div>
            <div className="space-y-6 text-base leading-8 text-[#0F1729]/60 md:text-lg">
              {page.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>
                Related routes are part of the SEO structure too. Explore{" "}
                <Link href="/areas-we-cover/sheffield" className="font-medium text-[#0F1729] underline underline-offset-4">web design in Sheffield</Link>,{" "}
                <Link href="/case-studies" className="font-medium text-[#0F1729] underline underline-offset-4">case studies</Link> and{" "}
                <Link href="/guides" className="font-medium text-[#0F1729] underline underline-offset-4">website strategy guides</Link>.
              </p>
            </div>
          </div>
        </section>

        <section className="section-dark section-shell-dark page-section">
          <div className="page-container">
            <div className="page-grid-aside gap-10">
              <div>
                <BrandBadge variant="navy" className="mb-6 border-white/10 bg-white/8 text-white">Internal links</BrandBadge>
                <h2 className="section-heading md:section-heading-tablet text-white">Useful next <span className="heading-accent after:bg-[#CCFF00]">pages</span>.</h2>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {relatedServices.map((related) => related && (
                  <Link key={related.slug} href={`/services/${related.slug}`} className="group rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-white/20 hover:bg-white/8">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">Related service</p>
                    <h3 className="mt-3 text-lg font-medium text-white">{related.title}</h3>
                  </Link>
                ))}
                {relatedIndustries.map((related) => related && (
                  <Link key={related.slug} href={`/industries/${related.slug}`} className="group rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-white/20 hover:bg-white/8">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">Industry page</p>
                    <h3 className="mt-3 text-lg font-medium text-white">{related.title}</h3>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ServiceFurtherReading serviceSlug={page.slug} />

        <section className="section-cream section-shell-cream page-section">
          <div className="page-container page-grid-aside gap-10">
            <div>
              <BrandBadge variant="lime" className="mb-6">FAQs</BrandBadge>
              <h2 className="section-heading md:section-heading-tablet text-[#0F1729]">Questions buyers <span className="heading-accent">ask</span>.</h2>
            </div>
            <div className="space-y-3">
              {page.faqs.map((faq) => (
                <details key={faq.question} className="group rounded-xl border border-[#0F1729]/8 bg-white/60 p-6">
                  <summary className="cursor-pointer text-base font-medium tracking-[-0.02em] text-[#0F1729]">{faq.question}</summary>
                  <p className="mt-4 leading-7 text-[#0F1729]/60">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <PageCta
          title={<>Want a website built <span className="heading-accent after:bg-[#CCFF00]">properly</span>?</>}
          description="Send over the current site, the business goal and the pages you think matter. We will tell you where the strongest SEO and conversion gains are likely to be."
          linkLabel="get a website quote"
        />
      </main>
      <JsonLd
        data={graphSchema([
          webPageSchema({ path, name: page.h1, description: page.metaDescription }),
          serviceSchema({ path, name: page.title, description: page.intro }),
          faqSchema(page.faqs, path),
          breadcrumbSchema(breadcrumbs.map((item) => ({ name: item.name, url: `${SITE_URL}${item.href === "/" ? "" : item.href}` }))),
        ])}
      />
      <Footer />
    </div>
  )
}
