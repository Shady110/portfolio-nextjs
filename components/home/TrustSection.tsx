'use client';

import { useTranslations } from 'next-intl';
import AnimatedSection from '@/components/ui/AnimatedSection';

interface Principle { label: string; body: string; }

export default function TrustSection() {
  const t = useTranslations('home.trust');
  const principles = t.raw('principles') as Principle[];
  return (
    <section className="page-section section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* ── Left: positioning ── */}
        <div className="lg:sticky lg:top-24">
          <AnimatedSection>
            <p className="text-[0.6875rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-4">
              {t('eyebrow')}
            </p>
            <h2 className="text-[clamp(1.5rem,2.6vw,2rem)] font-bold tracking-[-0.03em] text-[#0D0D0D] leading-[1.15] mb-5">
              {t('title')}
            </h2>
            <p className="text-[0.9375rem] text-[#3a5c3e] leading-[1.72] max-w-sm">
              {t('body')}
            </p>
          </AnimatedSection>
        </div>

        {/* ── Right: principles ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-0">
          {principles.map((p, i) => (
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
