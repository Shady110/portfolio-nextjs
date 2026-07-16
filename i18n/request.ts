import { getRequestConfig } from 'next-intl/server';
import { routing, type Locale } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // Resolve the locale from the [locale] segment, falling back to the default.
  const requested = await requestLocale;
  const locale: Locale =
    requested && routing.locales.includes(requested as Locale)
      ? (requested as Locale)
      : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
