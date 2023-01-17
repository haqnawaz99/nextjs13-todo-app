/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // following was
  //reactStrictMode: true,
  //we change it for app folder
  experimental: { appDir: true },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:3001/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
