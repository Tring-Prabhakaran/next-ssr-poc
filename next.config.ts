import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
  },
  experimental: {
    // optimizePackageImports: ["package-name"],
    webpackMemoryOptimizations: true,
    nextScriptWorkers: false,
  },
};

export default nextConfig;
