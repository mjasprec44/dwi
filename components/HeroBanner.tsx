"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePageFlipVisible } from "@/components/PageFlip";

export default function HeroBanner() {
  const isVisible = usePageFlipVisible();
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/hero-1.jpg"
        alt="Hero Banner"
        fill
        className="absolute inset-0 object-cover"
      />

      <div className="relative z-10 w-full h-full bg-black/20">
        <div className="absolute inset-0 flex flex-col items-center justify-start py-36 gap-10">
          <motion.div
            className="w-75 h-75"
            initial={{ opacity: 0, y: 100 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/logo-transparent.png"
              alt="Logo"
              width={180}
              height={180}
              className="w-full h-full object-contain"
            />
          </motion.div>
          <motion.h1
            className="text-6xl font-normal text-white font-mea-culpa"
            initial={{ opacity: 0, y: 100 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            We&apos;re getting married
          </motion.h1>
        </div>
      </div>
    </div>
  );
}
