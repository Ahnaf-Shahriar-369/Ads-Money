// ...existing code...
"use client";
import { useEffect } from "react";

type AdsByGoogleArray = unknown[];

/* declare adsbygoogle on the Window type (no `any`) */
declare global {
  interface Window {
    adsbygoogle?: AdsByGoogleArray;
  }
}

const AD_SLOT = process.env.NEXT_PUBLIC_ADSENSE_SLOT ?? "";
const TEST_MODE = process.env.NEXT_PUBLIC_ADSENSE_TEST === "1";

/**
 * TopBannerAd - AdSense only (no `any` usage)
 */
export default function TopBannerAd() {
  useEffect(() => {
    const container = document.getElementById("adsense-top");
    if (!container) return;

    container.innerHTML = "";

    const ins = document.createElement("ins");
    ins.className = "adsbygoogle";
    ins.style.display = "block";
    ins.setAttribute("data-ad-client", "ca-pub-9822891837132664");
    if (AD_SLOT) ins.setAttribute("data-ad-slot", AD_SLOT);
    ins.setAttribute("data-ad-format", "auto");
    ins.setAttribute("data-full-width-responsive", "true");
    if (TEST_MODE) ins.setAttribute("data-adtest", "on");

    container.appendChild(ins);

    const pushAd = (): boolean => {
      try {
        window.adsbygoogle = window.adsbygoogle ?? [];
        (window.adsbygoogle as AdsByGoogleArray).push({});
        return true;
      } catch {
        return false;
      }
    };

    pushAd();
    let attempts = 0;
    const maxAttempts = 10;
    const intervalId = window.setInterval(() => {
      attempts++;
      if (pushAd() || attempts >= maxAttempts) {
        window.clearInterval(intervalId);
      }
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="flex justify-center w-full">
      <div id="adsense-top" className="w-full max-w-[970px] px-2" />
    </div>
  );
}
// ...existing code...