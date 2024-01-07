/** @type {import('next').NextConfig} */


 const nextConfig = {
    images: {
      domains: ['encrypted-tbn0.gstatic.com'],
    },
    typescript: {
    ignoreBuildErrors:true,
    },
    eslint : {
      ignoreDuringBuilds:true,
    }
  };

  module.exports = nextConfig