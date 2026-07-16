'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import { useFeaturedProjects } from '@/lib/data/getProjects';
import type { Project } from '@/lib/data/projects';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CategoryIcon from '@/components/projects/CategoryIcon';

export default function FeaturedProjects() {
  const t = useTranslations('home.featured');
  const featured = useFeaturedProjects();

  return (
    <section className="page-section section-container">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <AnimatedSection>
          <p className="text-[0.6875rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-3">
            {t('eyebrow')}
          </p>
          <h2 className="text-[clamp(1.6rem,3vw,2.25rem)] font-bold tracking-[-0.028em] text-[#0D0D0D] leading-[1.12]">
            {t('title')} <span className="text-gradient">{t('titleHighlight')}</span>
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <Link
            href="/projects"
            className="flex items-center gap-1.5 text-[0.8125rem] font-medium text-[#80A689] hover:text-[#18261A] transition-colors group flex-shrink-0"
          >
            {t('viewAll')}
            <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform rtl:-scale-x-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </AnimatedSection>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {featured.map((project, i) => (
          <AnimatedSection key={project.id} delay={0.08 + i * 0.06}>
            <HomeCard project={project} />
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

function HomeCard({ project }: { project: Project }) {
  const tc = useTranslations('common');
  const isLive = project.status === 'live';

  return (
    <Link href="/projects" className="block h-full">
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        className="group h-full flex flex-col rounded-2xl bg-white border border-[rgba(24,38,26,0.08)] p-6
                   shadow-card hover:shadow-card-hover hover:border-[rgba(24,38,26,0.14)] transition-[box-shadow,border-color] duration-300"
      >
        <div className="flex items-start justify-between mb-5">
          <span className="w-10 h-10 rounded-xl flex items-center justify-center text-[#18261A] bg-[#BDF2CA]/40 border border-[rgba(24,38,26,0.07)] group-hover:bg-[#BDF2CA]/60 transition-colors">
            <CategoryIcon icon={project.icon} />
          </span>
          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[0.5625rem] font-semibold leading-none ${
            isLive ? 'bg-[#BDF2CA]/50 text-[#18261A] border border-[rgba(24,38,26,0.1)]' : 'bg-[#fef3c7] text-[#92650a] border border-[#fde68a]'
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full ${isLive ? 'bg-[#80A689]' : 'bg-[#fbbf24]'}`} />
            {isLive ? tc('live') : tc('inProgress')}
          </span>
        </div>

        <h3 className="latin text-[1.0625rem] font-bold text-[#0D0D0D] tracking-[-0.02em] mb-1">{project.title}</h3>
        <p className="text-[0.6875rem] font-medium text-[#80A689] uppercase tracking-wider mb-3">{project.category}</p>
        <p className="text-[0.8125rem] text-[#3a5c3e] leading-[1.65] line-clamp-3 mb-4">{project.summary}</p>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.stack.slice(0, 4).map((s) => (
            <span key={s} className="latin px-2 py-0.5 text-[0.5625rem] font-medium text-[#18261A] bg-[#F2F2F2] border border-[rgba(24,38,26,0.07)] rounded-md leading-none">
              {s}
            </span>
          ))}
        </div>
      </motion.div>
    </Link>
  );
}
