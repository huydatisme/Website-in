/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Enable experimental app directory
  experimental: {
    appDir: true, // Kích hoạt cấu trúc thư mục "app"
  },

  // If you need a base path for GitHub Pages
  basePath: 'https://huydatisme.github.io/Website-in/', // Replace with the name of your repository

  // If you're using "standalone" output (optional, but good for optimization)
  output: 'standalone',
};

module.exports = nextConfig;
