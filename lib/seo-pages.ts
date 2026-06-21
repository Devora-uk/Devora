export const SITE_URL = "https://www.devora.co.uk"
export const SITE_NAME = "Devora"
export const DEFAULT_OG_IMAGE = "/devora-office.png"
export const CONTACT_EMAIL = "hello@devora.co.uk"

export const STUDIO_ADDRESS = {
  name: "Sheffield Technology Park",
  street: "Arundel Street",
  locality: "Sheffield",
  region: "South Yorkshire",
  postcode: "S1 2NS",
  country: "United Kingdom",
} as const

export type SeoPage = {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  h1: string
  intro: string
  audience: string[]
  included: string[]
  why: string[]
  process: string[]
  faqs: Array<{ question: string; answer: string }>
  relatedServices?: string[]
  relatedIndustries?: string[]
  caseStudies?: string[]
  primaryArea?: string
  body: string[]
}

export const servicePages: SeoPage[] = [
  {
    slug: "web-design",
    title: "Web Design",
    metaTitle: "Web Design | Bespoke Business Websites UK",
    metaDescription:
      "Bespoke web design for UK businesses. We create fast, conversion-led websites that communicate clearly, build trust and generate better enquiries.",
    h1: "Web Design",
    intro:
      "Bespoke web design for businesses that need a stronger first impression, clearer customer journeys and a website that earns trust before the first enquiry.",
    audience: ["Service businesses competing for high-value work", "Recruiters and professional services firms", "Trades and property companies", "Education and training providers", "Established businesses investing in a serious website"],
    included: ["Discovery to understand buyers, offer and search behaviour", "Responsive design focused on commercial journeys", "Content structure, wireframes and conversion planning", "Accessibility-conscious layouts across devices", "Design direction ready for clean development"],
    why: ["Design decisions are driven by commercial outcomes, not decoration.", "Page structure reflects how buyers research and compare options.", "Visual direction is tailored to the sector, positioning and available proof.", "SEO foundations, performance and conversion are planned from the start."],
    process: ["Define the offer, market position and priority outcomes", "Plan sitemap, key pages and buyer pathways", "Design sections that address questions, objections and next steps", "Create responsive components and validate across devices", "Prepare for development with clear specifications and assets"],
    faqs: [
      { question: "Do you work only with businesses in one location?", answer: "No. We are based in Sheffield with strong experience across South Yorkshire, but we work with clients throughout the UK." },
      { question: "Is the design custom or based on templates?", answer: "We plan the structure, messaging direction and visual approach around the specific business. Serious commercial websites are not forced into generic templates." },
      { question: "Can good web design increase enquiries?", answer: "When design clarifies the offer, reduces uncertainty and provides a straightforward path to contact, yes. Design works best when combined with strong content structure, SEO and performance." },
    ],
    relatedServices: ["web-development", "local-seo", "website-redesign", "branding"],
    relatedIndustries: ["trades-web-design", "professional-services-websites", "recruitment-websites"],
    caseStudies: ["teachers-surgery", "sandalwood-memorials", "luma-education"],
    body: [
      "Effective web design helps a business become easier to understand and easier to choose. In competitive markets, buyers routinely compare several options from a single search. The website must convey what you do, why you are credible and what the visitor should do next — without friction.",
      "We design around commercial intent: service pages that answer real questions, case study pathways that build confidence, content that handles objections and calls to action that feel natural. The result is a site that earns its premium appearance through sound structure rather than surface styling.",
      "Particular attention is paid to mobile experience, heading hierarchy, trust indicators, internal linking and page speed. These elements influence both user behaviour and search visibility. A design can appear polished in a static file and still underperform if the underlying organisation of content and actions is weak.",
    ],
  },
  {
    slug: "web-development",
    title: "Web Development",
    metaTitle: "Web Development | Fast Business Websites UK",
    metaDescription:
      "Modern web development for UK businesses. We build fast, secure and maintainable websites in Next.js that support strong SEO, performance and conversion.",
    h1: "Web Development",
    intro:
      "Modern web development for businesses that need a fast, reliable website built cleanly rather than patched together with bloated themes and fragile plugins.",
    audience: ["Businesses replacing slow legacy websites", "Teams needing custom functionality", "Companies moving beyond template builders", "Agencies needing a technical build partner"],
    included: ["Next.js and React development", "Server-rendered metadata and schema", "Responsive component builds", "CMS-ready content models where needed", "Deployment, testing and analytics setup"],
    why: ["Technical decisions are made around speed, maintainability and SEO.", "The codebase is structured so future changes are realistic.", "Core Web Vitals, accessibility and indexing are considered during build.", "You get a website that can grow with the business."],
    process: ["Translate the approved site plan into components", "Build layouts with stable responsive dimensions", "Optimise images, fonts and scripts", "Add metadata, schema and sitemap coverage", "Test build output, links, forms and mobile usability"],
    faqs: [
      { question: "Why use Next.js for a business website?", answer: "Next.js can deliver fast, crawlable pages with flexible routing, image optimisation patterns and server-rendered metadata when it is implemented properly." },
      { question: "Can you integrate a CMS?", answer: "Yes. We can connect a headless CMS or build controlled content editing workflows where the team needs to update pages without touching code." },
      { question: "Do you support existing websites?", answer: "Yes, if the current stack is workable. For heavily bloated sites, a rebuild is often a better investment than repeated patching." },
    ],
    relatedServices: ["web-design", "nextjs-development", "ecommerce-websites", "website-redesign"],
    relatedIndustries: ["recruitment-websites", "education-websites", "property-maintenance-websites"],
    caseStudies: ["sandalwood-memorials", "teachers-surgery", "envirotech-plumbing"],
    body: [
      "Development quality affects rankings, conversions and day-to-day maintainability. Slow templates, layout shifts, unclear routing and plugin-heavy builds make it harder for users to trust the site and harder for search engines to crawl it efficiently.",
      "We build with a performance-first approach: clean components, readable routes, sensible image handling, server-rendered SEO data and lightweight interactions. The goal is not technical theatre. It is a stable website that loads quickly, communicates clearly and can be improved without starting again.",
      "This approach is especially useful when the website must support service pages, area content, case studies, blog resources and future conversion experiments. The technical foundation should make growth easier, not more expensive.",
    ],
  },
  {
    slug: "branding",
    title: "Branding for Business Websites",
    metaTitle: "Branding for Business Websites",
    metaDescription:
      "Brand identity, messaging and visual systems for UK businesses that need their website to look more credible, consistent and commercially focused.",
    h1: "Branding for Business Websites",
    intro:
      "Branding support for businesses that need a clearer identity before investing in a sharper, more persuasive website.",
    audience: ["New businesses preparing to launch", "Companies with inconsistent visuals", "Service firms repositioning upmarket", "Teams needing web-ready brand assets"],
    included: ["Positioning and message direction", "Logo refinement or identity design", "Colour, typography and UI style rules", "Website tone and content patterns", "Reusable design system foundations"],
    why: ["Branding is connected directly to website usability and conversion.", "We avoid decorative branding that falls apart in real page layouts.", "The output is practical for headings, service pages, CTAs and content.", "Your website feels consistent from homepage to enquiry form."],
    process: ["Audit existing identity and positioning", "Define the commercial message", "Create or refine visual assets", "Translate the system into website sections", "Document reusable rules for future content"],
    faqs: [
      { question: "Do I need a full rebrand?", answer: "Not always. Sometimes the best move is tightening the visual system and message so the website feels more credible without changing everything." },
      { question: "Can branding be part of a web design project?", answer: "Yes. Many website projects include brand refinement so the new site has a stronger foundation." },
    ],
    relatedServices: ["web-design", "website-redesign", "small-business-websites"],
    relatedIndustries: ["startup-websites", "professional-services-websites", "recruitment-websites"],
    caseStudies: ["lr-talent", "teachers-surgery", "rfw"],
    body: [
      "A website exposes weak branding quickly. If the message, visual hierarchy, tone and proof do not line up, users feel the gap even if they cannot name it. Strong web-ready branding gives every page a clearer job.",
      "We focus on identity decisions that survive real use: readable typography, flexible colours, strong CTA styles, recognisable layouts and language that matches the buyer’s expectations. The result is a brand system that works across service pages, case studies, blogs and sales conversations.",
    ],
  },
  {
    slug: "local-seo",
    title: "Local SEO",
    metaTitle: "Local SEO | Search Optimisation for UK Business Websites",
    metaDescription:
      "Local SEO for UK businesses. We strengthen service pages, area content, metadata, schema and internal links to improve visibility in relevant local searches and generate better enquiries.",
    h1: "Local SEO",
    intro:
      "Local search optimisation for businesses that want to be found by the right customers in the areas they serve, rather than relying on a thin brochure site.",
    audience: ["Local and regional service businesses", "Trades and maintenance companies", "Recruiters and consultants with defined catchment areas", "Businesses with multiple service locations", "Companies with underperforming location pages"],
    included: ["Local search and intent analysis", "Service and area page planning", "Metadata, schema and technical foundations", "Internal linking to support visibility", "Crawlability and indexation improvements"],
    why: ["Local SEO is integrated with site architecture rather than treated as a separate checklist.", "Content is written for buyers first, with search visibility as a natural outcome.", "Area pages are built to be genuinely useful, avoiding thin or duplicated content.", "Conversion elements are included so visibility can translate into enquiries."],
    process: ["Review current visibility, structure and content", "Identify priority locations and service opportunities", "Strengthen commercial pages and linking", "Implement schema, metadata and supporting technical elements", "Monitor performance and refine"],
    faqs: [
      { question: "Do you create location-specific pages?", answer: "Yes, when they add value. Useful area pages include relevant services, local context, nearby coverage, FAQs and purposeful internal links rather than simple name swaps." },
      { question: "Can local SEO work without a Google Business Profile?", answer: "Organic pages can still improve, but a complete Google Business Profile is important for local pack visibility and trust." },
      { question: "How soon does local SEO work?", answer: "Technical and content fixes can be implemented quickly, but ranking movement depends on competition, authority, content quality and external signals." },
    ],
    relatedServices: ["web-design", "web-development", "website-redesign"],
    relatedIndustries: ["trades-web-design", "property-maintenance-websites", "professional-services-websites"],
    caseStudies: ["envirotech-plumbing", "sandalwood-memorials", "luma-education"],
    body: [
      "Local search performance often depends on the underlying structure of the website. A single generic services page, weak internal links and unclear location signals give search engines little to work with and visitors little reason to contact you.",
      "We help businesses establish a clear hierarchy: homepage, priority services, dedicated area content where relevant, industry pages, case studies and articles that address genuine buyer questions. Technical elements support the structure, but the content must remain useful and specific.",
      "We avoid aggressive over-optimisation. The goal is to make your expertise, service coverage and value proposition clear, while providing sufficient depth for search engines to understand the business accurately.",
    ],
  },
  {
    slug: "website-redesign",
    title: "Website Redesign",
    metaTitle: "Website Redesign for UK Businesses",
    metaDescription:
      "Website redesign for UK businesses with slow, dated or underperforming websites. We improve structure, speed, SEO, trust and enquiry quality through considered rebuilds.",
    h1: "Website Redesign",
    intro:
      "A commercially focused redesign for businesses whose current website looks dated, loads slowly, ranks poorly or fails to turn visitors into enquiries.",
    audience: ["Established companies with old websites", "Businesses with traffic but weak enquiries", "Teams rebranding or changing offer", "Companies moving from WordPress themes to custom builds"],
    included: ["SEO and content audit", "Conversion journey review", "New page architecture", "Design and development rebuild", "Redirect, metadata and launch planning"],
    why: ["We protect what is already working before changing the site.", "The redesign is based on buyer intent, analytics and page purpose.", "Technical SEO is included so the rebuild does not damage visibility.", "The result is sharper, faster and easier to improve."],
    process: ["Audit current pages, rankings and content", "Decide what to keep, merge, rewrite or redirect", "Design the new commercial journey", "Build and test the new site", "Launch with redirects, sitemap and indexing checks"],
    faqs: [
      { question: "Will a redesign hurt SEO?", answer: "It can if URLs, metadata, content and redirects are handled carelessly. We plan migration details before launch to reduce that risk." },
      { question: "Should we redesign or rebuild?", answer: "If the current platform is slow or restrictive, a rebuild is often better than visually refreshing the same problems." },
    ],
    relatedServices: ["web-design", "web-development", "local-seo", "nextjs-development"],
    relatedIndustries: ["professional-services-websites", "education-websites", "property-maintenance-websites"],
    caseStudies: ["sandalwood-memorials", "rectify", "hv-direct"],
    body: [
      "A redesign should not be a cosmetic reset. It should improve the way buyers understand your offer, the way search engines crawl your pages and the way your team uses the website after launch.",
      "We start by auditing the existing site: what ranks, what converts, what is thin, what is duplicated and what should be redirected. From there we plan a cleaner structure, stronger content and a visual system that supports the new positioning.",
    ],
  },
  {
    slug: "nextjs-development",
    title: "Next.js Development",
    metaTitle: "Next.js Development | Modern Websites for UK Businesses",
    metaDescription:
      "Next.js development for UK businesses that need fast, scalable, SEO-ready websites with clean code, strong technical foundations and long-term maintainability.",
    h1: "Next.js Development",
    intro:
      "Next.js development for businesses that want the speed, structure and flexibility of a modern web stack without sacrificing SEO or maintainability.",
    audience: ["Businesses rebuilding slow websites", "Companies needing custom routes and content", "Teams that care about Core Web Vitals", "E-commerce and headless CMS projects"],
    included: ["App Router builds", "Server-rendered metadata", "Dynamic sitemap and robots routes", "JSON-LD schema", "Performance-minded image and font handling"],
    why: ["Next.js is powerful when the implementation stays disciplined.", "We use server-rendered SEO signals rather than client-only patches.", "The architecture supports service, area, blog and case study growth.", "Performance and content editing needs are considered together."],
    process: ["Define routing and content requirements", "Build reusable components and page templates", "Add metadata, schema and canonical rules", "Optimise assets and interaction weight", "Deploy, test and monitor"],
    faqs: [
      { question: "Is Next.js always better than WordPress?", answer: "No. It depends on content workflow, budget and technical needs. Next.js is strong when speed, custom UX and structured SEO matter." },
      { question: "Can Next.js work with WordPress?", answer: "Yes. A headless WordPress setup can keep familiar content management while Next.js handles the front-end experience." },
    ],
    relatedServices: ["web-development", "web-design", "ecommerce-websites", "local-seo"],
    relatedIndustries: ["recruitment-websites", "education-websites", "professional-services-websites"],
    caseStudies: ["sandalwood-memorials", "teachers-surgery", "sky-limit-travels"],
    body: [
      "Next.js can be excellent for SEO when pages are rendered with proper metadata, internal links, structured data and fast-loading assets. It can also be poor if every important signal is pushed into client-only code. Implementation matters.",
      "We use Next.js for websites that need clean routing, reusable components, flexible content structures and strong performance. That makes it a good fit for service businesses, recruiters, education providers and businesses with complex case studies or area-led SEO strategies.",
    ],
  },
  {
    slug: "ecommerce-websites",
    title: "Ecommerce Websites",
    metaTitle: "Ecommerce Website Development UK",
    metaDescription:
      "Ecommerce website development for UK businesses needing fast product journeys, SEO-friendly category pages and conversion-focused storefronts.",
    h1: "Ecommerce Websites",
    intro:
      "Ecommerce websites for businesses that need product pages, category structure, speed and trust signals to work together.",
    audience: ["Product-led businesses", "Companies moving from slow stores", "Headless commerce projects", "Teams needing custom product journeys"],
    included: ["Product and category architecture", "Headless or platform-integrated builds", "SEO-ready product templates", "Conversion-focused checkout journeys", "Analytics and tracking setup"],
    why: ["Commerce pages need speed, clarity and trust.", "Category structure is planned around search demand and user behaviour.", "We keep product management practical for your team.", "The storefront is designed to help buyers make confident decisions."],
    process: ["Map products, categories and buying journeys", "Choose the right commerce architecture", "Design product and collection templates", "Build, test and integrate payments/forms", "Launch with tracking and SEO checks"],
    faqs: [
      { question: "Can you build headless ecommerce?", answer: "Yes. We can pair a modern front end with a commerce backend where that gives the business more speed or flexibility." },
      { question: "Do you work with WooCommerce?", answer: "Yes, including headless WooCommerce where WordPress manages products and Next.js powers the customer-facing site." },
    ],
    relatedServices: ["web-development", "nextjs-development", "local-seo"],
    relatedIndustries: ["property-maintenance-websites", "professional-services-websites"],
    caseStudies: ["sandalwood-memorials", "sky-limit-travels"],
    body: [
      "Ecommerce SEO is not only about product keywords. The site needs clean categories, useful product information, fast images, strong internal links and reassurance at the point of decision.",
      "We build ecommerce experiences with a focus on commercial clarity: what the product is, who it is for, how to choose, what happens next and why the buyer should trust the business.",
    ],
  },
  {
    slug: "small-business-websites",
    title: "Small Business Websites",
    metaTitle: "Small Business Web Design UK",
    metaDescription:
      "Small business web design for UK companies that need a professional, fast and search-ready website without looking generic or underbuilt.",
    h1: "Small Business Websites",
    intro:
      "Professional websites for small businesses that need to look credible, explain their offer clearly and create a simple route to enquiry.",
    audience: ["Local service businesses", "Start-ups with a serious offer", "Owner-led firms", "Businesses replacing DIY sites"],
    included: ["Lean sitemap planning", "Homepage and service page design", "Contact and audit CTA routes", "Basic local SEO setup", "Launch support and handover"],
    why: ["Small does not have to mean generic.", "We focus spend on the pages and sections that influence enquiries.", "The site is built to be expanded later.", "You get clear positioning without inflated language."],
    process: ["Clarify the offer and audience", "Plan the first version sitemap", "Design and build priority pages", "Add SEO basics and analytics", "Launch and improve based on evidence"],
    faqs: [
      { question: "Is this suitable for a new business?", answer: "Yes, especially where the business needs a credible site that can grow into deeper SEO content over time." },
      { question: "Can you start small and add pages later?", answer: "Yes. We can launch a strong core website and then add service, area, blog or case study pages as proof and budget develop." },
    ],
    relatedServices: ["web-design", "branding", "local-seo", "website-redesign"],
    relatedIndustries: ["startup-websites", "trades-web-design", "professional-services-websites"],
    caseStudies: ["lr-talent", "envirotech-plumbing", "rfw"],
    body: [
      "A small business website still needs strategy. Buyers want to know what you do, where you work, whether you are credible and how to start a conversation. Missing those basics costs enquiries.",
      "We keep small business websites focused: a strong homepage, clear service information, trust signals, simple contact routes and enough SEO structure to support local visibility from the beginning.",
    ],
  },
]

