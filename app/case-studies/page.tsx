import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BrandBadge } from "@/components/brand-badge"
import { PageHero } from "@/components/page-hero"
import { PageCta } from "@/components/page-cta"
import type { Metadata } from "next"
import { resolveTitle } from "@/lib/seo-metadata"

export const metadata: Metadata = {
  title: resolveTitle("Case Studies | Devora | Web Design & Development Portfolio"),
  description: "Explore our portfolio of successful web design and development projects. See how we've transformed businesses with bespoke websites, custom platforms, and digital solutions.",
  keywords: [
    "case studies",
    "web design portfolio",
    "web development examples",
    "business website projects",
    "digital transformation",
    "successful web projects",
  ],
  alternates: {
    canonical: "https://www.devora.co.uk/case-studies",
  },
  openGraph: {
    title: "Case Studies | Devora | Web Design & Development Portfolio",
    description: "Explore our portfolio of successful web design and development projects.",
    url: "https://www.devora.co.uk/case-studies",
    type: "website",
    images: [
      {
        url: "/devora-office.png",
        width: 1200,
        height: 630,
        alt: "Devora | Case Studies & Portfolio",
      },
    ],
  },
}

const allProjects = [
  {
    name: "AHRK Property Maintenance",
    slug: "ahrk-property-maintenance",
    description:
      "A conversion-focused property maintenance platform for landlords, letting agents, managing agents and developers across North London and Hertfordshire. Built with Next.js in three weeks, the site features a multi-step enquiry form, clear service pathways for reactive repairs and planned maintenance, and proof points that helped AHRK win bids and secure maintenance contracts.",
    image: "/case-studies/ahrk-property-maintenance-thumb.png",
    tags: ["Next.js", "Property Services", "Conversion"],
  },
  {
    name: "Sarah Bartlet Optimal Health",
    slug: "sarah-bartlet-optimal-health",
    description:
      "A calming nutritional therapy website for a qualified practitioner in Aberdeenshire. We created a warm, trust-building digital home with clear consultation pathways, specialist messaging for autoimmune and allergy support, and WhatsApp contact — helping visitors feel reassured and book a free consultation with confidence.",
    image: "/case-studies/sarah-bartlet-optimal-health.png",
    tags: ["Health & Wellbeing", "Web Design", "Conversion"],
  },
  {
    name: "Kickin Kilos",
    slug: "kickin-kilos",
    description:
      "A conversion-focused weight loss coaching website built on lived experience. We created an authentic digital home featuring an interactive before-and-after transformation slider, health marker proof, a food-first plate system, and clear coaching call pathways — helping visitors who want sustainable results book with confidence.",
    image: "/case-studies/kickin-kilos.png",
    tags: ["Health & Wellbeing", "Web Design", "Conversion"],
  },
  {
    name: "The Teacher's Surgery",
    slug: "teachers-surgery",
    description:
      "A charitable community platform empowering educators and supporting families. Built with Next.js in one month at theteachersurgery.com, the full landing experience combines warm branding with video, podcast, and community sections, driving strong conversion and steady growth beyond 7,000 members.",
    image: "/case-studies/teachers-surgery-thumb.png",
    tags: ["Next.js", "Charitable", "Community"],
  },
  {
    name: "Luma Education Recruitment",
    slug: "luma-education",
    description:
      "A specialist education recruitment platform connecting bright talent with bright futures. We created a modern, conversion-focused website featuring seamless HelloEduN CRM integration for real-time vacancy display and Google Jobs integration to maximise visibility. The platform showcases expertise across eight educational sectors, addressing the specific challenges that keep school leaders up at night whilst building trust with both schools and educators.",
    image: "/case-studies/luma-education-thumb.png",
    tags: ["Recruitment Platform", "Web Design"],
  },
  {
    name: "EnviroTech Emergency Plumbing",
    slug: "envirotech-plumbing",
    description:
      "A 24/7 emergency plumbing service platform featuring real-time booking and instant quote functionality. We designed a user-friendly interface that enables customers to book emergency services quickly and receive transparent pricing instantly.",
    image: "/case-studies/envirotech-plumbing.png",
    tags: ["Booking Platform", "Web App", "UI/UX"],
  },
  {
    name: "NL Education",
    slug: "nl-education",
    description:
      "A leading teacher recruitment platform connecting qualified educators with top-rated schools across England. We built a comprehensive platform that streamlines the hiring process for both teachers and schools with advanced matching algorithms and intuitive dashboards.",
    image: "/case-studies/nl-education.png",
    tags: ["Recruitment Platform", "Web App", "Development"],
  },
  {
    name: "LR Talent",
    slug: "lr-talent",
    description:
      "A recruitment platform for HR and executive support professionals. We developed a complete brand identity including logo design, plus a professional website with dedicated sections for candidates and employers, enabling streamlined talent matching and relationship-driven recruitment.",
    image: "/case-studies/lr-talent.png",
    tags: ["Business Website", "Brand Development", "Recruitment"],
  },
  {
    name: "Rectify International",
    slug: "rectify",
    description:
      "An energy recruitment and consultancy specialist's digital platform showcasing expertise in sourcing talent for the energy sector. We created a professional showcase highlighting their services, successful placements, and industry expertise.",
    image: "/case-studies/rectify.png",
    tags: ["Recruitment", "Portfolio", "Web Design"],
  },
  {
    name: "Sandalwood Memorials",
    slug: "sandalwood-memorials",
    description:
      "Hybrid headless platform combining Next.js for speed and SSR, WordPress/WooCommerce for product management, Three.js for 3D memorial rendering, and GraphQL for seamless data flow. A compassionate, performant storefront that gives the sales team full control.",
    image: "/case-studies/sandalwood-memorials-thumb.png",
    tags: ["Headless Commerce", "Three.js", "GraphQL"],
  },
  {
    name: "Sandalwood Memories",
    slug: "sandalwood-memories",
    description:
      "An innovative digital memorial platform that helps families preserve and share precious memories of loved ones. We created a compassionate, secure space where families can honour memories and connect during their most difficult moments.",
    image: "/case-studies/sandalwood-memories.png",
    tags: ["Platform", "Community", "Development"],
  },
  {
    name: "HV Direct",
    slug: "hv-direct",
    description:
      "A high-voltage electrical connections provider's digital platform showcasing their expertise in delivering reliable electrical solutions to residential, commercial, and industrial sectors. We built a professional showcase that highlights their technical capabilities and project portfolio.",
    image: "/case-studies/hv-direct.png",
    tags: ["Portfolio", "Web Design", "B2B Platform"],
  },
  {
    name: "Resilience Fitness Wellbeing",
    slug: "rfw",
    description:
      "A health and wellbeing consultancy platform for a leading fitness and wellness professional. We built a modern, professional website showcasing expertise in workplace health coaching and personal fitness consulting with service details and booking capabilities.",
    image: "/case-studies/rfw.png",
    tags: ["Services", "Professional Portfolio", "Web Design"],
  },
  {
    name: "Slush Dating",
    slug: "slush-dating",
    description:
      "A revolutionary video dating platform connecting singles through meaningful video conversations. Our development focused on creating an engaging, safe environment that encourages authentic connections through innovative video interaction features.",
    image: "/case-studies/slush-dating.png",
    tags: ["Mobile App", "Marketplace", "Development"],
  },
  {
    name: "Sky Limit Travels",
    slug: "sky-limit-travels",
    description:
      "A comprehensive travel booking platform offering flight search, popular destinations, and personalised travel recommendations. We built a feature-rich platform that simplifies holiday planning and inspires wanderlust with curated travel experiences.",
    image: "/case-studies/sky-limit-travels.png",
    tags: ["Booking Platform", "Web App", "Development"],
  },
]

