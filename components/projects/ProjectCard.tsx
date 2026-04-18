'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '@/lib/data/projects';

// ── Icons ──────────────────────────────────────────────────────────────────
function ExternalIcon() {
  return (
    <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
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

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <motion.svg
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.2 }}
      className="w-3.5 h-3.5 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
    </motion.svg>
  );
}

// ── Component ──────────────────────────────────────────────────────────────
export default function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  const isLive      = project.status === 'live';
  const isPrivate   = project.githubStatus === 'private';
  const hasLinks    = (project.liveUrls?.length ?? 0) > 0;
  const hasMultiple = (project.liveUrls?.length ?? 0) > 1;

  return (
    <motion.article
      id={project.id}
      layout
      className="flex flex-col rounded-2xl border border-[rgba(24,38,26,0.08)] bg-white overflow-hidden
                 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)]
                 hover:-translate-y-0.5 transition-all duration-250"
    >

      {/* ── Gradient header ───────────────────────────────────────────────── */}
      <div
        className="relative flex-shrink-0"
        style={{ height: 156, background: project.gradient }}
      >
        {/* Noise overlay for depth */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }}
          aria-hidden
        />

        {/* Top row: type + status */}
        <div className="absolute top-3.5 left-4 right-4 flex items-center justify-between gap-2">
          <span className="text-[0.625rem] font-semibold text-white/55 tracking-[0.06em] uppercase leading-none truncate">
            {project.type}
          </span>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[0.625rem] font-semibold
              ${isLive
                ? 'bg-[rgba(189,242,202,0.18)] text-[#BDF2CA] border border-[rgba(189,242,202,0.25)]'
                : 'bg-[rgba(251,191,36,0.18)] text-[#fbbf24] border border-[rgba(251,191,36,0.22)]'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${isLive ? 'bg-[#BDF2CA]' : 'bg-[#fbbf24]'}`} />
              {isLive ? 'Live' : 'In Progress'}
            </span>
            <span className="text-[0.625rem] font-mono text-white/35">{project.year}</span>
          </div>
        </div>

        {/* Bottom row: title */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-[1.125rem] font-bold text-white tracking-[-0.025em] leading-tight mb-0.5 drop-shadow-sm">
            {project.title}
          </h3>
          {/* Role badges */}
          <div className="flex flex-wrap gap-1 mt-2">
            {project.roles.map((role) => (
              <span
                key={role}
                className="px-2 py-0.5 text-[0.5625rem] font-semibold rounded-md
                           bg-white/10 text-white/70 border border-white/15 backdrop-blur-sm"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Body ──────────────────────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-5 gap-4">

        {/* Summary */}
        <p className="text-[0.8125rem] text-[#3a5c3e] leading-[1.72]">
          {project.summary}
        </p>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[0.625rem] font-medium text-[#18261A]
                         bg-[#BDF2CA]/35 border border-[rgba(24,38,26,0.09)] rounded-md"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center justify-between w-full text-left
                     px-3.5 py-2.5 rounded-xl border border-[rgba(24,38,26,0.07)]
                     bg-[#F9FAF9] hover:bg-[#F2F2F2] hover:border-[rgba(24,38,26,0.12)]
                     transition-all duration-200 group"
        >
          <span className="text-[0.75rem] font-semibold text-[#18261A]/70 group-hover:text-[#18261A] transition-colors">
            {expanded ? 'Hide' : 'View'} contributions & impact
          </span>
          <ChevronIcon open={expanded} />
        </button>

        {/* Expanded: contributions + challenge + impact */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.26, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="space-y-3 pb-1">

                {/* Key contributions */}
                <div className="p-3.5 rounded-xl bg-[#F9FAF9] border border-[rgba(24,38,26,0.06)]">
                  <p className="text-[0.625rem] font-semibold text-[#80A689] uppercase tracking-[0.08em] mb-2.5">
                    Key Contributions
                  </p>
                  <ul className="space-y-1.5">
                    {project.contributions.map((c, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#80A689] mt-[6px] flex-shrink-0" />
                        <span className="text-[0.8125rem] text-[#3a5c3e] leading-[1.6]">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Challenge */}
                <div className="p-3.5 rounded-xl bg-[#F2F2F2] border border-[rgba(24,38,26,0.06)]">
                  <p className="text-[0.625rem] font-semibold text-[#80A689] uppercase tracking-[0.08em] mb-1.5">
                    Challenge
                  </p>
                  <p className="text-[0.8125rem] text-[#3a5c3e] leading-[1.65]">{project.challenge}</p>
                </div>

                {/* Impact */}
                <div className="p-3.5 rounded-xl bg-[#BDF2CA]/20 border border-[rgba(24,38,26,0.08)]">
                  <p className="text-[0.625rem] font-semibold text-[#18261A]/60 uppercase tracking-[0.08em] mb-1.5">
                    Impact
                  </p>
                  <p className="text-[0.8125rem] text-[#18261A] leading-[1.65]">{project.impact}</p>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Footer: links ─────────────────────────────────────────────── */}
        <div className="pt-3 border-t border-[rgba(24,38,26,0.06)] mt-auto">

          {/* Live URLs */}
          {hasLinks && (
            <div className={`flex flex-wrap gap-1.5 ${(isPrivate || project.githubUrl) ? 'mb-2' : ''}`}>
              {hasMultiple ? (
                // Multiple tenants — compact chips
                project.liveUrls!.map((u) => (
                  <a
                    key={u.label}
                    href={u.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 text-[0.6875rem] font-medium
                               text-[#18261A] border border-[rgba(24,38,26,0.12)] rounded-lg
                               hover:bg-[#F2F2F2] hover:border-[rgba(24,38,26,0.2)]
                               transition-all duration-180"
                  >
                    {u.label}
                    <ExternalIcon />
                  </a>
                ))
              ) : (
                // Single URL — prominent button
                <a
                  href={project.liveUrls![0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 text-[0.75rem] font-semibold
                             text-white bg-[#18261A] rounded-xl
                             hover:bg-[#243d27] transition-colors duration-180 shadow-sm shadow-[rgba(24,38,26,0.2)]"
                >
                  <ExternalIcon />
                  {project.liveUrls![0].label}
                </a>
              )}
            </div>
          )}

          {/* GitHub row */}
          <div className="flex items-center gap-1.5">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[0.6875rem] font-medium
                           text-[#3a5c3e] border border-[rgba(24,38,26,0.1)] rounded-lg bg-white
                           hover:text-[#18261A] hover:border-[rgba(24,38,26,0.18)]
                           transition-all duration-180"
              >
                <GithubIcon />
                View Code
              </a>
            ) : (
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[0.6875rem] font-medium
                           text-[rgba(13,13,13,0.35)] border border-dashed border-[rgba(24,38,26,0.1)]
                           rounded-lg select-none cursor-default"
              >
                <LockIcon />
                Private Repository
              </span>
            )}

            {project.status === 'in-progress' && (
              <span
                className="inline-flex items-center gap-1 px-3 py-1.5 text-[0.6875rem] font-medium
                           text-[#92650a] bg-[#fef3c7] border border-[#fde68a] rounded-lg"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#fbbf24]" />
                In Progress
              </span>
            )}
          </div>

        </div>
      </div>
    </motion.article>
  );
}
