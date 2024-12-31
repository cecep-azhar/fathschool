/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  images: {
    domains: ['localhost:8000', 'localhost', 'cms.fathschool.com'],
  }
};

export default nextConfig;
