import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "images.unsplash.com",
    },
    {
      protocol: "https",
      hostname: "wallpapercave.com",
    },
    {
      protocol: "https",
      hostname: "tse2.mm.bing.net",
    },
    {
      protocol: "https",
      hostname: "tse3.mm.bing.net",
    },
    {
      protocol: "https",
      hostname: "tse1.mm.bing.net",
    },
    {
      protocol: "https",
      hostname: "p4.wallpaperbetter.com",
    },
    {
      protocol: "https",
      hostname: "http2.mlstatic.com",
    },
    {
      protocol: "https",
      hostname: "tse4.mm.bing.net",
    },
    {
      protocol: "https",
      hostname: "tse1.explicit.bing.net",
    }
  ],
}
};

export default nextConfig;
