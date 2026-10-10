import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Images are served from Framer's CDN by default. Run `npm run assets:download`
    // and set NEXT_PUBLIC_LOCAL_ASSETS=1 to serve them from /public/assets instead.
    remotePatterns: [{ protocol: "https", hostname: "framerusercontent.com" }],
    unoptimized: process.env.NEXT_IMAGE_UNOPTIMIZED === "1",
  },
};

export default nextConfig;
