// ...existing code...
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            // Allow AdSense core hosts + telemetry used by AdSense runtime.
            // 'unsafe-inline' kept for development convenience; remove for production if you can use nonces/hashes.
            value: [
              "default-src 'self';",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://pagead2.googlesyndication.com https://www.googletagmanager.com https://www.googletagservices.com https://www.google-analytics.com https://va.vercel-scripts.com https://vercel.live https://cdn.jsdelivr.net https://ep2.adtrafficquality.google https://www.google.com;",
              "script-src-elem 'self' 'unsafe-inline' https://pagead2.googlesyndication.com https://va.vercel-scripts.com https://vercel.live https://ep2.adtrafficquality.google https://www.google.com;",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;",
              "img-src * data: blob:;",
              "connect-src *;",
              "font-src 'self' https://fonts.gstatic.com data:;",
              "frame-src https://googleads.g.doubleclick.net https://pagead2.googlesyndication.com https://ep2.adtrafficquality.google https://www.google.com;",
              "object-src 'none';",
              "base-uri 'self';",
              "frame-ancestors 'self';"
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
// ...existing code...