'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.2 } },
};
const up = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
};

const STACK = ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'];

export default function Hero() {
  const shouldReduce = useReducedMotion();
  const loop = shouldReduce ? 0 : Infinity;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-100 pointer-events-none" aria-hidden />

      {/* Soft mint wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 62% 40%, rgba(189,242,202,0.28) 0%, transparent 70%)',
        }}
        aria-hidden
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 section-container w-full pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Text ── */}
          <motion.div variants={stagger} initial="hidden" animate="visible">

            {/* Availability badge */}
            <motion.div variants={up} className="mb-7">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.75rem] font-medium text-[#18261A] border border-[rgba(24,38,26,0.12)] bg-[#BDF2CA]/35 shadow-sm">
                <span className="w-1.5 h-1.5 bg-[#80A689] rounded-full animate-pulse" />
                Available for new projects
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={up}
              className="text-[clamp(2.4rem,4.8vw,3.75rem)] font-bold tracking-[-0.035em] leading-[1.06] text-[#0D0D0D] mb-5"
            >
              Building polished
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #80A689 0%, #18261A 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                web products.
              </span>
            </motion.h1>

            {/* Sub copy */}
            <motion.p
              variants={up}
              className="text-[1rem] text-[#3a5c3e] leading-[1.7] max-w-md mb-8"
            >
              Production experience shipping responsive interfaces, translating
              design into code, and building clean, scalable frontend systems
              with React and Next.js.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={up} className="flex flex-wrap items-center gap-2.5 mb-10">
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: '#243d27' }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-5 py-2.5 bg-[#18261A] text-white font-medium rounded-xl text-[0.875rem] transition-colors shadow-sm shadow-[rgba(24,38,26,0.2)]"
                >
                  View My Work
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </motion.button>
              </Link>

              <a href="/Shady-Gamal-CV.pdf" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: '#f7faf7' }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-1.5 px-5 py-2.5 text-[#18261A] font-medium rounded-xl text-[0.875rem] border border-[rgba(24,38,26,0.14)] bg-white hover:bg-[#f7faf7] transition-colors shadow-sm"
                >
                  Download CV
                  <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
                  </svg>
                </motion.button>
              </a>

              {/* Social links */}
              <div className="flex items-center gap-1.5 ml-1">
                <a
                  href="https://github.com/Shady110"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2 rounded-lg border border-[rgba(24,38,26,0.1)] text-[#80A689] hover:text-[#18261A] hover:border-[rgba(24,38,26,0.18)] hover:bg-[#BDF2CA]/30 transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/shady--gamal"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 rounded-lg border border-[rgba(24,38,26,0.1)] text-[#80A689] hover:text-[#18261A] hover:border-[rgba(24,38,26,0.18)] hover:bg-[#BDF2CA]/30 transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Stack strip */}
            <motion.div variants={up} className="flex flex-wrap items-center gap-2">
              <span className="text-[0.6875rem] text-[#80A689] uppercase tracking-[0.1em] font-medium mr-1">
                Stack
              </span>
              {STACK.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-[0.75rem] font-medium text-[#3a5c3e] bg-[#F2F2F2] border border-[rgba(24,38,26,0.08)] rounded-full"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Premium visual composition ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.05, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-end"
          >
            <div className="relative w-full h-[500px]">

              {/* Ambient glow behind composition */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse 70% 65% at 55% 52%, rgba(189,242,202,0.22) 0%, transparent 68%)',
                }}
                aria-hidden
              />

              {/* ── 1. CODE SNIPPET CARD (deepest layer) ── */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6.5, repeat: loop, ease: 'easeInOut', delay: 1.1 }}
                className="absolute top-[12px] left-0 z-[1]"
                style={{ opacity: 0.92 }}
              >
                <div
                  className="w-[212px] rounded-[13px] overflow-hidden"
                  style={{
                    background: '#18261A',
                    border: '1px solid rgba(255,255,255,0.06)',
                    boxShadow: '0 12px 40px rgba(24,38,26,0.22)',
                  }}
                >
                  {/* Mac dots + filename */}
                  <div
                    className="flex items-center gap-1.5 px-3 py-2.5"
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.055)' }}
                  >
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="w-2 h-2 rounded-full"
                        style={{ background: 'rgba(255,255,255,0.13)' }}
                      />
                    ))}
                    <span
                      className="ml-auto font-mono"
                      style={{ fontSize: '0.49rem', color: 'rgba(255,255,255,0.22)', letterSpacing: '0.02em' }}
                    >
                      MetricCard.tsx
                    </span>
                  </div>

                  {/* Code */}
                  <div className="px-3.5 py-3 font-mono" style={{ fontSize: '0.59rem', lineHeight: 1.72 }}>
                    <div>
                      <span style={{ color: '#80A689' }}>interface </span>
                      <span style={{ color: '#BDF2CA' }}>MetricProps </span>
                      <span style={{ color: 'rgba(255,255,255,0.38)' }}>{'{'}</span>
                    </div>
                    <div style={{ paddingLeft: 12 }}>
                      <span style={{ color: 'rgba(255,255,255,0.62)' }}>label</span>
                      <span style={{ color: 'rgba(255,255,255,0.38)' }}>: </span>
                      <span style={{ color: '#BDF2CA' }}>string</span>
                    </div>
                    <div style={{ paddingLeft: 12 }}>
                      <span style={{ color: 'rgba(255,255,255,0.62)' }}>value</span>
                      <span style={{ color: 'rgba(255,255,255,0.38)' }}>: </span>
                      <span style={{ color: '#BDF2CA' }}>number</span>
                    </div>
                    <div style={{ paddingLeft: 12 }}>
                      <span style={{ color: 'rgba(255,255,255,0.62)' }}>delta</span>
                      <span style={{ color: 'rgba(255,255,255,0.38)' }}>?: </span>
                      <span style={{ color: '#BDF2CA' }}>number</span>
                    </div>
                    <div>
                      <span style={{ color: 'rgba(255,255,255,0.38)' }}>{'}'}</span>
                    </div>
                    <div style={{ marginTop: 6 }}>
                      <span style={{ color: '#80A689' }}>export const </span>
                      <span style={{ color: '#BDF2CA' }}>MetricCard</span>
                      <span style={{ color: 'rgba(255,255,255,0.38)' }}>: </span>
                      <span style={{ color: '#BDF2CA' }}>FC</span>
                      <span style={{ color: 'rgba(255,255,255,0.38)' }}>{'<MetricProps>'}</span>
                    </div>
                    <div style={{ paddingLeft: 12 }}>
                      <span style={{ color: 'rgba(255,255,255,0.38)' }}>=</span>
                      <span style={{ color: 'rgba(255,255,255,0.5)' }}> {'({ label, value, delta })'}</span>
                    </div>
                    <div style={{ paddingLeft: 12 }}>
                      <span style={{ color: 'rgba(255,255,255,0.38)' }}>{'=>'} {'{'}</span>
                    </div>
                    <div style={{ paddingLeft: 24 }}>
                      <span style={{ color: 'rgba(255,255,255,0.25)' }}>{'// renders polished UI'}</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* ── 2. BROWSER WINDOW (hero piece) ── */}
              <motion.div
                animate={{ y: [0, -9, 0] }}
                transition={{ duration: 5.5, repeat: loop, ease: 'easeInOut', delay: 0.25 }}
                className="absolute top-[58px] right-0 z-[2]"
                style={{ filter: 'drop-shadow(0 28px 52px rgba(24,38,26,0.11))' }}
              >
                <div
                  className="w-[375px] rounded-[15px] overflow-hidden bg-white"
                  style={{ border: '1px solid rgba(24,38,26,0.09)' }}
                >
                  {/* Chrome bar */}
                  <div
                    className="flex items-center gap-2.5 px-3"
                    style={{
                      height: 36,
                      background: '#F2F2F2',
                      borderBottom: '1px solid rgba(24,38,26,0.07)',
                    }}
                  >
                    <div className="flex gap-1.5 flex-shrink-0">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ background: 'rgba(24,38,26,0.14)' }}
                        />
                      ))}
                    </div>
                    <div className="flex-1 mx-0.5">
                      <div
                        className="flex items-center gap-1.5 px-2.5"
                        style={{
                          height: 22,
                          background: 'white',
                          border: '1px solid rgba(24,38,26,0.08)',
                          borderRadius: 6,
                        }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: 'rgba(128,166,137,0.6)' }}
                        />
                        <span
                          className="font-mono"
                          style={{ fontSize: '0.52rem', color: '#80A689', letterSpacing: '0.01em' }}
                        >
                          app.dashboard.io / overview
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Dashboard layout */}
                  <div className="flex" style={{ height: 256 }}>

                    {/* Sidebar */}
                    <div
                      className="flex flex-col items-center pt-3 gap-1.5 flex-shrink-0"
                      style={{
                        width: 44,
                        background: '#F8F9F8',
                        borderRight: '1px solid rgba(24,38,26,0.05)',
                        paddingBottom: 12,
                      }}
                    >
                      {/* Logo mark */}
                      <div
                        className="flex items-center justify-center mb-2 flex-shrink-0"
                        style={{ width: 26, height: 26, borderRadius: 7, background: '#18261A' }}
                      >
                        <div style={{ width: 11, height: 11, borderRadius: 3, background: '#BDF2CA' }} />
                      </div>

                      {/* Nav icons */}
                      {[true, false, false, false, false].map((active, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-center"
                          style={{
                            width: 30,
                            height: 28,
                            borderRadius: 7,
                            background: active ? 'rgba(189,242,202,0.45)' : 'transparent',
                          }}
                        >
                          <div
                            style={{
                              width: 13,
                              height: 10,
                              borderRadius: 2,
                              background: active ? '#18261A' : 'rgba(24,38,26,0.16)',
                            }}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Main content */}
                    <div className="flex-1 overflow-hidden p-3" style={{ background: '#ffffff' }}>

                      {/* Page header */}
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <div style={{ height: 7, width: 58, background: '#0D0D0D', borderRadius: 3, marginBottom: 4 }} />
                          <div style={{ height: 5, width: 82, background: 'rgba(24,38,26,0.11)', borderRadius: 2 }} />
                        </div>
                        <div style={{ display: 'flex', gap: 6 }}>
                          <div style={{ height: 22, width: 56, background: '#F2F2F2', border: '1px solid rgba(24,38,26,0.08)', borderRadius: 8 }} />
                          <div style={{ height: 22, width: 42, background: '#18261A', borderRadius: 8 }} />
                        </div>
                      </div>

                      {/* KPI cards */}
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 7, marginBottom: 10 }}>
                        {[
                          { label: 'Revenue', val: '$48.2k', delta: '↑ 12%' },
                          { label: 'Users', val: '3,841', delta: '↑ 8.3%' },
                          { label: 'Conv. Rate', val: '4.6%', delta: '↑ 0.3%' },
                        ].map((s) => (
                          <div
                            key={s.label}
                            style={{
                              background: '#F8F9F8',
                              border: '1px solid rgba(24,38,26,0.06)',
                              borderRadius: 9,
                              padding: '7px 8px',
                            }}
                          >
                            <div style={{ fontSize: '0.47rem', color: '#80A689', fontWeight: 500, marginBottom: 2 }}>{s.label}</div>
                            <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#0D0D0D', lineHeight: 1.2 }}>{s.val}</div>
                            <div style={{ fontSize: '0.47rem', color: '#80A689', marginTop: 2 }}>{s.delta}</div>
                          </div>
                        ))}
                      </div>

                      {/* Area chart */}
                      <div
                        style={{
                          background: '#F8F9F8',
                          border: '1px solid rgba(24,38,26,0.05)',
                          borderRadius: 9,
                          padding: '7px 8px',
                          height: 90,
                          marginBottom: 10,
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                          <span style={{ fontSize: '0.47rem', color: '#3a5c3e', fontWeight: 600 }}>Revenue trend</span>
                          <span style={{ fontSize: '0.47rem', color: '#80A689' }}>6 months</span>
                        </div>
                        <svg width="100%" height="62" viewBox="0 0 310 62" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="heroAreaFill" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#BDF2CA" stopOpacity={0.55} />
                              <stop offset="100%" stopColor="#BDF2CA" stopOpacity={0.04} />
                            </linearGradient>
                          </defs>
                          <path
                            d="M0,54 C25,50 50,44 82,36 C108,28 132,40 160,28 C186,17 212,26 240,15 C260,7 284,11 310,5"
                            fill="none"
                            stroke="#80A689"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                          <path
                            d="M0,54 C25,50 50,44 82,36 C108,28 132,40 160,28 C186,17 212,26 240,15 C260,7 284,11 310,5 L310,62 L0,62 Z"
                            fill="url(#heroAreaFill)"
                          />
                          {[[82, 36], [160, 28], [240, 15], [310, 5]].map(([cx, cy], i) => (
                            <circle key={i} cx={cx} cy={cy} r={2.4} fill="white" stroke="#80A689" strokeWidth="1.5" />
                          ))}
                        </svg>
                      </div>

                      {/* Recent activity rows */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                        {[
                          { label: 'Design system v3', note: 'Deployed to production', time: '2m ago' },
                          { label: 'Onboarding flow', note: 'PR #148 merged', time: '9m ago' },
                        ].map((row) => (
                          <div key={row.label} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                            <div
                              style={{
                                width: 14,
                                height: 14,
                                borderRadius: 6,
                                flexShrink: 0,
                                background: 'rgba(189,242,202,0.55)',
                                border: '1px solid rgba(24,38,26,0.08)',
                              }}
                            />
                            <div style={{ flex: 1, fontSize: '0.47rem', color: '#3a5c3e', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                              {row.label} ·{' '}
                              <span style={{ color: '#80A689' }}>{row.note}</span>
                            </div>
                            <div style={{ fontSize: '0.47rem', color: '#80A689', flexShrink: 0 }}>{row.time}</div>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
              </motion.div>

              {/* ── 3. MOBILE SCREEN ── */}
              <motion.div
                animate={{ rotate: -3.5, y: [0, 8, 0] }}
                transition={{ duration: 4.8, repeat: loop, ease: 'easeInOut', delay: 0.65 }}
                initial={{ rotate: -3.5 }}
                className="absolute bottom-[22px] left-[26px] z-[3]"
              >
                <div
                  className="flex flex-col overflow-hidden"
                  style={{
                    width: 108,
                    height: 196,
                    borderRadius: 22,
                    background: '#ffffff',
                    border: '1px solid rgba(24,38,26,0.12)',
                    boxShadow: '0 20px 48px rgba(24,38,26,0.15)',
                  }}
                >
                  {/* Status bar */}
                  <div
                    className="flex-shrink-0 flex items-center justify-between px-3"
                    style={{ height: 22, background: '#18261A' }}
                  >
                    <span style={{ fontSize: '0.42rem', color: 'rgba(255,255,255,0.58)', fontFamily: 'monospace' }}>
                      9:41
                    </span>
                    <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                      <div style={{ width: 14, height: 3, background: 'rgba(255,255,255,0.28)', borderRadius: 2 }} />
                      <div style={{ width: 4, height: 7, background: 'rgba(255,255,255,0.42)', borderRadius: 1 }} />
                    </div>
                  </div>

                  {/* App body */}
                  <div className="flex-1 overflow-hidden px-2.5 pt-2.5">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                      <span style={{ fontSize: '0.56rem', fontWeight: 700, color: '#0D0D0D' }}>Overview</span>
                      <div style={{ width: 16, height: 16, borderRadius: '50%', background: 'rgba(189,242,202,0.5)', border: '1px solid rgba(24,38,26,0.08)' }} />
                    </div>

                    {/* Metric hero card */}
                    <div
                      style={{
                        borderRadius: 10,
                        padding: '8px 9px',
                        background: '#18261A',
                        marginBottom: 7,
                      }}
                    >
                      <div style={{ fontSize: '0.41rem', color: '#80A689', marginBottom: 2 }}>Monthly Revenue</div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'white', lineHeight: 1.1 }}>$48.2k</div>
                      <div style={{ fontSize: '0.41rem', color: '#BDF2CA', marginTop: 2 }}>↑ 12% vs last month</div>
                    </div>

                    {/* Sparkline */}
                    <div style={{ borderRadius: 8, padding: '5px 6px', background: '#F2F2F2', marginBottom: 7 }}>
                      <svg width="100%" height="24" viewBox="0 0 82 24" preserveAspectRatio="none">
                        <path
                          d="M0,20 C10,18 18,14 28,10 C38,6 46,12 56,7 C66,2 74,5 82,1"
                          fill="none"
                          stroke="#80A689"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>

                    {/* List rows */}
                    {[40, 30, 36].map((w, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                        <div style={{ width: 14, height: 14, borderRadius: 4, flexShrink: 0, background: i === 0 ? 'rgba(189,242,202,0.55)' : '#F2F2F2', border: '1px solid rgba(24,38,26,0.07)' }} />
                        <div>
                          <div style={{ height: 4, width: w + 6, background: 'rgba(24,38,26,0.12)', borderRadius: 2, marginBottom: 2 }} />
                          <div style={{ height: 3, width: w - 4, background: 'rgba(24,38,26,0.07)', borderRadius: 2 }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tab bar */}
                  <div
                    className="flex-shrink-0 flex items-center justify-around px-2"
                    style={{
                      height: 28,
                      background: 'rgba(255,255,255,0.95)',
                      borderTop: '1px solid rgba(24,38,26,0.07)',
                    }}
                  >
                    {[true, false, false, false].map((active, i) => (
                      <div
                        key={i}
                        style={{
                          width: 14,
                          height: 14,
                          borderRadius: 3,
                          background: active ? '#18261A' : 'rgba(24,38,26,0.12)',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* ── 4. LIGHTHOUSE PERFORMANCE CHIP ── */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.8, repeat: loop, ease: 'easeInOut', delay: 0.45 }}
                className="absolute z-[5]"
                style={{ top: 20, right: 10 }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 9,
                    padding: '7px 13px 7px 9px',
                    borderRadius: 13,
                    background: 'white',
                    border: '1px solid rgba(24,38,26,0.1)',
                    boxShadow: '0 8px 28px rgba(24,38,26,0.1)',
                  }}
                >
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 9,
                      background: 'rgba(189,242,202,0.5)',
                      border: '1px solid rgba(24,38,26,0.07)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#18261A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.5rem', color: '#80A689', fontWeight: 500, lineHeight: 1.3 }}>Lighthouse</div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#18261A', lineHeight: 1.15 }}>98 / 100</div>
                  </div>
                </div>
              </motion.div>

              {/* ── 5. DEPLOY NOTIFICATION (glassmorphism) ── */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 4.3, repeat: loop, ease: 'easeInOut', delay: 1.25 }}
                className="absolute z-[5]"
                style={{ bottom: 218, right: -4 }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 9,
                    padding: '7px 13px 7px 10px',
                    borderRadius: 12,
                    background: 'rgba(255,255,255,0.88)',
                    backdropFilter: 'blur(14px)',
                    WebkitBackdropFilter: 'blur(14px)',
                    border: '1px solid rgba(24,38,26,0.08)',
                    boxShadow: '0 8px 26px rgba(24,38,26,0.09)',
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#80A689] animate-pulse flex-shrink-0" />
                  <div>
                    <div style={{ fontSize: '0.5rem', fontWeight: 600, color: '#0D0D0D', lineHeight: 1.3 }}>
                      Build deployed
                    </div>
                    <div style={{ fontSize: '0.44rem', color: '#80A689' }}>production · just now</div>
                  </div>
                </div>
              </motion.div>

              {/* ── 6. COMPONENTS COUNT CHIP ── */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 5.2, repeat: loop, ease: 'easeInOut', delay: 1.8 }}
                className="absolute z-[4]"
                style={{ bottom: 28, right: 20 }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 7,
                    padding: '6px 11px',
                    borderRadius: 11,
                    background: 'rgba(255,255,255,0.9)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(24,38,26,0.09)',
                    boxShadow: '0 6px 20px rgba(24,38,26,0.08)',
                  }}
                >
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: 2,
                      background: '#BDF2CA',
                      border: '1px solid rgba(24,38,26,0.12)',
                    }}
                  />
                  <span style={{ fontSize: '0.5rem', color: '#3a5c3e', fontWeight: 600 }}>
                    48 components shipped
                  </span>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: loop, ease: 'easeInOut' }}
          className="w-5 h-7 rounded-full border border-[rgba(24,38,26,0.15)] flex items-start justify-center pt-1.5 mx-auto"
        >
          <div className="w-0.5 h-1.5 bg-[#80A689] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
