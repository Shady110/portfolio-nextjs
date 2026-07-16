export type GitHubStatus = 'public' | 'private';
export type ProjectStatus = 'live' | 'in-progress';

/** Icon key → rendered by the icon map in the bento cards. */
export type ProjectIcon = 'saas' | 'commerce' | 'agency' | 'health';

export interface LiveUrl {
  label: string;
  url: string;
}

/**
 * Structural project data — everything that does NOT change between locales.
 * Translatable copy (type, category, summary, roles, contributions, challenge,
 * impact) lives in `messages/<locale>.json` under `projects.items.<id>` and is
 * merged in by `useProjects()` / `getProjects()`.
 */
export interface ProjectMeta {
  id: string;
  title: string; // brand name — identical across locales
  icon: ProjectIcon;
  gradient: string;
  stack: string[];
  liveUrls?: LiveUrl[];
  githubUrl?: string;
  githubStatus: GitHubStatus;
  status: ProjectStatus;
  featured: boolean;
  year: string;
}

/** Fully localized project — structural meta + translated strings. */
export interface Project extends ProjectMeta {
  type: string;
  category: string;
  summary: string;
  roles: string[];
  contributions: string[];
  challenge: string;
  impact: string;
}

export const projectsMeta: ProjectMeta[] = [
  {
    id: 'br-clubs',
    title: 'BR Clubs',
    icon: 'saas',
    stack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Zustand', 'REST APIs'],
    gradient: 'linear-gradient(140deg, #111c12 0%, #1e3a20 55%, #2d5430 100%)',
    liveUrls: [
      { label: 'brclubs.com', url: 'https://brclubs.com' },
      { label: 'kode.brclubs.com', url: 'https://kode.brclubs.com' },
      { label: 'ryze.brclubs.com', url: 'https://ryze.brclubs.com' },
      { label: 'owest.brclubs.com', url: 'https://owest.brclubs.com' },
    ],
    githubUrl: undefined,
    githubStatus: 'private',
    status: 'live',
    featured: true,
    year: '2024–25',
  },
  {
    id: 'moldndie',
    title: 'Moldndie',
    icon: 'commerce',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Paymob API'],
    gradient: 'linear-gradient(140deg, #0f0f14 0%, #1a1a2e 55%, #22223b 100%)',
    liveUrls: [{ label: 'moldndie.com', url: 'https://moldndie.com' }],
    githubUrl: 'https://github.com/moldndie/moldndie-v2',
    githubStatus: 'public',
    status: 'live',
    featured: true,
    year: '2024',
  },
  {
    id: 'flow',
    title: 'Flow',
    icon: 'agency',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    gradient: 'linear-gradient(140deg, #1c0f05 0%, #3d2408 55%, #5c3610 100%)',
    liveUrls: [{ label: 'flow-agency-eg.com', url: 'https://flow-agency-eg.com' }],
    githubUrl: 'https://github.com/Shady110/flow',
    githubStatus: 'public',
    status: 'live',
    featured: true,
    year: '2024–25',
  },
  {
    id: 'med-eg',
    title: 'Med-EG',
    icon: 'health',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React Query', 'Zustand'],
    gradient: 'linear-gradient(140deg, #060e1c 0%, #0a1e38 55%, #0f2d52 100%)',
    liveUrls: undefined,
    githubUrl: undefined,
    githubStatus: 'private',
    status: 'in-progress',
    featured: false,
    year: '2025',
  },
];
