import { Check, X } from "lucide-react"

export function WhyUs() {
  const comparisons = [
    {
      tired: "Template pages with the same hero, same cards, same vague claims.",
      devora: "A custom visual position that gives your business a recognisable point of view.",
    },
    {
      tired: "A pretty mockup that falls apart when it has to load quickly and rank locally.",
      devora: "Design, copy, SEO structure, performance, and conversion thinking moving together.",
    },
    {
      tired: "Outsourced production, hidden costs, and unclear ownership.",
      devora: "Clear scope, plain English, in-house delivery, and support that continues after launch.",
    },
    {
      tired: "A website that looks finished but does not make people act.",
      devora: "Pages shaped around proof, frictionless enquiry, and the next commercial step.",
    },
  ]

  return (
    <section
      id="why-us"
      className="bg-[#F5F5F3] px-4 py-20 md:px-6 md:py-28"
      aria-labelledby="difference-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-[#5C5C5C]">The difference</p>
            <h2
              id="difference-heading"
              className="text-4xl font-black leading-[0.92] tracking-[-0.04em] text-[#0A0A0A] md:text-6xl"
            >
              Your site should not{" "}
              <span className="relative inline-block whitespace-nowrap">
                whisper.
                <span className="absolute -bottom-1 left-0 h-[5px] w-full rounded-full bg-[#CCFF00]" aria-hidden="true" />
              </span>
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#3D3D3D]">
            A startup-focused web studio should bring more than just code. We bring taste, urgency, market validation, and the technical judgment to make ambitious ideas feel effortless online.
          </p>
        </div>

        {/* Comparison table */}
        <div className="mt-14 divide-y divide-[#0A0A0A]/8 border-y border-[#0A0A0A]/8">
          {comparisons.map((item) => (
            <div
              key={item.tired}
              className="grid gap-4 py-7 md:grid-cols-2 md:gap-12"
            >
              <div className="flex gap-4">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0A0A0A]/8">
                  <X className="h-3 w-3 text-[#888]" aria-hidden="true" />
                </div>
                <p className="text-base leading-7 text-[#5C5C5C]">{item.tired}</p>
              </div>
              <div className="flex gap-4 md:border-l md:border-[#0A0A0A]/8 md:pl-12">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#CCFF00]">
                  <Check className="h-3 w-3 text-[#0A0A0A]" aria-hidden="true" />
                </div>
                <p className="text-base font-semibold leading-7 text-[#0A0A0A]">{item.devora}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-[#5C5C5C]">
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#CCC]" aria-hidden="true" />
            What to avoid
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#CCFF00]" aria-hidden="true" />
            What Devora brings
          </span>
        </div>
      </div>
    </section>
  )
}
