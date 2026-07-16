import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        surface: '#F2F2F2',
        'surface-2': '#e4ede6',
        accent: '#80A689',
        'accent-dark': '#18261A',
        'accent-mint': '#BDF2CA',
        'forest': '#18261A',
        'sage': '#80A689',
        'mint': '#BDF2CA',
        'text-primary': '#0D0D0D',
        'text-secondary': '#3a5c3e',
        'text-tertiary': '#80A689',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        arabic: ['var(--font-arabic)', 'IBM Plex Sans Arabic', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(24,38,26,0.05)',
        'card-hover': '0 8px 32px rgba(24,38,26,0.10)',
        float: '0 18px 44px rgba(24,38,26,0.11)',
      },
    },
  },
  plugins: [],
};

export default config;
