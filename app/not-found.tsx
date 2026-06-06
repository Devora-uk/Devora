import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { BrandBadge } from "@/components/brand-badge"
import { resolveTitle } from "@/lib/seo-metadata"

export const metadata: Metadata = {
  title: resolveTitle("Page Not Found | Devora"),
  description: "The page you requested could not be found on devora.co.uk.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F1729]">
      <Header />
      <main className="flex-1">
        <PageHero
          badge="404"
          title={
            <>
              This page is not where it should{" "}
              <span className="heading-accent">be</span>.
            </>
          }
          description="The page may have moved, or the URL may be wrong. These links will get you back to the main website routes."
        />

        <section className="section-cream section-shell-cream page-section">
          <div className="page-container text-center">
            <BrandBadge variant="lime" className="mb-8">Quick links</BrandBadge>
            <div className="mx-auto grid max-w-xl gap-2 sm:grid-cols-2">
              {[
                ["Services", "/services"],
                ["UK web design", "/areas-we-cover"],
                ["Case studies", "/case-studies"],
                ["Guides", "/guides"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-xl border border-[#0F1729]/8 bg-white/60 px-6 py-4 text-sm font-medium text-[#0F1729] transition-colors hover:border-[#0F1729]/15 hover:bg-white"
                >
                  {label}
                </Link>
              ))}
            </div>
            <Link
              href="/#contact"
              className="group mt-10 inline-flex items-center gap-1.5 text-sm lowercase text-[#0F1729] underline-offset-4 transition-colors hover:underline"
            >
              discuss your website
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
