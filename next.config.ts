import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static HTML export for GitHub Pages
  output: 'export',

  // Set trailing slash for consistent routing
  trailingSlash: true,

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
