const withBundleAnalyzer = require('@next/bundle-analyzer')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'twemoji.maxcdn.com',
      },
    ],
  },
};

module.exports =
  process.env.NODE_ENV === 'production'
    ? withBundleAnalyzer(nextConfig)
    : nextConfig;
