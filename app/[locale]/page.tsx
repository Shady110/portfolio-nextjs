import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Hero from '@/components/home/Hero';
import BrandsSection from '@/components/home/BrandsSection';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import TrustSection from '@/components/home/TrustSection';
import SkillsSnapshot from '@/components/home/SkillsSnapshot';
import FinalCta from '@/components/home/FinalCta';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.home' });
  return { title: t('title'), description: t('description') };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <BrandsSection />
      <FeaturedProjects />
      <TrustSection />
      <SkillsSnapshot />
      <FinalCta />
    </>
  );
}
