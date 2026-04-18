'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-white/92 backdrop-blur-xl border-b border-[rgba(24,38,26,0.07)] shadow-sm shadow-[rgba(24,38,26,0.04)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1080px] mx-auto px-6 h-14 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
          <div className="w-7 h-7 rounded-lg bg-[#18261A] flex items-center justify-center text-white font-bold text-[10px] tracking-tight group-hover:bg-[#243d27] transition-colors">
            SG
          </div>
          <span className="hidden sm:block font-semibold text-[#0D0D0D] text-[0.875rem] tracking-tight">
            Shady Gamal
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-1.5 rounded-lg text-[0.8125rem] font-medium transition-colors duration-150 ${
                  active ? 'text-[#18261A]' : 'text-[#3a5c3e] hover:text-[#18261A]'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-[#BDF2CA]/40 rounded-lg"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.38 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-[0.75rem] text-[#80A689]">
            <span className="w-1.5 h-1.5 bg-[#80A689] rounded-full animate-pulse" />
            Available
          </span>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: '#243d27' }}
              whileTap={{ scale: 0.97 }}
              className="px-4 py-1.5 text-[0.8125rem] font-medium text-white bg-[#18261A] rounded-lg transition-colors"
            >
              Get in touch
            </motion.button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden p-1.5 rounded-lg text-[#80A689] hover:text-[#18261A] hover:bg-[#BDF2CA]/30 transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-[rgba(24,38,26,0.07)] bg-white/95 backdrop-blur-xl"
          >
            <div className="px-5 py-3 flex flex-col gap-0.5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? 'text-[#18261A] bg-[#BDF2CA]/35'
                      : 'text-[#3a5c3e] hover:text-[#18261A] hover:bg-[#BDF2CA]/25'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 px-3.5 py-2.5 text-center text-sm font-medium text-white bg-[#18261A] rounded-lg"
              >
                Get in touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
