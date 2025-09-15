"use client";
import { useEffect } from "react";

export default function MiddleBannerAd() {
  useEffect(() => {
    const container = document.getElementById("adsterra-middle");
    if (container) container.innerHTML = "";

    const script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.innerHTML = `
      atOptions = {
        'key' : 'f2a45588814667537f6ec1b264b2b65f',
        'format' : 'iframe',
        'height' : 50,
        'width' : 320,
        'params' : {}
      };
    `;

    const script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.src = "//www.highperformanceformat.com/f2a45588814667537f6ec1b264b2b65f/invoke.js";

    if (container) {
      container.appendChild(script1);
      container.appendChild(script2);
    }
  }, []);

  return (
    <div className="flex justify-center">
      <div id="adsterra-middle" className="w-[320px] h-[50px]" />
    </div>
  );
}