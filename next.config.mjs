/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/my-blog",
  assetPrefix: "/my-blog",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ["picsum.photos"],
  },
};

export default nextConfig;