export default function AllCaseStudiesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F1729]">
      <Header />
      <main className="flex-1">
        <PageHero
          badge="Our portfolio"
          title={
            <>
              Work that{" "}
              <span className="heading-accent">speaks</span> for itself.
            </>
          }
          description="From early-stage startups to established brands, we've helped clients across the UK transform their digital presence with bespoke design and powerful development."
        />

        <section className="section-cream section-shell-cream page-section">
          <div className="page-container">
            <BrandBadge variant="lime" className="mb-6">
              Selected work
            </BrandBadge>
            <h2 className="section-heading md:section-heading-tablet text-[#0F1729]">
              All <span className="heading-accent">projects</span>
            </h2>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {allProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/case-studies/${project.slug}`}
                  aria-label={`View ${project.name} case study`}
                  className="group"
                >
                  <div className="flex h-full flex-col overflow-hidden rounded-xl border border-[#0F1729]/8 bg-white/60 transition-all hover:border-[#0F1729]/15 hover:bg-white">
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#F4F4F2]">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={`${project.name} case study`}
                        fill
                        className={`${project.slug === "sky-limit-travels" || project.slug === "teachers-surgery" || project.slug === "sarah-bartlet-optimal-health" || project.slug === "kickin-kilos" || project.slug === "ahrk-property-maintenance" || project.slug === "sandalwood-memorials" ? "object-cover object-top" : project.slug === "luma-education" ? "object-cover object-center" : "object-contain"} transition-transform duration-500 group-hover:scale-[1.02]`}
                        quality={100}
                        unoptimized={project.slug === "sarah-bartlet-optimal-health" || project.slug === "luma-education" || project.slug === "kickin-kilos" || project.slug === "ahrk-property-maintenance" || project.slug === "sandalwood-memorials" || project.slug === "teachers-surgery"}
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <article className="flex flex-1 flex-col p-5">
                      <div className="mb-3 flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span key={tag} className="rounded-full bg-[#0F1729]/6 px-2.5 py-0.5 text-xs font-medium text-[#0F1729]/55">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-base font-medium tracking-[-0.02em] text-[#0F1729] md:text-lg">{project.name}</h3>
                      <p className="mt-2 flex-1 text-sm leading-6 text-[#0F1729]/55 line-clamp-3">{project.description}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm lowercase text-[#0F1729]/55 transition-colors group-hover:text-[#0F1729]">
                        view case study
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                      </span>
                    </article>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <PageCta
          title={
            <>
              Want results like{" "}
              <span className="heading-accent after:bg-[#CCFF00]">these</span>?
            </>
          }
          description="Tell us about your business and we will outline how a bespoke website could work for you."
          linkLabel="start a project"
        />
      </main>
      <Footer />
    </div>
  )
}
