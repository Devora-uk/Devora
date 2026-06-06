const items = [
  "Web Design",
  "Next.js Development",
  "Branding",
  "Local SEO",
  "Conversion Optimisation",
  "Brand Strategy",
  "UI/UX Design",
  "Startup Websites",
  "Digital Identity",
  "Performance Builds",
]

interface MarqueeStripProps {
  theme?: "light" | "dark"
  className?: string
}

export function MarqueeStrip({ theme = "light", className = "" }: MarqueeStripProps) {
  const doubled = [...items, ...items]
  const isDark = theme === "dark"

  const stripBg = isDark ? "border-white/8 bg-[#0F1729]" : "border-[#0A0A0A]/8 bg-[#F0EBE3]"
  const fadeFrom = isDark ? "from-[#0F1729]" : "from-[#F0EBE3]"
  const pillClass = isDark
    ? "border-white/12 bg-white/6 text-white/90"
    : "border-[#0A0A0A]/10 bg-white text-[#0A0A0A]"

  return (
    <div
      className={`relative overflow-hidden border-t py-3.5 md:py-4 ${stripBg} ${className}`}
      aria-hidden="true"
    >
      <div
        className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r md:w-20 ${fadeFrom} to-transparent`}
        aria-hidden="true"
      />
      <div
        className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l md:w-20 ${fadeFrom} to-transparent`}
        aria-hidden="true"
      />

      <div
        className="flex animate-marquee gap-3 whitespace-nowrap"
        style={{ width: "max-content" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] ${pillClass}`}
          >
            <span className="h-1 w-1 rounded-full bg-[#CCFF00]" aria-hidden="true" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
