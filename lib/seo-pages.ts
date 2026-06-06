export const SITE_URL = "https://www.devora.co.uk"
export const SITE_NAME = "Devora"
export const DEFAULT_OG_IMAGE = "/devora-office.png"
export const CONTACT_EMAIL = "hello@devora.co.uk"

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
    title: "Web Design Sheffield",
    metaTitle: "Web Design Sheffield | Bespoke Business Websites",
    metaDescription:
      "Devora designs bespoke, fast and conversion-led websites for Sheffield and UK businesses that need to look sharper, rank better and generate more enquiries.",
    h1: "Web Design Sheffield",
    intro:
      "Bespoke web design for Sheffield businesses that need a sharper first impression, clearer sales journey and a website customers can trust before they enquire.",
    audience: ["Service businesses competing locally", "Recruiters and professional firms", "Trades and property maintenance companies", "Education and training providers", "Established businesses planning a serious redesign"],
    included: ["Discovery around buyers, offer and search intent", "Responsive page design for core commercial journeys", "Copy structure, wireframes and conversion planning", "Accessibility-aware UI and mobile layouts", "Design handover into a clean Next.js build"],
    why: ["Design is treated as a commercial system, not a decorative layer.", "Pages are structured around how buyers compare businesses.", "The visual direction is bespoke to the offer, sector and proof available.", "SEO, speed and conversion are planned before the first layout is polished."],
    process: ["Clarify the offer, market and priority enquiries", "Map the sitemap, landing pages and customer journey", "Design page sections around proof, objections and next steps", "Build responsive components and test across devices", "Launch with analytics, metadata, schema and internal links in place"],
    faqs: [
      { question: "Do you only work with Sheffield businesses?", answer: "No. Devora is Sheffield based and works with South Yorkshire businesses regularly, but we also design websites for UK-wide clients." },
      { question: "Is the design custom or template based?", answer: "The page structure, copy direction and visual system are planned around the business. We do not force serious commercial websites into generic templates." },
      { question: "Can web design help enquiries?", answer: "Yes, when it clarifies the offer, reduces doubt and gives users a simple path to contact. Design alone is not enough, so we connect it with SEO, speed and content structure." },
    ],
    relatedServices: ["web-development", "local-seo", "website-redesign", "branding"],
    relatedIndustries: ["trades-web-design", "professional-services-websites", "recruitment-websites"],
    caseStudies: ["teachers-surgery", "sandalwood-memorials", "luma-education"],
    body: [
      "Good web design makes a business easier to understand and easier to choose. For Sheffield companies, that matters because buyers are often comparing several local options in the same search result. Your website has to show what you do, why it is credible and what action the visitor should take without making them work for it.",
      "Devora designs websites around commercial intent: service pages that answer buyer questions, case study routes that build confidence, content blocks that handle objections and calls to action that feel natural rather than desperate. The aim is a website that looks premium because it is structured properly underneath.",
      "We pay particular attention to mobile journeys, section hierarchy, trust signals, internal links and page speed. Those details affect both users and search engines. A site can look beautiful in a design file and still underperform if the headings, content, images and calls to action are weak.",
    ],
  },
  {
    slug: "web-development",
    title: "Web Development Sheffield",
    metaTitle: "Web Development Sheffield | Fast Business Websites",
    metaDescription:
      "Next.js web development in Sheffield for fast, secure and maintainable business websites built for SEO, performance and conversion.",
    h1: "Web Development Sheffield",
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
      "Devora builds with a performance-first approach: clean components, readable routes, sensible image handling, server-rendered SEO data and lightweight interactions. The goal is not technical theatre. It is a stable website that loads quickly, communicates clearly and can be improved without starting again.",
      "For Sheffield and UK businesses, this is especially useful when the website has to support service pages, area pages, case studies, blog content and future conversion experiments. The technical foundation should make growth easier, not more expensive.",
    ],
  },
  {
    slug: "branding",
    title: "Branding for Business Websites",
    metaTitle: "Branding for Business Websites",
    metaDescription:
      "Brand identity, messaging and visual systems for businesses that need their website to look more credible, consistent and commercially focused.",
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
      "Devora focuses on identity decisions that survive real use: readable typography, flexible colours, strong CTA styles, recognisable layouts and language that matches the buyer’s expectations. The result is a brand system that works across service pages, case studies, blogs and sales conversations.",
    ],
  },
  {
    slug: "local-seo",
    title: "Local SEO Sheffield",
    metaTitle: "Local SEO Sheffield | Search-Ready Business Websites",
    metaDescription:
      "Local SEO in Sheffield for businesses that need stronger service pages, area pages, metadata, schema, internal links and conversion-focused search visibility.",
    h1: "Local SEO Sheffield",
    intro:
      "Local SEO for Sheffield businesses that need to be found by better-fit customers, not just appear online with a thin brochure site.",
    audience: ["Local service businesses", "Trades and maintenance companies", "Recruiters and consultants", "Businesses expanding across South Yorkshire", "Companies with weak local landing pages"],
    included: ["Local keyword and intent mapping", "Service and area page structure", "Metadata, canonicals and schema", "Internal linking improvements", "Technical checks for crawlability and indexability"],
    why: ["We connect local SEO to the website architecture, not a bolt-on checklist.", "Pages are written for buyers first and search engines second.", "Area content is built to be useful rather than doorway-style.", "Calls to action and proof are included so rankings can become enquiries."],
    process: ["Audit current visibility and page structure", "Map Sheffield, South Yorkshire and UK-wide opportunities", "Improve commercial pages and internal links", "Add schema, sitemap coverage and metadata", "Review search performance and iterate"],
    faqs: [
      { question: "Do you create area pages?", answer: "Yes, but they need to be genuinely useful. We include services, local context, nearby areas, FAQs and relevant internal links rather than swapping city names into duplicated copy." },
      { question: "Can local SEO work without a Google Business Profile?", answer: "Organic pages can still improve, but a complete Google Business Profile is important for local pack visibility and trust." },
      { question: "How soon does local SEO work?", answer: "Technical and content fixes can be implemented quickly, but ranking movement depends on competition, authority, content quality and external signals." },
    ],
    relatedServices: ["web-design", "web-development", "website-redesign"],
    relatedIndustries: ["trades-web-design", "property-maintenance-websites", "professional-services-websites"],
    caseStudies: ["envirotech-plumbing", "sandalwood-memorials", "luma-education"],
    body: [
      "Local SEO is often won or lost in the structure of the website. If a business has one generic services page, weak internal links and no clear location signals, Google has little to work with and visitors have little reason to enquire.",
      "For Sheffield businesses, we focus on a clean hierarchy: homepage, priority services, Sheffield and South Yorkshire area content, relevant industries, case studies and articles that answer real buying questions. Metadata and schema support that structure, but the content still has to be useful.",
      "We avoid spammy over-optimisation. The aim is to make your expertise, service area and value obvious, while creating enough crawlable depth for Google to understand the business properly.",
    ],
  },
  {
    slug: "website-redesign",
    title: "Website Redesign for Businesses",
    metaTitle: "Website Redesign for Businesses",
    metaDescription:
      "Website redesign for UK businesses with slow, dated or underperforming websites. Improve structure, speed, SEO, trust and enquiry quality.",
    h1: "Website Redesign for Businesses",
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
      "A redesign should not be a cosmetic reset. It should improve the way buyers understand your offer, the way Google crawls your pages and the way your team uses the website after launch.",
      "Devora starts redesign projects by auditing the existing site: what ranks, what converts, what is thin, what is duplicated and what should be redirected. From there we plan a cleaner structure, stronger content and a visual system that supports the new positioning.",
    ],
  },
  {
    slug: "nextjs-development",
    title: "Next.js Website Development UK",
    metaTitle: "Next.js Website Development UK",
    metaDescription:
      "Next.js website development for UK businesses that need fast, scalable, SEO-ready websites with clean code and strong technical foundations.",
    h1: "Next.js Website Development UK",
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
      "Devora uses Next.js for websites that need clean routing, reusable components, flexible content structures and strong performance. That makes it a good fit for service businesses, recruiters, education providers and businesses with complex case studies or area-led SEO strategies.",
    ],
  },
  {
    slug: "ecommerce-websites",
    title: "Ecommerce Website Development UK",
    metaTitle: "Ecommerce Website Development UK",
    metaDescription:
      "Ecommerce website development for UK businesses needing fast product journeys, SEO-friendly category pages and conversion-focused storefronts.",
    h1: "Ecommerce Website Development UK",
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
      "Devora builds ecommerce experiences with a focus on commercial clarity: what the product is, who it is for, how to choose, what happens next and why the buyer should trust the business.",
    ],
  },
  {
    slug: "small-business-websites",
    title: "Small Business Web Design UK",
    metaTitle: "Small Business Web Design UK",
    metaDescription:
      "Small business web design for UK companies that need a professional, fast and search-ready website without looking generic or underbuilt.",
    h1: "Small Business Web Design UK",
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
      "Devora keeps small business websites focused: a strong homepage, clear service information, trust signals, simple contact routes and enough SEO structure to support local visibility from the beginning.",
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
