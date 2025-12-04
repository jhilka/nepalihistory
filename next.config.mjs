/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/nepalihistory",
  assetPrefix: "/nepalihistory/", // Add this line
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
