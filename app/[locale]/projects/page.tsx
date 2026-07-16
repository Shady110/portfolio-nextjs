import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectsBento from '@/components/projects/ProjectsBento';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.projects' });
  return { title: t('title'), description: t('description') };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('projects');

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-14 bg-white overflow-hidden">
        <div
          className="absolute top-0 start-1/3 w-[600px] h-[420px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(189,242,202,0.24) 0%, transparent 68%)',
            transform: 'translateY(-25%)',
          }}
          aria-hidden
        />

        <div className="section-container relative z-10">
          <AnimatedSection>
            <p className="text-[0.6875rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-4">
              {t('hero.eyebrow')}
            </p>
            <h1 className="text-[clamp(2.4rem,5vw,4rem)] font-bold tracking-[-0.035em] text-[#0D0D0D] leading-[1.05] mb-5 max-w-2xl">
              {t('hero.titleLead')}{' '}
              <span className="text-gradient">{t('hero.titleHighlight')}</span>
            </h1>
            <p className="text-[0.9375rem] text-[#3a5c3e] leading-relaxed max-w-xl">
              {t('hero.description')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Bento grid ──────────────────────────────────────────────────── */}
      <section className="section-container pb-20">
        <ProjectsBento />
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="page-section section-container border-t border-[rgba(24,38,26,0.07)]">
        <SectionHeading
          eyebrow={t('cta.eyebrow')}
          title={t('cta.title')}
          description={t('cta.description')}
          align="center"
        />
        <AnimatedSection delay={0.12} className="flex justify-center mt-6">
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <Link href="/contact">
              <button className="px-6 py-2.5 text-[0.875rem] font-medium text-white bg-[#18261A] rounded-xl hover:bg-[#243d27] transition-colors shadow-sm shadow-[rgba(24,38,26,0.15)]">
                {t('cta.primary')}
              </button>
            </Link>
            <Link href="/about">
              <button className="px-6 py-2.5 text-[0.875rem] font-medium text-[#18261A] border border-[rgba(24,38,26,0.14)] rounded-xl hover:bg-[#F2F2F2] transition-colors">
                {t('cta.secondary')}
              </button>
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
