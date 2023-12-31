/** @type {import('next').NextConfig} */
const nextConfig = {
  //add swc
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        port: "",
        pathname: "/s/files/**",
      },
    ],
  },
};

module.exports = nextConfig;
