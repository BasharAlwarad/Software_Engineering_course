/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
};

export default nextConfig;
