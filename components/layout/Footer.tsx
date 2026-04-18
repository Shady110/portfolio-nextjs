import Link from 'next/link';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
  { href: '/contact', label: 'Contact' },
];

const SOCIAL = [
  {
    label: 'GitHub',
    href: 'https://github.com/Shady110',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(24,38,26,0.07)] mt-16">
      <div className="max-w-[1080px] mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-[#18261A] flex items-center justify-center text-white font-bold text-[10px]">
                SG
              </div>
              <span className="font-semibold text-[#0D0D0D] text-sm">Shady Gamal</span>
            </div>
            <p className="text-[0.8125rem] text-[#3a5c3e] leading-relaxed">
              Front-End Developer crafting polished digital products with strong UI thinking.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[0.6875rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-3">
              Pages
            </p>
            <div className="flex flex-col gap-1.5">
              {NAV.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[0.8125rem] text-[#3a5c3e] hover:text-[#18261A] transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[0.6875rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-3">
              Contact
            </p>
            <a
              href="mailto:hi@shadygamal.dev"
              className="text-[0.8125rem] text-[#3a5c3e] hover:text-[#18261A] transition-colors block mb-3"
            >
              hi@shadygamal.dev
            </a>
            <div className="flex items-center gap-1.5">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-1.5 rounded-lg text-[#80A689] hover:text-[#18261A] hover:bg-[#BDF2CA]/40 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Status */}
          <div>
            <p className="text-[0.6875rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-3">
              Status
            </p>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-1.5 bg-[#80A689] rounded-full animate-pulse" />
              <span className="text-[0.8125rem] text-[#18261A] font-medium">Available</span>
            </div>
            <p className="text-[0.75rem] text-[#80A689] leading-snug">
              Open to new projects and full-time roles.
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-[rgba(24,38,26,0.06)] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[0.75rem] text-[#80A689]">
            © {new Date().getFullYear()} Shady Gamal. All rights reserved.
          </p>
          <p className="text-[0.75rem] text-[#80A689]">
            Next.js · Tailwind CSS · Framer Motion · MUI
          </p>
        </div>
      </div>
    </footer>
  );
}
