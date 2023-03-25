/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  images: {
    domains: [
      "res.cloudinary.com",
      "www.pythonblogs.com",
      "i0.wp.com",
      "ekeyms.com",
    ],
  },
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
