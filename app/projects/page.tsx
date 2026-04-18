import type { Metadata } from 'next';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectFlipCard from '@/components/projects/ProjectFlipCard';
import { projects } from '@/lib/data/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Real production projects across SaaS platforms, full-stack commerce, agency work, and healthcare — with honest context on role, contributions, and business impact.',
};

export default function ProjectsPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-14 bg-white overflow-hidden">
        {/* Ambient glow */}
        <div
          className="absolute top-0 left-1/3 w-[600px] h-[420px] pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(189,242,202,0.24) 0%, transparent 68%)',
            transform: 'translateY(-25%)',
          }}
          aria-hidden
        />

        <div className="section-container relative z-10">
          <AnimatedSection>
            <p className="text-[0.6875rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-4">
              Selected Work
            </p>
            <h1 className="text-[clamp(2.4rem,5vw,4rem)] font-bold tracking-[-0.035em] text-[#0D0D0D] leading-[1.05] mb-5 max-w-2xl">
              Real projects.{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #80A689, #18261A)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Real production.
              </span>
            </h1>
            <p className="text-[0.9375rem] text-[#3a5c3e] leading-relaxed max-w-xl">
              Four distinct engagements across SaaS platforms, full-stack commerce, agency
              operations, and healthcare. Hover any card to see contributions and impact.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 2 × 2 project grid ──────────────────────────────────────────── */}
      <section className="section-container pb-20">

        {/*
          grid-cols-1  →  mobile: single column, stacked
          md:grid-cols-2  →  tablet + desktop: 2 columns, 2 rows = 2×2
          gap-5  →  premium whitespace between cards
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.07}>
              <ProjectFlipCard project={project} />
            </AnimatedSection>
          ))}
        </div>

      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="page-section section-container border-t border-[rgba(24,38,26,0.07)]">
        <SectionHeading
          eyebrow="Next Steps"
          title="Have a project in mind?"
          description="I take on a limited number of engagements at a time to ensure every project gets full attention."
          align="center"
        />
        <AnimatedSection delay={0.12} className="flex justify-center mt-6">
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <a href="/contact">
              <button className="px-6 py-2.5 text-[0.875rem] font-medium text-white bg-[#18261A] rounded-xl
                                 hover:bg-[#243d27] transition-colors shadow-sm shadow-[rgba(24,38,26,0.15)]">
                Start a Conversation
              </button>
            </a>
            <a href="/about">
              <button className="px-6 py-2.5 text-[0.875rem] font-medium text-[#18261A]
                                 border border-[rgba(24,38,26,0.14)] rounded-xl
                                 hover:bg-[#F2F2F2] transition-colors">
                Learn About Me
              </button>
            </a>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
