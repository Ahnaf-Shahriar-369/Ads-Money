/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            // Development-friendly CSP that allows AdSense and related Google telemetry domains.
            // Remove 'unsafe-inline' in production when possible.
            value: [
              "default-src 'self';",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://pagead2.googlesyndication.com https://www.googletagmanager.com https://www.googletagservices.com https://www.google-analytics.com https://va.vercel-scripts.com https://vercel.live https://cdn.jsdelivr.net https://ep2.adtrafficquality.google;",
              "script-src-elem 'self' 'unsafe-inline' https://pagead2.googlesyndication.com https://va.vercel-scripts.com https://vercel.live https://ep2.adtrafficquality.google;",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;",
              "img-src * data: blob:;",
              "connect-src *;",
              "font-src 'self' https://fonts.gstatic.com data:;",
              "frame-src https://googleads.g.doubleclick.net https://pagead2.googlesyndication.com;",
              "object-src 'none';",
              "base-uri 'self';"
            ].join(" "),
          },
          {
            key: "Permissions-Policy",
            value: "geolocation=(), microphone=(), camera=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;