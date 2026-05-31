import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Building2, Gauge, PenTool } from "lucide-react"
import { Button } from "@/components/ui/button"

export function About() {
  const points = [
    {
      icon: PenTool,
      title: "Brand-led web design",
      copy: "Distinctive layouts, crisp copy, and visual systems that make your business feel established from the first scroll.",
    },
    {
      icon: Gauge,
      title: "Performance-first builds",
      copy: "Next.js, clean architecture, fast pages, and SEO foundations that help startups compete and dominate search results.",
    },
    {
      icon: Building2,
      title: "Startup commercial instinct",
      copy: "We understand the gap between smart scaling, brand presentation, and earning customers in competitive markets.",
    },
  ]

  return (
    <section id="about" className="bg-card px-4 py-20 md:px-6 md:py-28" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-accent">Bespoke Web Design & Brand Development</p>
            <h2 id="about-heading" className="max-w-2xl text-4xl font-black leading-[0.98] tracking-[-0.045em] md:text-6xl">
              Bespoke design. High-performance development. Engineered to earn.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-foreground/76">
              Devora is a web design and development partner for startups that cannot afford to blend in. We turn early ideas, custom brand identities, and underperforming digital presences into premium web experiences, handled in-house from strategy to launch.
            </p>
            <Link href="#contact" aria-label="Get started with Devora web design services">
              <Button className="mt-8 rounded-full bg-foreground px-7 font-bold text-background hover:bg-accent" size="lg">
                Get a sharper website
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>

          <div>
            <div className="relative mb-5 overflow-hidden border border-black/20 shadow-sm">
              <Image
                src="/modern-office-collaboration.png"
                alt="Devora web design team collaborating on a premium website project"
                width={1000}
                height={720}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 grid grid-cols-3 border-t border-black/20 bg-card/95 backdrop-blur">
                {["Strategy", "Design", "Development"].map((label) => (
                  <div key={label} className="border-r border-black/15 px-4 py-4 text-sm font-black uppercase tracking-[0.14em] last:border-r-0">
                    {label}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-px overflow-hidden border border-black/15 bg-black/15 md:grid-cols-3">
              {points.map((point) => {
                const Icon = point.icon
                return (
                  <article key={point.title} className="bg-card p-6">
                    <Icon className="mb-7 h-6 w-6 text-accent" strokeWidth={1.75} aria-hidden="true" />
                    <h3 className="text-xl font-black tracking-[-0.02em]">{point.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-foreground/72">{point.copy}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
