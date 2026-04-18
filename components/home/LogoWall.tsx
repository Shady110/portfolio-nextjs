'use client';

import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';

const LOGOS = [
  { name: 'Client 1', src: '/logos/1.svg' },
  { name: 'Client 2', src: '/logos/2.svg' },
  { name: 'Client 3', src: '/logos/3.svg' },
  { name: 'Client 4', src: '/logos/4.svg' },
  { name: 'Client 5', src: '/logos/5.svg' },
  { name: 'Client 6', src: '/logos/6.svg' },
  { name: 'Client 7', src: '/logos/7.svg' },
];

// Double for seamless infinite loop
const TRACK = [...LOGOS, ...LOGOS];

function LogoItem({ name, src }: { name: string; src: string }) {
  return (
    <div className="flex items-center justify-center flex-shrink-0 group" title={name}>
      <Image
        src={src}
        alt={name}
        width={120}
        height={40}
        className="h-[38px] w-auto max-w-[130px] object-contain select-none"
        style={{
          filter: 'brightness(0) saturate(0)',
          opacity: 0.28,
          transition: 'opacity 0.35s ease',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.65'; }}
        onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.28'; }}
        unoptimized
      />
    </div>
  );
}

export default function LogoWall() {
  return (
    <section className="py-12 border-y border-[rgba(24,38,26,0.07)] overflow-hidden bg-[#F2F2F2]/50">
      <AnimatedSection>
        <p className="text-center text-[0.6875rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-8">
          Companies &amp; clients I&apos;ve built for
        </p>
      </AnimatedSection>

      <div className="relative">
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #F6F6F6, transparent)' }}
          aria-hidden
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #F6F6F6, transparent)' }}
          aria-hidden
        />

        <div className="flex animate-marquee" style={{ width: 'max-content' }}>
          {TRACK.map((logo, i) => (
            <div key={i} className="mx-12 flex items-center">
              <LogoItem name={logo.name} src={logo.src} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
