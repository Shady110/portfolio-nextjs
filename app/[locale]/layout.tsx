import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import Providers from '@/components/providers/Providers';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: {
    default: 'Shady Gamal — Front-End Developer',
    template: '%s | Shady Gamal',
  },
  description:
    'Front-End Developer at Blue Ribbon. React, Next.js, Tailwind CSS. UI/UX background, Google UX Certified. Building polished web products with strong design thinking. Based in Egypt, available worldwide.',
  keywords: [
    'Front-End Developer', 'React Developer', 'Next.js Developer',
    'TypeScript', 'UI Developer', 'SaaS Frontend', 'Design Systems',
  ],
  authors: [{ name: 'Shady Gamal' }],
  creator: 'Shady Gamal',
  icons: {
    // SVG favicon — modern browsers (Chrome 80+, Firefox, Edge, Safari 12+)
    // Scales perfectly from 16px to any size from a single file.
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    // app/icon.tsx auto-generates /icon.png (32×32) as PNG fallback.
    // app/apple-icon.tsx auto-generates /apple-icon.png (180×180).
  },
  // Tints the browser chrome / address bar on mobile to match brand
  other: { 'theme-color': '#18261A' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Shady Gamal — Front-End Developer',
    description: 'Front-End Developer crafting polished digital products with strong UI thinking.',
    siteName: 'Shady Gamal',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shady Gamal — Front-End Developer',
    description: 'Front-End Developer crafting polished digital products with strong UI thinking.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-[#1d1d1f] antialiased">
        <AppRouterCacheProvider>
          <Providers>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
