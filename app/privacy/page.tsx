import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { BrandBadge } from "@/components/brand-badge"
import type { Metadata } from "next"
import { absoluteUrl } from "@/lib/schema"
import { resolveTitle } from "@/lib/seo-metadata"

export const metadata: Metadata = {
  title: resolveTitle("Privacy Policy | Devora"),
  description: "Our privacy policy and commitment to protecting your data",
  alternates: { canonical: absoluteUrl("/privacy") },
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F1729]">
      <Header />
      <main className="flex-1">
        <PageHero
          badge="Legal"
          title="Privacy Policy"
          description="How we collect, use and protect your information when you visit our website or get in touch."
        />

        <section className="section-cream section-shell-cream page-section">
          <div className="mx-auto max-w-3xl">
            <BrandBadge variant="lime" className="mb-8">Your data</BrandBadge>

            <div className="space-y-10 text-base leading-8 text-[#0F1729]/65">
              <div>
                <h2 className="section-heading mb-4 text-[#0F1729]">1. Introduction</h2>
                <p>
                  At Devora, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                  information when you visit our website.
                </p>
              </div>

              <div>
                <h2 className="section-heading mb-4 text-[#0F1729]">2. Information We Collect</h2>
                <p className="mb-4">We may collect information about you in a variety of ways. The information we may collect on the site includes:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Your name, email address, and phone number when you contact us</li>
                  <li>Information about your company and project requirements</li>
                  <li>Technical information about your device and browsing activity</li>
                </ul>
              </div>

              <div>
                <h2 className="section-heading mb-4 text-[#0F1729]">3. Use of Your Information</h2>
                <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customised experience. Specifically, we may use information collected about you via the site to:</p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Respond to your enquiries and provide customer service</li>
                  <li>Send marketing and promotional emails</li>
                  <li>Generate a personal profile about you so that future visits to our site will be personalised</li>
                  <li>Improve our website and services</li>
                </ul>
              </div>

              <div>
                <h2 className="section-heading mb-4 text-[#0F1729]">4. Disclosure of Your Information</h2>
                <p>
                  We do not sell, trade, or rent your personal identification information to third parties. We may disclose generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners and trusted affiliates for the purposes outlined above.
                </p>
              </div>

              <div>
                <h2 className="section-heading mb-4 text-[#0F1729]">5. Security of Your Information</h2>
                <p>
                  We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorised access, alteration, disclosure, or destruction of your personal information.
                </p>
              </div>

              <div>
                <h2 className="section-heading mb-4 text-[#0F1729]">6. Contact Us</h2>
                <p>
                  If you have questions or concerns regarding this Privacy Policy, please contact us at hello@devora.co.uk or visit our contact page.
                </p>
              </div>

              <div className="border-t border-[#0F1729]/10 pt-8">
                <p className="text-sm text-[#0F1729]/45">Last updated: {new Date().toLocaleDateString("en-GB")}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
