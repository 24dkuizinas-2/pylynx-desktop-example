import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  {
    "redirects": [
        {
            "source": "/ads.txt",
            "destination": "https://srv.adstxtmanager.com/70772/deniskuizinas.space",
            "permanent": true
        }
    ]
}
};

export default nextConfig;
