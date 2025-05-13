import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/front",
      },
      {
        source: "/:path*",
        destination: "/front/:path*",
      },
    ];
  },
};

export default nextConfig;
