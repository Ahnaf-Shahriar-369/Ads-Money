"use client";
import { useEffect } from "react";
const AD_SLOT = process.env.NEXT_PUBLIC_ADSENSE_SLOT || "";

export default function TopBannerAd() {
  useEffect(() => {
    // Google AdSense responsive slot only
    const adsenseContainer = document.getElementById("adsense-top");
    if (adsenseContainer) {
      adsenseContainer.innerHTML = "";

      const ins = document.createElement("ins");
      ins.className = "adsbygoogle";
      ins.style.display = "block";
      // responsive attributes recommended by google
      ins.setAttribute("data-ad-client", "ca-pub-9822891837132664");
      if (AD_SLOT) ins.setAttribute("data-ad-slot", AD_SLOT);
      ins.setAttribute("data-ad-format", "auto");
      ins.setAttribute("data-full-width-responsive", "true");

      adsenseContainer.appendChild(ins);

      const pushScript = document.createElement("script");
      pushScript.innerHTML = `(adsbygoogle = window.adsbygoogle || []).push({});`;
      adsenseContainer.appendChild(pushScript);
    }
  }, []);

  return (
    <div className="flex justify-center w-full">
      {/* Google AdSense container (responsive) */}
      <div id="adsense-top" className="w-full max-w-[970px] px-2" />
    </div>
  );
}