import type { Metadata } from 'next';
import Timeline from '@/components/about/Timeline';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Front-End Developer with production experience across SaaS platforms, e-commerce, and dashboards. Design background, React/Next.js stack, Google UX certified.',
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const VALUE_CARDS = [
  {
    title: 'Product-minded Frontend',
    body: 'I think in features and flows, not just components. Building an interface means understanding what it needs to accomplish — and asking the right questions when the brief doesn\'t add up.',
  },
  {
    title: 'Clean Execution',
    body: 'Consistent naming, clear component APIs, no unnecessary abstraction. I write code with the next developer in mind — because clean code ships faster and stays maintainable.',
  },
  {
    title: 'Design Advantage',
    body: 'I started with design before code. I catch usability gaps early, communicate fluently with designers, and build interfaces that feel considered — not just technically correct.',
  },
  {
    title: 'Real Business Context',
    body: 'I\'ve shipped into live products with real operators and real users. I understand that a daily-use admin panel has different requirements than a marketing page — and I build accordingly.',
  },
];

const PRINCIPLES = [
  {
    label: 'Clarity First',
    body: 'Every component, prop name, and layout decision should be obvious. If something needs explaining, it needs rethinking.',
  },
  {
    label: 'Reusable by Default',
    body: 'I write components with reuse in mind from the first commit — consistent APIs, predictable behaviour, no hidden dependencies.',
  },
  {
    label: 'Performance Matters',
    body: 'Fast is a feature. Core Web Vitals, bundle awareness, and image optimisation are part of building — not a post-launch audit.',
  },
  {
    label: 'Details Build Trust',
    body: 'Spacing, transitions, loading states, empty states. Product quality lives in the gaps between features.',
  },
];

const SECTORS = [
  {
    name: 'Sports Platforms',
    note: 'Club management, membership ops, booking flows',
  },
  {
    name: 'Admin Dashboards',
    note: 'Multi-role interfaces, analytics, permissions',
  },
  {
    name: 'E-commerce',
    note: 'Storefronts, checkout flows, product catalogues',
  },
  {
    name: 'Healthcare',
    note: 'Patient-facing UI, clarity-first design systems',
  },
  {
    name: 'Marketing Sites',
    note: 'Conversion-focused landing pages, agency delivery',
  },
];

