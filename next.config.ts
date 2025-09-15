/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.highperformanceformat.com *.adsterra.com; frame-src 'self' *.highperformanceformat.com *.adsterra.com;",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;