'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function FinalCta() {
  const t = useTranslations('home.finalCta');
  return (
    <section className="page-section section-container">
      <AnimatedSection>
        <div className="rounded-2xl bg-[#F2F2F2] border border-[rgba(24,38,26,0.08)] px-8 md:px-14 py-12 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(189,242,202,0.3) 0%, transparent 70%)',
            }}
            aria-hidden
          />
          <div className="relative z-10">
            <p className="text-[0.6875rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-3">
              {t('eyebrow')}
            </p>
            <h2 className="text-[clamp(1.6rem,3vw,2.25rem)] font-bold tracking-[-0.028em] text-[#0D0D0D] mb-3">
              {t('title')}
            </h2>
            <p className="text-[0.9375rem] text-[#3a5c3e] max-w-md mx-auto leading-relaxed mb-7">
              {t('body')}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              <Link href="/contact">
                <button className="px-6 py-2.5 text-[0.875rem] font-medium text-white bg-[#18261A] rounded-xl hover:bg-[#243d27] transition-colors shadow-sm shadow-[rgba(24,38,26,0.15)]">
                  {t('primary')}
                </button>
              </Link>
              <Link href="/projects">
                <button className="px-6 py-2.5 text-[0.875rem] font-medium text-[#18261A] border border-[rgba(24,38,26,0.15)] rounded-xl hover:bg-white transition-colors bg-white/60">
                  {t('secondary')}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
