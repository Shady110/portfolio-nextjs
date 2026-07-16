import { useTranslations } from 'next-intl';
import { skillCategories, type SkillCategory } from './skills';

/**
 * Merges structural skill data (ids, numbers, skill names) with translated
 * category label + description from the `skills.categories.<id>` namespace.
 * Skill names themselves (React, Next.js, …) stay in Latin across locales.
 */
export function useLocalizedSkillCategories(): SkillCategory[] {
  const t = useTranslations('skills.categories');
  return skillCategories.map((cat) => ({
    ...cat,
    label: t(`${cat.id}.label`),
    description: t(`${cat.id}.description`),
  }));
}
