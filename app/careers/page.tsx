import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Careers - Devora | Remote Web Development & Startup Design Jobs",
  description: "Join the Devora team. We build high-performance web applications and brand identities for startups and growing brands across the UK.",
}

export default function CareersPage() {
  const openings = [
    {
      title: "Senior Full-Stack Developer",
      type: "Full-time",
      location: "Remote",
      description: "Build scalable web applications for businesses with a modern tech stack.",
    },
    {
      title: "UI/UX Designer",
      type: "Full-time",
      location: "Remote",
      description: "Create beautiful, accessible digital experiences for emerging brands.",
    },
    {
      title: "Project Manager",
      type: "Full-time",
      location: "Hybrid",
      description: "Lead projects from concept to launch, ensuring client satisfaction.",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="py-24 px-6 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Join the <span className="font-serif italic font-normal">Devora</span> team
            </h1>
            <p className="text-lg opacity-90">
              We're always looking for talented individuals passionate about helping businesses succeed online. Check back soon for opportunities.
            </p>
          </div>
        </section>

        {/* No Vacancies Message */}
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-card border border-border rounded-xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">No Vacancies Currently</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                We don't have any open positions at the moment, but we're always interested in connecting with talented individuals. If you'd like to be considered for future opportunities, please get in touch.
              </p>
              <Link href="/#contact">
                <Button className="gap-2">
                  Send us your details
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 bg-muted/50">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold mb-6">Interested in working with us?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Send us a message and tell us about yourself. We're always interested in connecting with talented individuals and will reach out when positions become available.
            </p>
            <Link href="/#contact">
              <Button size="lg" className="rounded-full gap-2">
                Get in touch
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
