import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => [
    {
      source: "/app/ads.txt",
      destination: "https://srv.adstxtmanager.com/70772/deniskuizinas.space",
      permanent: true
    }
  ]
};

export default nextConfig;
