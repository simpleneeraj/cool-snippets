import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'twemoji.maxcdn.com',
      },
    ],
  },
};

export default nextConfig;
