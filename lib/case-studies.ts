export type CaseStudy = Record<string, any>

export const caseStudies: Record<string, CaseStudy> = {
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
    heroImageClass: "object-contain object-center p-6 sm:p-10 md:p-14",
    heroImageBg: "#F5F2EE",
    heroImageUnoptimized: true,
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
    heroImageClass: "object-contain object-center p-6 sm:p-10 md:p-14",
    heroImageBg: "#F5F2EC",
    heroImageUnoptimized: true,
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
  "sarah-bartlet-optimal-health": {
    title: "Sarah Bartlet Optimal Health",
    subtitle: "Nutritional Therapy Practice Website",
    client: "Sarah Bartlet Optimal Health",
    category: "Health & Wellbeing",
    duration: "3 weeks",
    year: "2026",
    heroImage: "/case-studies/sarah-bartlet-optimal-health.png",
    heroImageClass: "object-contain object-center",
    heroImageUnoptimized: true,
    challenge:
      "Sarah Bartlet, a qualified nutritional therapist based in Aberdeenshire, needed a website that reflected the calm, trustworthy tone of her practice. Her previous online presence did not clearly explain who she helps — people with ongoing symptoms, autoimmune conditions, allergies, digestive issues and long-term health concerns — nor did it make booking a free consultation straightforward. Visitors searching for nutritional therapy support in Scotland needed to feel reassured quickly, understand her approach, and take the next step without friction.",
    challenges: [
      "No clear digital home that communicated specialist nutritional therapy support",
      "Difficulty explaining complex health journeys in an approachable way",
      "Need for prominent consultation booking pathways on every device",
      "Requirement to highlight online and in-person Aberdeenshire consultations",
      "Warm, accessible brand expression suited to health and wellbeing audiences",
      "WhatsApp contact option for quick, low-barrier enquiries",
    ],
    solution:
      "We designed and built a calming, conversion-focused website that puts Sarah's expertise and empathy front and centre. A warm hero introduces her as a nutritional therapist in Aberdeenshire with a clear headline about feeling healthier, more balanced and more in control. Primary CTAs guide visitors to book a free consultation, whilst a secondary pathway explains her approach in more depth. Soft sage and cream tones, serif headlines and rounded UI elements create a reassuring first impression. Service tags highlight autoimmune and allergy support alongside online and Aberdeenshire consultations. A portrait-led layout builds trust immediately, with a supportive caption reinforcing practical help for complex health journeys. WhatsApp integration gives visitors a familiar way to reach out, and the site structure covers services, approach, and contact with repeated booking prompts throughout.",
    solutionPhases: [
      {
        title: "Discovery & Positioning",
        points: [
          "Stakeholder sessions to align on audiences, services and consultation journeys",
          "Content mapping for autoimmune, allergy and digestive health support",
          "Conversion planning for free consultation and WhatsApp enquiry flows",
        ],
      },
      {
        title: "Design & Brand Expression",
        points: [
          "Calm visual identity using accessible sage, cream and earthy accent colours",
          "Portrait-led hero with trust-building messaging and service tags",
          "Mobile-first layouts with clear typography and generous whitespace",
        ],
      },
      {
        title: "Development & Features",
        points: [
          "Built responsive site with consultation booking CTAs throughout",
          "Integrated WhatsApp for quick client contact",
          "Structured service and approach pages for SEO and clarity",
          "Accessible colour contrast and touch-friendly interactive elements",
        ],
      },
      {
        title: "Launch & Optimisation",
        points: [
          "Cross-device testing for readability and booking flow",
          "Performance optimisation for fast first impressions",
          "SEO foundations for Aberdeenshire and online nutritional therapy searches",
        ],
      },
    ],
    results: {
      "First Impression": "Calm, professional presence aligned with clinical practice",
      "Consultation Pathways": "Clear free consultation CTAs on hero and throughout the site",
      "Audience Clarity": "Specialist support for autoimmune, allergy and digestive health made visible",
      "Contact Options": "WhatsApp and booking flows for low-friction enquiries",
      "Delivery": "Full website live within three weeks",
      "User Experience": "Approachable, trustworthy journeys on mobile and desktop",
    },
    testimonial: {
      quote: "Devora understood exactly the tone I wanted — calm, clear and supportive. The new site helps people understand what I do and makes booking a consultation feel easy. It finally feels like a proper home for my practice online.",
      author: "Sarah Bartlet",
      role: "Sarah Bartlet Optimal Health",
    },
    services: ["Bespoke Web Design", "Conversion Optimisation", "Health & Wellbeing UX", "WhatsApp Integration", "SEO Foundations", "Accessibility"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive Design", "Performance Optimisation", "Accessible UI"],
    variant: "warm",
  },
  "kickin-kilos": {
    title: "Kickin Kilos",
    subtitle: "Weight Loss Coaching Website",
    client: "Kickin Kilos",
    category: "Health & Wellbeing",
    duration: "3 weeks",
    year: "2026",
    website: "https://kickinkilos.co.uk/",
    heroImage: "/case-studies/kickin-kilos.png",
    heroImageClass: "object-cover object-top",
    heroImageUnoptimized: true,
    challenge:
      "Kickin Kilos needed a website that turned lived experience into credible coaching enquiries. The founder lost over 86kg through practical food choices rather than extreme restriction — but without a strong digital home, that story was hard to share at scale. Visitors searching for sustainable weight loss coaching needed to see proof quickly, understand a method that fits around work and family, and book a call without feeling sold to by another generic diet plan.",
    challenges: [
      "No clear digital platform to showcase an authentic 86kg transformation story",
      "Need to build trust with people tired of all-or-nothing diet approaches",
      "Interactive before-and-after proof to make results tangible",
      "Conversion pathways for coaching call bookings and enquiries",
      "Content structure explaining a food-first method without overwhelming visitors",
      "Mobile-first experience for audiences browsing on the go",
    ],
    solution:
      "We designed and built a conversion-focused coaching website centred on lived experience and honest messaging. A bold hero headline — \"Lose weight without losing your life\" — sets the tone immediately, supported by the founder's personal story and a highlighted \"built from lived experience\" callout. An interactive before-and-after slider lets visitors compare transformation photos side by side, making the 86kg result feel real rather than abstract. Health marker improvements are presented in a clear, scannable format covering weight, waist, BMI, blood pressure and more. A plate-system section explains the food-first approach with interactive segments for protein, fibre, smart carbs and flexible treats — showing sustainability over deprivation. Coaching inclusions, weekly accountability and enquiry pathways are structured for clarity, with repeated CTAs to book a call throughout. Clean blue-and-white branding keeps the site approachable, trustworthy and distinct from aggressive fitness marketing.",
    solutionPhases: [
      {
        title: "Discovery & Positioning",
        points: [
          "Mapped the founder's transformation story and coaching method into clear site sections",
          "Defined audience messaging for people seeking sustainable, food-first weight loss",
          "Planned conversion flows for coaching calls and contact enquiries",
        ],
      },
      {
        title: "Design & Brand Expression",
        points: [
          "Created a clean, modern layout with accessible blue-and-white colour palette",
          "Designed interactive before-and-after slider and plate-system components",
          "Built trust-led copy structure around proof, method and coaching inclusions",
        ],
      },
      {
        title: "Development & Features",
        points: [
          "Built responsive site with transformation slider and health marker showcase",
          "Structured coaching programme, proof and contact sections for easy scanning",
          "Integrated enquiry form and booking CTAs throughout the journey",
        ],
      },
      {
        title: "Launch & Optimisation",
        points: [
          "Cross-device testing for slider interactions and form usability",
          "Performance optimisation for fast first impressions on mobile",
          "SEO foundations for weight loss coaching and food-first method searches",
        ],
      },
    ],
    results: {
      "First Impression": "Authentic, proof-led presence built on lived experience",
      "Transformation Proof": "Interactive before-and-after slider and health marker showcase",
      "Method Clarity": "Food-first plate system explained without extreme diet messaging",
      "Conversion Pathways": "Clear coaching call and enquiry CTAs throughout the site",
      "Delivery": "Full website live within three weeks",
      "User Experience": "Approachable, mobile-friendly journeys for coaching prospects",
    },
    testimonial: {
      quote: "Devora captured exactly what I wanted to communicate — real transformation, real coaching, and a method people can actually stick to. The site makes my story tangible and makes booking a call feel straightforward.",
      author: "Kickin Kilos Founder",
      role: "Kickin Kilos",
    },
    services: ["Bespoke Web Design", "Conversion Optimisation", "Health & Wellbeing UX", "Interactive Components", "SEO Foundations", "Accessibility"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive Design", "Performance Optimisation", "Accessible UI"],
    variant: "warm",
  },
  "ahrk-property-maintenance": {
    title: "AHRK Property Maintenance",
    subtitle: "Property Maintenance & Refurbishment Platform",
    client: "AHRK Property Maintenance",
    category: "Property Services",
    duration: "3 weeks",
    year: "2026",
    heroImage: "/case-studies/ahrk-property-maintenance.png",
    heroImageClass: "object-contain object-center p-6 sm:p-10 md:p-14",
    heroImageBg: "#E8E4DC",
    heroImageUnoptimized: true,
    challenge:
      "AHRK Property Maintenance needed a website that could compete for managed property portfolios across North London, Hertfordshire and the Home Counties. Their previous online presence did not reflect the breadth of reactive repairs, planned maintenance and full refurbishments they deliver for landlords, letting agents, managing agents and developers. Without a clear digital proposition, stronger enquiry flows and proof of scale, they were losing bids to competitors with more polished platforms — and struggling to convert contract opportunities into signed agreements.",
    challenges: [
      "Generic online presence not reflecting full maintenance and refurbishment capability",
      "Difficulty communicating value to landlords, letting agents and managing agents",
      "No structured enquiry journey for different client types",
      "Limited visibility into 24/7 cover, trade breadth and account management",
      "Competitors winning maintenance contracts with stronger digital presence",
      "Need for a fast, conversion-focused build on a three-week timeline",
    ],
    solution:
      "We designed and built a professional Next.js platform in three weeks that positions AHRK as the trusted partner for property maintenance at scale. A bold hero — \"All Your Maintenance Needs Met\" — immediately communicates reactive repairs, planned maintenance and full refurbishments, with location coverage for North London, Hertfordshire and the Home Counties. A multi-step enquiry form in the hero captures client type (landlord, letting agent, managing agent or developer), routes quotes within one working day, and reduces friction for high-intent enquiries. Key proof points — one dedicated account manager, 24/7 cover available and 8+ trade categories — sit prominently below the fold. Navy and orange branding creates a confident, accessible contrast suited to property professionals. Clear service pathways, sector messaging and repeated quote CTAs guide visitors from first visit to enquiry, giving AHRK a platform built to win bids and secure contracts.",
    solutionPhases: [
      {
        title: "Discovery & Positioning",
        points: [
          "Mapped audiences across landlords, letting agents, managing agents and developers",
          "Defined messaging for reactive, planned and refurbishment services",
          "Planned conversion flows for multi-step quote enquiries",
        ],
      },
      {
        title: "Design & Brand Expression",
        points: [
          "Created a professional navy-and-orange visual system with accessible contrast",
          "Designed hero-led layout with integrated step-by-step enquiry form",
          "Built trust signals for account management, 24/7 cover and trade categories",
        ],
      },
      {
        title: "Next.js Development",
        points: [
          "Built responsive platform with multi-step enquiry and quote routing",
          "Structured service and sector pages for local and portfolio clients",
          "Integrated clear CTAs for quotes and service exploration throughout",
        ],
      },
      {
        title: "Launch & Growth",
        points: [
          "Full platform live within three weeks",
          "Conversion-focused testing across mobile and desktop enquiry flows",
          "Foundation for ongoing contract and bid-winning growth",
        ],
      },
    ],
    results: {
      "Contract Wins": "Secured maintenance contracts with letting and managing agents",
      "Bid Conversion": "Stronger enquiry-to-quote conversion from structured form journeys",
      "Client Clarity": "Clear pathways for landlords, agents and developers from first visit",
      "Service Visibility": "Reactive, planned and refurbishment offerings surfaced prominently",
      "Delivery": "Full Next.js platform live within three weeks",
      "Brand Trust": "Professional presence aligned with portfolio-scale maintenance work",
    },
    testimonial: {
      quote: "Devora delivered exactly what we needed — a site that looks the part and helps us win work. The enquiry form makes it easy for agents and landlords to get in touch, and we are already seeing stronger interest in maintenance contracts.",
      author: "AHRK Property Maintenance Team",
      role: "AHRK Property Maintenance",
    },
    services: ["Bespoke Web Design", "Next.js Development", "Conversion Optimisation", "Multi-Step Enquiry Forms", "Property Services UX", "Accessibility"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive Design", "Performance Optimisation", "Accessible UI"],
    variant: "tech",
  },
}

export const caseStudySlugs = Object.keys(caseStudies)

const HIGH_PRIORITY_CASE_STUDY_SLUGS = new Set([
  "ahrk-property-maintenance",
  "sarah-bartlet-optimal-health",
  "kickin-kilos",
  "teachers-surgery",
])

export function caseStudySitemapPriority(slug: string): number {
  return HIGH_PRIORITY_CASE_STUDY_SLUGS.has(slug) ? 0.9 : 0.85
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies[slug]
}

