'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { featuredProjects } from '@/lib/data/projects';
import type { Project } from '@/lib/data/projects';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';

export default function FeaturedProjects() {
  return (
    <section className="page-section section-container">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects That"
          titleHighlight="Shipped."
          description="Real production work across SaaS platforms, full-stack commerce, and agency operations."
        />
        <AnimatedSection delay={0.1}>
          <Link
            href="/projects"
            className="flex items-center gap-1.5 text-[0.8125rem] font-medium text-[#80A689] hover:text-[#18261A] transition-colors group flex-shrink-0"
          >
            View all
            <svg
              className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </AnimatedSection>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <AnimatedSection delay={0.08} className="lg:col-span-3">
          <HomeFeaturedCard project={featuredProjects[0]} large />
        </AnimatedSection>
        <div className="lg:col-span-2 flex flex-col gap-4">
          {featuredProjects.slice(1, 3).map((p, i) => (
            <AnimatedSection key={p.id} delay={0.12 + i * 0.06}>
              <HomeFeaturedCard project={p} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeFeaturedCard({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  const primaryUrl = project.liveUrls?.[0];
  const isLive = project.status === 'live';

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="surface-card overflow-hidden h-full flex flex-col group"
    >
      {/* Gradient header */}
      <div
        className="relative flex-shrink-0 overflow-hidden"
        style={{ height: large ? 190 : 140, background: project.gradient }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] to-transparent" />

        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="px-2.5 py-1 text-[0.6875rem] font-semibold text-white/90 bg-black/25 backdrop-blur-md rounded-full">
            {project.category}
          </span>
          <div className="flex items-center gap-1.5">
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[0.5625rem] font-semibold
              ${isLive
                ? 'bg-[rgba(189,242,202,0.18)] text-[#BDF2CA] border border-[rgba(189,242,202,0.22)]'
                : 'bg-[rgba(251,191,36,0.18)] text-[#fbbf24] border border-[rgba(251,191,36,0.2)]'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${isLive ? 'bg-[#BDF2CA]' : 'bg-[#fbbf24]'}`} />
              {isLive ? 'Live' : 'In Progress'}
            </span>
            <span className="text-[0.625rem] font-mono text-white/40">{project.year}</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1 gap-2.5">
        <div>
          <h3 className="text-[0.9375rem] font-semibold text-[#0D0D0D] tracking-tight group-hover:text-[#18261A] transition-colors">
            {project.title}
          </h3>
          <p className="text-[0.6875rem] font-medium text-[#80A689] uppercase tracking-wider mt-0.5">
            {project.type}
          </p>
        </div>

        {/* Role badges */}
        <div className="flex flex-wrap gap-1">
          {project.roles.map((role) => (
            <span
              key={role}
              className="px-2 py-0.5 text-[0.5625rem] font-semibold rounded-md
                         bg-[#F2F2F2] border border-[rgba(24,38,26,0.08)] text-[#3a5c3e]"
            >
              {role}
            </span>
          ))}
        </div>

        <p className="text-[0.8125rem] text-[#3a5c3e] leading-relaxed line-clamp-2 flex-1">
          {project.summary}
        </p>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5 mt-0.5">
          {project.stack.slice(0, large ? 5 : 4).map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[0.6875rem] font-medium text-[#18261A] bg-[#BDF2CA]/40 border border-[rgba(24,38,26,0.1)] rounded"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center gap-3 pt-3 border-t border-[rgba(24,38,26,0.06)] mt-1">
          {primaryUrl ? (
            <a
              href={primaryUrl.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[0.75rem] font-medium text-[#18261A] hover:text-[#80A689] transition-colors"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live
            </a>
          ) : (
            <span className="flex items-center gap-1 text-[0.75rem] font-medium text-[rgba(13,13,13,0.3)]">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              In Progress
            </span>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[0.75rem] font-medium text-[#80A689] hover:text-[#18261A] transition-colors"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              Source
            </a>
          )}
          <Link
            href={`/projects#${project.id}`}
            className="ml-auto text-[0.75rem] text-[#80A689] hover:text-[#18261A] transition-colors"
          >
            Details →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
