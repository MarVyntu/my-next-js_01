const next = require("next");

const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  webpack: (config, options) => {
    config.externals.push("google");
    return config;
  },
};
