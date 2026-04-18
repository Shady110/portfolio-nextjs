'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

// Smaller offsets = snappier, less visual noise on fast machines
const OFFSETS = {
  up:    { y: 20, x: 0 },
  down:  { y: -20, x: 0 },
  left:  { y: 0, x: 20 },
  right: { y: 0, x: -20 },
  none:  { y: 0, x: 0 },
};

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  once?: boolean;
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  once = true,
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const shouldReduce = useReducedMotion();
  // amount: 0.1 fires earlier than the default — content reveals before it's fully in view
  const inView = useInView(ref, { once, amount: 0.1 });

  // Zero JS animation cost for users who prefer reduced motion
  if (shouldReduce) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  const offset = OFFSETS[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, ...offset }}
      transition={{
        duration: 0.55,   // was 0.75 — snappier without feeling rushed
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
