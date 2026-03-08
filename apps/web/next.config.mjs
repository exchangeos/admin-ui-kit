/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@admin-app/ui', '@admin-app/tailwind-config'],
  experimental: {
    // Enable server actions
  },
};

export default nextConfig;
