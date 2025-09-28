// ...existing code...
"use client";
import React from "react";
import AdBanner from "../components/AdBanner";

type Props = {
  children?: React.ReactNode;
  // optional id for ad network integration
  adId?: string;
};

const BottomBannerAd: React.FC<Props> = ({ children, adId = "bottom-banner-ad-slot" }) => {
  return (
    <div
      id={adId}
      aria-label="Bottom banner ad"
      role="region"
      style={{
        position: "relative",
        left: "50%",
        bottom: 24,
        transform: "translateX(-50%)",
        width: 639,
        maxWidth: "calc(100% - 32px)",
        height: 96,
        borderRadius: 16,
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)",
        border: "1px solid rgba(255,255,255,0.12)",
        backdropFilter: "blur(12px) saturate(120%)",
        WebkitBackdropFilter: "blur(12px) saturate(120%)",
        boxShadow: "0 10px 30px rgba(2,6,23,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        
        overflow: "hidden",
        padding: 12,
      }}
    >
      {/* Place your ad markup or script inside this container */}
      <AdBanner
        dataAdSlot="8255022514" // Replace with your actual ad slot ID
        dataAdFormat="auto"
        dataFullWidthResponsive={true}
      />

      {children ?? null}
    </div>
  );
};

export default BottomBannerAd;
// ...existing code...