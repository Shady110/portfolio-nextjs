'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';

const EXPERIENCE = [
  {
    period: 'Dec 2024 – Present',
    role: 'Front-End Developer',
    company: 'Blue Ribbon',
    url: 'https://brclubs.com',
    current: true,
    summary:
      'Production frontend work on sports club management platforms and multi-tenant dashboards — the kind of interfaces that real operators depend on every day.',
    responsibilities: [
      'Built responsive interfaces across multiple club brands using React, Next.js, and Tailwind CSS',
      'Converted Figma designs into production-ready components with high implementation fidelity',
      'Integrated REST APIs and handled dynamic data rendering across club management modules',
      'Worked within a multi-tenant architecture serving Kode Club, Ryze Clubs, O West Club, and Kayan Club',
      'Contributed to product design and UX decisions — not just execution of the spec',
      'Collaborated closely with designers and backend developers across the full delivery cycle',
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
  },
  {
    period: 'Nov 2023 – Jun 2025',
    role: 'Full Stack Mentor',
    company: 'Kimit Innovation Technology',
    url: undefined,
    current: false,
    summary:
      'Teaching and mentoring the next generation of developers — which demands a level of clarity and depth that shipping code alone rarely requires.',
    responsibilities: [
      'Taught HTML, CSS, JavaScript, and React from first principles through to real-world application',
      'Guided students through project-based learning — building and shipping actual products',
      'Reviewed code with specific, actionable feedback focused on correctness and long-term maintainability',
      'Explained full-stack concepts: frontend architecture, backend integration, and API design',
      'Supported debugging sessions and reinforced strong development habits and best practices',
      'Helped students understand end-to-end product development, not just isolated syntax',
    ],
    stack: ['React', 'JavaScript', 'HTML & CSS', 'Node.js', 'Product Fundamentals'],
  },
];

export default function Timeline() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 lg:gap-16">

      {/* ── Left: sticky label ─────────────────────────────────────────── */}
      <AnimatedSection>
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-[0.6875rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-4">
            Experience
          </p>
          <h2 className="text-[clamp(1.5rem,2.4vw,1.875rem)] font-bold tracking-[-0.03em] text-[#0D0D0D] leading-[1.2] mb-5">
            Two roles.
            <br />
            Real products.
          </h2>
          <p className="text-[0.875rem] text-[#3a5c3e] leading-[1.72]">
            One role shipping production interfaces.
            One role teaching others how to build them well.
            Both sharpen different things.
          </p>

          {/* Vertical rule — desktop only */}
          <div className="hidden lg:block mt-8 w-px h-12 bg-gradient-to-b from-[rgba(24,38,26,0.15)] to-transparent" />
        </div>
      </AnimatedSection>

      {/* ── Right: experience cards ────────────────────────────────────── */}
      <div className="flex flex-col gap-4">
        {EXPERIENCE.map((entry, i) => (
          <AnimatedSection key={entry.company} delay={i * 0.08}>
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
                      {entry.role}
                    </h3>
                    {entry.current && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[0.5625rem] font-semibold bg-[rgba(189,242,202,0.4)] border border-[rgba(24,38,26,0.1)] text-[#18261A]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#80A689]" />
                        Current
                      </span>
                    )}
                  </div>
                  {entry.url ? (
                    <a
                      href={entry.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.875rem] font-medium text-[#3a5c3e] hover:text-[#18261A] transition-colors duration-150 inline-flex items-center gap-1 group"
                    >
                      {entry.company}
                      <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <p className="text-[0.875rem] font-medium text-[#3a5c3e]">{entry.company}</p>
                  )}
                </div>
                <span className="text-[0.75rem] font-mono text-[#80A689] flex-shrink-0 sm:text-right">
                  {entry.period}
                </span>
              </div>

              {/* ── Summary ── */}
              <p className="text-[0.875rem] text-[#3a5c3e] leading-[1.75] mb-5">
                {entry.summary}
              </p>

              {/* ── Divider ── */}
              <div className="h-px bg-[rgba(24,38,26,0.06)] mb-5" />

              {/* ── Responsibilities ── */}
              <ul className="space-y-2.5 mb-6">
                {entry.responsibilities.map((r) => (
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
                    className="px-2.5 py-1 text-[0.6875rem] font-medium rounded-lg cursor-default
                               bg-[#F2F2F2] border border-[rgba(24,38,26,0.07)] text-[#3a5c3e]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

    </div>
  );
}
