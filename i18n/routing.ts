import { defineRouting } from 'next-intl/routing';

export const locales = ['en', 'ar'] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: 'en',
  // English lives at "/", Arabic at "/ar" — the default locale is not prefixed.
  localePrefix: 'as-needed',
});
