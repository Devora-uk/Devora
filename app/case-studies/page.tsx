import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Case Studies | Devora - Web Design & Development Portfolio",
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
    title: "Case Studies | Devora - Web Design & Development Portfolio",
    description: "Explore our portfolio of successful web design and development projects.",
    url: "https://www.devora.co.uk/case-studies",
    type: "website",
    images: [
      {
        url: "/devora-office.png",
        width: 1200,
        height: 630,
        alt: "Devora - Case Studies & Portfolio",
      },
    ],
  },
}

const allProjects = [
  {
    name: "The Teacher's Surgery",
    slug: "teachers-surgery",
    description:
      "A charitable community platform empowering educators and supporting families. Built with Next.js in one month at theteachersurgery.com, the full landing experience combines warm branding with video, podcast, and community sections, driving strong conversion and steady growth beyond 7,000 members.",
    image: "/case-studies/teachers-surgery-landing.png",
    tags: ["Next.js", "Charitable", "Community"],
  },
  {
    name: "Luma Education Recruitment",
    slug: "luma-education",
    description:
      "A specialist education recruitment platform connecting bright talent with bright futures. We created a modern, conversion-focused website featuring seamless HelloEduN CRM integration for real-time vacancy display and Google Jobs integration to maximise visibility. The platform showcases expertise across eight educational sectors, addressing the specific challenges that keep school leaders up at night whilst building trust with both schools and educators.",
    image: "/case-studies/luma-education.png",
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
    image: "/case-studies/sandalwood-memorials.png",
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
    <>
      <Header />
      <main className="min-h-screen flex flex-col">
        <section className="py-12 md:py-24 px-4 md:px-6 pt-32 md:pt-48 bg-gradient-to-br from-background via-background to-secondary/5">
          <div className="container mx-auto">
            <div className="mb-8 md:mb-16">
              <div className="inline-block bg-primary text-primary-foreground px-3 md:px-4 py-1 rounded-full text-xs font-semibold mb-3 md:mb-6">
                <span aria-hidden="true">★</span> OUR PORTFOLIO
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-balance max-w-2xl mb-4">
                <span className="font-serif italic font-normal">Case Studies</span>
              </h1>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl">
                Explore our complete portfolio of successful projects. From growing businesses to established brands, we've helped clients transform their digital presence with thoughtful design and powerful development.
              </p>
            </div>

            {/* Case Studies Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {allProjects.map((project, i) => (
                <Link
                  key={i}
                  href={`/case-studies/${project.slug}`}
                  aria-label={`View ${project.name} case study`}
                  className="group"
                >
                  <div
                    className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl h-full flex flex-col cursor-pointer"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-secondary/20 to-secondary/5">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={`${project.name} - Web design and development case study showcase`}
                        fill
                        className={`${project.slug === 'sky-limit-travels' || project.slug === 'teachers-surgery' ? 'object-cover object-top' : 'object-contain'} group-hover:scale-105 transition-transform duration-500`}
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <article className="p-6 flex flex-col h-full">
                      <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.name}</h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 flex-grow">{project.description}</p>
                      <div className="flex items-center text-primary font-medium gap-2 group-hover:gap-3 transition-all">
                        View Case Study
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </div>
                    </article>
                  </div>
                </Link>
              ))}
            </div>

            {/* Back to Home */}
            <div className="flex justify-center pt-8">
              <Link href="/#work" className="inline-block">
                <Button variant="outline" className="gap-2 min-h-[44px] touch-manipulation w-full sm:w-auto justify-center">
                  <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
