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

module.exports = nextConfig;
