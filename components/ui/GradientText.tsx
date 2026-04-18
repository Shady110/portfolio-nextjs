interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'warm' | 'rainbow';
}

const gradients = {
  primary: 'linear-gradient(135deg, #818cf8 0%, #6366f1 40%, #8b5cf6 100%)',
  warm: 'linear-gradient(135deg, #f8fafc 0%, #94a3b8 100%)',
  rainbow: 'linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899, #f97316)',
};

export default function GradientText({
  children,
  className = '',
  variant = 'primary',
}: GradientTextProps) {
  return (
    <span
      className={`inline-block ${className}`}
      style={{
        background: gradients[variant],
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      {children}
    </span>
  );
}
