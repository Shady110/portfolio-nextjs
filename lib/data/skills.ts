export interface Skill {
  name: string;
  primary?: boolean;
}

export interface SkillCategory {
  id: string;
  number: string;
  label: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  // ── 01 ─────────────────────────────────────────────────────────────────
  {
    id: 'core-stack',
    number: '01',
    label: 'Core Stack',
    description: 'The technologies I ship production code with daily.',
    skills: [
      { name: 'React',          primary: true },
      { name: 'Next.js',        primary: true },
      { name: 'TypeScript',     primary: true },
      { name: 'Tailwind CSS',   primary: true },
      { name: 'JavaScript',     primary: true },
      { name: 'REST APIs' },
      { name: 'Responsive UI' },
      { name: 'HTML5 & CSS3' },
    ],
  },

  // ── 02 ─────────────────────────────────────────────────────────────────
  {
    id: 'experience',
    number: '02',
    label: 'Experience Includes',
    description: 'Capabilities built from shipping real interfaces across SaaS, e-commerce, and dashboard products.',
    skills: [
      { name: 'Design Systems',          primary: true },
      { name: 'Component Architecture',  primary: true },
      { name: 'Dashboard UX',            primary: true },
      { name: 'Framer Motion' },
      { name: 'MUI (Material UI)' },
      { name: 'Figma → Code' },
      { name: 'State Management' },
    ],
  },

  // ── 03 ─────────────────────────────────────────────────────────────────
  {
    id: 'collaboration',
    number: '03',
    label: 'Collaboration',
    description: 'How I work within product teams — across design, backend, and stakeholders.',
    skills: [
      { name: 'Designer Collaboration',  primary: true },
      { name: 'Agile / Scrum',           primary: true },
      { name: 'Backend Integration',     primary: true },
      { name: 'Client Communication' },
      { name: 'Code Reviews' },
      { name: 'Requirements Alignment' },
    ],
  },

  // ── 04 ─────────────────────────────────────────────────────────────────
  {
    id: 'strengths',
    number: '04',
    label: 'Strengths',
    description: "What consistently shows up in the work — and what teams notice.",
    skills: [
      { name: 'Mentoring & Teaching', primary: true },
      { name: 'Problem Solving',      primary: true },
      { name: 'Attention to Detail',  primary: true },
      { name: 'Fast Learning' },
      { name: 'Debugging' },
      { name: 'Clean, Readable Code' },
    ],
  },
];
