import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function About() {
  return (
    <section
      id="about"
      className="bg-black page-section text-white"
      aria-labelledby="about-heading"
    >
      <div className="page-container grid gap-10 md:grid-cols-2 md:items-start md:gap-14 lg:gap-24">
        <div>
          <h2
            id="about-heading"
            className="max-w-[18ch] text-balance text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.12] tracking-tight text-white md:max-w-[16ch]"
          >
            We exceed expectations because we care.
          </h2>

          <p className="mt-6 max-w-xl text-base font-medium leading-7 text-white md:mt-8 md:text-lg md:leading-8">
            Whether you&apos;re an early-stage startup or a growing business, we work to the
            very highest standards and specialise in building websites that earn trust and
            drive enquiries.
          </p>
          <p className="mt-5 max-w-xl text-base font-medium leading-7 text-white md:text-lg md:leading-8">
            Interested in starting a project? We&apos;re always happy to discuss your requirements.
          </p>
        </div>

        <div className="md:pt-1">
          <div className="rounded-2xl border border-white/12 p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/60">
              Get in touch
            </p>
            <p className="mt-4">
              <Link
                href="mailto:hello@devora.co.uk"
                className="text-xl font-medium text-white underline-offset-4 transition-colors hover:underline md:text-2xl"
              >
                hello@devora.co.uk
              </Link>
            </p>
            <p className="mt-3 text-base font-medium text-white/80">
              United Kingdom · Remote-first studio
            </p>
            <Link
              href="#contact"
              className="btn-touch group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 font-medium text-black transition-colors hover:bg-white/90 md:mt-8 md:w-auto"
            >
              start a conversation
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
