import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-background px-6 py-14 text-foreground" role="contentinfo">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/devora-bw.png" alt="Devora logo" width={36} height={36} className="h-9 w-9" />
              <span className="text-xl font-black tracking-[-0.03em]">Devora</span>
            </div>
            <p className="max-w-xs text-sm leading-6 text-muted-foreground"><strong>Bespoke web design and development studio</strong> building fast, conversion-led websites and brand identities for startups and growing brands across the UK.</p>
          </div>

          <nav aria-label="Services navigation">
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>
                <Link href="/services/web-design" className="inline-flex items-center min-h-[44px] py-2 hover:opacity-100 transition-opacity touch-manipulation">
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="inline-flex items-center min-h-[44px] py-2 hover:opacity-100 transition-opacity touch-manipulation">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/branding" className="inline-flex items-center min-h-[44px] py-2 hover:opacity-100 transition-opacity touch-manipulation">
                  Branding
                </Link>
              </li>
              <li>
                <Link href="/services/local-seo" className="inline-flex items-center min-h-[44px] py-2 hover:opacity-100 transition-opacity touch-manipulation">
                  Local SEO
                </Link>
              </li>
              <li>
                <Link href="/areas-we-cover" className="inline-flex items-center min-h-[44px] py-2 hover:opacity-100 transition-opacity touch-manipulation">
                  Areas We Cover
                </Link>
              </li>
              <li>
                <Link href="/industries" className="inline-flex items-center min-h-[44px] py-2 hover:opacity-100 transition-opacity touch-manipulation">
                  Industries
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Company navigation">
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>
                <Link href="/#about" className="inline-flex items-center min-h-[44px] py-2 hover:opacity-100 transition-opacity touch-manipulation">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="inline-flex items-center min-h-[44px] py-2 hover:opacity-100 transition-opacity touch-manipulation">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/guides" className="inline-flex items-center min-h-[44px] py-2 hover:opacity-100 transition-opacity touch-manipulation">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/blog" className="inline-flex items-center min-h-[44px] py-2 hover:opacity-100 transition-opacity touch-manipulation">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="inline-flex items-center min-h-[44px] py-2 hover:opacity-100 transition-opacity touch-manipulation">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/careers" className="inline-flex items-center min-h-[44px] py-2 hover:opacity-100 transition-opacity touch-manipulation">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="inline-flex items-center min-h-[44px] py-2 hover:opacity-100 transition-opacity touch-manipulation">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Legal navigation">
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy" className="inline-flex items-center min-h-[44px] py-2 hover:opacity-100 transition-opacity touch-manipulation">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="inline-flex items-center min-h-[44px] py-2 hover:opacity-100 transition-opacity touch-manipulation">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 Devora. All rights reserved. <span className="sr-only">Bespoke web design, brand development, and custom website development for startups and businesses across the UK.</span></p>
          <nav aria-label="Social media navigation">
            <ul className="flex flex-wrap gap-4 md:gap-6">
              <li>
                <Link href="https://www.facebook.com/share/14UKFzshvcq/?mibextid=wwXIfr" target="_blank" rel="me noopener noreferrer" className="inline-flex items-center min-h-[44px] min-w-[44px] justify-center hover:opacity-100 transition-opacity touch-manipulation" aria-label="Follow Devora on Facebook">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/devoraltd?igsh=MTBvNGQxbmhrb28xaA==" target="_blank" rel="me noopener noreferrer" className="inline-flex items-center min-h-[44px] min-w-[44px] justify-center hover:opacity-100 transition-opacity touch-manipulation" aria-label="Follow Devora on Instagram">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/company/devora-web-design-development/" target="_blank" rel="me noopener noreferrer" className="inline-flex items-center min-h-[44px] min-w-[44px] justify-center hover:opacity-100 transition-opacity touch-manipulation" aria-label="Follow Devora on LinkedIn">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="https://x.com/DevoraLtd38083" target="_blank" rel="me noopener noreferrer" className="inline-flex items-center min-h-[44px] min-w-[44px] justify-center hover:opacity-100 transition-opacity touch-manipulation" aria-label="Follow Devora on X (Twitter)">
                  X
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
