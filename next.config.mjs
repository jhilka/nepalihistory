const getPath = () => {
  if (process.env.NEXT_PUBLIC_IS_GITHUB_PAGES === "true") {
    return "/nepalihistory";
  }
  return "";
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: getPath(),
  assetPrefix: getPath(),
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  headers: async () => {
    return [
      {
        source: "/timelines/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
