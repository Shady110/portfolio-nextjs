import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Timeline from '@/components/about/Timeline';
import AnimatedSection from '@/components/ui/AnimatedSection';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.about' });
  return { title: t('title'), description: t('description') };
}

interface Card { title: string; body: string; }
interface Principle { label: string; body: string; }
interface Sector { name: string; note: string; }
interface Group { label: string; items: string[]; }

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('about');

  const paragraphs = t.raw('hero.paragraphs') as string[];
  const valueCards = t.raw('why.cards') as Card[];
  const principles = t.raw('howIBuild.principles') as Principle[];
  const sectors = t.raw('sectors.items') as Sector[];
  const groups = t.raw('capabilities.groups') as Group[];

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        <div
          className="absolute top-0 end-0 w-[560px] h-[560px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(189,242,202,0.28) 0%, transparent 68%)',
            transform: 'translate(22%, -22%)',
          }}
          aria-hidden
        />
        <div className="section-container relative z-10">
          <AnimatedSection>
            <p className="text-[0.6875rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-4">
              {t('hero.eyebrow')}
            </p>
            <h1 className="text-[clamp(2.4rem,5vw,4rem)] font-bold tracking-[-0.035em] text-[#0D0D0D] leading-[1.05] mb-8 max-w-2xl">
              {t('hero.titleLead')}{' '}
              <span className="text-gradient">{t('hero.titleHighlight')}</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="max-w-lg space-y-4 text-[0.9375rem] text-[#3a5c3e] leading-[1.75]">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Why Teams Hire Me ─────────────────────────────────────────────── */}
      <section className="page-section section-container">
        <AnimatedSection className="mb-10">
          <p className="text-[0.6875rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-3">
            {t('why.eyebrow')}
          </p>
          <h2 className="text-[clamp(1.5rem,2.6vw,2rem)] font-bold tracking-[-0.03em] text-[#0D0D0D] leading-tight max-w-md">
            {t('why.title')}
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {valueCards.map((card, i) => (
            <AnimatedSection key={card.title} delay={i * 0.06}>
              <div className="h-full p-7 rounded-2xl border border-[rgba(24,38,26,0.07)] bg-white hover:border-[rgba(24,38,26,0.13)] hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-6 h-[2px] bg-[#80A689] rounded-full mb-5" />
                <h3 className="text-[0.9375rem] font-semibold text-[#0D0D0D] tracking-tight mb-2.5">
                  {card.title}
                </h3>
                <p className="text-[0.875rem] text-[#3a5c3e] leading-[1.72]">{card.body}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── How I Build ───────────────────────────────────────────────────── */}
      <section className="page-section section-container">
        <AnimatedSection className="mb-10">
          <p className="text-[0.6875rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-3">
            {t('howIBuild.eyebrow')}
          </p>
          <h2 className="text-[clamp(1.5rem,2.6vw,2rem)] font-bold tracking-[-0.03em] text-[#0D0D0D] leading-tight max-w-md">
            {t('howIBuild.title')}
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-0">
          {principles.map((p, i) => (
            <AnimatedSection key={p.label} delay={i * 0.06}>
              <div className="py-7 border-t border-[rgba(24,38,26,0.07)]">
                <div className="flex items-baseline gap-3 mb-2.5">
                  <span className="latin text-[0.5625rem] font-bold font-mono text-[#80A689] flex-shrink-0">
                    0{i + 1}
                  </span>
                  <h3 className="text-[0.9375rem] font-semibold text-[#0D0D0D] tracking-tight">
                    {p.label}
                  </h3>
                </div>
                <p className="text-[0.875rem] text-[#3a5c3e] leading-[1.72] ps-[1.375rem]">
                  {p.body}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── Product Experience Across ─────────────────────────────────────── */}
      <section className="page-section section-container">
        <AnimatedSection className="mb-10">
          <p className="text-[0.6875rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-3">
            {t('sectors.eyebrow')}
          </p>
          <h2 className="text-[clamp(1.5rem,2.6vw,2rem)] font-bold tracking-[-0.03em] text-[#0D0D0D] leading-tight max-w-md">
            {t('sectors.title')}
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t border-[rgba(24,38,26,0.07)]">
          {sectors.map((sector, i) => (
            <AnimatedSection key={sector.name} delay={i * 0.05}>
              <div className="py-6 pe-6 border-b border-[rgba(24,38,26,0.06)] lg:border-b-0 lg:border-e lg:last:border-e-0">
                <p className="text-[0.875rem] font-semibold text-[#0D0D0D] tracking-tight mb-1.5">
                  {sector.name}
                </p>
                <p className="text-[0.75rem] text-[#80A689] leading-snug">{sector.note}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── Core Capabilities ─────────────────────────────────────────────── */}
      <section className="page-section section-container">
        <AnimatedSection className="mb-10">
          <p className="text-[0.6875rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-3">
            {t('capabilities.eyebrow')}
          </p>
          <h2 className="text-[clamp(1.5rem,2.6vw,2rem)] font-bold tracking-[-0.03em] text-[#0D0D0D] leading-tight max-w-md">
            {t('capabilities.title')}
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          {groups.map((group, i) => (
            <AnimatedSection key={group.label} delay={i * 0.07}>
              <div>
                <p className="text-[0.625rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-4">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="latin px-3 py-1.5 text-[0.8125rem] font-medium text-[#18261A] border border-[rgba(24,38,26,0.1)] rounded-xl bg-white hover:bg-[#F2F2F2] hover:border-[rgba(24,38,26,0.18)] transition-colors duration-150 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── Timeline ──────────────────────────────────────────────────────── */}
      <section className="page-section section-container">
        <Timeline />
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="page-section section-container">
        <AnimatedSection>
          <div className="rounded-2xl border border-[rgba(24,38,26,0.08)] bg-[#F9FAF9] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-sm">
              <h2 className="text-[1.0625rem] font-semibold text-[#0D0D0D] tracking-tight mb-2">
                {t('cta.title')}
              </h2>
              <p className="text-[0.875rem] text-[#3a5c3e] leading-relaxed">{t('cta.body')}</p>
            </div>
            <div className="flex flex-wrap gap-2.5 flex-shrink-0">
              <Link href="/projects">
                <button className="px-5 py-2 text-[0.875rem] font-medium text-[#18261A] border border-[rgba(24,38,26,0.14)] rounded-xl hover:bg-white transition-colors">
                  {t('cta.seeWork')}
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-5 py-2 text-[0.875rem] font-medium text-white bg-[#18261A] rounded-xl hover:bg-[#243d27] transition-colors shadow-sm shadow-[rgba(24,38,26,0.15)]">
                  {t('cta.getInTouch')}
                </button>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
