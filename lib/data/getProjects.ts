import { useTranslations } from 'next-intl';
import { projectsMeta, type Project } from './projects';

/**
 * Client hook: merges structural project meta with translated copy from the
 * `projects.items.<id>` message namespace for the active locale.
 */
export function useProjects(): Project[] {
  const t = useTranslations('projects.items');
  return projectsMeta.map((meta) => ({
    ...meta,
    type: t(`${meta.id}.type`),
    category: t(`${meta.id}.category`),
    summary: t(`${meta.id}.summary`),
    roles: t.raw(`${meta.id}.roles`) as string[],
    contributions: t.raw(`${meta.id}.contributions`) as string[],
    challenge: t(`${meta.id}.challenge`),
    impact: t(`${meta.id}.impact`),
  }));
}

export function useFeaturedProjects(): Project[] {
  return useProjects().filter((p) => p.featured);
}
