'use client';

import { memo, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import type { Project } from '@/lib/data/projects';

// ─── Shared icons ────────────────────────────────────────────────────────────

function ExternalIcon({ className = 'w-3 h-3' }: { className?: string }) {
  return (
    <svg className={`${className} flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  );
}

function FlipIcon() {
  return (
    <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  );
}

// ─── Front face ──────────────────────────────────────────────────────────────
//
// Layout: fixed gradient header (visual identity) + body (summary, stack).
// CTA links live on the BACK face — this avoids the classic hover-flip
// interaction trap where a user can see a link but can't click it.

function CardFront({ project }: { project: Project }) {
  const isLive = project.status === 'live';

  return (
    <div className="flex flex-col h-full bg-white border border-[rgba(24,38,26,0.08)] rounded-2xl overflow-hidden
                    shadow-[0_1px_4px_rgba(0,0,0,0.04)] group-hover:shadow-[0_2px_12px_rgba(0,0,0,0.06)]
                    transition-shadow duration-300">

      {/* ── Gradient header ─────────────────────────────────────────────── */}
      <div
        className="relative flex-shrink-0 overflow-hidden"
        style={{ height: 210, background: project.gradient }}
      >
        {/* Dot grid overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)',
            backgroundSize: '18px 18px',
          }}
          aria-hidden
        />

        {/* Soft radial glow at bottom — adds depth */}
        <div
          className="absolute inset-x-0 bottom-0 h-2/3"
          style={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.28) 0%, transparent 100%)',
          }}
          aria-hidden
        />

        {/* Top row: type label + status + year */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
          <span className="text-[0.5625rem] font-semibold text-white/45 tracking-[0.07em] uppercase leading-none truncate max-w-[55%]">
            {project.type}
          </span>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span
              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full
                          text-[0.5625rem] font-semibold leading-none ${
                            isLive
                              ? 'bg-[rgba(189,242,202,0.18)] text-[#BDF2CA] border border-[rgba(189,242,202,0.3)]'
                              : 'bg-[rgba(251,191,36,0.18)] text-[#fbbf24] border border-[rgba(251,191,36,0.3)]'
                          }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isLive ? 'bg-[#BDF2CA]' : 'bg-[#fbbf24]'
                }`}
              />
              {isLive ? 'Live' : 'In Progress'}
            </span>
            <span className="text-[0.5625rem] font-mono text-white/35">{project.year}</span>
          </div>
        </div>

        {/* Bottom: title + role chips */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-[1.375rem] font-bold text-white tracking-[-0.03em] leading-tight mb-2.5 drop-shadow-sm">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {project.roles.map((role) => (
              <span
                key={role}
                className="px-2.5 py-0.5 text-[0.5625rem] font-semibold rounded-lg
                           bg-white/10 text-white/65 border border-white/14 backdrop-blur-sm"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Body ────────────────────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-5 gap-4 min-h-0 overflow-hidden">

        {/* Summary — 3 lines max to guarantee equal heights */}
        <p className="text-[0.8125rem] text-[#3a5c3e] leading-[1.72] line-clamp-3">
          {project.summary}
        </p>

        {/* Stack chips */}
        <div className="flex flex-wrap gap-1.5 max-h-[52px] overflow-hidden">
          {project.stack.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[0.5625rem] font-medium text-[#18261A]
                         bg-[#BDF2CA]/30 border border-[rgba(24,38,26,0.08)] rounded-md leading-none"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Flex spacer — pushes hint to bottom */}
        <div className="flex-1" />

        {/*
          Flip discovery hint — device-contextual copy.

          Two <span> elements render server-side; CSS hides the wrong one:
            .flip-hint-hover  →  shown on (hover: hover) devices only
            .flip-hint-touch  →  shown on (hover: none)  devices only

          The touch variant is slightly bolder/more opaque — a tap CTA needs
          more visual weight than a passive "hover" reminder.
        */}
        <div
          className="flex items-center justify-center gap-1.5 text-[0.625rem] font-medium
                     text-[rgba(24,38,26,0.28)] group-hover:text-[rgba(24,38,26,0.5)]
                     transition-colors duration-300 select-none"
        >
          <FlipIcon />
          {/* Desktop hint */}
          <span className="flip-hint-hover">
            Hover for contributions &amp; impact
          </span>
          {/* Mobile hint — slightly more prominent to work as a tap CTA */}
          <span className="flip-hint-touch font-semibold text-[rgba(24,38,26,0.42)]">
            Tap to flip
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Back face ───────────────────────────────────────────────────────────────
//
// Dark forest-green panel: contributions bullets, challenge, impact, links.
// Content area is overflow-y-auto so longer projects scroll gracefully.

function CardBack({ project }: { project: Project }) {
  const hasLinks    = (project.liveUrls?.length ?? 0) > 0;
  const hasMultiple = (project.liveUrls?.length ?? 0) > 1;

  return (
    <div
      className="flex flex-col h-full rounded-2xl overflow-hidden
                 border border-[rgba(255,255,255,0.07)]
                 shadow-[0_8px_40px_rgba(0,0,0,0.25)]"
      style={{
        background:
          'linear-gradient(165deg, #111c12 0%, #0e1810 50%, #0c160d 100%)',
      }}
    >
      {/* Header */}
      <div className="flex-shrink-0 px-5 pt-5 pb-4 border-b border-white/[0.07]">
        <p className="text-[0.5625rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-0.5">
          {project.title}
        </p>
        <h4 className="text-[1rem] font-bold text-white tracking-[-0.022em]">
          Contributions &amp; Impact
        </h4>
      </div>

      {/* Scrollable content */}
      <div
        className="flex-1 overflow-y-auto px-5 py-4 space-y-4 min-h-0"
        style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(128,166,137,0.25) transparent' }}
      >
        {/* Key contributions */}
        <div>
          <p className="text-[0.5625rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-2.5">
            Key Contributions
          </p>
          <ul className="space-y-2">
            {project.contributions.map((c, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="w-1 h-1 rounded-full bg-[#80A689] mt-[7px] flex-shrink-0 opacity-75" />
                <span className="text-[0.8rem] text-white/65 leading-[1.62]">{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Challenge */}
        <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
          <p className="text-[0.5625rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-1.5">
            Challenge
          </p>
          <p className="text-[0.7875rem] text-white/55 leading-[1.65]">{project.challenge}</p>
        </div>

        {/* Impact */}
        <div className="p-3.5 rounded-xl bg-[rgba(189,242,202,0.07)] border border-[rgba(189,242,202,0.12)]">
          <p className="text-[0.5625rem] font-semibold text-[#BDF2CA] uppercase tracking-[0.1em] mb-1.5">
            Impact
          </p>
          <p className="text-[0.7875rem] text-white/70 leading-[1.65]">{project.impact}</p>
        </div>

        {/* Extra bottom breathing room */}
        <div className="h-1" />
      </div>

      {/* Footer: CTA links + flip-back hint */}
      <div className="flex-shrink-0 px-5 py-3.5 border-t border-white/[0.07]">
        <div className="flex flex-wrap items-center gap-2">

          {/* Live links */}
          {hasLinks && !hasMultiple && (
            <a
              href={project.liveUrls![0].url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5
                         text-[0.6875rem] font-semibold text-[#111c12]
                         bg-[#BDF2CA] rounded-xl
                         hover:bg-[#a8e8b4] transition-colors duration-150
                         shadow-sm shadow-[rgba(0,0,0,0.2)]"
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
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 px-2.5 py-1.5
                           text-[0.625rem] font-medium text-white/70
                           border border-white/[0.14] rounded-lg
                           hover:bg-white/[0.08] hover:text-white/90
                           transition-colors duration-150"
              >
                {u.label}
                <ExternalIcon className="w-2.5 h-2.5" />
              </a>
            ))
          }

          {/* GitHub / Private */}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5
                         text-[0.6875rem] font-medium text-white/50
                         border border-white/[0.12] rounded-lg
                         hover:text-white/80 hover:border-white/[0.22]
                         transition-colors duration-150"
            >
              <GithubIcon />
              Code
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5
                         text-[0.6875rem] font-medium text-white/25
                         border border-dashed border-white/[0.1] rounded-lg
                         select-none cursor-default"
            >
              <LockIcon />
              Private
            </span>
          )}

          {/* Spacer + flip-back nudge */}
          <div className="flex-1" />
          <span className="flex items-center gap-1 text-[0.5625rem] font-medium text-white/20">
            <FlipIcon />
            flip back
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Reduced-motion fallback ─────────────────────────────────────────────────
//
// Cross-fade between faces instead of 3D rotation.

function ReducedMotionCard({ project }: { project: Project }) {
  const [showBack, setShowBack] = useState(false);

  return (
    <div
      className="relative h-[500px] cursor-pointer rounded-2xl
                 outline-none focus-visible:ring-2 focus-visible:ring-[#80A689] focus-visible:ring-offset-2"
      onClick={() => setShowBack((v) => !v)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setShowBack((v) => !v);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`${project.title} — ${showBack ? 'showing contributions, click to see overview' : 'click to see contributions and impact'}`}
      aria-pressed={showBack}
    >
      <div
        className={`absolute inset-0 flip-fade-face ${
          showBack ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <CardFront project={project} />
      </div>
      <div
        className={`absolute inset-0 flip-fade-face ${
          showBack ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <CardBack project={project} />
      </div>
    </div>
  );
}

// ─── Main flip card component ─────────────────────────────────────────────────

const ProjectFlipCard = memo(function ProjectFlipCard({
  project,
  index = 0,
}: {
  project: Project;
  /** Grid position (0-based) — used to stagger the mobile peek animation */
  index?: number;
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const shouldReduce = useReducedMotion();

  // Reduced-motion users get a cross-fade instead of 3D rotation.
  // The peek animation is also suppressed via CSS `animation: none` in the
  // prefers-reduced-motion media query block in globals.css.
  if (shouldReduce) {
    return <ReducedMotionCard project={project} />;
  }

  const toggle = () => setIsFlipped((v) => !v);

  /*
    --peek-delay: stagger the cardPeek animation so cards lift one after
    another (cascade) rather than all at once. Base delay is 0.9s (after
    the entrance fade-in completes), each subsequent card adds 0.13s.

    Card 0 → 0.90s   Card 1 → 1.03s
    Card 2 → 1.16s   Card 3 → 1.29s
  */
  const peekDelay = `${0.9 + index * 0.13}s`;

  return (
    /*
      Outer shell: owns the perspective context + click/keyboard handler.
      CSS (hover: hover) rule handles desktop flip — zero JS.
      .is-flipped class handles touch/click flip via React state.
    */
    <div
      className="flip-card group h-[500px] cursor-pointer rounded-2xl
                 outline-none focus-visible:ring-2 focus-visible:ring-[#80A689]
                 focus-visible:ring-offset-2"
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`${project.title} — ${
        isFlipped
          ? 'showing contributions, tap to see overview'
          : 'tap or hover to see contributions and impact'
      }`}
      aria-pressed={isFlipped}
    >
      <div
        className={`flip-card-inner relative w-full h-full${
          isFlipped ? ' is-flipped' : ''
        }`}
        style={{ '--peek-delay': peekDelay } as React.CSSProperties}
      >
        {/* ── Front ── */}
        <div className="flip-face absolute inset-0">
          <CardFront project={project} />
        </div>

        {/* ── Back ── */}
        <div className="flip-face flip-face-back absolute inset-0">
          <CardBack project={project} />
        </div>
      </div>
    </div>
  );
});

export default ProjectFlipCard;
