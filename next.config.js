/** @type {import('next').NextConfig} */

const source = `/api/:path*`;
const destination = process.env.NEXT_PUBLIC_BACKEND_URL + "/:path*";

const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source,
        destination,
      },
    ];
  },
};

module.exports = nextConfig;
