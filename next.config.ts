import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/",         // アクセスされた / を
        destination: "/front", // /front にリライト
      },
    ];
  },
};

export default nextConfig;
