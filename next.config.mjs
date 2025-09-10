/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/start',
        permanent: false, // Temporary redirect
      },
    ];
  },
};

export default nextConfig;
