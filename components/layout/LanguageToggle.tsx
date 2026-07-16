'use client';

import { useLocale } from 'next-intl';
import { useTransition } from 'react';
import { usePathname, useRouter } from '@/i18n/navigation';

/**
 * Compact EN / ع toggle. Switches locale while preserving the current
 * pathname (next-intl rewrites the prefix). Uses a transition so the
 * navigation doesn't block the UI thread.
 */
export default function LanguageToggle({ className = '' }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const next = locale === 'ar' ? 'en' : 'ar';
  const label = locale === 'ar' ? 'EN' : 'ع';
  const aria = locale === 'ar' ? 'Switch to English' : 'التبديل إلى العربية';

  const switchTo = () => {
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  return (
    <button
      onClick={switchTo}
      disabled={isPending}
      aria-label={aria}
      className={`inline-flex items-center justify-center min-w-[2rem] h-8 px-2.5 rounded-lg
                  text-[0.8125rem] font-semibold text-[#3a5c3e]
                  border border-[rgba(24,38,26,0.12)] bg-white/60
                  hover:text-[#18261A] hover:border-[rgba(24,38,26,0.22)] hover:bg-white
                  transition-colors disabled:opacity-50 ${next === 'ar' ? 'font-arabic' : ''} ${className}`}
    >
      {label}
    </button>
  );
}
