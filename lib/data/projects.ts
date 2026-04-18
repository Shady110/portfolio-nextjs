export type GitHubStatus = 'public' | 'private';
export type ProjectStatus = 'live' | 'in-progress';

export interface LiveUrl {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  type: string;
  summary: string;
  roles: string[];
  contributions: string[];
  challenge: string;
  impact: string;
  stack: string[];
  gradient: string;
  liveUrls?: LiveUrl[];
  githubUrl?: string;
  githubStatus: GitHubStatus;
  status: ProjectStatus;
  featured: boolean;
  category: string;
  year: string;
}

export const projects: Project[] = [
  // ─── 1 · BR Clubs ─────────────────────────────────────────────────────────
  {
    id: 'br-clubs',
    title: 'BR Clubs',
    type: 'Multi-Tenant SaaS · Sports Club Management',
    summary:
      'A multi-tenant web platform powering the full operational stack of sports clubs across Egypt. Built to serve multiple branded club instances — each with distinct teams and member bases — from a single scalable codebase. I worked across both engineering and product design on this platform.',
    roles: ['Front-End Engineer', 'Product Designer'],
    contributions: [
      'Built and maintained the club management dashboard across 3+ live club tenants',
      'Architected multi-tenant frontend with per-brand customisation and isolated admin experiences',
      'Shipped core product modules: facility booking, membership operations, class scheduling, and announcements',
      'Designed and built admin permission systems and role-based access controls',
      'Developed analytics dashboards surfacing operational data for club managers',
      'Contributed to connected mobile app product experience and management panels',
      'Drove UX improvements across key flows based on real operator feedback',
    ],
    challenge:
      'Building one frontend codebase that adapts — visually and functionally — across multiple distinct club brands, each with their own staff, workflows, and customisation requirements, without fragmenting the architecture or creating maintenance overhead.',
    impact:
      'Live and actively used by Kode Club, Ryze Clubs, and O West Club. Kayan Club onboarding in progress. The platform demonstrates end-to-end production SaaS delivery with both engineering depth and product design ownership.',
    stack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Zustand', 'REST APIs'],
    gradient: 'linear-gradient(140deg, #111c12 0%, #1e3a20 55%, #2d5430 100%)',
    liveUrls: [
      { label: 'brclubs.com',      url: 'https://brclubs.com' },
      { label: 'kode.brclubs.com', url: 'https://kode.brclubs.com' },
      { label: 'ryze.brclubs.com', url: 'https://ryze.brclubs.com' },
      { label: 'owest.brclubs.com', url: 'https://owest.brclubs.com' },
    ],
    githubUrl: undefined,
    githubStatus: 'private',
    status: 'live',
    featured: true,
    category: 'SaaS Platform',
    year: '2024–25',
  },

  // ─── 2 · Moldndie ─────────────────────────────────────────────────────────
  {
    id: 'moldndie',
    title: 'Moldndie',
    type: 'Commerce · Content · Courses Platform',
    summary:
      'A hybrid digital platform combining e-commerce, course selling, and content publishing under one product ecosystem. Built end-to-end — from information architecture and UX design through to backend integration and payment processing — with Paymob handling Egyptian market transactions.',
    roles: ['Full Stack Engineer', 'Product Designer'],
    contributions: [
      'Designed and built the platform end-to-end: frontend, backend, and UX',
      'Built the e-commerce storefront with product catalogue, cart, and full checkout flow',
      'Integrated Paymob payment gateway for Egyptian market transactions',
      'Developed course selling experience and editorial content / blog system',
      'Designed responsive admin controls for product and content management',
      'Owned the complete product structure from information architecture to live deployment',
    ],
    challenge:
      'Combining three distinct product types — retail, courses, and editorial content — into a single coherent user experience without a fragmented UI or brittle codebase. Each surface needed its own interaction model while sharing a consistent design language.',
    impact:
      'A live, operational platform serving the Moldndie brand as a real commercial product. Demonstrates full-stack delivery capability with end-to-end technical and product ownership from zero to production.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Paymob API'],
    gradient: 'linear-gradient(140deg, #0f0f14 0%, #1a1a2e 55%, #22223b 100%)',
    liveUrls: [
      { label: 'moldndie.com', url: 'https://moldndie.com' },
    ],
    githubUrl: 'https://github.com/moldndie/moldndie-v2',
    githubStatus: 'public',
    status: 'live',
    featured: true,
    category: 'Full Stack',
    year: '2024',
  },

  // ─── 3 · Flow ─────────────────────────────────────────────────────────────
  {
    id: 'flow',
    title: 'Flow',
    type: 'Growth Agency · E-Commerce Enablement',
    summary:
      'A growth agency helping Egyptian e-commerce brands improve their digital presence and sales performance. Co-founded, built, and technically operated — from the agency website through to client project delivery. I owned the technical direction and built every frontend output.',
    roles: ['Co-Founder', 'Technical Lead'],
    contributions: [
      'Co-founded and technically led a growth-focused agency serving e-commerce clients',
      'Built the agency website with a conversion-focused landing page and lead generation UX',
      'Delivered brand websites for clients including All Seasons MK',
      'Owned technical direction, execution standards, and delivery quality across all projects',
      'Built responsive, performance-optimised web experiences tailored to each client brief',
    ],
    challenge:
      'Operating as both engineer and business owner simultaneously — setting technical standards, managing client relationships, and ensuring every deliverable reflected the quality of the agency\'s own brand.',
    impact:
      'A real operating business with live client work and delivered projects. Demonstrates founder-level ownership, independent decision-making, and the ability to ship frontend products from client brief through to handoff.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    gradient: 'linear-gradient(140deg, #1c0f05 0%, #3d2408 55%, #5c3610 100%)',
    liveUrls: [
      { label: 'flow-agency-eg.com', url: 'https://flow-agency-eg.com' },
    ],
    githubUrl: 'https://github.com/Shady110/flow',
    githubStatus: 'public',
    status: 'live',
    featured: true,
    category: 'Agency / Startup',
    year: '2024–25',
  },

  // ─── 4 · Med-EG ───────────────────────────────────────────────────────────
  {
    id: 'med-eg',
    title: 'Med-EG',
    type: 'Healthcare Digital Platform',
    summary:
      'A healthcare platform in active development, built to modernise digital workflows in the medical space. Healthcare UX demands an unusually high bar for clarity, trust, and consistency — every interface decision is made with that context in mind.',
    roles: ['Front-End Developer', 'Product Contributor'],
    contributions: [
      'Building scalable frontend architecture for a multi-role healthcare platform',
      'Designing accessible, trust-focused UX suited to a sensitive medical domain',
      'Developing patient-facing and admin interfaces with strong information hierarchy',
      'Implementing performance-optimised, responsive layouts across all breakpoints',
      'Establishing component patterns and naming conventions for long-term maintainability',
    ],
    challenge:
      'Healthcare interfaces carry real user consequences — ambiguity in layout or copy has direct implications for the people relying on them. Every component decision has to be deliberate, clear, and auditable under scrutiny.',
    impact:
      'Currently in active development. Will serve as a modernised digital layer for healthcare access in the Egyptian market, built with scalable frontend architecture and a strong emphasis on usability in a high-stakes domain.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React Query', 'Zustand'],
    gradient: 'linear-gradient(140deg, #060e1c 0%, #0a1e38 55%, #0f2d52 100%)',
    liveUrls: undefined,
    githubUrl: undefined,
    githubStatus: 'private',
    status: 'in-progress',
    featured: false,
    category: 'Healthcare',
    year: '2025',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
