import type { Variants } from 'framer-motion';

// Shared motion language — one easing + spring across the whole site so every
// reveal, hover, and press feels part of the same system.
export const EASE = [0.22, 1, 0.36, 1] as const;
export const SPRING = { type: 'spring', stiffness: 320, damping: 30 } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

// Consistent card hover/press for interactive surfaces.
export const cardHover = {
  whileHover: { y: -3 },
  whileTap: { scale: 0.99 },
  transition: { duration: 0.22, ease: 'easeOut' as const },
};
