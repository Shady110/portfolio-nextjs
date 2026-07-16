'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useReducedMotion } from 'framer-motion';
import type { Project } from '@/lib/data/projects';
import CategoryIcon from './CategoryIcon';

function ExternalIcon({ className = 'w-3 h-3' }: { className?: string }) {
  return (
    <svg className={`${className} flex-shrink-0 rtl:-scale-x-100`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  );
}

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const t = useTranslations('projects.card');
  const tc = useTranslations('common');
  const shouldReduce = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Keep the latest onClose in a ref so the open/close effect below does not
  // re-run (and re-bind listeners / thrash body scroll) on every parent render.
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  const isOpen = Boolean(project);

  // Esc to close + lock body scroll while open. Keyed on open state only.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCloseRef.current();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  // Basic focus trap within the panel.
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== 'Tab' || !panelRef.current) return;
    const focusables = panelRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  // Gate on mount rather than AnimatePresence: framer-motion 11 + React 19 can
  // fail to unmount AnimatePresence exit children, leaving the dialog stuck open.
  // Rendering only while open guarantees a clean close; entrance animation stays.
  if (!project) return null;

  const isLive = project.status === 'live';
  const hasLinks = (project.liveUrls?.length ?? 0) > 0;
  const hasMultiple = (project.liveUrls?.length ?? 0) > 1;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Backdrop — soft forest tint, matches brand */}
      <div className="absolute inset-0 bg-[#18261A]/35 backdrop-blur-md" aria-hidden />

      {/* Panel — light surface card, portfolio theme */}
      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onKeyDown={onKeyDown}
        initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 40, scale: 0.98 }}
        animate={shouldReduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full sm:max-w-[760px] max-h-[92vh] sm:max-h-[85vh] flex flex-col bg-white
                   rounded-t-3xl sm:rounded-3xl overflow-hidden border border-[rgba(24,38,26,0.1)]
                   shadow-[0_28px_90px_rgba(24,38,26,0.28)]"
      >
        {/* Slim brand accent strip */}
        <div className="h-1.5 flex-shrink-0" style={{ background: project.gradient }} aria-hidden />

        {/* Header — light with mint wash */}
        <div className="relative flex-shrink-0 px-6 pt-5 pb-5 border-b border-[rgba(24,38,26,0.07)] bg-[#F9FAF9]">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 90% 120% at 12% 0%, rgba(189,242,202,0.4) 0%, transparent 60%)' }}
            aria-hidden
          />
          <div className="relative flex items-start justify-between gap-3">
            <div className="flex items-start gap-3.5 min-w-0">
              <span className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-[#18261A] bg-[#BDF2CA]/50 border border-[rgba(24,38,26,0.08)]">
                <CategoryIcon icon={project.icon} className="w-5 h-5" />
              </span>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[0.5625rem] font-semibold leading-none ${
                    isLive
                      ? 'bg-[#BDF2CA]/50 text-[#18261A] border border-[rgba(24,38,26,0.1)]'
                      : 'bg-[#fef3c7] text-[#92650a] border border-[#fde68a]'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${isLive ? 'bg-[#80A689]' : 'bg-[#fbbf24]'}`} />
                    {isLive ? tc('live') : tc('inProgress')}
                  </span>
                  <span className="latin text-[0.5625rem] font-mono text-[#80A689]">{project.year}</span>
                </div>
                <h3 id="project-modal-title" className="latin text-[1.375rem] font-bold text-[#0D0D0D] tracking-[-0.03em] leading-tight">
                  {project.title}
                </h3>
                <p className="text-[0.75rem] font-medium text-[#80A689] uppercase tracking-wider mt-0.5">{project.type}</p>
              </div>
            </div>
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label={t('close')}
              className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center
                         bg-white text-[#3a5c3e] border border-[rgba(24,38,26,0.1)]
                         hover:bg-[#F2F2F2] hover:text-[#18261A] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable content */}
        <div
          className="flex-1 overflow-y-auto px-6 py-5 space-y-4 min-h-0"
          style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(128,166,137,0.35) transparent' }}
        >
          {/* Roles */}
          <div className="flex flex-wrap gap-1.5">
            {project.roles.map((role) => (
              <span key={role} className="px-2.5 py-0.5 text-[0.625rem] font-semibold rounded-lg bg-[#F2F2F2] text-[#3a5c3e] border border-[rgba(24,38,26,0.07)]">
                {role}
              </span>
            ))}
          </div>

          {/* Summary */}
          <p className="text-[0.85rem] text-[#3a5c3e] leading-[1.72]">{project.summary}</p>

          {/* Key contributions */}
          <div>
            <p className="text-[0.5625rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-2.5">
              {t('keyContributions')}
            </p>
            <ul className="space-y-2">
              {project.contributions.map((c, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#80A689] mt-[6px] flex-shrink-0" />
                  <span className="text-[0.8rem] text-[#3a5c3e] leading-[1.6]">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenge */}
          <div className="p-3.5 rounded-xl bg-[#F9FAF9] border border-[rgba(24,38,26,0.07)]">
            <p className="text-[0.5625rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-1.5">
              {t('challenge')}
            </p>
            <p className="text-[0.7875rem] text-[#3a5c3e] leading-[1.65]">{project.challenge}</p>
          </div>

          {/* Impact */}
          <div className="p-3.5 rounded-xl bg-[#BDF2CA]/20 border border-[rgba(24,38,26,0.08)]">
            <p className="text-[0.5625rem] font-semibold text-[#18261A]/60 uppercase tracking-[0.1em] mb-1.5">
              {t('impact')}
            </p>
            <p className="text-[0.7875rem] text-[#18261A] leading-[1.65]">{project.impact}</p>
          </div>

          {/* Stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span key={s} className="latin px-2 py-0.5 text-[0.5625rem] font-medium text-[#18261A] bg-[#BDF2CA]/30 border border-[rgba(24,38,26,0.08)] rounded-md leading-none">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Footer: links */}
        <div className="flex-shrink-0 px-6 py-4 border-t border-[rgba(24,38,26,0.07)] bg-[#F9FAF9]">
          <div className="flex flex-wrap items-center gap-2">
            {hasLinks && !hasMultiple && (
              <a
                href={project.liveUrls![0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="latin inline-flex items-center gap-1.5 px-3.5 py-1.5 text-[0.6875rem] font-semibold text-white bg-[#18261A] rounded-xl hover:bg-[#243d27] transition-colors shadow-sm shadow-[rgba(24,38,26,0.2)]"
              >
                <ExternalIcon className="w-3 h-3" />
                {project.liveUrls![0].label}
              </a>
            )}
            {hasLinks && hasMultiple &&
              project.liveUrls!.map((u) => (
                <a
                  key={u.label}
                  href={u.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="latin inline-flex items-center gap-1 px-2.5 py-1.5 text-[0.625rem] font-medium text-[#18261A] border border-[rgba(24,38,26,0.12)] rounded-lg bg-white hover:bg-[#F2F2F2] hover:border-[rgba(24,38,26,0.2)] transition-colors"
                >
                  {u.label}
                  <ExternalIcon className="w-2.5 h-2.5" />
                </a>
              ))}
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[0.6875rem] font-medium text-[#3a5c3e] border border-[rgba(24,38,26,0.1)] rounded-lg bg-white hover:text-[#18261A] hover:border-[rgba(24,38,26,0.18)] transition-colors"
              >
                <GithubIcon />
                {tc('code')}
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[0.6875rem] font-medium text-[rgba(13,13,13,0.35)] border border-dashed border-[rgba(24,38,26,0.12)] rounded-lg select-none">
                <LockIcon />
                {tc('private')}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
