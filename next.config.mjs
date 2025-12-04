/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/nepalihistory",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
