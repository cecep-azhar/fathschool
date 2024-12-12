/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost'], // sesuaikan dengan domain gambar Anda
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'localhost',
          },
          {
            protocol: 'https',
            hostname: 'yourdomainhere.com',
          }
        ]
      }
};

export default nextConfig;
