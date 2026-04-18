import AnimatedSection from './AnimatedSection';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: 'left' | 'center';
  delay?: number;
}

export default function SectionHeading({
  eyebrow,
  title,
  titleHighlight,
  description,
  align = 'left',
  delay = 0,
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <AnimatedSection delay={delay} className={isCenter ? 'text-center' : ''}>
      {eyebrow && (
        <p className="text-[0.6875rem] font-semibold text-[#80A689] uppercase tracking-[0.1em] mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-[clamp(1.6rem,3vw,2.25rem)] font-bold tracking-[-0.028em] text-[#0D0D0D] leading-[1.12] mb-3">
        {title}
        {titleHighlight && (
          <>
            {' '}
            <span className="text-gradient">{titleHighlight}</span>
          </>
        )}
      </h2>
      {description && (
        <p
          className={`text-[0.9375rem] text-[#3a5c3e] leading-relaxed ${
            isCenter ? 'max-w-xl mx-auto' : 'max-w-lg'
          }`}
        >
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}
