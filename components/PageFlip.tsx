"use client";

import HTMLFlipBook from "react-pageflip";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function PageFlip({ children }: { children: React.ReactNode }) {
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  useEffect(() => {
    function update() {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <HTMLFlipBook
      width={dimensions.width}
      height={dimensions.height}
      className="bg-white"
      style={{ width: "100vw", minHeight: "100vh", maxHeight: "100vh" }}
      startPage={0}
      size="stretch"
      minWidth={300}
      maxWidth={3000}
      minHeight={300}
      maxHeight={3000}
      drawShadow={true}
      flippingTime={1800}
      usePortrait={true}
      startZIndex={0}
      autoSize={true}
      maxShadowOpacity={0.5}
      showCover={false}
      mobileScrollSupport={true}
      clickEventForward={true}
      useMouseEvents={true}
      swipeDistance={30}
      showPageCorners={true}
      disableFlipByClick={false}
    >
      <div className="h-full w-full flex items-center justify-center py-36 bg-green-950">
        <div className="mx-auto w-40 h-40  rounded-full overflow-hidden">
          <Image
            src="/logo-square.jpg"
            alt="Logo"
            width={160}
            height={160}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {children}
    </HTMLFlipBook>
  );
}
