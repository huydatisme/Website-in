// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Export static HTML files to use with GitHub Pages
  output: 'export',

  // Optional: If you need to set a base path for GitHub Pages
  basePath: '/<REPO_NAME>', // Replace with the name of your repository
};

module.exports = nextConfig;
