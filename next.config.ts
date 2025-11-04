import type { NextConfig } from "next";

const nextConfig = {
  // CRITICAL: This is the modern way to enable static HTML export in Next.js
  output: 'export', 
  
  // Optional: Set a trailing slash for file-based routing compatibility
  trailingSlash: true, 

  // Optional: Configure where the static output goes (defaults to 'out')
  // distDir: 'out', 
};

export default nextConfig;
