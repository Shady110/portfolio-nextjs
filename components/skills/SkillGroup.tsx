'use client';

import { motion } from 'framer-motion';
import type { SkillCategory } from '@/lib/data/skills';
import AnimatedSection from '@/components/ui/AnimatedSection';

// ── Featured card — Core Stack ──────────────────────────────────────────────
function FeaturedCard({ category, delay }: { category: SkillCategory; delay: number }) {
  const primary   = category.skills.filter((s) => s.primary);
  const secondary = category.skills.filter((s) => !s.primary);

  return (
    <AnimatedSection delay={delay}>
      <div
        className="rounded-2xl border border-[rgba(24,38,26,0.07)] bg-white p-8
                   hover:border-[rgba(24,38,26,0.12)] transition-colors duration-200"
      >
        {/* Header */}
        <div className="flex items-baseline gap-2.5 mb-1.5">
          <span className="text-[0.5625rem] font-bold font-mono text-[#80A689]">
            {category.number}
          </span>
          <h3 className="text-[0.9375rem] font-semibold text-[#0D0D0D] tracking-tight">
            {category.label}
          </h3>
        </div>
        <p className="text-[0.8125rem] text-[rgba(13,13,13,0.4)] leading-snug mb-7">
          {category.description}
        </p>

        {/* Primary — large inline text */}
        <div className="flex flex-wrap items-baseline gap-x-0 gap-y-1 mb-6">
          {primary.map((s, i) => (
            <span key={s.name} className="inline-flex items-baseline">
              <span className="text-[1rem] font-semibold text-[#0D0D0D] tracking-tight">
                {s.name}
              </span>
              {i < primary.length - 1 && (
                <span className="mx-3 text-[#BDF2CA] font-normal text-[1.1rem] select-none">
                  /
                </span>
              )}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-[rgba(24,38,26,0.06)] mb-5" />

        {/* Secondary — clean chips */}
        <div className="flex flex-wrap gap-2">
          {secondary.map((s) => (
            <span
              key={s.name}
              className="px-3 py-1 text-[0.75rem] font-medium rounded-xl
                         border border-[rgba(24,38,26,0.08)] text-[#3a5c3e] bg-[#F9FAF9]
                         hover:border-[rgba(24,38,26,0.15)] hover:text-[#18261A]
                         transition-colors duration-150 cursor-default"
            >
              {s.name}
            </span>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

// ── Standard card ───────────────────────────────────────────────────────────
function StandardCard({ category, delay }: { category: SkillCategory; delay: number }) {
  const primary   = category.skills.filter((s) => s.primary);
  const secondary = category.skills.filter((s) => !s.primary);

  return (
    <AnimatedSection delay={delay}>
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
        className="h-full flex flex-col rounded-2xl border border-[rgba(24,38,26,0.07)] bg-white p-6
                   hover:border-[rgba(24,38,26,0.12)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)]
                   transition-all duration-200"
      >
        {/* Header */}
        <div className="flex items-baseline gap-2.5 mb-1">
          <span className="text-[0.5625rem] font-bold font-mono text-[#80A689] flex-shrink-0">
            {category.number}
          </span>
          <h3 className="text-[0.9375rem] font-semibold text-[#0D0D0D] tracking-tight">
            {category.label}
          </h3>
        </div>
        <p className="text-[0.8125rem] text-[rgba(13,13,13,0.4)] leading-snug mb-5">
          {category.description}
        </p>

        {/* Primary — clean text list */}
        <ul className="space-y-2 mb-5">
          {primary.map((s) => (
            <li key={s.name} className="flex items-center gap-2.5">
              <span
                className="w-[5px] h-[5px] rounded-full flex-shrink-0"
                style={{ background: '#80A689' }}
                aria-hidden
              />
              <span className="text-[0.875rem] font-medium text-[#18261A]">{s.name}</span>
            </li>
          ))}
        </ul>

        {/* Divider */}
        {secondary.length > 0 && (
          <div className="h-px bg-[rgba(24,38,26,0.06)] mb-4 mt-auto" />
        )}

        {/* Secondary — chips */}
        {secondary.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {secondary.map((s) => (
              <span
                key={s.name}
                className="px-2.5 py-1 text-[0.6875rem] font-medium rounded-lg cursor-default
                           bg-[#F2F2F2] border border-[rgba(24,38,26,0.07)] text-[#3a5c3e]
                           hover:border-[rgba(24,38,26,0.13)] hover:text-[#18261A]
                           transition-colors duration-150"
              >
                {s.name}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </AnimatedSection>
  );
}

// ── Export ──────────────────────────────────────────────────────────────────
export default function SkillGroup({
  category,
  delay = 0,
  featured = false,
}: {
  category: SkillCategory;
  delay?: number;
  featured?: boolean;
}) {
  return featured
    ? <FeaturedCard category={category} delay={delay} />
    : <StandardCard category={category} delay={delay} />;
}
