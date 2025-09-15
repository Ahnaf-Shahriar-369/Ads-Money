This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## AdSense / Ads deployment notes

This project includes basic wiring to support Google AdSense and a fallback provider (Adsterra) for the top banner. Follow these steps to ensure ads run after deployment:

- Add a `.env.local` at the project root to set an optional AdSense ad slot id:

	NEXT_PUBLIC_ADSENSE_SLOT=YOUR_AD_SLOT_ID

- `public/ads.txt` is already included with your publisher entry. Verify it is served at `https://your-domain.com/ads.txt` after deployment.

- The app includes a meta tag in the `<head>` to help with AdSense verification. You can use the meta tag or the ads.txt verification method in your AdSense console.

- After deployment, open the site in an incognito window with adblock disabled, check that `pagead2.googlesyndication.com/pagead/js/adsbygoogle.js` is loaded and that an `ins.adsbygoogle` element exists in the DOM in the top banner area.

If you want me to remove Adsterra and make the top banner exclusively AdSense (to avoid collocated providers), or add a GDPR consent gating flow to load ads only after consent, tell me and I'll implement it.
