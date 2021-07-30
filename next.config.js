const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  pwa: {
    dest: "public",
    runtimeCaching,
    disable: process.env.NODE_ENV === "development",
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./utils/generateSitemap");
    }
    return config;
  },
});
