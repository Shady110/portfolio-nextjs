'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';

const INDUSTRIES = [
  {
    icon: '🏥',
    label: 'Healthcare',
    description: 'Patient portals, doctor dashboards, appointment management systems.',
    projects: '1 project',
  },
  {
    icon: '📊',
    label: 'SaaS & Dashboards',
    description: 'Data-dense analytics interfaces, filterable tables, reporting tools.',
    projects: '2 projects',
  },
  {
    icon: '🛒',
    label: 'E-Commerce',
    description: 'Product listing, cart flows, and checkout optimised for mobile.',
    projects: '1 project',
  },
  {
    icon: '🎨',
    label: 'Design Systems',
    description: 'Component libraries, token-based styling, Storybook documentation.',
    projects: '2 projects',
  },
  {
    icon: '🏢',
    label: 'Business Tools',
    description: 'Internal tooling, admin panels, reporting flows, permission-based UIs.',
    projects: '2 projects',
  },
  {
    icon: '🌐',
    label: 'Web Products',
    description: 'Marketing sites, landing pages, and portfolio-level UI work.',
    projects: '2 projects',
  },
];

export default function IndustriesSection() {
  return (
    <section className="page-section section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* Left — heading */}
        <div className="lg:sticky lg:top-24">
          <SectionHeading
            eyebrow="Work Related To"
            title="Industries &"
            titleHighlight="Domains"
            description="Experience across diverse product categories — from healthcare to AI. Each domain sharpened a different set of engineering instincts."
          />

          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-3 gap-3 mt-8">
              {[
                { value: '5+', label: 'Domains' },
                { value: '8+', label: 'Projects' },
                { value: '1+', label: 'Year' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="surface-card-gray rounded-xl p-4 text-center"
                >
                  <p className="text-[1.5rem] font-bold tracking-[-0.03em] text-[#18261A]">{s.value}</p>
                  <p className="text-[0.75rem] text-[#80A689]">{s.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Right — industry grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {INDUSTRIES.map((ind, i) => (
            <AnimatedSection key={ind.label} delay={i * 0.055}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.22 }}
                className="surface-card p-5 h-full flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xl">{ind.icon}</span>
                  <span className="text-[0.6875rem] font-medium text-[#80A689] bg-[#BDF2CA]/35 border border-[rgba(24,38,26,0.08)] px-2 py-0.5 rounded-full">
                    {ind.projects}
                  </span>
                </div>
                <div>
                  <h3 className="text-[0.875rem] font-semibold text-[#0D0D0D] mb-1 tracking-tight">
                    {ind.label}
                  </h3>
                  <p className="text-[0.8125rem] text-[#3a5c3e] leading-relaxed">
                    {ind.description}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
