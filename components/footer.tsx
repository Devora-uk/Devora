import Link from "next/link"

export function Footer() {
  const socials = [
    { href: "https://www.facebook.com/share/14UKFzshvcq/?mibextid=wwXIfr", label: "Facebook" },
    { href: "https://www.instagram.com/devoraltd?igsh=MTBvNGQxbmhrb28xaA==", label: "Instagram" },
    { href: "https://www.linkedin.com/company/devora-web-design-development/", label: "LinkedIn" },
    { href: "https://x.com/DevoraLtd38083", label: "X" },
  ]

  return (
    <footer
      className="bg-[#0b101b] border-t border-white/10 mobile-safe-x px-5 py-9 text-white max-md:pb-[max(2rem,env(safe-area-inset-bottom))] md:px-8 md:py-10 lg:px-10"
      role="contentinfo"
    >
      <div className="page-container">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-6 md:text-left">
          <div className="text-center md:text-left">
            <p className="text-xl font-semibold tracking-[-0.025em] md:text-lg">devora.</p>
            <p className="mt-2 text-sm leading-relaxed text-white/55 md:text-[0.95rem]">
              © {new Date().getFullYear()} Devora. All rights reserved.{" "}
              <Link href="/privacy" className="underline-offset-4 transition-colors hover:text-white hover:underline">
                Privacy
              </Link>
            </p>
          </div>

          <nav aria-label="Social media navigation">
            <ul className="grid grid-cols-2 gap-2 md:flex md:flex-wrap md:justify-end md:gap-5">
              {socials.map((social) => (
                <li key={social.label}>
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="me noopener noreferrer"
                    aria-label={`Follow Devora on ${social.label}`}
                    className="inline-flex min-h-11 w-full items-center justify-center rounded-lg px-4 text-sm text-white/70 transition-colors hover:text-[var(--lime)] md:w-auto md:rounded-none md:px-0 md:text-[0.95rem] hover:underline underline-offset-4"
                  >
                    {social.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
