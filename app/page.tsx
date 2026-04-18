import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import BrandsSection from '@/components/home/BrandsSection';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import TrustSection from '@/components/home/TrustSection';
import SkillsSnapshot from '@/components/home/SkillsSnapshot';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'Shady Gamal — Front-End Developer',
  description:
    'Front-End Developer crafting polished digital products with strong UI thinking. Based in Egypt, available worldwide.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandsSection />
      <FeaturedProjects />
      <TrustSection />
      <SkillsSnapshot />

      {/* Final CTA */}
      <section className="page-section section-container">
        <AnimatedSection>
          <div className="rounded-2xl bg-[#F2F2F2] border border-[rgba(24,38,26,0.08)] px-8 md:px-14 py-12 text-center relative overflow-hidden">
            {/* Subtle mint wash */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(189,242,202,0.3) 0%, transparent 70%)',
              }}
              aria-hidden
            />
            <div className="relative z-10">
              <p className="text-[0.6875rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-3">
                Let&apos;s Build Something
              </p>
              <h2 className="text-[clamp(1.6rem,3vw,2.25rem)] font-bold tracking-[-0.028em] text-[#0D0D0D] mb-3">
                Ready to elevate your product?
              </h2>
              <p className="text-[0.9375rem] text-[#3a5c3e] max-w-md mx-auto leading-relaxed mb-7">
                Whether you&apos;re building a product UI, need a polished frontend, or want
                a developer who understands design — I&apos;m open to new work.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2.5">
                <a href="/contact">
                  <button className="px-6 py-2.5 text-[0.875rem] font-medium text-white bg-[#18261A] rounded-xl hover:bg-[#243d27] transition-colors shadow-sm shadow-[rgba(24,38,26,0.15)]">
                    Start a Conversation
                  </button>
                </a>
                <a href="/projects">
                  <button className="px-6 py-2.5 text-[0.875rem] font-medium text-[#18261A] border border-[rgba(24,38,26,0.15)] rounded-xl hover:bg-white transition-colors bg-white/60">
                    See My Work First
                  </button>
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
