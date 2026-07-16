'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import AnimatedSection from '@/components/ui/AnimatedSection';

const BRANDS = [
  { name: 'Blue Ribbon',      logo: '/logos/blueribbon.png', square: true  },
  { name: 'Kode Club',        logo: '/logos/kode.png',       square: true  },
  { name: 'Ryze Club',        logo: '/logos/ryze.png',       square: true  },
  { name: 'O West Club',      logo: '/logos/owest.png',      square: true  },
  { name: 'Flow',             logo: '/logos/flow.png',       square: false },
  { name: 'All Seasons MK',   logo: '/logos/allseasons.png', square: false },
  { name: 'Moldndie',         logo: '/logos/moldndie.png',   square: false },
];

// Duplicated once so `.animate-marquee` (translateX(-50%)) loops seamlessly.
const MARQUEE_BRANDS = [...BRANDS, ...BRANDS];

function LogoItem({ brand, hidden }: { brand: (typeof BRANDS)[number]; hidden?: boolean }) {
  return (
    <div
      className="group flex flex-col items-center gap-2.5 px-8 shrink-0 cursor-default select-none"
      aria-hidden={hidden}
    >
      <div className="h-9 flex items-center justify-center">
        <Image
          src={brand.logo}
          alt={brand.name}
          width={brand.square ? 40 : 84}
          height={40}
          className={[
            brand.square ? 'h-9 w-9' : 'h-6 w-auto max-w-[84px]',
            'object-contain opacity-30 group-hover:opacity-70 transition-opacity duration-200',
          ].join(' ')}
          style={{ filter: 'brightness(0) saturate(0)' }}
        />
      </div>
      <span
        className="text-[0.625rem] font-medium tracking-tight text-center leading-snug
                   text-[rgba(13,13,13,0.35)] group-hover:text-[rgba(13,13,13,0.6)]
                   transition-colors duration-200 whitespace-nowrap"
      >
        {brand.name}
      </span>
    </div>
  );
}

export default function BrandsSection() {
  const t = useTranslations('home.brands');
  const bullets = t.raw('bullets') as string[];

  return (
    <section className="py-20 bg-white border-y border-[rgba(24,38,26,0.07)] overflow-hidden">
      <div className="section-container">
        <AnimatedSection>
          <div className="max-w-xl mx-auto text-center">
            <p className="text-[0.6875rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-4">
              {t('eyebrow')}
            </p>

            <h2 className="text-[clamp(1.5rem,2.6vw,2rem)] font-bold tracking-[-0.03em] text-[#0D0D0D] leading-[1.15] mb-5">
              {t('title')}
            </h2>

            <p className="text-[0.9375rem] text-[#3a5c3e] leading-[1.72] mb-8">
              {t('body')}
            </p>

            {/* Bullets */}
            <ul className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
              {bullets.map((b) => (
                <li key={b}>
                  <span
                    className="inline-flex items-center gap-2 rounded-full border border-[rgba(24,38,26,0.12)]
                               px-3.5 py-1.5 text-[0.8125rem] font-medium text-[#18261A]"
                  >
                    <span
                      className="w-[5px] h-[5px] rounded-full flex-shrink-0"
                      style={{ background: '#80A689' }}
                      aria-hidden
                    />
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              href="/about"
              className="group inline-flex items-center gap-1.5 text-[0.875rem] font-semibold
                         text-[#18261A] hover:text-[#80A689] transition-colors duration-200"
            >
              {t('cta')}
              <svg
                className="w-3.5 h-3.5 translate-x-0 group-hover:translate-x-0.5 transition-transform duration-200 rtl:-scale-x-100"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </AnimatedSection>
      </div>

      {/* ── Full-bleed infinite logo marquee — hidden, revisit later ──
      <AnimatedSection delay={0.1}>
        <div className="relative mt-14 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee">
            {MARQUEE_BRANDS.map((brand, i) => (
              <LogoItem key={`${brand.name}-${i}`} brand={brand} hidden={i >= BRANDS.length} />
            ))}
          </div>
        </div>
      </AnimatedSection>
      */}
    </section>
  );
}
