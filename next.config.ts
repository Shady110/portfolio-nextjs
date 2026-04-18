import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
  },
  experimental: {
    optimizePackageImports: ['@mui/icons-material', '@mui/material'],
  },
};

export default nextConfig;
