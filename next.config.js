const withNextIntl = require("next-intl/plugin")();

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl({
  images: {
    remotePatterns: [
      {
        hostname: "cdn.sanity.io",
      },
    ],
  },
});

module.exports = nextConfig;
