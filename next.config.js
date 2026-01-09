/** @type {import('next').NextConfig} */

const withNextIntl = require("next-intl/plugin")("./next-intl.config.ts");
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = withNextIntl(nextConfig);
