import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function NotFound() {
  const t = useTranslations('nav');

  return (
    <section className="min-h-[70vh] flex items-center justify-center section-container">
      <div className="text-center">
        <p className="text-[0.6875rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-4">
          404
        </p>
        <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.03em] text-[#0D0D0D] mb-6">
          <span className="text-gradient">Page not found</span>
        </h1>
        <Link
          href="/"
          className="inline-flex px-6 py-2.5 text-[0.875rem] font-medium text-white bg-[#18261A] rounded-xl hover:bg-[#243d27] transition-colors"
        >
          {t('home')}
        </Link>
      </div>
    </section>
  );
}
