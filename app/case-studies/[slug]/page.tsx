import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import React from "react"
import { JsonLd } from "@/components/JsonLd"
import { absoluteUrl, breadcrumbSchema, graphSchema, webPageSchema } from "@/lib/schema"
import { SITE_URL } from "@/lib/seo-pages"

const caseStudies: Record<string, any> = {
  "envirotech-plumbing": {
    title: "EnviroTech Emergency Plumbing",
    subtitle: "24/7 Emergency Plumbing Service Platform",
    client: "EnviroTech",
    category: "Service Platform",
    duration: "4 weeks",
    year: "2024",
    challenge:
      "EnviroTech, a leading emergency plumbing service provider, was struggling with outdated phone-based booking systems that couldn't handle peak demand. Customer wait times exceeded 30 minutes, bookings were being lost, and field engineers had no real-time visibility of job locations. Their competitors were offering instant quotes while they manually calculated prices, losing business to faster, more convenient platforms.",
    challenges: [
      "24/7 emergency booking system with real-time availability",
      "Instant quote calculator for various plumbing services",
      "Mobile-first design for customers in emergency situations",
      "Integration with existing business management systems",
      "Clear service area mapping and technician dispatch",
    ],
    solution:
      "We built a comprehensive web platform that revolutionized their operations. Customers now submit emergency requests through an intuitive interface that captures property details, problem type, and location. Our system instantly matches available engineers to jobs based on proximity using GPS tracking, calculates dynamic pricing based on demand and complexity, and sends real-time SMS/email confirmations. Engineers receive job alerts on their mobile devices with full property information, can update job status in real-time (dispatched, en-route, completed), and customers track engineer arrival with live location updates. The system integrates with their accounting software for automatic invoicing.",
    solutionPhases: [
      {
        title: "Discovery & Research",
        points: [
          "Conducted user interviews with customers who had experienced plumbing emergencies to understand pain points and expectations",
          "User journey mapping",
          "Competitive analysis and technical requirements definition",
        ],
      },
      {
        title: "Design & Prototyping",
        points: [
          "Created a calming, professional interface that guides stressed customers through the booking process efficiently",
          "Wireframes and UI design system",
          "Interactive prototypes and user testing",
        ],
      },
      {
        title: "Development & Integration",
        points: [
          "Built a robust booking system with real-time availability and quote calculator",
          "Business management integration and API connections",
          "Mobile-responsive web application with admin dashboard",
        ],
      },
      {
        title: "Testing & Launch",
        points: [
          "Comprehensive testing across devices and emergency booking simulations",
          "Quality assurance and performance optimization",
          "Successful launch with team training",
        ],
      },
    ],
    results: {
      "Booking Response Time": "From 30 mins to 45 seconds",
      "Job Completion Rate": "+92% increase in same-day repairs",
      "Customer Satisfaction": "4.8/5 stars (up from 3.2)",
      "Revenue Growth": "+£180k in first year",
      "Operational Efficiency": "Missed calls reduced from 23% to 2%",
    },
    testimonial: {
      quote: "The new platform has revolutionised how we handle emergency calls. Customers can book instantly, and our dispatch system is incredibly efficient. We've seen a massive increase in bookings and our team is thrilled with the efficiency gains.",
      author: "James Mitchell",
      role: "Operations Director, EnviroTech",
    },
    services: ["Full-Stack Web Development", "Mobile-Responsive Design", "Real-Time GPS Integration", "Payment Processing", "SMS/Email Notifications"],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Google Maps API", "Stripe", "Twilio", "Socket.io", "Vercel"],
    variant: "tech",
  },
  "nl-education": {
    title: "NL Education",
    subtitle: "Teacher Recruitment Platform",
    client: "NL Education",
    category: "Recruitment Platform",
    duration: "4 weeks",
    year: "2024",
    challenge:
      "NL Education faced a critical challenge in their recruitment process. Schools across England were manually advertising vacancies in multiple places, receiving hundreds of unsuitable applications, and struggling to identify the right match quickly. Teachers were applying to dozens of roles, creating a time-consuming vetting process. The average time-to-hire was 8-12 weeks, and many positions remained unfilled mid-term, disrupting student learning.",
    challenges: [
      "Inefficient job matching between teachers and schools",
      "Hundreds of unsuitable applications per vacancy",
      "Average time-to-hire of 8-12 weeks",
      "Limited visibility into candidate qualifications and fit",
      "Need for AI-powered matching algorithm",
    ],
    solution:
      "We developed a sophisticated two-sided marketplace with AI-powered matching. Schools create detailed job profiles including curriculum areas, student demographics, school values, and working environment. Teachers build comprehensive profiles showcasing qualifications, experience, specializations, and preferences. Our intelligent matching algorithm analyzes compatibility scores across 20+ factors, not just skills, but cultural fit and career aspirations. Teachers see only highly relevant opportunities, schools see pre-screened candidates. Built-in video interview tools, document verification, and reference checks streamline vetting. Schools can post, review candidates, and make offers all within the platform. Real-time notifications keep both parties updated throughout the hiring process.",
    solutionPhases: [
      {
        title: "Platform Architecture",
        points: [
          "Designed two-sided marketplace with distinct teacher and school interfaces",
          "Built AI-powered matching algorithm analyzing 20+ compatibility factors",
          "Created admin dashboard for platform management and analytics",
        ],
      },
      {
        title: "Core Features",
        points: [
          "Video interview integration for remote assessments",
          "Document verification system for qualifications",
          "Reference checking workflow and communication tools",
          "Real-time notifications and status tracking",
        ],
      },
      {
        title: "Integration & Optimization",
        points: [
          "Integrated with school management systems for synchronization",
          "Built comprehensive analytics dashboard",
          "Implemented advanced search and filtering",
          "Created mobile-responsive experience for both platforms",
        ],
      },
      {
        title: "Launch & Support",
        points: [
          "Onboarded 200+ schools and 1,200+ teachers",
          "Provided ongoing algorithm optimization",
          "Continuous feature development based on user feedback",
        ],
      },
    ],
    results: {
      "Time-to-Hire": "Reduced from 8-12 weeks to 2-3 weeks",
      "Application Quality": "+87% improvement in suitable candidates",
      "School Satisfaction": "94% would recommend the platform",
      "Teachers Placed": "500+ successful placements in year one",
      "Platform Adoption": "200+ active schools, 1,200+ registered teachers",
    },
    testimonial: {
      quote: "The platform has transformed our hiring process. We now find the right teachers much faster and the matching algorithm really understands what we're looking for. Teachers love the personalized opportunities.",
      author: "Sarah Thompson",
      role: "Director of Recruitment, NL Education",
    },
    services: ["Full-Stack Platform Development", "Matching Algorithm", "Video Integration", "Admin Dashboard", "Real-Time Notifications"],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Machine Learning", "Stripe", "AWS S3", "Socket.io", "TensorFlow"],
    variant: "editorial",
  },
  "lr-talent": {
    title: "LR Talent",
    subtitle: "Executive & HR Recruitment",
    client: "LR Talent",
    category: "Recruitment Platform",
    duration: "1 month",
    year: "2024",
    challenge:
      "LR Talent, a newly launched recruitment agency, was competing against larger established firms with bigger marketing budgets. They needed to establish their brand and online presence from the ground up. Their website was static and didn't reflect their personalized, founder-led approach. Candidates couldn't understand the difference between them and generic job boards, employers didn't realize the value of their deep industry relationships and careful vetting process. They were losing opportunities to online platforms and couldn't showcase their track record effectively.",
    challenges: [
      "Establishing brand identity for a new recruitment business",
      "Static website not reflecting personalised approach",
      "Inability to differentiate from generic job boards",
      "Hidden track record of successful placements",
      "Limited visibility into founder-led recruitment methodology",
      "No way for candidates and employers to connect directly",
    ],
    solution:
      "We created a comprehensive brand identity and modern, personality-driven platform that tells LR Talent's story. Starting with logo design and brand guidelines, we established a strong visual identity that communicates trust and professionalism. The homepage emphasises their unique value: founder-led search, deep relationships with top companies, and hand-selected candidates only. A comprehensive 'For Candidates' section allows candidates to submit CVs, specify salary expectations, and see matching opportunities curated by the team. An 'For Employers' section lets companies post vacancies and connects them directly to LR Talent's consultants for personalized searches. We integrated a candidate portfolio showcasing successful placements and testimonials from both companies and placed professionals. A secure dashboard lets clients track active searches, review shortlisted candidates, and manage the hiring process. The design emphasises trust, professionalism, and personal relationships, differentiating them from impersonal job boards.",
    solutionPhases: [
      {
        title: "Brand Development",
        points: [
          "Logo design establishing business identity and professionalism",
          "Brand guidelines and visual identity system",
          "Developed narrative around founder-led, relationship-focused recruitment",
          "Created distinct messaging for candidates vs employers",
          "Designed visual identity emphasizing trust and professionalism",
        ],
      },
      {
        title: "Candidate Portal",
        points: [
          "CV submission and profile building system",
          "Salary expectation and preference configuration",
          "Curated opportunity recommendations from consultants",
          "Direct messaging with LR Talent consultants",
        ],
      },
      {
        title: "Employer Portal",
        points: [
          "Vacancy posting and management system",
          "Shortlist management and candidate review",
          "Direct access to LR Talent consultants",
          "Secure dashboard for tracking active searches",
        ],
      },
      {
        title: "Portfolio & Trust Building",
        points: [
          "Showcase of successful placements with metrics",
          "Testimonials from both employers and placed professionals",
          "Success stories demonstrating ROI",
          "SEO-optimised content establishing thought leadership",
        ],
      },
    ],
    results: {
      "Qualified Inquiries": "+240% increase in candidate applications",
      "Client Engagement": "+165% more employer inquiries",
      "Placement Success Rate": "Increased to 78% (vs. industry average 52%)",
      "Average Fee Revenue": "+£85k additional revenue per consultant annually",
      "Brand Recognition": "Established thought leadership in HR recruitment",
    },
    testimonial: {
      quote: "LR Talent's platform has been a game-changer for us. The personalized approach and direct access to their consultants has made finding the right talent effortless. We've filled positions we thought would be difficult 3x faster.",
      author: "Michael Barnes",
      role: "Head of HR, Tech Company",
    },
    services: ["Brand Development", "Logo Design", "Bespoke Web Design", "Candidate Management System", "Client Portal", "SEO Optimisation"],
    technologies: ["Next.js", "React", "Tailwind CSS", "PostgreSQL", "Supabase Auth", "Stripe"],
    variant: "minimal",
  },
  "rectify": {
    title: "Rectify International",
    subtitle: "Energy Sector Recruitment & Consultancy",
    client: "Rectify International",
    category: "B2B Recruitment",
    duration: "3 weeks",
    year: "2024",
    challenge:
      "Rectify International specializes in recruiting highly skilled engineers and consultants for the energy sector. Their old website didn't communicate their deep sector expertise, and potential candidates didn't realize the caliber of projects Rectify sources. Energy companies searching for hard-to-find talent (offshore engineers, renewable specialists, compliance experts) couldn't easily express their specific needs. Rectify was losing opportunities to competitors with better web presence, and their extensive project portfolio was hidden from view.",
    challenges: [
      "Generic website not highlighting specialised expertise",
      "Hidden portfolio of 50+ successful projects",
      "Difficulty attracting specialised energy sector talent",
      "No clear differentiation from generic recruiters",
      "Energy companies couldn't express complex technical requirements",
    ],
    solution:
      "We built a sector-specific recruitment platform showcasing Rectify's deep expertise and track record. The design features an impressive portfolio of 50+ successfully completed projects, each detailing the challenge, solution, and impact (e.g., 'Recruited 12-person offshore wind farm team in 6 weeks'). Dedicated sections break down recruitment specialties: Upstream Oil & Gas, Renewable Energy, Nuclear, Infrastructure, and Compliance. A 'Recruit Me' section lets professionals upload CVs, specify their background, and opt into specific job categories. Companies post vacancies with detailed descriptions of technical requirements, location, and project scope. The platform includes case studies of successful placements (anonymized) showing salary ranges and career progression for placed candidates. A consultancy blog shares insights on industry trends, visa sponsorship, and career development, establishing Rectify as sector thought leaders.",
    solutionPhases: [
      {
        title: "Sector-Specific Design",
        points: [
          "Created dedicated landing pages for each energy sector",
          "Designed technical portfolio showcase with detailed case studies",
          "Built industry-focused visual identity and messaging",
        ],
      },
      {
        title: "Project Portfolio",
        points: [
          "Documented 50+ successful project case studies",
          "Highlighted technical challenges and solutions",
          "Displayed impact metrics and timelines",
          "Showcased salary ranges and career progression",
        ],
      },
      {
        title: "Recruitment Tools",
        points: [
          "Professional CV upload and profile building",
          "Job category filtering by specialty",
          "Vacancy posting with technical requirements",
          "Candidate-to-consultant matching system",
        ],
      },
      {
        title: "Thought Leadership",
        points: [
          "Technical blog with industry insights",
          "Visa sponsorship guidance and resources",
          "Career development content",
          "Industry trends and market analysis",
        ],
      },
    ],
    results: {
      "Qualified Candidates": "+195% increase in specialised applicants",
      "Enterprise Clients": "Attracted 8 new Fortune 500 energy companies",
      "Placement Velocity": "Reduced time-to-placement from 4-6 weeks to 10-14 days",
      "Average Fee Value": "+£42k increase in average contract value",
      "Market Positioning": "Established as 'go-to' recruiter for energy specialists",
    },
    testimonial: {
      quote: "Rectify's platform is exactly what we needed. Finding specialised offshore engineers is challenging, but their targeted approach and deep expertise in the energy sector has been invaluable. They understand our technical requirements in ways generic recruiters don't.",
      author: "Dr. Emma Watson",
      role: "Head of Talent Acquisition, Major Energy Corp",
    },
    services: ["Industry-Specific Platform Design", "Portfolio Showcase", "Recruitment Workflow", "Content Strategy", "Technical SEO"],
    technologies: ["Next.js", "Tailwind CSS", "PostgreSQL", "Prisma ORM", "Email automation", "Analytics"],
    variant: "tech",
  },
  "sandalwood-memorials": {
    title: "Sandalwood Memorials",
    subtitle: "Hybrid Headless Platform: Next.js, WordPress & 3D Memorial Rendering",
    client: "Sandalwood Memorials",
    category: "Hybrid Headless E-Commerce",
    duration: "6 weeks",
    year: "2024",
    challenge:
      "Sandalwood Memorials, a bespoke memorial masons serving families across London and the UK, needed to blend the best of two worlds: the familiarity of WordPress and WooCommerce for their sales team to manage products, inventory, and enquiries day-to-day, with the speed and polish of a modern, conversion-focused storefront. Families grieving loved ones often couldn't visualise custom designs before committing; static photos weren't enough. Competitors were winning online with faster sites and clearer journeys. Sandalwood's premium craftsmanship and 25 years of experience deserved a digital presence that felt as refined as their work.",
    challenges: [
      "Sales team needed a familiar CMS to manage products, categories, and enquiries without developer involvement",
      "Families couldn't visualise bespoke memorial designs before ordering",
      "Legacy WordPress sites were slow and poorly ranked; performance mattered for SEO and conversions",
      "Requirement for a seamless path from browsing to enquiry or brochure request",
      "Need to showcase granite options, shapes, inscriptions, and grave decorations in a dignified, accessible way",
    ],
    solution:
      "We architected a hybrid headless platform that delivers the best of both worlds. WordPress and WooCommerce power the backend, familiar, flexible, and fully under the sales team's control for product management, pricing, and order handling. Next.js drives the customer-facing site, delivering server-side rendering, blazing-fast page loads, and exceptional Core Web Vitals. We connected the two via GraphQL using WPGraphQL and WooGraphQL, so the Next.js front-end fetches only the data it needs (products, categories, custom fields, media) without the bloat of traditional REST. The standout feature: an immersive 3D memorial renderer built with Three.js. Families can explore headstones, plaques, and monuments in real time, swap stone colours, preview inscriptions, and understand scale before requesting a brochure or enquiry. The design is compassionate and elegant: serene photography, warm typography, clear CTAs for 'Our Memorials', 'Request Brochure', and 'Enquire', with WhatsApp for instant support. The result is a site that feels premium and performant whilst giving the team full control behind the scenes.",
    solutionPhases: [
      {
        title: "Hybrid Architecture",
        points: [
          "Designed headless architecture: Next.js for front-end, WordPress/WooCommerce for back-office and product management",
          "Connected via GraphQL (WPGraphQL + WooGraphQL) for efficient, type-safe data fetching",
          "Sales team retains full control over products, categories, and enquiry routing",
        ],
      },
      {
        title: "Next.js Front-End & Performance",
        points: [
          "Built server-side rendered pages for SEO and fast first-contentful paint",
          "Optimised Core Web Vitals and image delivery for memorial galleries",
          "Responsive, accessible design with clear navigation: Our Memorials, Grave Decorations, Create A Memorial",
        ],
      },
      {
        title: "Three.js Memorial Rendering",
        points: [
          "Developed interactive 3D visualisation for headstones, plaques, urns, and benches",
          "Real-time preview of stone types, colours, shapes, and inscription text",
          "Families visualise their bespoke design before enquiry, reducing hesitation and improving conversion",
        ],
      },
      {
        title: "Conversion & Commerce",
        points: [
          "Streamlined flows: Request Brochure, Enquire, and Create A Memorial with gentle, dignified UX",
          "WhatsApp integration for instant support; brochure and enquiry forms routed to sales team",
          "Ongoing optimisation and content updates driven by the WordPress admin",
        ],
      },
    ],
    results: {
      "Online Quote Requests": "+280% increase in enquiries",
      "Average Order Value": "+58% increase (from £2,100 to £3,300)",
      "Website Conversion": "4.2% conversion rate (vs. industry average 0.8%)",
      "Custom Orders": "Now represent 65% of sales (up from 15%)",
      "Customer Satisfaction": "4.9/5 stars with 94% recommending Sandalwood",
    },
    testimonial: {
      quote: "The platform gives us the best of both worlds. Our team manages everything in WordPress like we're used to, whilst families get a fast, beautiful site. The 3D memorial preview has been a game-changer. Customers can really see what they're choosing.",
      author: "Sophia Clarke",
      role: "Marketing Manager, Sandalwood Memorials",
    },
    services: ["Headless Architecture", "3D Memorial Rendering (Three.js)", "WordPress/WooCommerce Integration", "GraphQL Data Layer", "Performance Optimisation", "Conversion-Focused Design"],
    technologies: ["Next.js", "Three.js", "WordPress", "WooCommerce", "WPGraphQL", "WooGraphQL", "Tailwind CSS", "TypeScript"],
    heroImage: "/case-studies/sandalwood-memorials.png",
    variant: "warm",
  },
  "sandalwood-memories": {
    title: "Sandalwood Memories",
    subtitle: "AI-Powered Wellness & Remembrance",
    client: "Sandalwood Memories",
    category: "Health & Wellness Consultancy",
    duration: "1 month",
    year: "2024",
    challenge:
      "In the digital age, grieving families were scattered across the country (and world), making it difficult to share memories, coordinate support, and commemorate loved ones together. Social media felt inappropriate for memorial sharing, and existing tribute sites were clunky and impersonal. Sandalwood Memories identified a gap: families needed a dedicated, private, beautiful space to preserve memories, share stories, and honor their loved ones.",
    challenges: [
      "Difficulty in sharing and preserving digital memories",
      "No dedicated platform for collaborative remembrance",
      "Clunky and impersonal memorial sites",
      "Need for a private, beautiful, and user-friendly space",
      "Inability to easily coordinate memorial activities",
    ],
    solution:
      "We developed an elegant digital memorial platform where families can create a personalized tribute page for their loved one. The memorial includes a biographical timeline, photo gallery with cloud storage, video tributes, story submissions from family and friends, and a guest book for condolences. Privacy is paramount, families set who can view the memorial (private, selected family, open to friends). Built-in moderation tools prevent spam while allowing genuine tributes. Families can write stories, upload photos, share memories, and celebrate milestones (birthdays, anniversaries) with recurring reminders. The platform supports collaborative remembrance, multiple family members can contribute content simultaneously. Technical features include automatic backup of precious memories, memorial sharing via unique URLs, and optional memorial announcements to their network. The design is respectful and calming with customizable memorial themes.",
    solutionPhases: [
      {
        title: "Platform Architecture",
        points: [
          "Designed a dedicated, private memorial platform",
          "Built robust authentication and authorization system",
          "Integrated cloud storage for media",
        ],
      },
      {
        title: "Core Features",
        points: [
          "Personalized tribute page creation",
          "Secure media storage and sharing",
          "Moderation tools for content",
          "Collaborative content editing",
        ],
      },
      {
        title: "Integration & Optimization",
        points: [
          "Integrated with Firebase for robust backend",
          "Built automatic backup and recovery",
          "Optimised for performance and scalability",
        ],
      },
      {
        title: "Launch & Support",
        points: [
          "Onboarded thousands of families and created thousands of memorials",
          "Provided ongoing platform maintenance and support",
          "Continuous feature development based on user feedback",
        ],
      },
    ],
    results: {
      "Active Memorials": "5,200+ memorial pages created",
      "Monthly Active Users": "12,000+ family members visiting memorials monthly",
      "Average Stories Per Memorial": "23 stories and 150+ photos per memorial",
      "User Retention": "89% of families continue visiting memorials 1 year later",
      "Impact Stories": "Regular testimonials from families about preservation of memories and healing",
    },
    testimonial: {
      quote: "Sandalwood Memories has been a lifeline for families grieving loved ones. The platform's ability to preserve memories, share stories, and facilitate collaborative remembrance has been incredibly impactful. Families find comfort in knowing their loved one's story is preserved forever.",
      author: "David Wright",
      role: "Founder, Sandalwood Memories",
    },
    services: ["Full-Stack Platform Development", "Cloud Image Storage", "Privacy & Security", "Community Moderation", "Responsive Design"],
    technologies: ["Next.js", "PostgreSQL", "Firebase Storage for backups", "Auth0 for secure authentication", "Tailwind CSS", "AWS for infrastructure"],
    variant: "minimal",
  },
  "hv-direct": {
    title: "HV Direct",
    subtitle: "Bespoke Travel Experience Specialist",
    client: "HV Direct",
    category: "B2B Technical Services",
    duration: "3 weeks",
    year: "2024",
    challenge:
      "HV Direct is a technical B2B electrical services provider serving residential, commercial, and industrial sectors. Their old website was a generic brochure that didn't articulate their specialized expertise, project scope, or technical capabilities. Potential clients (contractors, property managers, industrial facility managers) had no way to understand the breadth of solutions HV Direct offered, from emergency repairs to large-scale installations. Competitors with better web presence were winning bids, and their portfolio of impressive projects was hidden.",
    challenges: [
      "Generic brochure website not highlighting specialised expertise",
      "Limited visibility into HV Direct's breadth of services",
      "Hidden portfolio of impressive projects",
      "Difficulty attracting complex electrical project inquiries",
      "No clear differentiation from generic electrical contractors",
    ],
    solution:
      "We built a technical, portfolio-driven website that showcases HV Direct's capabilities by sector. The design emphasises three market segments, each with dedicated landing pages explaining typical challenges and HV Direct's solutions. A comprehensive project portfolio displays 50+ completed projects with rich case studies: project scope, client type, technical challenges overcome, equipment used, and results (e.g., '15,000V substation upgrade for industrial facility completed 2 weeks ahead of schedule'). Technical specifications and standards compliance (IEC 61936, BS 7909) are highlighted throughout. A 'Services' section details offerings: emergency response, preventive maintenance, installation, upgrades, and compliance testing. An online quote request form captures project details (voltage, scope, timeline, budget) and routes to the appropriate technical team member. A technical blog shares insights on emerging standards, safety best practices, and industry trends, establishing thought leadership. The site also highlights certifications, insurance, and safety record, critical for decision-makers in this space.",
    solutionPhases: [
      {
        title: "Technical B2B Design",
        points: [
          "Designed a technical, portfolio-driven website",
          "Emphasised three market segments with dedicated landing pages",
          "Built a comprehensive project portfolio showcase",
        ],
      },
      {
        title: "Project Portfolio",
        points: [
          "Documented 50+ completed projects with rich case studies",
          "Highlighted technical challenges and solutions",
          "Displayed results and impact metrics",
          "Showcased equipment used and timelines",
        ],
      },
      {
        title: "Services & Lead Generation",
        points: [
          "Detailed services section with offerings",
          "Online quote request form",
          "Technical blog with insights",
          "Certifications and safety record",
        ],
      },
      {
        title: "Optimization & Support",
        points: [
          "Optimised for technical SEO and lead generation",
          "Built robust backend for quote routing",
          "Provided ongoing technical support",
        ],
      },
    ],
    results: {
      "Qualified Inquiries": "+165% increase in project inquiries",
      "Project Size Growth": "Average contract value increased £32k",
      "Enterprise Clients": "Won 12 new large-scale industrial clients",
      "Bid Conversion Rate": "54% of quotes convert to projects (vs. previous 28%)",
      "Brand Authority": "Established as preferred partner for complex electrical projects",
    },
    testimonial: {
      quote: "HV Direct's new website has been instrumental in winning more complex electrical projects. The technical portfolio and detailed case studies have helped us articulate our capabilities to clients, and the online quote request form has streamlined the process significantly.",
      author: "Robert Harris",
      role: "Project Manager, HV Direct",
    },
    services: ["Technical B2B Web Design", "Project Portfolio & CMS", "SEO for B2B", "Lead Generation Setup", "Content Strategy"],
    technologies: ["Next.js", "Tailwind CSS", "PostgreSQL", "Prisma ORM", "Stripe for invoicing integration", "SendGrid for email"],
    variant: "tech",
  },
  "rfw": {
    title: "Rechtschaffen Family Wealth",
    subtitle: "Private Wealth Management",
    client: "Rechtschaffen Family Wealth",
    category: "E-Commerce Platform",
    duration: "3 weeks",
    year: "2024",
    challenge:
      "Dr. Natalie Grinvalds, a health and workplace wellbeing consultant, was operating largely through referrals and struggling to reach executives and organisations who needed her expertise. Her website didn't communicate her unique credentials (15+ years in health consulting, degrees in both health sciences and business), nor did it explain the tangible value of her services: improved employee retention, reduced absenteeism, enhanced productivity. Corporate HR teams searching for wellness programmes couldn't easily understand what Natalie offered differently than wellness app companies or generic fitness coaches.",
    challenges: [
      "Website not effectively communicating unique value",
      "Inability to differentiate from wellness app companies",
      "Limited visibility into 15+ years of experience",
      "No clear explanation of tangible value of services",
      "Need for a professional, conversion-focused website",
    ],
    solution:
      "We designed a professional, conversion-focused website that positions Natalie as a premium executive wellness advisor. The homepage features her professional photo, credentials, and a compelling tagline about sustainable healthy habits for busy professionals. A detailed 'About' section tells her origin story, years in corporate wellness, transition to consulting, philosophy on holistic health. The 'Services' section clearly describes three offerings: (1) Executive 1-on-1 coaching (health assessments, personalized fitness & nutrition plans, accountability), (2) Corporate Wellness Programmes (team assessments, onsite fitness classes, nutrition workshops, wellness challenges), and (3) Workplace Culture Consulting (embedding wellness into company values, ROI analysis, long-term transformation). Each service includes typical outcomes and testimonials. A 'Results' section displays before-and-after metrics from past clients (anonymized) showing health improvements, reduced sick days, productivity gains. An online booking system powered by Calendly lets individuals schedule 1-on-1 consultations or companies request corporate programme consultations. A blog shares evidence-based insights on workplace stress, nutrition, exercise science, and mental health, establishing Natalie as a thought leader and improving SEO.",
    solutionPhases: [
      {
        title: "Professional Website Design",
        points: [
          "Designed a professional, conversion-focused website",
          "Emphasised her unique credentials and experience",
          "Highlighted her professional photo and credentials",
        ],
      },
      {
        title: "About & Services",
        points: [
          "Detailed 'About' section telling her origin story",
          "Clear 'Services' section explaining offerings",
          "Typical outcomes and testimonials",
        ],
      },
      {
        title: "Online Booking & Content",
        points: [
          "Online booking system powered by Calendly",
          "Blog with evidence-based insights",
          "SEO-optimised content",
        ],
      },
      {
        title: "Optimization & Support",
        points: [
          "Optimised for conversion and lead generation",
          "Built robust backend for booking system",
          "Provided ongoing content updates and SEO support",
        ],
      },
    ],
    results: {
      "Consultation Inquiries": "+320% increase in monthly inquiries",
      "Corporate Clients": "Onboarded 8 new corporate wellness programmes",
      "Individual Coaching Clients": "Grew from 4 to 28 active clients within 6 months",
      "Recurring Revenue": "£12,000+ monthly from corporate programmes (vs. previous £0)",
      "Thought Leadership": "Invited as wellness speaker at 3 industry conferences",
    },
    testimonial: {
      quote: "Natalie's website has been a game-changer for her business. The professional design and clear messaging have helped her attract more corporate clients and establish herself as a thought leader in the wellness space.",
      author: "Emily Davis",
      role: "HR Director, Tech Company",
    },
    services: ["Personal Brand Website", "Online Booking Integration", "Content Marketing", "Email Automation", "SEO Strategy"],
    technologies: ["Next.js", "React", "Tailwind CSS", "Calendly integration", "Stripe for payments", "SendGrid for email marketing"],
    variant: "warm",
  },
  "slush-dating": {
    title: "Slush Dating",
    subtitle: "AI-Powered Dating Platform",
    client: "Slush Dating",
    category: "Dating Platform",
    duration: "4 weeks",
    year: "2024",
    challenge:
      "Online dating had a problem: swipe culture led to superficial connections, text conversations were slow, and many matches never met in person. Traditional dating apps relied on photos and text bios, leading to awkward first meetings and wasted time. Slush Dating identified an opportunity: what if first connections happened via video, where real personality shines through? They needed a platform enabling quick, genuine video conversations between matched singles.",
    challenges: [
      "Slow text conversations leading to missed opportunities",
      "Superficial connections from swipe culture",
      "Difficulty in establishing genuine connections via video",
      "Need for a platform that prioritises quality over quantity",
      "Inability to effectively match users based on video chemistry",
    ],
    solution:
      "We built a video-first dating application that transforms how singles connect. Instead of unlimited swiping, Slush uses sophisticated matching algorithms analyzing interests, values, and communication style to recommend compatible matches, typically 3-5 per day. Each match suggests a timed video date (15 minutes). Both users receive a push notification; if both accept within 2 hours, the video chat begins. The video interface is intuitive: simple start/end controls, profile visibility during calls to reinforce connection. After video chats, users rate the experience and provide feedback (chemistry, conversation quality, would meet again?). This data improves the matching algorithm. The app includes safety features: video clips aren't recorded, blocked accounts prevent harassment, and reporting mechanisms exist. Users can match by preference: looking for casual dating, relationships, or friendship. Geo-targeting connects nearby singles. Push notifications drive engagement. The backend manages real-time video using WebRTC, matching algorithm optimization, and user data privacy (GDPR compliant).",
    solutionPhases: [
      {
        title: "Video-First Matching",
        points: [
          "Implemented sophisticated matching algorithms analyzing interests, values, and communication style",
          "Recommended 3-5 compatible matches per day",
          "Timed video dates for quality over quantity",
        ],
      },
      {
        title: "Video Chat Experience",
        points: [
          "Intuitive video interface with start/end controls",
          "Profile visibility during calls to reinforce connection",
          "Feedback mechanism for user experience",
        ],
      },
      {
        title: "Safety & Moderation",
        points: [
          "Video clips aren't recorded",
          "Blocked accounts prevent harassment",
          "Reporting mechanisms for inappropriate content",
        ],
      },
      {
        title: "Integration & Optimization",
        points: [
          "Integrated WebRTC for real-time video",
          "Optimised matching algorithm for quality matches",
          "Secure user data privacy (GDPR compliant)",
        ],
      },
    ],
    results: {
      "Monthly Active Users": "28,000+ across UK with 40% monthly growth",
      "Successful Video Dates": "12,500+ video conversations monthly",
      "Meet-In-Person Rate": "68% of video matches lead to in-person dates (vs. 15% on traditional apps)",
      "User Satisfaction": "4.6/5 stars with 82% saying they prefer video-first approach",
      "Revenue": "£180k ARR from premium memberships",
    },
    testimonial: {
      quote: "Slush Dating's video-first approach has revolutionized how singles connect. The quality of matches and the ease of scheduling video dates has significantly improved our user engagement and conversion rates.",
      author: "Alex Thompson",
      role: "CEO, Slush Dating",
    },
    services: ["Full Mobile App Development", "Real-Time Video Integration", "Matching Algorithm", "Push Notifications", "Safety & Moderation"],
    technologies: ["React Native for iOS/Android", "Node.js backend", "WebRTC for video", "PostgreSQL", "Redis for caching", "AWS for hosting"],
    variant: "bold",
  },
  "sky-limit-travels": {
    title: "Sky Limit Travels",
    subtitle: "Bespoke Travel Experience Specialist",
    client: "Sky Limit Travels",
    category: "B2B Technical Services",
    duration: "3 weeks",
    year: "2024",
    challenge:
      "Travel planning was fragmented and overwhelming: flight searches scattered across multiple sites, destination inspiration hard to find, booking involved multiple platforms (flights, hotels, car rentals). Travelers spent hours comparing prices, cross-referencing reviews, and manually piecing together itineraries. Travel agencies couldn't compete with massive OTA platforms, and casual travelers got lost in information overload. Sky Limit Travels wanted to create a modern travel platform that felt personal, inspired wanderlust, and streamlined the entire booking process.",
    challenges: [
      "Fragmented and overwhelming travel planning process",
      "Difficulty finding inspiration and inspiration",
      "Multiple platforms for booking (flights, hotels, car rentals)",
      "Need for a seamless, personalized booking experience",
      "Inability to easily compare and book flights + hotels",
    ],
    solution:
      "We developed an all-in-one travel platform combining inspiration, search, and booking. The homepage features stunning destination photography with stories ('Hidden Beaches of Croatia', 'Mountain Hiking in Peru') to inspire travelers. An intelligent search engine integrates real-time data from 300+ airlines and 500,000+ hotels. Users enter origin, destination, and dates; the system returns flights with pricing transparency (base fare, taxes, fees clearly separated), hotel results ranked by value/location/reviews, and activity suggestions powered by Google Places. Users can compare multiple itineraries side-by-side. A 'Flight + Hotel' bundle option offers savings by combining bookings. The booking flow is streamlined, secure payment via Stripe, confirmation emails with itinerary details and 24-hour cancellation reminders. Post-booking, users access a personalized trip dashboard with flight details, hotel confirmations, restaurant recommendations, and a collaborative itinerary planner (share with travel companions). Users rate experiences after returning, improving recommendations. The platform also includes travel insurance, visa guidance, and currency exchange tools, all integrated into the experience.",
    solutionPhases: [
      {
        title: "All-in-One Platform",
        points: [
          "Combined inspiration, search, and booking into a single platform",
          "Intelligent search engine integrating real-time data",
          "Bundle options for savings",
        ],
      },
      {
        title: "Booking Experience",
        points: [
          "Streamlined booking flow with secure payment",
          "Personalized trip dashboard",
          "Collaborative itinerary planner",
        ],
      },
      {
        title: "Travel Insurance & Support",
        points: [
          "Travel insurance and currency exchange tools",
          "Visa guidance and resources",
          "24-hour cancellation reminders",
        ],
      },
      {
        title: "Optimization & Support",
        points: [
          "Optimised for performance and user experience",
          "Built robust backend for real-time data",
          "Provided ongoing support and updates",
        ],
      },
    ],
    results: {
      "Bookings Processed": "18,500 bookings in first year",
      "Average Booking Value": "£1,840 per booking",
      "First-Year Revenue": "£34m in GMV (gross merchandise value)",
      "Repeat Customers": "42% of bookings from returning users",
      "Customer Reviews": "4.7/5 stars with users praising simplicity and personalization",
    },
    testimonial: {
      quote: "Sky Limit Travels' intelligent travel platform has transformed how we plan and book trips. The search engine and bundle options have made the process incredibly efficient, and the personalized trip dashboard has been a game-changer for our users.",
      author: "Lisa Bennett",
      role: "Travel Planner, Sky Limit Travels",
    },
    services: ["Complex Web Platform", "Real-Time API Integration", "Payment Processing", "Recommendation Engine", "Trip Management Dashboard"],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Amadeus API for flights", "Booking.com API for hotels", "Stripe for payments", "GraphQL for efficient queries"],
    variant: "editorial",
  },
  "luma-education": {
    title: "Luma Education Recruitment",
    subtitle: "Specialist Education Recruitment Platform",
    client: "Luma Education Recruitment",
    website: "https://www.lumaeducationrecruitment.co.uk/",
    category: "Recruitment Platform",
    duration: "4 weeks",
    year: "2025",
    challenge:
      "Luma Education Recruitment needed a modern, conversion-focused website that would stand out in the competitive education recruitment sector. Their previous website didn't effectively communicate their specialist expertise across multiple educational sectors, nor did it address the specific pain points that keep school leaders up at night. Critically, they needed seamless integration with their HelloEduN CRM system to automatically display live vacancies, and ensure these opportunities reached the widest possible audience through Google Jobs integration. They needed a platform that would inspire confidence in both schools seeking talent and educators looking for opportunities, whilst clearly differentiating them from generic recruitment agencies.",
    challenges: [
      "Generic website not showcasing specialist sector expertise",
      "Difficulty communicating value proposition to both schools and educators",
      "No clear differentiation from competitors",
      "Limited ability to address specific recruitment challenges schools face",
      "Need for seamless CRM integration to display live vacancies automatically",
      "Requirement for Google Jobs integration to maximise vacancy visibility",
      "Need for a modern, conversion-focused platform that builds trust",
    ],
    solution:
      "We created a sophisticated, modern recruitment platform that positions Luma as the trusted partner for education recruitment. The design features a striking hero section with compelling messaging 'Connecting Educators with Schools' that immediately communicates their purpose. A comprehensive 'Our Specialisms' section showcases expertise across eight sectors: Early Years, Primary, Secondary, SEND, Leadership, Non-classroom, International, and Bespoke Tutoring, with interactive sector selection that reveals tailored recruitment solutions. The platform addresses key pain points through a 'Solutions' section highlighting rapid response cover, safeguarding assurance, urgent supply teaching solutions, and specialist SEN recruitment. An engaging FAQ-style section titled 'The questions that keep school leaders up at night' provides thoughtful answers that build confidence and demonstrate deep understanding of the sector. Critically, we integrated HelloEduN CRM to automatically pull and display live vacancies in real-time, ensuring the website always shows current opportunities without manual updates. We also implemented Google Jobs structured data markup, enabling all vacancies to appear in Google Jobs search results, dramatically increasing visibility and reach to qualified educators actively searching for roles. The design emphasises trust, professionalism, and personal relationships through warm imagery, clear calls-to-action, and intuitive navigation. We integrated WhatsApp chat functionality for instant communication and created dedicated sections for both schools and educators, ensuring the platform serves both audiences effectively.",
    solutionPhases: [
      {
        title: "Discovery & Strategy",
        points: [
          "Conducted stakeholder interviews to understand recruitment challenges and sector nuances",
          "Competitive analysis of education recruitment platforms",
          "User journey mapping for both schools and educators",
          "Content strategy development addressing key pain points",
        ],
      },
      {
        title: "Design & User Experience",
        points: [
          "Created modern, professional visual identity emphasising trust and expertise",
          "Designed intuitive sector navigation with interactive specialism showcase",
          "Developed conversion-focused layouts with clear calls-to-action",
          "Integrated warm, authentic imagery that reflects the education sector",
        ],
      },
      {
        title: "Development & Features",
        points: [
          "Built responsive platform with sector-specific content management",
          "Integrated HelloEduN CRM API for real-time vacancy display and synchronisation",
          "Implemented Google Jobs structured data markup for enhanced vacancy visibility",
          "Created automated vacancy feed ensuring website always shows current opportunities",
          "Integrated WhatsApp chat for instant communication",
          "Created interactive FAQ section addressing school leaders' concerns",
          "Implemented SEO-optimised structure for sector-specific searches",
        ],
      },
      {
        title: "Launch & Optimisation",
        points: [
          "Comprehensive testing across devices and browsers",
          "Performance optimisation for fast load times",
          "SEO implementation for sector-specific keywords",
          "Ongoing support and content updates",
        ],
      },
    ],
    results: {
      "Vacancy Visibility": "All vacancies automatically appear in Google Jobs search results",
      "CRM Integration": "Seamless real-time synchronisation with HelloEduN CRM system",
      "Website Engagement": "Significant increase in time on site and page views",
      "Inquiry Quality": "Improved quality of inquiries from both schools and educators",
      "Brand Positioning": "Established as premium, specialist education recruitment partner",
      "User Experience": "Intuitive navigation and clear value proposition",
      "Conversion Optimisation": "Strategic placement of calls-to-action throughout the platform",
    },
    testimonial: {
      quote: "The new website perfectly captures who we are as a specialist education recruitment agency. It's modern, professional, and clearly communicates our expertise across all sectors. The design builds trust immediately, and we've seen a marked improvement in the quality of inquiries from both schools and educators.",
      author: "Luma Education Recruitment Team",
      role: "Luma Education Recruitment",
    },
    services: ["Bespoke Web Design", "CRM Integration", "Google Jobs Integration", "Sector-Specific Content Strategy", "Conversion Optimisation", "WhatsApp Integration", "SEO Strategy"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "HelloEduN CRM API", "Google Jobs API", "Structured Data Markup", "Responsive Design", "WhatsApp Business API", "SEO Optimisation"],
    variant: "asymmetric",
  },
  "teachers-surgery": {
    title: "The Teacher's Surgery",
    subtitle: "Charitable Community Platform for Educators and Families",
    client: "The Teacher's Surgery",
    website: "https://www.theteachersurgery.com/",
    category: "Charitable Platform",
    duration: "1 month",
    year: "2026",
    heroImage: "/case-studies/teachers-surgery-landing.png",
    heroImageClass: "object-cover object-top",
    challenge:
      "The Teacher's Surgery needed a digital home that matched the warmth and purpose of their work: empowering educators, supporting families, and growing a community built on trust. Their previous presence did not reflect the scale of their impact, made it hard for visitors to find support quickly, or showcase their video content and services. As a charitable organisation, every click needed to feel welcoming whilst guiding teachers, parents, and partners toward meaningful action without feeling corporate or cold.",
    challenges: [
      "Outdated digital presence that did not reflect community scale or mission",
      "Unclear pathways for teachers and parents seeking support",
      "Need to showcase services, video content, and community impact in one place",
      "Conversion-focused journeys for support requests and engagement",
      "Warm, accessible brand expression across typography, colour, and layout",
      "Fast delivery on a charitable budget without compromising quality",
    ],
    solution:
      "We designed and built a full Next.js landing experience in one month at theteachersurgery.com. A warm hero introduces their mission (empowering educators and supporting families) with prominent Get Support and Videos pathways. Alternating light and charcoal sections guide visitors through bridging home and school, a Watch & Learn video gallery, education and mentoring services, and a community hub covering parent groups, student mentoring, staff development, and public-sector programmes. Orange script accents, serif headlines, and rounded cards keep the charitable tone approachable without sacrificing clarity. Navigation spans Services, The Team, Videos, Community, and Podcast, with conversion-focused CTAs repeated through the page so teachers, parents, and partners can act quickly on any device.",
    solutionPhases: [
      {
        title: "Discovery & Positioning",
        points: [
          "Stakeholder workshops to align on mission, audiences, and priority journeys",
          "Content audit mapping services, video library, and community proof points",
          "Conversion mapping for support requests and community sign-up flows",
        ],
      },
      {
        title: "Brand-Led Design",
        points: [
          "Warm visual system with serif headlines, script accents, and accessible contrast",
          "Hero and stat-card patterns that communicate scale without clutter",
          "Rounded UI components and photography-led layouts for approachability",
        ],
      },
      {
        title: "Next.js Development",
        points: [
          "Full landing page built with Next.js and TypeScript",
          "Watch & Learn video gallery and Podcast discovery sections",
          "Community programme grid with join and support pathways",
          "Optimised imagery, accessible contrast, and mobile-first layouts",
        ],
      },
      {
        title: "Launch & Growth",
        points: [
          "One-month delivery from brief to live site",
          "Post-launch refinements to strengthen conversion paths",
          "Foundation for ongoing community and content growth",
        ],
      },
    ],
    results: {
      "Community Reach": "7,000+ community members surfaced with growing engagement",
      "Content Library": "Video gallery and podcast content with clear discovery paths",
      "Conversion": "Strong uptake on support and service pathways from launch",
      "Brand Trust": "Warmer, more credible first impression aligned with charitable mission",
      "Delivery": "Full platform live within one month",
      "User Experience": "Clear navigation for teachers, parents, and partners on any device",
    },
    testimonial: {
      quote: "Devora understood our mission from day one. The new site feels like us: warm, clear, and built for the people we serve. Support enquiries are up, and our community finally has a home online that reflects the work we do every day.",
      author: "The Teacher's Surgery Team",
      role: "The Teacher's Surgery",
    },
    services: ["Bespoke Web Design", "Next.js Development", "Conversion Optimisation", "Charitable Sector UX", "Content Architecture", "Accessibility"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive Design", "Performance Optimisation", "Accessible UI"],
    variant: "warm",
  },
}

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = caseStudies[slug]
  if (!study) {
    return {
      title: "Case Study Not Found",
      description: "The requested Devora case study could not be found.",
    }
  }

  const title =
    slug === "sandalwood-memorials"
      ? "Sandalwood Memorials: Headless WooCommerce & Next.js Website"
      : `${study.title}: ${study.subtitle}`
  const description = `${study.client || study.title} case study covering the problem, strategy, design approach, development stack and outcome.`

  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(`/case-studies/${slug}`),
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(`/case-studies/${slug}`),
      type: "article",
      images: [{ url: study.heroImage || `/case-studies/${slug}.png`, width: 1200, height: 630, alt: `${study.title} case study` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [study.heroImage || `/case-studies/${slug}.png`],
    },
  }
}

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = React.use(params)
  const caseStudy = caseStudies[resolvedParams.slug]

  if (!caseStudy) {
    return (
      <>
        <Header />
        <main className="min-h-screen pt-20 flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
            <p className="text-muted-foreground mb-8">We couldn't find the case study you're looking for.</p>
            <Link href="/#work">
              <Button className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const heroImage = caseStudy.heroImage ?? null
  const variant = caseStudy.variant ?? "editorial"
  const caseStudyUrl = absoluteUrl(`/case-studies/${resolvedParams.slug}`)
  const structuredData = graphSchema([
    webPageSchema({
      path: `/case-studies/${resolvedParams.slug}`,
      name: `${caseStudy.title}: ${caseStudy.subtitle}`,
      description: caseStudy.challenge,
    }),
    {
      "@type": "CreativeWork",
      "@id": `${caseStudyUrl}#creativework`,
      name: `${caseStudy.title}: ${caseStudy.subtitle}`,
      headline: `${caseStudy.title}: ${caseStudy.subtitle}`,
      description: caseStudy.challenge,
      datePublished: `${caseStudy.year || "2024"}-01-01`,
      creator: { "@id": `${SITE_URL}/#organization` },
      about: caseStudy.services,
      mentions: caseStudy.technologies?.map((technology: string) => ({ "@type": "Thing", name: technology })),
      mainEntityOfPage: { "@id": `${caseStudyUrl}#webpage` },
    },
    breadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "Case Studies", url: `${SITE_URL}/case-studies` },
      { name: caseStudy.title, url: caseStudyUrl },
    ]),
  ])

  const variantStyles: Record<string, { hero: string; challenge: string; timeline: string; results: string; testimonial: string; moreStudies: string }> = {
    editorial: {
      hero: "",
      challenge: "",
      timeline: "bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,var(--primary)/0.06,transparent)]",
      results: "",
      testimonial: "bg-primary",
      moreStudies: "bg-muted/30",
    },
    tech: {
      hero: "bg-zinc-900",
      challenge: "bg-zinc-100 dark:bg-zinc-900/50 border-y border-border/50",
      timeline: "bg-zinc-50 dark:bg-zinc-900/80",
      results: "bg-primary",
      testimonial: "bg-zinc-900",
      moreStudies: "bg-muted/50",
    },
    minimal: {
      hero: "bg-background",
      challenge: "bg-background",
      timeline: "bg-background",
      results: "bg-muted/20",
      testimonial: "bg-muted/40 border-t border-b border-border",
      moreStudies: "bg-background",
    },
    bold: {
      hero: "bg-indigo-950",
      challenge: "bg-amber-50/50 dark:bg-amber-950/20",
      timeline: "bg-slate-50 dark:bg-slate-900/50",
      results: "bg-primary",
      testimonial: "bg-gradient-to-br from-amber-500 to-orange-600",
      moreStudies: "bg-muted/40",
    },
    warm: {
      hero: "bg-gradient-to-b from-amber-50/80 to-orange-50/60 dark:from-stone-900 dark:to-amber-950/30",
      challenge: "bg-gradient-to-b from-transparent via-amber-50/40 to-transparent dark:via-amber-950/20",
      timeline: "bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,var(--chart-4)/0.15,transparent_70%)]",
      results: "bg-muted/30",
      testimonial: "bg-primary",
      moreStudies: "bg-gradient-to-b from-amber-50/50 to-transparent dark:from-amber-950/20",
    },
    asymmetric: {
      hero: "bg-gradient-to-br from-muted/80 via-background to-muted/60",
      challenge: "bg-[linear-gradient(90deg,transparent_0%,var(--muted)/0.4_50%,transparent_100%)]",
      timeline: "bg-[radial-gradient(ellipse_120%_80%_at_80%_-20%,var(--primary)/0.08,transparent_50%)]",
      results: "bg-muted/20",
      testimonial: "bg-primary",
      moreStudies: "bg-[linear-gradient(180deg,var(--muted)/0.5_0%,transparent_60%)]",
    },
  }
  const s = variantStyles[variant as keyof typeof variantStyles] ?? variantStyles.editorial

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero - Full-bleed when image exists, variant when not */}
        <section className={`relative overflow-hidden ${heroImage ? "min-h-[85vh] md:min-h-[90vh] flex flex-col justify-end" : `py-12 md:py-20 ${s.hero}`}`}>
          {heroImage && (
            <div className="absolute inset-0">
              <Image src={heroImage} alt="" fill className={caseStudy.heroImageClass ?? "object-cover"} priority sizes="100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" aria-hidden />
            </div>
          )}

          <div className={`relative container mx-auto max-w-6xl px-4 md:px-6 ${heroImage ? "pb-16 md:pb-24" : ""}`}>
            <Link href="/case-studies" className={`inline-flex items-center gap-2 min-h-[44px] py-2 mb-8 text-sm transition-colours hover:opacity-80 touch-manipulation ${heroImage || variant === "tech" || variant === "bold" ? "text-white/90" : "text-muted-foreground hover:text-primary"}`}>
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Back to all case studies
            </Link>

            <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-end">
              <div className="lg:col-span-8">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider mb-6 ${heroImage || (variant === "tech" || variant === "bold") ? "bg-white/20 text-white backdrop-blur-sm" : "bg-primary/10 text-primary"}`}>
                  {caseStudy.category}
                </span>
                <h1 className={`font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-4 md:mb-6 ${heroImage || variant === "tech" || variant === "bold" ? "text-white" : "text-foreground"}`}>
                  {caseStudy.title}
                </h1>
                <p className={`text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed ${heroImage || variant === "tech" || variant === "bold" ? "text-white/85" : "text-muted-foreground"}`}>
                  {caseStudy.subtitle}
                </p>
              </div>

              <div className={`lg:col-span-4 lg:justify-self-end ${heroImage || variant === "tech" || variant === "bold" ? "" : "lg:self-center"}`}>
                <div className={`rounded-2xl p-6 md:p-8 ${heroImage || variant === "tech" || variant === "bold" ? "bg-white/10 backdrop-blur-md border border-white/20" : "bg-card border border-border"}`}>
                  <dl className="space-y-5">
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] opacity-70 mb-1">Client</dt>
                      <dd className={`font-bold ${heroImage || variant === "tech" || variant === "bold" ? "text-white" : "text-foreground"}`}>{caseStudy.client || "N/A"}</dd>
                    </div>
                    {caseStudy.website && (
                      <div>
                        <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] opacity-70 mb-1">Website</dt>
                        <dd>
                          <Link href={caseStudy.website} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center min-h-[44px] font-bold underline decoration-2 underline-offset-2 hover:no-underline touch-manipulation ${heroImage || variant === "tech" || variant === "bold" ? "text-white" : "text-primary"}`}>
                            Visit site →
                          </Link>
                        </dd>
                      </div>
                    )}
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] opacity-70 mb-1">Duration</dt>
                      <dd className={`font-bold ${heroImage || variant === "tech" || variant === "bold" ? "text-white" : "text-foreground"}`}>{caseStudy.duration || "N/A"}</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] opacity-70 mb-1">Year</dt>
                      <dd className={`font-bold ${heroImage || variant === "tech" || variant === "bold" ? "text-white" : "text-foreground"}`}>{caseStudy.year || "N/A"}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem & Solution */}
        <section className={`px-4 md:px-6 ${s.challenge} ${variant === "minimal" ? "py-20 md:py-32" : "py-16 md:py-24"}`}>
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
              {/* Problem - order-2 on asymmetric = appears second (right) */}
              <div className={`lg:col-span-5 ${variant === "asymmetric" ? "lg:order-2" : ""}`}>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-6">The Challenge</p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-10 leading-tight">
                  What we set out to solve
                </h2>
                <div className="space-y-5">
                  {caseStudy.challenges?.map((challenge: string, idx: number) => (
                    <div key={idx} className="group flex gap-5 pl-0 border-l-2 border-transparent hover:border-primary/50 transition-colors">
                      <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-sm font-bold text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {idx + 1}
                      </span>
                      <p className="text-muted-foreground leading-relaxed pt-1">{challenge}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solution - order-1 on asymmetric = appears first (left) */}
              <div className={`lg:col-span-7 ${variant === "asymmetric" ? "lg:order-1 lg:pr-8 lg:pl-0" : "lg:pl-8"}`}>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-6">Our Approach</p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 leading-tight">
                  How we tackled it
                </h2>
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary/30 to-primary/10 rounded-full hidden lg:block" aria-hidden />
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed pl-0 lg:pl-6">
                    {caseStudy.solution}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Phases */}
        {caseStudy.solutionPhases && (
          <section className={`px-4 md:px-6 ${s.timeline} ${variant === "minimal" ? "py-20 md:py-32" : "py-16 md:py-24"}`}>
            <div className="container mx-auto max-w-6xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-4">Process</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-16">Execution timeline</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {caseStudy.solutionPhases.map((phase: any, idx: number) => (
                  <div
                    key={idx}
                    className={`border border-border/80 p-6 md:p-8 hover:border-primary/40 hover:shadow-lg transition-all duration-300 group ${
                      variant === "warm" ? "bg-card rounded-3xl" : variant === "tech" ? "bg-white dark:bg-zinc-800 rounded-lg" : variant === "bold" ? "bg-white dark:bg-slate-800 rounded-xl" : "bg-card rounded-2xl"
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 group-hover:scale-110 transition-transform">
                        {idx + 1}
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{phase.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {phase.points?.map((point: string, pidx: number) => (
                        <li key={pidx} className="text-muted-foreground flex gap-3 text-sm leading-relaxed">
                          <span className="text-primary mt-1.5 flex-shrink-0" aria-hidden="true">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Results */}
        {caseStudy.results && Object.keys(caseStudy.results).length > 0 && (
          <section className={`py-16 md:py-24 px-4 md:px-6 overflow-hidden ${s.results}`}>
            <div className="container mx-auto max-w-6xl">
              <p className={`text-xs font-semibold uppercase tracking-[0.3em] mb-4 ${variant === "tech" || variant === "bold" ? "text-white/70" : "text-primary"}`}>Impact</p>
              <h2 className={`font-serif text-3xl md:text-4xl font-bold mb-16 ${variant === "tech" || variant === "bold" ? "text-white" : "text-foreground"}`}>The results</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4 md:gap-6">
                {Object.entries(caseStudy.results).map(([label, value], idx) => (
                  <div key={idx} className={`rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all group ${variant === "tech" || variant === "bold" ? "bg-white/10 border border-white/20" : "bg-card border border-border hover:border-primary/30"}`}>
                    <p className={`text-lg md:text-xl font-bold mb-2 group-hover:scale-105 transition-transform origin-left ${variant === "tech" || variant === "bold" ? "text-white" : "text-primary"}`}>
                      {String(value)}
                    </p>
                    <p className={`text-sm leading-snug ${variant === "tech" || variant === "bold" ? "text-white/80" : "text-muted-foreground"}`}>{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Testimonial */}
        {caseStudy.testimonial && (
          <section className={`py-20 md:py-28 px-4 md:px-6 ${s.testimonial} relative overflow-hidden ${variant === "tech" || variant === "bold" ? "text-white" : "text-primary-foreground"}`}>
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} aria-hidden />
            <div className="container mx-auto max-w-4xl relative">
              <blockquote className="text-xl sm:text-2xl md:text-3xl font-serif leading-relaxed text-center">
                <span className="block text-5xl md:text-6xl font-serif text-white/30 mb-4">"</span>
                {caseStudy.testimonial.quote}
              </blockquote>
              <div className="mt-10 text-center">
                <p className="font-bold text-lg">{caseStudy.testimonial.author}</p>
                <p className="text-sm text-white/70 mt-1">{caseStudy.testimonial.role}</p>
              </div>
            </div>
          </section>
        )}

        {/* Services & Tech - Asymmetric */}
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-5">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-4">Capabilities</p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">What we delivered</h2>
                <ul className="space-y-4">
                  {caseStudy.services?.map((service: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-4 group">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2.5 group-hover:scale-150 transition-transform" />
                      <span className="text-muted-foreground font-medium">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-7">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-4">Stack</p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">Technologies we used</h2>
                <div className="flex flex-wrap gap-3">
                  {caseStudy.technologies?.map((tech: string, idx: number) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-4 py-2.5 rounded-full text-sm font-medium bg-muted/80 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 px-4 md:px-6 border-t">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Let&apos;s work together</h2>
            <p className="text-muted-foreground mb-10">
              Ready to transform your digital presence?
            </p>
            <Link href="/#contact" className="inline-block">
              <Button size="lg" className="rounded-full gap-2 px-8 min-h-[44px] touch-manipulation w-full sm:w-auto justify-center">
                Start your project
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </section>

        {/* More Case Studies */}
        <section className={`py-16 md:py-24 px-4 md:px-6 ${s.moreStudies}`}>
          <div className="container mx-auto max-w-6xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-4">Explore</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-14">More case studies</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(caseStudies)
                .filter(([slug]) => slug !== resolvedParams.slug)
                .slice(0, 6)
                .map(([slug, study]: [string, any]) => (
                  <Link
                    key={slug}
                    href={`/case-studies/${slug}`}
                    className="group block bg-card border border-border hover:border-primary/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    <span className="inline-block bg-primary/10 text-primary px-2.5 py-1 rounded-full text-xs font-semibold mb-4">
                      {study.category}
                    </span>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {study.subtitle}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                      View case study
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/case-studies" className="inline-block">
                <Button variant="outline" size="lg" className="rounded-full gap-2 min-h-[44px] touch-manipulation w-full sm:w-auto justify-center">
                  View all case studies
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <JsonLd data={structuredData} />
      <Footer />
    </>
  )
}
