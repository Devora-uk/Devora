import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { BrandBadge } from "@/components/brand-badge"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Thank You for Your Enquiry",
    description: "Thank you for contacting Devora. We've received your enquiry and will be in touch within 24 hours.",
    robots: {
        index: false,
        follow: false,
    },
}

export default function ThankYouPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#0F1729]">
            <Header />
            <main className="flex-1 section-cream section-shell-cream page-section">
                <div className="mx-auto max-w-2xl text-center">
                    <BrandBadge variant="lime" className="mb-6">
                        Message received
                    </BrandBadge>

                    <h1 className="section-heading md:section-heading-tablet text-[#0F1729]">
                        Thank you for getting in <span className="heading-accent">touch</span>.
                    </h1>

                    <p className="mt-6 text-base leading-8 text-[#0F1729]/60 md:text-lg">
                        We&apos;ve received your enquiry and appreciate you reaching out. Our team will review your request and get back to you within{" "}
                        <span className="font-medium text-[#0F1729]">24 hours</span>.
                    </p>

                    <div className="mt-10 rounded-xl border border-[#0F1729]/8 bg-white/60 p-6 text-left md:tablet-panel-inset lg:rounded-xl lg:border lg:border-[#0F1729]/8 lg:bg-white/60 lg:p-6">
                        <h2 className="text-base font-medium text-[#0F1729]">What happens next?</h2>
                        <ol className="mt-4 space-y-4">
                            {[
                                "We'll review your submission and prepare a tailored response",
                                "A member of our team will reach out via email",
                                "We'll schedule a call to discuss your project in detail",
                            ].map((step, i) => (
                                <li key={step} className="flex items-start gap-3 text-sm leading-6 text-[#0F1729]/60">
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0F1729]/8 text-xs font-medium text-[#0F1729]">
                                        {i + 1}
                                    </span>
                                    {step}
                                </li>
                            ))}
                        </ol>
                    </div>

                    <Link
                        href="/"
                        className="group mt-10 inline-flex items-center gap-1.5 rounded-full bg-[#0F1729] px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-[#162038]"
                    >
                        return to homepage
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                    </Link>

                    <p className="mt-8 text-sm text-[#0F1729]/45">
                        Have an urgent question? Email us at{" "}
                        <a href="mailto:hello@devora.co.uk" className="text-[#0F1729]/70 underline-offset-4 transition-colors hover:text-[#0F1729] hover:underline">
                            hello@devora.co.uk
                        </a>
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    )
}
