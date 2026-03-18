"use client";

import HTMLFlipBook from "react-pageflip";
import {
  useState,
  useRef,
  useSyncExternalStore,
  createContext,
  useContext,
} from "react";
import Image from "next/image";

const PageFlipContext = createContext(false);

const VIEWPORT_DEFAULT = { width: 390, height: 844 };

let viewportCache: { width: number; height: number } | null = null;

function subscribeViewport(cb: () => void) {
  window.addEventListener("resize", cb);
  return () => window.removeEventListener("resize", cb);
}

function getViewportSnapshot() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  if (
    viewportCache &&
    viewportCache.width === width &&
    viewportCache.height === height
  ) {
    return viewportCache;
  }
  viewportCache = { width, height };
  return viewportCache;
}

export function usePageFlipVisible() {
  return useContext(PageFlipContext);
}

export default function PageFlip({ children }: { children: React.ReactNode }) {
  const dimensions = useSyncExternalStore(
    subscribeViewport,
    getViewportSnapshot,
    () => VIEWPORT_DEFAULT,
  );
  const [currentPage, setCurrentPage] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const isMainPageVisible = currentPage === 1;

  function startAudio() {
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.play();
    }
  }

  return (
    <PageFlipContext.Provider value={isMainPageVisible}>
      <audio ref={audioRef} src="/yellow.mp3" loop preload="none" />
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
        <div className="relative">
          <div
            className="absolute inset-0 cursor-pointer overflow-hidden bg-[#f5f2eb]"
            onClick={startAudio}
          >
            <Image
              src="/ron-pam-book-cover.png"
              alt="Wedding invitation cover"
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
          </div>
        </div>
        {children}
      </HTMLFlipBook>
    </PageFlipContext.Provider>
  );
}
