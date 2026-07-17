import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { BrandBadge } from "@/components/brand-badge"

export function OurServices() {
  const services = [
    {
      title: "Web Design & Development",
      href: "/services/web-design",
      image: "/development.jpg",
    },
    {
      title: "Brand Creation & Development",
      href: "/services/branding",
      image: "/design-ux.jpg",
    },
    {
      title: "Next.js Development",
      href: "/services/nextjs-development",
      image: "/modern-office-collaboration.png",
    },
    {
      title: "Local SEO",
      href: "/services/local-seo",
      image: "/growth.jpg",
    },
    {
      title: "Conversion Refinement",
      href: "/services/website-redesign",
      image: "/mobile-apps.png",
    },
    {
      title: "Brand Systems",
      href: "/services/branding",
      image: "/startup-brand-systems.png",
    },
  ]

  return (
    <section
      id="services"
      className="border-b border-[var(--navy)]/8 bg-[#FAF8F4] mobile-safe-x page-section"
      aria-labelledby="services-list-heading"
    >
      <div className="page-container">
        <p className="mobile-section-label lg:hidden" aria-hidden="true">
          04 · Services
        </p>
        <div className="max-w-2xl">
          <BrandBadge variant="lime" className="mb-5 max-md:mb-4 md:mb-6">
            What we do
          </BrandBadge>
          <h2 id="services-list-heading" className="section-heading section-heading-mobile md:section-heading-tablet text-[#0F1729]">
            How we can <span className="heading-accent">help you</span>
          </h2>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              itemListElement: services.map((s, i) => ({
                "@type": "ListItem",
                position: i + 1,
                item: { "@type": "Service", name: s.title, url: `https://www.devora.co.uk${s.href}` },
              })),
            }),
          }}
        />

        {/* Mobile: compact list rows — distinct from project cards */}
        <ul className="mt-8 space-y-2 md:hidden">
          {services.map((service, index) => (
            <li key={service.title}>
              <Link
                href={service.href}
                className="group flex items-center gap-3.5 rounded-2xl border border-[#0F1729]/8 bg-white/70 p-3 backdrop-blur-sm transition-colors active:bg-white"
                aria-label={`Find out more about ${service.title}`}
              >
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-[#0F1729]">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    className="object-cover opacity-80"
                    sizes="56px"
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-base font-medium text-[#0F1729]">{service.title}</h3>
                  <span className="mt-0.5 inline-flex items-center gap-1 text-sm lowercase text-muted-navy-subtle group-hover:text-[#0F1729]">
                    find out more
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop: image cards grid */}
        <div className="mt-10 hidden grid-cols-1 gap-3 sm:grid-cols-2 md:grid lg:gap-4">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-[#0F1729]/8 bg-[#0F1729]"
              aria-label={`Find out more about ${service.title}`}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover opacity-75 transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-90"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1729]/85 via-[#0F1729]/25 to-transparent" />
              <div className="absolute left-4 top-4 text-xs font-bold uppercase tracking-[0.16em] text-white/60">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <h3 className="text-lg font-normal text-white md:text-xl">{service.title}</h3>
                <span className="mt-3 inline-flex min-h-11 items-center gap-1.5 text-base lowercase text-muted-light transition-colors group-hover:text-[#CCFF00]">
                  find out more
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
