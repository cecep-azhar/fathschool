/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  webpack: (config) => {
    // Menambahkan aturan untuk memuat font
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          outputPath: 'static/fonts/',
          publicPath: '/_next/static/fonts/',
        },
      },
    });
    return config;
  },
};

export default nextConfig;
