import type { NextConfig } from "next";

const nextConfig:NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },images: {
    domains: ['firebasestorage.googleapis.com','w0.peakpx.com'], 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.inforwaves.com',
      },
    ]
  },
};

export default nextConfig;