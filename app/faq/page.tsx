import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FAQ } from "@/components/faq"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions",
  description: "Find answers to common questions about our web design and development process, startup branding and custom development, technologies, and how we build websites for businesses across the UK.",
  openGraph: {
    title: "FAQ - Frequently Asked Questions | Devora",
    description: "Find answers to common questions about our startup web design and development process, services, and website builds.",
  },
}

export default function FAQPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <section className="pt-12 md:pt-16 pb-8 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about working with Devora
            </p>
          </div>
        </section>
        <FAQ />
      </div>
      <Footer />
    </main>
  )
}
