import type { NextConfig } from "next";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: false,
  outputFileTracingRoot: __dirname,
  basePath: isProd ? "/kunalyadav.github.io" : "",
  assetPrefix: isProd ? "/kunalyadav.github.io" : "",
  env: {
    googleAnalyticsId: isProd ? process.env.GA_MEASUREMENT_ID : "",
  },
};

export default nextConfig;
