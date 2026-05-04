/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/stats/script.js',
        destination: 'https://cloud.umami.is/script.js',
      },
      {
        source: '/api/send',
        destination: 'https://cloud.umami.is/api/send',
      },
    ];
  },
};

module.exports = nextConfig;
