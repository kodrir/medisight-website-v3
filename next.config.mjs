/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Lint is run explicitly via `npm run lint`; don't block production builds on it.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
