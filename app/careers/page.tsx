import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { PageCta } from "@/components/page-cta"
import { BrandBadge } from "@/components/brand-badge"
import type { Metadata } from "next"
import { absoluteUrl } from "@/lib/schema"
import { resolveTitle } from "@/lib/seo-metadata"

export const metadata: Metadata = {
  title: resolveTitle("Careers | Devora | Remote Web Development & Startup Design Jobs"),
  description: "Join the Devora team. We build high-performance web applications and brand identities for startups and growing brands across the UK.",
  alternates: { canonical: absoluteUrl("/careers") },
  robots: { index: true, follow: true },
}

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F1729]">
      <Header />
      <main className="flex-1">
        <PageHero
          badge="Careers"
          title={
            <>
              Join the <span className="heading-accent">Devora</span> team.
            </>
          }
          description="We're always looking for talented individuals passionate about helping businesses succeed online. Check back soon for opportunities."
        />

        <section className="section-cream section-shell-cream page-section">
          <div className="page-container">
            <div className="mx-auto max-w-2xl text-center">
              <BrandBadge variant="lime" className="mb-6">
                Open roles
              </BrandBadge>
              <h2 className="section-heading md:section-heading-tablet text-[#0F1729]">
                No vacancies <span className="heading-accent">currently</span>
              </h2>
              <p className="mt-6 text-base leading-8 text-[#0F1729]/60 md:text-lg">
                We don&apos;t have any open positions at the moment, but we&apos;re always interested in connecting with talented individuals. If you&apos;d like to be considered for future opportunities, please get in touch.
              </p>
              <Link href="/#contact" className="mt-8 inline-flex">
                <Button className="gap-2 rounded-full bg-[#0F1729] px-7 font-medium text-white hover:bg-[#162038] transition-colors">
                  Send us your details
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <PageCta
          title={
            <>
              Interested in working{" "}
              <span className="heading-accent after:bg-[#CCFF00]">with us</span>?
            </>
          }
          description="Send us a message and tell us about yourself. We will reach out when positions become available."
          linkLabel="get in touch"
        />
      </main>
      <Footer />
    </div>
  )
}
