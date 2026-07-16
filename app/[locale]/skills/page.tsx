import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import SkillGroup from '@/components/skills/SkillGroup';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { skillCategories } from '@/lib/data/skills';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.skills' });
  return { title: t('title'), description: t('description') };
}

interface WorkItem { label: string; text: string; }
interface Credential { badge: string; title: string; issuer: string; meta: string; detail: string; }

export default async function SkillsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('skills');
  const tcat = await getTranslations('skills.categories');

  const howIWork = t.raw('howIWork.items') as WorkItem[];
  const credentials = t.raw('foundations.credentials') as Credential[];

  // Merge structural skill data with translated label/description.
  const categories = skillCategories.map((cat) => ({
    ...cat,
    label: tcat(`${cat.id}.label`),
    description: tcat(`${cat.id}.description`),
  }));

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 bg-white overflow-hidden">
        <div
          className="absolute top-0 end-1/4 w-[500px] h-[400px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(189,242,202,0.22) 0%, transparent 70%)',
            transform: 'translateY(-20%)',
          }}
          aria-hidden
        />
        <div className="section-container relative z-10 max-w-3xl">
          <AnimatedSection>
            <p className="text-[0.6875rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-4">
              {t('hero.eyebrow')}
            </p>
            <h1 className="text-[clamp(2.4rem,5vw,4rem)] font-bold tracking-[-0.035em] text-[#0D0D0D] leading-[1.05] mb-6">
              {t('hero.titleLead')}{' '}
              <span className="text-gradient">{t('hero.titleHighlight')}</span>
            </h1>
            <p className="text-[0.9375rem] text-[#3a5c3e] leading-[1.75]">{t('hero.body')}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── What I Bring to Product Teams ─────────────────────────────────── */}
      <section className="section-container pb-6">
        <AnimatedSection className="mb-6">
          <p className="text-[0.6875rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-3">
            {t('whatIBring.eyebrow')}
          </p>
          <h2 className="text-[clamp(1.4rem,2.4vw,1.75rem)] font-bold tracking-[-0.03em] text-[#0D0D0D] leading-tight">
            {t('whatIBring.title')}
          </h2>
        </AnimatedSection>

        <SkillGroup category={categories[0]} featured delay={0} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
          {categories.slice(1).map((cat, i) => (
            <SkillGroup key={cat.id} category={cat} delay={(i + 1) * 0.06} />
          ))}
        </div>
      </section>

      {/* ── How I Work ────────────────────────────────────────────────────── */}
      <section className="page-section section-container">
        <AnimatedSection className="mb-10">
          <p className="text-[0.6875rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-3">
            {t('howIWork.eyebrow')}
          </p>
          <h2 className="text-[clamp(1.4rem,2.4vw,1.75rem)] font-bold tracking-[-0.03em] text-[#0D0D0D] leading-tight max-w-md">
            {t('howIWork.title')}
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-12 gap-y-0">
          {howIWork.map((p, i) => (
            <AnimatedSection key={p.label} delay={i * 0.07}>
              <div className="py-7 border-t border-[rgba(24,38,26,0.07)]">
                <div className="flex items-baseline gap-3 mb-2.5">
                  <span className="latin text-[0.5625rem] font-bold font-mono text-[#80A689] flex-shrink-0">
                    0{i + 1}
                  </span>
                  <h3 className="text-[0.875rem] font-semibold text-[#0D0D0D] tracking-tight leading-snug">
                    {p.label}
                  </h3>
                </div>
                <p className="text-[0.8125rem] text-[#3a5c3e] leading-[1.75] ps-[1.375rem]">
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
            {t('foundations.eyebrow')}
          </p>
          <h2 className="text-[clamp(1.4rem,2.4vw,1.75rem)] font-bold tracking-[-0.03em] text-[#0D0D0D] leading-tight max-w-md">
            {t('foundations.title')}
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
          {credentials.map((cert, i) => (
            <AnimatedSection key={cert.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-[rgba(24,38,26,0.07)] bg-white p-7 hover:border-[rgba(24,38,26,0.13)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition-all duration-200">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 border border-[rgba(24,38,26,0.08)]"
                    style={{ background: 'rgba(189,242,202,0.3)' }}
                  >
                    <span className="latin text-[0.6875rem] font-bold text-[#18261A] tracking-widest">
                      {cert.badge}
                    </span>
                  </div>
                  <span className="text-[0.625rem] font-semibold text-[#80A689] uppercase tracking-[0.08em] mt-1">
                    {cert.meta}
                  </span>
                </div>

                <h3 className="text-[0.9375rem] font-semibold text-[#0D0D0D] tracking-tight leading-snug mb-1">
                  {cert.title}
                </h3>
                <p className="latin text-[0.75rem] font-medium text-[#80A689] mb-4">{cert.issuer}</p>
                <p className="text-[0.8125rem] text-[#3a5c3e] leading-[1.72]">{cert.detail}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="section-container pb-20">
        <AnimatedSection>
          <div className="rounded-2xl border border-[rgba(24,38,26,0.08)] bg-[#F9FAF9] p-8 md:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div className="max-w-sm">
              <h2 className="text-[1rem] font-semibold text-[#0D0D0D] tracking-tight mb-2">
                {t('cta.title')}
              </h2>
              <p className="text-[0.875rem] text-[#3a5c3e] leading-relaxed">{t('cta.body')}</p>
            </div>
            <Link href="/contact" className="flex-shrink-0">
              <button className="px-6 py-2.5 text-[0.875rem] font-medium text-white bg-[#18261A] rounded-xl hover:bg-[#243d27] transition-colors shadow-sm shadow-[rgba(24,38,26,0.15)]">
                {t('cta.button')}
              </button>
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
