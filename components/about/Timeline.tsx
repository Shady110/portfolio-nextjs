'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';

// Structural, non-translatable per-role data (company names, URLs, stack).
const EXPERIENCE = [
  {
    id: 'blue-ribbon',
    company: 'Blue Ribbon',
    url: 'https://brclubs.com',
    current: true,
    stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
  },
  {
    id: 'kimit',
    company: 'Kimit Innovation Technology',
    url: undefined,
    current: false,
    stack: ['React', 'JavaScript', 'HTML & CSS', 'Node.js', 'Product Fundamentals'],
  },
] as const;

export default function Timeline() {
  const t = useTranslations('about.timeline');
  const tc = useTranslations('common');
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 lg:gap-16">

      {/* ── Left: sticky label ─────────────────────────────────────────── */}
      <AnimatedSection>
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-[0.6875rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-4">
            {t('eyebrow')}
          </p>
          <h2 className="text-[clamp(1.5rem,2.4vw,1.875rem)] font-bold tracking-[-0.03em] text-[#0D0D0D] leading-[1.2] mb-5">
            {t('titleLine1')}
            <br />
            {t('titleLine2')}
          </h2>
          <p className="text-[0.875rem] text-[#3a5c3e] leading-[1.72]">
            {t('body')}
          </p>

          {/* Vertical rule — desktop only */}
          <div className="hidden lg:block mt-8 w-px h-12 bg-gradient-to-b from-[rgba(24,38,26,0.15)] to-transparent" />
        </div>
      </AnimatedSection>

      {/* ── Right: experience cards ────────────────────────────────────── */}
      <div className="flex flex-col gap-4">
        {EXPERIENCE.map((entry, i) => {
          const responsibilities = t.raw(`entries.${entry.id}.responsibilities`) as string[];
          return (
          <AnimatedSection key={entry.id} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="rounded-2xl border border-[rgba(24,38,26,0.07)] bg-white p-7
                         hover:border-[rgba(24,38,26,0.13)] hover:shadow-[0_6px_28px_rgba(0,0,0,0.05)]
                         transition-all duration-200"
            >
              {/* ── Card header ── */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                <div>
                  <div className="flex items-center gap-2.5 mb-1">
                    <h3 className="text-[1rem] font-bold text-[#0D0D0D] tracking-tight">
                      {t(`entries.${entry.id}.role`)}
                    </h3>
                    {entry.current && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[0.5625rem] font-semibold bg-[rgba(189,242,202,0.4)] border border-[rgba(24,38,26,0.1)] text-[#18261A]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#80A689]" />
                        {tc('current')}
                      </span>
                    )}
                  </div>
                  {entry.url ? (
                    <a
                      href={entry.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="latin text-[0.875rem] font-medium text-[#3a5c3e] hover:text-[#18261A] transition-colors duration-150 inline-flex items-center gap-1 group"
                    >
                      {entry.company}
                      <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity rtl:-scale-x-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <p className="latin text-[0.875rem] font-medium text-[#3a5c3e]">{entry.company}</p>
                  )}
                </div>
                <span className="latin text-[0.75rem] font-mono text-[#80A689] flex-shrink-0 sm:text-end">
                  {t(`entries.${entry.id}.period`)}
                </span>
              </div>

              {/* ── Summary ── */}
              <p className="text-[0.875rem] text-[#3a5c3e] leading-[1.75] mb-5">
                {t(`entries.${entry.id}.summary`)}
              </p>

              {/* ── Divider ── */}
              <div className="h-px bg-[rgba(24,38,26,0.06)] mb-5" />

              {/* ── Responsibilities ── */}
              <ul className="space-y-2.5 mb-6">
                {responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 text-[#80A689] font-medium select-none"
                      style={{ fontSize: '0.75rem', lineHeight: '1.6' }}
                      aria-hidden
                    >
                      —
                    </span>
                    <span className="text-[0.8125rem] text-[#3a5c3e] leading-[1.65]">{r}</span>
                  </li>
                ))}
              </ul>

              {/* ── Stack tags ── */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[rgba(24,38,26,0.05)]">
                {entry.stack.map((tech) => (
                  <span
                    key={tech}
                    className="latin px-2.5 py-1 text-[0.6875rem] font-medium rounded-lg cursor-default
                               bg-[#F2F2F2] border border-[rgba(24,38,26,0.07)] text-[#3a5c3e]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>
          );
        })}
      </div>

    </div>
  );
}
