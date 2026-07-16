'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useProjects } from '@/lib/data/getProjects';
import type { Project } from '@/lib/data/projects';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CategoryIcon from './CategoryIcon';
import ProjectModal from './ProjectModal';

// ── Project card ─────────────────────────────────────────────────────────────
function ProjectCard({
  project,
  large,
  onOpen,
}: {
  project: Project;
  large?: boolean;
  onOpen: () => void;
}) {
  const t = useTranslations('projects.card');
  const tc = useTranslations('common');
  const isLive = project.status === 'live';

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="group relative h-full w-full text-start flex flex-col rounded-2xl bg-white
                 border border-[rgba(24,38,26,0.08)] p-6 overflow-hidden
                 shadow-card hover:shadow-card-hover hover:border-[rgba(24,38,26,0.14)]
                 transition-[box-shadow,border-color] duration-300
                 outline-none focus-visible:ring-2 focus-visible:ring-[#80A689] focus-visible:ring-offset-2"
    >
      {/* Top row: icon + status */}
      <div className="flex items-start justify-between mb-5">
        <span className="w-11 h-11 rounded-2xl flex items-center justify-center text-[#18261A] bg-[#BDF2CA]/40 border border-[rgba(24,38,26,0.07)] group-hover:bg-[#BDF2CA]/60 transition-colors">
          <CategoryIcon icon={project.icon} />
        </span>
        <div className="flex items-center gap-2">
          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[0.5625rem] font-semibold leading-none ${
            isLive
              ? 'bg-[#BDF2CA]/50 text-[#18261A] border border-[rgba(24,38,26,0.1)]'
              : 'bg-[#fef3c7] text-[#92650a] border border-[#fde68a]'
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full ${isLive ? 'bg-[#80A689]' : 'bg-[#fbbf24]'}`} />
            {isLive ? tc('live') : tc('inProgress')}
          </span>
          <span className="latin text-[0.5625rem] font-mono text-[#80A689]">{project.year}</span>
        </div>
      </div>

      {/* Title + type */}
      <h3 className={`latin font-bold text-[#0D0D0D] tracking-[-0.025em] leading-tight mb-1 ${large ? 'text-[1.5rem]' : 'text-[1.125rem]'}`}>
        {project.title}
      </h3>
      <p className="text-[0.6875rem] font-medium text-[#80A689] uppercase tracking-wider mb-3">
        {project.category}
      </p>

      {/* Summary */}
      <p className={`text-[0.8125rem] text-[#3a5c3e] leading-[1.7] mb-4 ${large ? 'line-clamp-4' : 'line-clamp-3'}`}>
        {project.summary}
      </p>

      {/* Stack */}
      <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
        {project.stack.slice(0, large ? 6 : 4).map((s) => (
          <span key={s} className="latin px-2 py-0.5 text-[0.5625rem] font-medium text-[#18261A] bg-[#F2F2F2] border border-[rgba(24,38,26,0.07)] rounded-md leading-none">
            {s}
          </span>
        ))}
      </div>

      {/* View details */}
      <span className="inline-flex items-center gap-1.5 text-[0.75rem] font-semibold text-[#18261A] group-hover:text-[#80A689] transition-colors">
        {t('viewDetails')}
        <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform rtl:-scale-x-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </span>
    </motion.button>
  );
}

// ── Dark deliverables accent card ────────────────────────────────────────────
function DeliverablesCard() {
  const t = useTranslations('projects.deliverables');
  const items = t.raw('items') as string[];
  return (
    <div
      className="h-full flex flex-col rounded-2xl p-6 border border-white/[0.07] overflow-hidden shadow-float"
      style={{ background: 'linear-gradient(165deg, #111c12 0%, #0e1810 55%, #0c160d 100%)' }}
    >
      <div
        className="w-10 h-10 rounded-2xl flex items-center justify-center bg-[#BDF2CA]/15 border border-white/[0.08] mb-5"
        aria-hidden
      >
        <svg className="w-5 h-5 text-[#BDF2CA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-[1.0625rem] font-bold text-white tracking-[-0.02em] leading-snug mb-1.5">
        {t('title')}
      </h3>
      <p className="text-[0.75rem] text-white/50 leading-relaxed mb-5">{t('subtitle')}</p>

      <ul className="grid grid-cols-1 gap-2.5 mt-auto">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2.5">
            <svg className="w-3.5 h-3.5 text-[#80A689] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-[0.8125rem] text-white/80 leading-snug">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── Stat card ────────────────────────────────────────────────────────────────
function StatCard() {
  const t = useTranslations('projects.stat');
  return (
    <div className="h-full flex flex-col justify-center rounded-2xl p-6 bg-[#BDF2CA]/25 border border-[rgba(24,38,26,0.08)] overflow-hidden relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 80% at 30% 20%, rgba(189,242,202,0.4) 0%, transparent 70%)' }}
        aria-hidden
      />
      <div className="relative">
        <div className="latin text-[3rem] font-extrabold text-[#18261A] leading-none tracking-[-0.04em] mb-2">
          {t('value')}
        </div>
        <p className="text-[0.9375rem] font-semibold text-[#18261A] mb-1">{t('label')}</p>
        <p className="text-[0.75rem] text-[#3a5c3e] leading-snug">{t('note')}</p>
      </div>
    </div>
  );
}

// ── Bento layout ─────────────────────────────────────────────────────────────
export default function ProjectsBento() {
  const projects = useProjects();
  const [selected, setSelected] = useState<Project | null>(null);

  // First project leads large next to the deliverables accent card; the rest
  // flow through the remaining grid cells, whatever the project count.
  const [lead, ...rest] = projects;

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 auto-rows-auto gap-4">
        <AnimatedSection className="lg:col-span-2" delay={0}>
          <ProjectCard project={lead} large onOpen={() => setSelected(lead)} />
        </AnimatedSection>

        <AnimatedSection className="lg:row-span-2" delay={0.06}>
          <DeliverablesCard />
        </AnimatedSection>

        {rest.map((project, i) => (
          <AnimatedSection key={project.id} delay={0.12 + i * 0.04}>
            <ProjectCard project={project} onOpen={() => setSelected(project)} />
          </AnimatedSection>
        ))}

        <AnimatedSection delay={0.12 + rest.length * 0.04}>
          <StatCard />
        </AnimatedSection>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
