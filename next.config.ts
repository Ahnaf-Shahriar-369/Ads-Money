/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            // Allows AdSense + Vercel debug/live scripts and permits inline script execution for development.
            // Tighten for production if desired.
            value: [
              "default-src 'self';",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://pagead2.googlesyndication.com https://www.googletagmanager.com https://www.googletagservices.com https://www.google-analytics.com https://va.vercel-scripts.com https://vercel.live https://cdn.jsdelivr.net;",
              "script-src-elem 'self' 'unsafe-inline' https://pagead2.googlesyndication.com https://va.vercel-scripts.com https://vercel.live;",
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