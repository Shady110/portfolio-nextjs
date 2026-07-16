import type { Metadata } from 'next';
import SkillGroup from '@/components/skills/SkillGroup';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { skillCategories } from '@/lib/data/skills';

export const metadata: Metadata = {
  title: 'Skills',
  description:
    'React, Next.js, TypeScript, Tailwind — plus design systems, product thinking, and a Google UX Design professional certificate. Built through real production work.',
};

const HOW_I_WORK = [
  {
    label: 'Start with the problem, not the component',
    text: "I don't open an editor until I understand what the interface is actually solving. The spec tells me what to build. Understanding the user tells me how it should work.",
  },
  {
    label: 'Move fast, then make it right',
    text: "Getting something testable in front of people has real value. So does the code that lives in production for the next two years. I know when to push and when to be deliberate.",
  },
  {
    label: 'Own the seam',
    text: "The gap between design and code — or frontend and backend — is where problems live. I don't hand those off. I find out what's wrong and fix it.",
  },
];

const CREDENTIALS = [
  {
    badge: 'UX',
    title: 'Google UX Design Professional Certificate',
    issuer: 'Google · Coursera',
    meta: '8-course professional program',
    detail:
      'Covers UX research, wireframing, prototyping, usability testing, and design systems end to end. Formalised the design thinking I apply daily — from information architecture to the micro-interactions that build product trust.',
  },
  {
    badge: 'FS',
    title: 'Full Stack Development Diploma',
    issuer: 'Kimit Innovation Technology',
    meta: 'Intensive programme',
    detail:
      'Frontend architecture, backend fundamentals, API design, databases, and end-to-end product delivery. Where I bridged the gap between building UI and understanding the full system it sits inside.',
  },
];

export default function SkillsPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 bg-white overflow-hidden">
        <div
          className="absolute top-0 right-1/4 w-[500px] h-[400px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(189,242,202,0.22) 0%, transparent 70%)',
            transform: 'translateY(-20%)',
          }}
          aria-hidden
        />
        <div className="section-container relative z-10 max-w-3xl">
          <AnimatedSection>
            <p className="text-[0.6875rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-4">
              Capabilities
            </p>
            <h1 className="text-[clamp(2.4rem,5vw,4rem)] font-bold tracking-[-0.035em] text-[#0D0D0D] leading-[1.05] mb-6">
              Not a list of buzzwords.{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #80A689, #18261A)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                A working toolkit.
              </span>
            </h1>
            <p className="text-[0.9375rem] text-[#3a5c3e] leading-[1.75]">
              Four areas that define how I contribute to product teams. Each one shaped by
              shipping real interfaces across SaaS platforms, e-commerce, dashboards, and
              growth products — not portfolio experiments.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── What I Bring to Product Teams ─────────────────────────────────── */}
      <section className="section-container pb-6">
        <AnimatedSection className="mb-6">
          <p className="text-[0.6875rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-3">
            What I Bring to Product Teams
          </p>
          <h2 className="text-[clamp(1.4rem,2.4vw,1.75rem)] font-bold tracking-[-0.03em] text-[#0D0D0D] leading-tight">
            Four areas. Each one backed by shipping real products.
          </h2>
        </AnimatedSection>

        {/* Core Stack — full width, featured */}
        <SkillGroup
          category={skillCategories[0]}
          featured
          delay={0}
        />

        {/* Experience, Collaboration, Strengths — 3-col */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
          {skillCategories.slice(1).map((cat, i) => (
            <SkillGroup
              key={cat.id}
              category={cat}
              delay={(i + 1) * 0.06}
            />
          ))}
        </div>
      </section>

      {/* ── How I Work ────────────────────────────────────────────────────── */}
      <section className="page-section section-container">
        <AnimatedSection className="mb-10">
          <p className="text-[0.6875rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-3">
            How I Work
          </p>
          <h2 className="text-[clamp(1.4rem,2.4vw,1.75rem)] font-bold tracking-[-0.03em] text-[#0D0D0D] leading-tight max-w-md">
            The thinking behind the output.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-12 gap-y-0">
          {HOW_I_WORK.map((p, i) => (
            <AnimatedSection key={p.label} delay={i * 0.07}>
              <div className="py-7 border-t border-[rgba(24,38,26,0.07)]">
                <div className="flex items-baseline gap-3 mb-2.5">
                  <span className="text-[0.5625rem] font-bold font-mono text-[#80A689] flex-shrink-0">
                    0{i + 1}
                  </span>
                  <h3 className="text-[0.875rem] font-semibold text-[#0D0D0D] tracking-tight leading-snug">
                    {p.label}
                  </h3>
                </div>
                <p className="text-[0.8125rem] text-[#3a5c3e] leading-[1.75] pl-[1.375rem]">
                  {p.text}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── Professional Foundations ──────────────────────────────────────── */}
      <section className="page-section section-container">
        <AnimatedSection className="mb-10">
          <p className="text-[0.6875rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-3">
            Professional Foundations
          </p>
          <h2 className="text-[clamp(1.4rem,2.4vw,1.75rem)] font-bold tracking-[-0.03em] text-[#0D0D0D] leading-tight max-w-md">
            The education behind the work.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
          {CREDENTIALS.map((cert, i) => (
            <AnimatedSection key={cert.title} delay={i * 0.08}>
              <div
                className="group h-full rounded-2xl border border-[rgba(24,38,26,0.07)] bg-white p-7
                           hover:border-[rgba(24,38,26,0.13)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.05)]
                           transition-all duration-200"
              >
                {/* Badge row */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0
                               border border-[rgba(24,38,26,0.08)]"
                    style={{ background: 'rgba(189,242,202,0.3)' }}
                  >
                    <span className="text-[0.6875rem] font-bold text-[#18261A] tracking-widest">
                      {cert.badge}
                    </span>
                  </div>
                  <span className="text-[0.625rem] font-semibold text-[#80A689] uppercase tracking-[0.08em] mt-1">
                    {cert.meta}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[0.9375rem] font-semibold text-[#0D0D0D] tracking-tight leading-snug mb-1">
                  {cert.title}
                </h3>
                <p className="text-[0.75rem] font-medium text-[#80A689] mb-4">
                  {cert.issuer}
                </p>

                {/* Description */}
                <p className="text-[0.8125rem] text-[#3a5c3e] leading-[1.72]">
                  {cert.detail}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="section-container pb-20">
        <AnimatedSection>
          <div
            className="rounded-2xl border border-[rgba(24,38,26,0.08)] bg-[#F9FAF9]
                       p-8 md:p-10 flex flex-col sm:flex-row items-start sm:items-center
                       justify-between gap-5"
          >
            <div className="max-w-sm">
              <h2 className="text-[1rem] font-semibold text-[#0D0D0D] tracking-tight mb-2">
                Not sure if I&apos;m the right fit?
              </h2>
              <p className="text-[0.875rem] text-[#3a5c3e] leading-relaxed">
                If your stack looks different or the role is unconventional — reach out.
                I learn fast and I&apos;m honest about what I do and don&apos;t know.
              </p>
            </div>
            <a href="/contact" className="flex-shrink-0">
              <button className="px-6 py-2.5 text-[0.875rem] font-medium text-white bg-[#18261A] rounded-xl hover:bg-[#243d27] transition-colors shadow-sm shadow-[rgba(24,38,26,0.15)]">
                Let&apos;s Talk
              </button>
            </a>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
