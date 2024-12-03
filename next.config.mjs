/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/RentNest",
  output: 'export', // <== Enables static exports
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
      {
        protocol: 'https',
        hostname: 'virmjpqxaajeqwjohjll.supabase.co',
      },
    ],
  },
};

export default nextConfig;
