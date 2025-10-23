import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // if hitting domain root, redirect to home page
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },

};

export default nextConfig;
