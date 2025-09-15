"use client";
import { useEffect } from "react";

export default function BottomBannerAd() {
  useEffect(() => {
    const container = document.getElementById("adsterra-bottom");
    if (container) container.innerHTML = "";

    const script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.innerHTML = `
      atOptions = {
        'key' : 'd8cba7ef26b26fb852cf6f01edcf353a',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
      };
    `;

    const script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.src = "//www.highperformanceformat.com/d8cba7ef26b26fb852cf6f01edcf353a/invoke.js";

    if (container) {
      container.appendChild(script1);
      container.appendChild(script2);
    }
  }, []);

  return (
    <div className="flex justify-center">
      <div id="adsterra-bottom" className="w-[728px] h-[90px]" />
    </div>
  );
}