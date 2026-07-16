import type { ProjectIcon } from '@/lib/data/projects';

// Shared category icon set — used by the bento cards, the home teaser, and the
// project detail modal so the visual language stays consistent.
const ICONS: Record<ProjectIcon, React.ReactNode> = {
  saas: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M4 6h16M4 6a1 1 0 00-1 1v10a1 1 0 001 1h16a1 1 0 001-1V7a1 1 0 00-1-1M8 21h8m-4-3v3M7 10h4m-4 3h6" />
  ),
  commerce: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.3 4.6A1 1 0 005.6 19H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  ),
  agency: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M13 7l5 5m0 0l-5 5m5-5H6m0-6l-3 3 3 3" />
  ),
  health: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  ),
};

export default function CategoryIcon({
  icon,
  className = 'w-5 h-5',
}: {
  icon: ProjectIcon;
  className?: string;
}) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      {ICONS[icon]}
    </svg>
  );
}
