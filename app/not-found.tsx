import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background px-4 pb-20 pt-32 md:px-6 md:pt-44">
        <section className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-accent">404</p>
          <h1 className="text-5xl font-black leading-[0.94] tracking-[-0.055em] md:text-7xl">
            This page is not where it should be.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            The page may have moved, or the URL may be wrong. These links will get you back to the main website routes.
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Services", "/services"],
              ["UK web design", "/areas-we-cover"],
              ["Case studies", "/case-studies"],
              ["Blog", "/blog"],
            ].map(([label, href]) => (
              <Link key={href} href={href}>
                <Button variant="outline" className="h-12 w-full rounded-full font-bold">
                  {label}
                </Button>
              </Link>
            ))}
          </div>
          <Link href="/#contact" className="mt-8 inline-flex">
            <Button size="lg" className="rounded-full bg-foreground px-7 font-bold text-background hover:bg-accent">
              Discuss your website
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}
