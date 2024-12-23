"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const icons = [
    // Grid/Platform icon
    {
      src: "/b1.png",
      alt: "Grid Platform Icon"
    },
    // Analytics icon
    {
      src: "/b2.png",
      alt: "Analytics Icon"
    },
    // Robot icon
    {
      src: "/b3.png",
      alt: "Robot Icon"
    },
    // Robot icon
    {
      src: "/b4.png",
      alt: "Robot Icon"
    },
  ]

export function AnimatedBadge() {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIconIndex((prev) => (prev + 1) % icons.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative inline-flex items-center"
      style={{
        width: "225.15px",
        height: "65.87px",
        padding: "10.32px 20.65px 10.32px 10.32px",
        gap: "6.88px",
        borderRadius: "522.71px",
        backdropFilter: "blur(167.88px)",
        WebkitBackdropFilter: "blur(167.88px)",
      }}
    >
      {/* Border gradient using pseudo-element */}
      <div
        className="absolute  inset-0 -z-10 rounded-[522.71px]"
        style={{
          margin: "-0.86px",
          background:
            "linear-gradient(89.89deg, #FBCCE5 0.08%, rgba(255, 255, 255, 0.12) 147.04%)",
          borderRadius: "522.71px",
        }}
      />

      <div className="mr-3 rounded-full bg-white p-2">
      <div className="text-[#ED2C92] transition-all duration-300 h-5 w-5 relative">
          <Image
            src={icons[currentIconIndex].src}
            alt={icons[currentIconIndex].alt}
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col">
        <span className="text-[13px] font-semibold text-gray-800">
          Seamlessly integrated
        </span>
        <span className="text-sm text-gray-500">with all platform</span>
      </div>
    </div>
  );
}
