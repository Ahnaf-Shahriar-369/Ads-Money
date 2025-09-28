// ...existing code...
"use client";

import React, { useEffect } from "react";

type AdBannerTypes = {
  dataAdSlot: string;
  dataAdFormat: string;
  dataFullWidthResponsive: boolean;
};

type AdsByGoogleArray = unknown[];

declare global {
  interface Window {
    adsbygoogle?: AdsByGoogleArray;
  }
}

const AdBanner: React.FC<AdBannerTypes> = ({
  dataAdSlot,
  dataAdFormat,
  dataFullWidthResponsive,
}) => {
  useEffect(() => {
    try {
      const ads = window.adsbygoogle ?? [];
      window.adsbygoogle = ads;
      ads.push({});
    } catch (err: unknown) {
      if (err instanceof Error) {
        // harmless debug logging
        // eslint-disable-next-line no-console
        console.log(err.message);
      } else {
        // eslint-disable-next-line no-console
        console.log(String(err));
      }
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-9822891837132664"
      data-ad-slot={dataAdSlot}
      data-ad-format={dataAdFormat}
      data-full-width-responsive={dataFullWidthResponsive ? "true" : "false"}
    />
  );
};

export default AdBanner;
// ...existing code...