const CAPABILITY_GROUPS = [
  {
    label: 'Frontend Stack',
    items: ['React', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    label: 'UI & Design',
    items: ['Component Architecture', 'Design Systems', 'Responsive Layout', 'Figma', 'Accessibility'],
  },
  {
    label: 'Tooling & Integration',
    items: ['Git', 'REST APIs', 'Performance', 'Node.js', 'Google UX Certified'],
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[560px] h-[560px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(189,242,202,0.28) 0%, transparent 68%)',
            transform: 'translate(22%, -22%)',
          }}
          aria-hidden
        />
        <div className="section-container relative z-10">
          <AnimatedSection>
            <p className="text-[0.6875rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-4">
              About Me
            </p>
            <h1 className="text-[clamp(2.4rem,5vw,4rem)] font-bold tracking-[-0.035em] text-[#0D0D0D] leading-[1.05] mb-8 max-w-2xl">
              Front-End Developer.{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #80A689, #18261A)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Product thinker.
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="max-w-lg space-y-4 text-[0.9375rem] text-[#3a5c3e] leading-[1.75]">
              <p>
                I build web interfaces for products that are actually used — dashboards, club management platforms,
                e-commerce systems, and growth tools. My work sits at the intersection of frontend engineering
                and product thinking.
              </p>
              <p>
                I started with design before I wrote a line of code. That background shows up in how
                I approach every component — understanding why something needs to exist before building
                it, and knowing when the spec is wrong.
              </p>
              <p>
                Good frontend work is invisible. It loads fast, behaves predictably, and never makes
                users think. That&apos;s the bar I hold my work to.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Why Teams Hire Me ─────────────────────────────────────────────── */}
      <section className="page-section section-container">
        <AnimatedSection className="mb-10">
          <p className="text-[0.6875rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-3">
            Why Teams Hire Me
          </p>
          <h2 className="text-[clamp(1.5rem,2.6vw,2rem)] font-bold tracking-[-0.03em] text-[#0D0D0D] leading-tight max-w-md">
            What I bring to every engagement.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {VALUE_CARDS.map((card, i) => (
            <AnimatedSection key={card.title} delay={i * 0.06}>
              <div
                className="h-full p-7 rounded-2xl border border-[rgba(24,38,26,0.07)] bg-white
                           hover:border-[rgba(24,38,26,0.13)] hover:-translate-y-0.5
                           transition-all duration-200"
              >
                {/* Accent line */}
                <div className="w-6 h-[2px] bg-[#80A689] rounded-full mb-5" />
                <h3 className="text-[0.9375rem] font-semibold text-[#0D0D0D] tracking-tight mb-2.5">
                  {card.title}
                </h3>
                <p className="text-[0.875rem] text-[#3a5c3e] leading-[1.72]">
                  {card.body}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── How I Build ───────────────────────────────────────────────────── */}
      <section className="page-section section-container">
        <AnimatedSection className="mb-10">
          <p className="text-[0.6875rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-3">
            How I Build
          </p>
          <h2 className="text-[clamp(1.5rem,2.6vw,2rem)] font-bold tracking-[-0.03em] text-[#0D0D0D] leading-tight max-w-md">
            Four principles I don&apos;t compromise on.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-0">
          {PRINCIPLES.map((p, i) => (
            <AnimatedSection key={p.label} delay={i * 0.06}>
              <div className="py-7 border-t border-[rgba(24,38,26,0.07)]">
                <div className="flex items-baseline gap-3 mb-2.5">
                  <span className="text-[0.5625rem] font-bold font-mono text-[#80A689] flex-shrink-0">
                    0{i + 1}
                  </span>
                  <h3 className="text-[0.9375rem] font-semibold text-[#0D0D0D] tracking-tight">
                    {p.label}
                  </h3>
                </div>
                <p className="text-[0.875rem] text-[#3a5c3e] leading-[1.72] pl-[1.375rem]">
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
            Product Experience
          </p>
          <h2 className="text-[clamp(1.5rem,2.6vw,2rem)] font-bold tracking-[-0.03em] text-[#0D0D0D] leading-tight max-w-md">
            Sectors I&apos;ve built real products for.
          </h2>
        </AnimatedSection>

        {/* Sector grid — top border on each, 2-col mobile → 5-col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t border-[rgba(24,38,26,0.07)]">
          {SECTORS.map((sector, i) => (
            <AnimatedSection key={sector.name} delay={i * 0.05}>
              <div
                className="py-6 pr-6 border-b border-[rgba(24,38,26,0.06)]
                           lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <p className="text-[0.875rem] font-semibold text-[#0D0D0D] tracking-tight mb-1.5">
                  {sector.name}
                </p>
                <p className="text-[0.75rem] text-[#80A689] leading-snug">
                  {sector.note}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── Core Capabilities ─────────────────────────────────────────────── */}
      <section className="page-section section-container">
        <AnimatedSection className="mb-10">
          <p className="text-[0.6875rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-3">
            Core Capabilities
          </p>
          <h2 className="text-[clamp(1.5rem,2.6vw,2rem)] font-bold tracking-[-0.03em] text-[#0D0D0D] leading-tight max-w-md">
            The tools I work with daily.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          {CAPABILITY_GROUPS.map((group, i) => (
            <AnimatedSection key={group.label} delay={i * 0.07}>
              <div>
                <p className="text-[0.625rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-4">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-[0.8125rem] font-medium text-[#18261A]
                                 border border-[rgba(24,38,26,0.1)] rounded-xl bg-white
                                 hover:bg-[#F2F2F2] hover:border-[rgba(24,38,26,0.18)]
                                 transition-colors duration-150 cursor-default"
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
          <div
            className="rounded-2xl border border-[rgba(24,38,26,0.08)] bg-[#F9FAF9]
                       p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center
                       justify-between gap-6"
          >
            <div className="max-w-sm">
              <h2 className="text-[1.0625rem] font-semibold text-[#0D0D0D] tracking-tight mb-2">
                Want to work together?
              </h2>
              <p className="text-[0.875rem] text-[#3a5c3e] leading-relaxed">
                Open to full-time roles, remote opportunities, and product-focused work —
                anywhere I can make a meaningful contribution to the interface.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5 flex-shrink-0">
              <a href="/projects">
                <button className="px-5 py-2 text-[0.875rem] font-medium text-[#18261A] border border-[rgba(24,38,26,0.14)] rounded-xl hover:bg-white transition-colors">
                  See My Work
                </button>
              </a>
              <a href="/contact">
                <button className="px-5 py-2 text-[0.875rem] font-medium text-white bg-[#18261A] rounded-xl hover:bg-[#243d27] transition-colors shadow-sm shadow-[rgba(24,38,26,0.15)]">
                  Get In Touch
                </button>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