export const industryPages: SeoPage[] = [
  {
    slug: "trades-web-design",
    title: "Web Design for Trades Businesses",
    metaTitle: "Web Design for Trades Businesses",
    metaDescription: "Web design for trades businesses that need fast local pages, trust signals, service-area SEO and clear enquiry routes.",
    h1: "Web Design for Trades Businesses",
    intro: "Websites for trades businesses that need to win trust quickly, show service areas clearly and make urgent enquiries simple.",
    audience: ["Plumbers", "Electricians", "Maintenance companies", "Building and repair firms"],
    included: ["Service-area page structure", "Urgent CTA journeys", "Review and proof placement", "Local SEO foundations"],
    why: ["Trades buyers often compare quickly and contact the business that feels clearest.", "We build around service urgency, location and trust.", "The site can grow into area pages and advice content."],
    process: ["Map services and locations", "Design trust-led page sections", "Build fast mobile pages", "Add schema and internal links"],
    faqs: [{ question: "Can you build pages for each service area?", answer: "Yes, provided each page has useful local content and is not a duplicated doorway page." }],
    relatedServices: ["web-design", "local-seo", "small-business-websites"],
    caseStudies: ["envirotech-plumbing", "hv-direct"],
    body: ["Trades websites need speed and clarity. Customers are often on mobile, comparing local companies and looking for proof that the business can solve the problem without hassle.", "We structure trades sites around service pages, locations, reviews, emergency or quote CTAs and helpful content that answers practical questions."],
  },
  {
    slug: "recruitment-websites",
    title: "Website Design for Recruitment Agencies",
    metaTitle: "Recruitment Website Design",
    metaDescription: "Recruitment website design for agencies needing sharper positioning, candidate journeys, employer pages, job visibility and CRM-ready structure.",
    h1: "Website Design for Recruitment Agencies",
    intro: "Recruitment websites that speak clearly to candidates and employers while supporting search visibility, job content and credibility.",
    audience: ["Education recruiters", "Executive search firms", "Sector specialists", "New recruitment agencies"],
    included: ["Candidate and employer journeys", "Sector landing pages", "Vacancy or CRM integration planning", "Case study and proof structure"],
    why: ["Recruitment websites have two audiences with different motivations.", "We separate candidate, employer and sector content clearly.", "The structure supports organic visibility and lead quality."],
    process: ["Map audiences and sectors", "Plan content hierarchy", "Design conversion paths", "Build integrations where needed"],
    faqs: [{ question: "Can you integrate recruitment CRM data?", answer: "Yes. We can plan vacancy feeds or CRM integrations depending on the platform and API access." }],
    relatedServices: ["web-design", "web-development", "nextjs-development"],
    caseStudies: ["luma-education", "nl-education", "lr-talent", "rectify"],
    body: ["Recruitment websites need more than a job board. They need to position the agency, explain the sectors served, build confidence with employers and make candidates feel understood.", "Devora builds recruitment websites with clear audience routes, sector pages, proof, job visibility and content structures that can support long-term SEO."],
  },
  {
    slug: "professional-services-websites",
    title: "Professional Services Website Design",
    metaTitle: "Professional Services Website Design",
    metaDescription: "Website design for consultants, advisors and professional services firms that need credibility, clear service pages and enquiry-led SEO.",
    h1: "Professional Services Website Design",
    intro: "Websites for professional services firms where trust, clarity and expertise need to be obvious from the first page.",
    audience: ["Consultants", "Advisors", "B2B service firms", "Specialist agencies"],
    included: ["Service page architecture", "Authority content planning", "Lead capture routes", "Case study structure"],
    why: ["Buyers need to understand expertise before they contact you.", "We turn specialist knowledge into clear pages.", "The site supports both credibility and search demand."],
    process: ["Clarify positioning", "Map high-value services", "Design proof-led pages", "Build and optimise"],
    faqs: [{ question: "Can you make technical services easier to understand?", answer: "Yes. We structure complex offers into plain, commercially useful pages without flattening the expertise." }],
    relatedServices: ["web-design", "branding", "local-seo"],
    caseStudies: ["rfw", "hv-direct", "rectify"],
    body: ["Professional services buyers are risk-aware. They look for evidence, expertise, fit and a clear next step. A vague website makes the decision harder.", "We create service-led websites that explain the offer, show proof and guide qualified prospects towards a useful conversation."],
  },
  {
    slug: "education-websites",
    title: "Education Website Design",
    metaTitle: "Education Website Design",
    metaDescription: "Education website design for training providers, community projects and education recruitment businesses needing trust, clarity and accessible UX.",
    h1: "Education Website Design",
    intro: "Accessible, clear websites for education providers, training businesses and education recruitment organisations.",
    audience: ["Training providers", "Education recruiters", "Community education projects", "Schools-adjacent services"],
    included: ["Audience-specific journeys", "Accessible page design", "Programme or service structure", "Content and media planning"],
    why: ["Education websites must be easy for mixed audiences to understand.", "We focus on clarity, accessibility and trust.", "The structure can support courses, resources, case studies and enquiries."],
    process: ["Map audiences", "Plan content types", "Design accessible journeys", "Build and test"],
    faqs: [{ question: "Do you consider accessibility?", answer: "Yes. Clear hierarchy, readable layouts, mobile usability and semantic structure are part of the build." }],
    relatedServices: ["web-design", "web-development", "branding"],
    caseStudies: ["teachers-surgery", "luma-education", "nl-education"],
    body: ["Education websites often serve several audiences: learners, parents, schools, employers or community members. Each audience needs a clear route.", "Devora builds education websites that make services, programmes, resources and trust signals easy to find."],
  },
  {
    slug: "property-maintenance-websites",
    title: "Property Maintenance Website Design",
    metaTitle: "Property Maintenance Website Design",
    metaDescription: "Website design for property maintenance and building services businesses needing local SEO, service pages and quote-focused conversion journeys.",
    h1: "Property Maintenance Website Design",
    intro: "Websites for property maintenance firms that need service clarity, local visibility and stronger quote enquiries.",
    audience: ["Maintenance companies", "Facilities providers", "Building services firms", "Emergency repair providers"],
    included: ["Service and area pages", "Quote request journeys", "Trust and compliance signals", "Mobile-first layouts"],
    why: ["Maintenance buyers need confidence and speed.", "We structure sites around service need, geography and proof.", "The build supports local SEO and conversion."],
    process: ["Map services and regions", "Design quote routes", "Build service templates", "Optimise local signals"],
    faqs: [{ question: "Can you show multiple services without clutter?", answer: "Yes. We use a clear service hierarchy and internal links so users can move quickly to the right page." }],
    relatedServices: ["local-seo", "web-design", "small-business-websites"],
    caseStudies: ["ahrk-property-maintenance", "envirotech-plumbing", "hv-direct"],
    body: ["Property maintenance websites have to make breadth feel manageable. Buyers want to know whether you cover the service, the area and the urgency level they need.", "We build maintenance websites with clear service architecture, proof, quote routes and location content that supports local search."],
  },
  {
    slug: "startup-websites",
    title: "Startup Website Design UK",
    metaTitle: "Startup Website Design UK",
    metaDescription: "Startup website design for UK founders needing a credible first website, sharp positioning, brand foundations and scalable SEO structure.",
    h1: "Startup Website Design UK",
    intro: "Credible startup websites for founders who need to explain the offer clearly, look serious and leave room to grow.",
    audience: ["Founder-led startups", "New service businesses", "Early-stage platforms", "Businesses preparing to pitch"],
    included: ["Positioning and message clarity", "Lean launch sitemap", "Brand-ready design system", "Scalable content structure"],
    why: ["Early websites need focus more than noise.", "We help startups look credible without pretending to have proof they do not yet have.", "The site can expand as case studies, content and authority grow."],
    process: ["Clarify offer", "Prioritise launch pages", "Design first version", "Build with expansion in mind"],
    faqs: [{ question: "Can you avoid overclaiming for a new business?", answer: "Yes. We write around process, capability and clear positioning rather than inventing proof." }],
    relatedServices: ["small-business-websites", "branding", "web-design"],
    caseStudies: ["lr-talent", "slush-dating", "sky-limit-travels"],
    body: ["A startup website should make the offer easier to understand and easier to trust. It should not bury a new business under vague hype.", "Devora creates focused launch websites with enough polish to build confidence and enough structure to support future SEO and growth."],
  },
]

export function getServicePage(slug: string) {
  return servicePages.find((page) => page.slug === slug)
}

export function getIndustryPage(slug: string) {
  return industryPages.find((page) => page.slug === slug)
}
