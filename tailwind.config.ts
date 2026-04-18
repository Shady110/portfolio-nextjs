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
      },
    },
  },
  plugins: [],
};

export default config;
