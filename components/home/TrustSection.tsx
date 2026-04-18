'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';

const PRINCIPLES = [
  {
    label: 'Design quality meets engineering discipline',
    body: 'Great frontend work lives between the two. Clean code matters, but so does clarity, usability, and the attention to detail that users actually feel.',
  },
  {
    label: 'Build products users enjoy using',
    body: "I don't just ship screens — I ask whether the interface actually serves the user. Every decision is weighed against the experience, not just the spec.",
  },
  {
    label: 'Components that compose',
    body: 'I build with reusability in mind from the first commit — clear APIs, consistent naming, and shared patterns that make future work faster.',
  },
  {
    label: 'Performance from the beginning',
    body: 'Core Web Vitals, accessibility, and mobile performance are part of building — not bolted on after launch. Speed is part of the product.',
  },
];

export default function TrustSection() {
  return (
    <section className="page-section section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* ── Left: positioning ── */}
        <div className="lg:sticky lg:top-24">
          <AnimatedSection>
            <p className="text-[0.6875rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-4">
              Engineering Philosophy
            </p>
            <h2 className="text-[clamp(1.5rem,2.6vw,2rem)] font-bold tracking-[-0.03em] text-[#0D0D0D] leading-[1.15] mb-5">
              How I approach every
              <br className="hidden sm:block" />
              piece of frontend work.
            </h2>
            <p className="text-[0.9375rem] text-[#3a5c3e] leading-[1.72] max-w-sm">
              Four values I hold to on every project — from a single reusable
              component to a full platform. Not rules. Just how I think.
            </p>
          </AnimatedSection>
        </div>

        {/* ── Right: principles ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-0">
          {PRINCIPLES.map((p, i) => (
            <AnimatedSection key={p.label} delay={i * 0.06}>
              <div className="py-7 border-t border-[rgba(24,38,26,0.07)]">
                <div className="flex items-baseline gap-3 mb-2.5">
                  <span className="text-[0.5625rem] font-bold font-mono text-[#80A689] flex-shrink-0">
                    0{i + 1}
                  </span>
                  <h3 className="text-[0.875rem] font-semibold text-[#0D0D0D] tracking-tight leading-snug">
                    {p.label}
                  </h3>
                </div>
                <p className="text-[0.8125rem] text-[#3a5c3e] leading-[1.72] pl-[1.375rem]">
                  {p.body}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
