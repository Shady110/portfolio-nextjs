'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';

const INDUSTRIES = [
  {
    number: '01',
    label: 'Sports & Club Platforms',
    clients: ['Kode Club', 'Ryze Clubs', 'O West Club', 'Kayan Club'],
    description:
      'Built web interfaces for sports clubs and fitness platforms across Egypt — member portals, event scheduling, booking flows, and club management dashboards. Work in this sector demanded clarity and ease of use for non-technical users, strong mobile performance, and clean information architecture under complex scheduling logic.',
    tags: ['Member Portals', 'Booking Flows', 'Event Scheduling', 'Club Dashboards'],
  },
  {
    number: '02',
    label: 'Commerce & E-Commerce',
    clients: ['All Seasons MK', 'Moldndie'],
    description:
      'Developed e-commerce frontends with product catalogues, cart management, and checkout experiences optimised for mobile-first users. Focus areas included performance under large product inventories, clean product presentation, and reducing friction at every stage of the purchase journey.',
    tags: ['Product Catalogues', 'Cart & Checkout', 'Mobile Optimisation', 'Performance'],
  },
  {
    number: '03',
    label: 'Growth & SaaS Products',
    clients: ['Flow'],
    description:
      'Built frontend for a growth-focused SaaS product — analytics views, conversion-optimised flows, and dashboard interfaces designed to support business decision-making. Work required careful attention to data clarity, responsive layout at multiple breakpoints, and component architecture built for ongoing iteration.',
    tags: ['SaaS Dashboard', 'Analytics UI', 'Growth Tools', 'Component Architecture'],
  },
];

export default function IndustriesExperience() {
  return (
    <section className="page-section section-container">

      {/* Section heading */}
      <AnimatedSection className="mb-10">
        <p className="text-[0.6875rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-3">
          Experience Across Industries
        </p>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <h2 className="text-[clamp(1.5rem,2.8vw,2rem)] font-bold tracking-[-0.03em] text-[#0D0D0D] leading-tight max-w-sm">
            Sectors I&apos;ve built{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #80A689, #18261A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              real products for.
            </span>
          </h2>
          <p className="text-[0.875rem] text-[#3a5c3e] leading-relaxed max-w-xs sm:text-right">
            Each sector sharpened a different set of instincts — from UX clarity to data architecture.
          </p>
        </div>
        <div className="mt-8 h-px bg-[rgba(24,38,26,0.07)]" />
      </AnimatedSection>

      {/* Industry blocks */}
      <div className="flex flex-col gap-0">
        {INDUSTRIES.map((ind, i) => (
          <AnimatedSection key={ind.label} delay={i * 0.07}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-9 border-b border-[rgba(24,38,26,0.06)] last:border-0 rounded-xl px-4 -mx-4 hover:bg-[rgba(189,242,202,0.04)] transition-colors duration-200">
              {/* Left — number + category */}
              <div className="lg:col-span-4 flex items-start gap-4">
                <span
                  className="text-[0.625rem] font-bold font-mono mt-1 flex-shrink-0"
                  style={{ color: '#80A689' }}
                >
                  {ind.number}
                </span>
                <div>
                  <h3 className="text-[0.9375rem] font-semibold text-[#0D0D0D] tracking-tight mb-2.5 leading-snug">
                    {ind.label}
                  </h3>
                  {/* Client name pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {ind.clients.map((c) => (
                      <span
                        key={c}
                        className="px-2 py-0.5 text-[0.6875rem] font-medium rounded-md bg-[#F2F2F2] border border-[rgba(24,38,26,0.07)] text-[#3a5c3e]"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right — description + tags */}
              <div className="lg:col-span-8">
                <p className="text-[0.875rem] text-[#3a5c3e] leading-[1.75] mb-4">
                  {ind.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {ind.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[0.6875rem] font-medium text-[#18261A] bg-[#BDF2CA]/40 border border-[rgba(24,38,26,0.09)] rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

    </section>
  );
}
