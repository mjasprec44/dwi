"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePageFlipVisible } from "./PageFlip";

export default function HeroBanner() {
  const isVisible = usePageFlipVisible();
  return (
    <div className="relative w-full h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        aria-label="Hero video"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 w-full h-full bg-black/20">
        <div className="absolute inset-0 flex flex-col items-center justify-start py-36 gap-10">
          <motion.div
            className="relative h-[380px] w-[380px] shrink-0"
            initial={{ opacity: 0, y: 100 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
          >
            <Image
              src="/logo-transparent.png"
              alt="Logo"
              fill
              className="object-cover object-center"
              sizes="380px"
            />
          </motion.div>
          <motion.h1
            className="text-6xl font-normal text-white font-mea-culpa"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 1.5, delay: 0.15, ease: "easeIn" }}
          >
            We&apos;re getting married!
          </motion.h1>
        </div>
      </div>
    </div>
  );
}
