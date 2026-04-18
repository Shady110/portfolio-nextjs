'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { skillCategories } from '@/lib/data/skills';

export default function SkillsSnapshot() {
  const preview = skillCategories.slice(0, 3);

  return (
    <section className="page-section section-container">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <AnimatedSection>
          <p className="text-[0.6875rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-3">
            Capabilities
          </p>
          <h2 className="text-[clamp(1.5rem,2.6vw,2rem)] font-bold tracking-[-0.03em] text-[#0D0D0D] leading-tight">
            The stack behind the work.
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.08}>
          <Link
            href="/skills"
            className="flex items-center gap-1.5 text-[0.8125rem] font-medium text-[#80A689] hover:text-[#18261A] transition-colors group flex-shrink-0"
          >
            Full breakdown
            <svg
              className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </AnimatedSection>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {preview.map((cat, i) => (
          <AnimatedSection key={cat.id} delay={i * 0.07}>
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.22 }}
              className="p-5 h-full rounded-2xl border border-[rgba(24,38,26,0.07)] bg-white
                         hover:border-[rgba(24,38,26,0.12)] transition-colors duration-200"
            >
              {/* Header */}
              <div className="mb-4">
                <div className="flex items-baseline gap-2 mb-0.5">
                  <span className="text-[0.5rem] font-bold font-mono text-[#80A689]">{cat.number}</span>
                  <p className="text-[0.8125rem] font-semibold text-[#0D0D0D] tracking-tight">
                    {cat.label}
                  </p>
                </div>
                <p className="text-[0.75rem] text-[rgba(13,13,13,0.4)] leading-snug line-clamp-2">
                  {cat.description}
                </p>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-2.5 py-1 text-[0.75rem] font-medium rounded-lg transition-colors ${
                      skill.primary
                        ? 'bg-[#BDF2CA]/40 border border-[rgba(24,38,26,0.1)] text-[#18261A]'
                        : 'bg-[#F2F2F2] border border-[rgba(24,38,26,0.06)] text-[#3a5c3e]'
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
