import type { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Let's build something together. Reach out for project enquiries, collaboration, or full-time opportunities.",
};

const SOCIAL = [
  {
    label: 'GitHub',
    handle: '@Shady110',
    href: 'https://github.com/Shady110',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    handle: 'Shady Gamal',
    href: 'https://www.linkedin.com/in/shady--gamal',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    handle: 'shaadygamal@gmail.com',
    href: 'mailto:shaadygamal@gmail.com',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const ENGAGEMENT_TYPES = [
  { icon: '◎', label: 'SaaS & Product Teams', sub: 'Full-time or contract' },
  { icon: '◈', label: 'Design System Work', sub: 'Architecture & implementation' },
  { icon: '⬡', label: 'Consulting', sub: 'Performance, code review, audits' },
  { icon: '⚡', label: 'Freelance Projects', sub: 'Fixed scope or ongoing' },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-10 bg-white">
        <div
          className="absolute top-0 left-1/3 w-[500px] h-[400px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(189,242,202,0.28) 0%, transparent 70%)',
            transform: 'translateY(-20%)',
          }}
          aria-hidden
        />
        <div className="section-container relative z-10">
          <AnimatedSection>
            <p className="text-[0.6875rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-4">
              Get In Touch
            </p>
            <h1 className="text-[clamp(2.4rem,5vw,4rem)] font-bold tracking-[-0.035em] text-[#0D0D0D] leading-[1.05] mb-4 max-w-xl">
              Let&apos;s build{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #80A689, #18261A)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                something great.
              </span>
            </h1>
            <p className="text-[0.9375rem] text-[#3a5c3e] leading-relaxed max-w-lg">
              I&apos;m selective about the work I take on — that&apos;s a feature, not a limitation.
              When I commit to a project, it gets my full attention. Tell me what you&apos;re building.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main */}
      <section className="section-container pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Left sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-4">

            {/* Availability */}
            <AnimatedSection delay={0.04}>
              <div className="surface-card p-5">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-2 h-2 bg-[#80A689] rounded-full animate-pulse flex-shrink-0" />
                  <p className="text-[0.875rem] font-semibold text-[#0D0D0D]">Available now</p>
                </div>
                <p className="text-[0.8125rem] text-[#3a5c3e] leading-relaxed">
                  Open to new projects starting in the next 2–4 weeks. I prefer longer engagements
                  where I can make a meaningful impact.
                </p>
              </div>
            </AnimatedSection>

            {/* Engagement types */}
            <AnimatedSection delay={0.08}>
              <div className="surface-card p-5">
                <p className="text-[0.6875rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-4">
                  I work well with
                </p>
                <div className="flex flex-col gap-3">
                  {ENGAGEMENT_TYPES.map((e) => (
                    <div key={e.label} className="flex items-center gap-2.5">
                      <span className="text-sm text-[#80A689] w-4 flex-shrink-0">{e.icon}</span>
                      <div>
                        <p className="text-[0.8125rem] font-medium text-[#0D0D0D] leading-tight">{e.label}</p>
                        <p className="text-[0.75rem] text-[#80A689]">{e.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Social */}
            <AnimatedSection delay={0.12}>
              <div className="surface-card p-5">
                <p className="text-[0.6875rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-4">
                  Find me on
                </p>
                <div className="flex flex-col gap-3">
                  {SOCIAL.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith('mailto') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 group"
                    >
                      <span className="text-[#80A689] group-hover:text-[#18261A] transition-colors">
                        {s.icon}
                      </span>
                      <div>
                        <p className="text-[0.75rem] text-[#80A689]">{s.label}</p>
                        <p className="text-[0.8125rem] font-medium text-[#3a5c3e] group-hover:text-[#0D0D0D] transition-colors">
                          {s.handle}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <AnimatedSection delay={0.06}>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
