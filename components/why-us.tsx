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
    <section id="why-us" className="bg-foreground px-4 py-20 text-background md:px-6 md:py-28" aria-labelledby="difference-heading">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-background/55">The difference</p>
            <h2 id="difference-heading" className="text-4xl font-black leading-none tracking-[-0.045em] md:text-6xl">
              Your site should not whisper.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-background/82">
            A startup-focused web development studio should bring more than just code. We bring taste, urgency, market validation, and the technical judgment to make ambitious ideas feel effortless online.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-white/15 bg-white/15 md:grid-cols-2">
          <div className="bg-foreground p-5 md:p-8">
            <div className="mb-8 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15">
                <X className="h-5 w-5 text-background/45" aria-hidden="true" />
              </span>
              <h3 className="text-2xl font-black tracking-[-0.02em]">What to avoid</h3>
            </div>
            <div className="space-y-px overflow-hidden border border-white/10 bg-white/10">
              {comparisons.map((item) => (
                <div key={item.tired} className="flex gap-4 bg-foreground p-5">
                  <X className="mt-1 h-5 w-5 shrink-0 text-background/55" aria-hidden="true" />
                  <p className="text-sm leading-6 text-background/82">{item.tired}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-5 text-foreground md:p-8">
            <div className="mb-8 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white">
                <Check className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-2xl font-black tracking-[-0.02em]">What Devora brings</h3>
            </div>
            <div className="space-y-px overflow-hidden border border-black/10 bg-black/10">
              {comparisons.map((item) => (
                <div key={item.devora} className="flex gap-4 bg-white p-5">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <p className="text-sm font-semibold leading-6 text-foreground">{item.devora}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
