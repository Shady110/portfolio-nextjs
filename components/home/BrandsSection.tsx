'use client';

import { memo, useRef } from 'react';
import Image from 'next/image';
import { useInView } from 'framer-motion';
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

const BULLETS = [
  'Sports Club Platforms',
  'Admin Dashboards',
  'E-commerce Experiences',
  'Landing Pages',
];

// ─── Memoized card — never re-renders after initial paint ───────────────────
// Stagger is pure CSS (animation-delay), so no JS runs per card on scroll.
// Hover opacity is CSS group-hover — zero JS, compositor-only.
const LogoCard = memo(function LogoCard({
  name,
  logo,
  square,
  index,
  visible,
}: {
  name: string;
  logo: string;
  square: boolean;
  index: number;
  visible: boolean;
}) {
  return (
    <div
      className={`group relative flex flex-col items-center justify-center gap-2.5 p-4 aspect-square
                  border border-[rgba(24,38,26,0.07)] rounded-2xl bg-white
                  hover:border-[rgba(24,38,26,0.13)] hover:bg-[#FAFAFA]
                  transition-[border-color,background-color] duration-200 cursor-default select-none
                  ${visible ? 'logo-card-animate' : ''}`}
      style={visible ? { animationDelay: `${index * 0.055}s` } : undefined}
    >
      {/* Logo mark — opacity via CSS group-hover, no JS handlers */}
      <div className="flex items-center justify-center flex-1 w-full">
        <Image
          src={logo}
          alt={name}
          width={square ? 56 : 96}
          height={56}
          className={[
            square
              ? 'w-9 h-9 object-contain'
              : 'h-6 w-auto max-w-[84px] object-contain',
            'opacity-25 group-hover:opacity-60 transition-opacity duration-200',
          ].join(' ')}
          style={{ filter: 'brightness(0) saturate(0)' }}
        />
      </div>

      {/* Name label */}
      <span
        className="text-[0.625rem] font-medium tracking-tight text-center leading-snug
                   text-[rgba(13,13,13,0.35)] group-hover:text-[rgba(13,13,13,0.6)]
                   transition-colors duration-200"
      >
        {name}
      </span>
    </div>
  );
});

// ─── Section ────────────────────────────────────────────────────────────────
export default function BrandsSection() {
  // Single IntersectionObserver for the entire grid (was 7 before).
  // `once: true` means the observer disconnects after first trigger — no
  // continuous scroll tracking, no per-frame callbacks.
  const gridRef = useRef<HTMLDivElement>(null);
  const gridVisible = useInView(gridRef, { once: true, amount: 0.15 });

  return (
    <section className="py-20 bg-white border-y border-[rgba(24,38,26,0.07)]">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Left: copy ── */}
          <AnimatedSection>
            <div className="max-w-[440px]">
              <p className="text-[0.6875rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-4">
                Selected Work
              </p>

              <h2 className="text-[clamp(1.5rem,2.6vw,2rem)] font-bold tracking-[-0.03em] text-[#0D0D0D] leading-[1.15] mb-5">
                Built for real businesses
                <br className="hidden sm:block" />
                across multiple industries
              </h2>

              <p className="text-[0.9375rem] text-[#3a5c3e] leading-[1.72] mb-7">
                I&apos;ve contributed to frontend products including dashboards, commerce
                platforms, membership systems, and growth websites through real
                production work.
              </p>

              {/* Bullets */}
              <ul className="space-y-2.5 mb-9">
                {BULLETS.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <span
                      className="w-[5px] h-[5px] rounded-full flex-shrink-0"
                      style={{ background: '#80A689' }}
                      aria-hidden
                    />
                    <span className="text-[0.875rem] text-[#18261A] font-medium">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="/about"
                className="group inline-flex items-center gap-1.5 text-[0.875rem] font-semibold
                           text-[#18261A] hover:text-[#80A689] transition-colors duration-200"
              >
                View Experience
                <svg
                  className="w-3.5 h-3.5 translate-x-0 group-hover:translate-x-0.5 transition-transform duration-200"
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
              </a>
            </div>
          </AnimatedSection>

          {/* ── Right: logo grid ── */}
          {/*
            No AnimatedSection wrapper — the grid itself owns the single
            IntersectionObserver via gridRef. Cards stagger via CSS
            animation-delay, which runs on the compositor thread.
          */}
          <div
            ref={gridRef}
            className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-2"
          >
            {BRANDS.map((brand, i) => (
              <LogoCard
                key={brand.name}
                name={brand.name}
                logo={brand.logo}
                square={brand.square}
                index={i}
                visible={gridVisible}
              />
            ))}

            {/* 8th decorative placeholder — only visible at xl 4-col */}
            <div
              className="hidden xl:flex items-center justify-center aspect-square rounded-2xl
                         border border-dashed border-[rgba(24,38,26,0.06)]"
              aria-hidden
            >
              <span className="text-[0.625rem] font-medium text-[rgba(24,38,26,0.18)] tracking-wide">
                & more
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
