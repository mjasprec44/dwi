"use client";

import HTMLFlipBook from "react-pageflip";
import { useState, useEffect } from "react";

export default function PageFlip() {
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
      flippingTime={1200}
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
      <div className="h-full w-full bg-red-500 text-black">First Page</div>
      <div className="h-full w-full bg-green-500 text-black">Second Page</div>
      <div className="h-full w-full bg-blue-500 text-black">Third Page</div>
      <div className="h-full w-full bg-yellow-500 text-black">Fourth Page</div>
      <div className="h-full w-full bg-purple-500 text-black">Fifth Page</div>
      <div className="h-full w-full bg-orange-500 text-black">Sixth Page</div>
      <div className="h-full w-full bg-pink-500 text-black">Seventh Page</div>
      <div className="h-full w-full bg-gray-500 text-black">Eighth Page</div>
    </HTMLFlipBook>
  );
}
