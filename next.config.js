/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'https://github.com/huydatisme/Website-in/';
module.exports = {
 
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  
  output: 'export',
  images: {
    unoptimized: true, // Disable image optimization as GitHub Pages doesn't support it
  },
};
