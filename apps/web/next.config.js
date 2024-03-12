const { createContentlayerPlugin } = require("next-contentlayer");
const nextIntlPlugin = require("next-intl/plugin");

const withNextIntl = nextIntlPlugin("./i18n.ts");
const withContentlayer = createContentlayerPlugin({});

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["api"],
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
      "images.pexels.com",
    ],
  },
  async redirects() {
    return [
      {
        source: "/app",
        destination: "/app/dashboard",
        permanent: true,
      },
      {
        source: "/app/settings",
        destination: "/app/settings/account/general",
        permanent: true,
      },
    ];
  },
  // PWA configuration
  reactStrictMode: true, // Enable React strict mode for improved error handling
  swcMinify: true, // Enable SWC minification for improved performance
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development", // Remove console.log in production
  },
};

// Configuration object tells the next-pwa plugin
const withPWA = require("next-pwa")({
  dest: "public", // Destination directory for the PWA files
  disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
  register: true, // Register the PWA service worker
  skipWaiting: true, // Skip waiting for service worker activation
});

// Export the combined configuration for Next.js with PWA support
module.exports = withPWA(withNextIntl(withContentlayer(nextConfig)));
