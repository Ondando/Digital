/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  images: {
    domains: ['res.cloudinary.com'],
  },
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
