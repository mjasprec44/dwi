"use client";

import HTMLFlipBook from "react-pageflip";
import { useState, useEffect, useRef, createContext, useContext } from "react";
import Image from "next/image";

const PageFlipContext = createContext(false);

export function usePageFlipVisible() {
  return useContext(PageFlipContext);
}

export default function PageFlip({ children }: { children: React.ReactNode }) {
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const [currentPage, setCurrentPage] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const isMainPageVisible = currentPage === 1;

  useEffect(() => {
    function update() {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  function startAudio() {
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.play();
    }
  }

  return (
    <PageFlipContext.Provider value={isMainPageVisible}>
      <audio ref={audioRef} src="/audio.mp3" loop />
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
        onFlip={(e) => {
          setCurrentPage(e.data);
          startAudio();
        }}
      >
        <div
          className="h-full w-full flex items-center justify-center py-36 bg-[#0a2f20]"
          onClick={startAudio}
        >
          <div className="mx-auto w-65 h-65 ">
            <Image
              src="/logo-square.jpg"
              alt="Logo"
              width={140}
              height={140}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        {children}
      </HTMLFlipBook>
    </PageFlipContext.Provider>
  );
}
