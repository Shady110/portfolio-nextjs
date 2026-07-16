import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// Locale-aware wrappers — use these instead of next/link & next/navigation
// so links and programmatic navigation always carry the active locale.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
