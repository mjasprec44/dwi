"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroBanner() {
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
            className="w-65 h-65"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/logo-transparent.png"
              alt="Logo"
              width={160}
              height={160}
              className="w-full h-full object-contain"
            />
          </motion.div>
          <motion.h1
            className="text-6xl font-normal text-white font-mea-culpa"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            We&apos;re getting married
          </motion.h1>
        </div>
      </div>
    </div>
  );
}
