"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting) setLoadVideo(true);
      },
      { threshold: 0.15, rootMargin: "120px" },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full">
      <div className="relative flex h-screen w-full flex-col justify-center overflow-hidden bg-[#0a2f20]">
        {loadVideo ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/video-2.mp4" type="video/mp4" />
          </video>
        ) : null}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 gap-12 flex flex-col items-center justify-center p-4"
        >
          <div className="font-mea-culpa flex flex-wrap items-center justify-center gap-2 text-center">
            <h3 className="text-6xl tracking-wide leading-relaxed font-thin text-white">
              Ron Jerickson Santos
            </h3>
            <br />
            <p className="text-5xl font-thin text-white">&amp;</p>
            <br />
            <h3 className="text-6xl tracking-wide leading-relaxed font-thin text-white">
              Pamela Bianca Villacorte
            </h3>
          </div>
          <div className="gap-2 flex flex-col items-center justify-center text-white font-serif">
            <p className="font-bold text-2xl">March 26, 2026 @ 10:00 AM</p>
            <p className=" text-white/90 text-lg text-center">
              At the Church of the Holy Spirit, Brgy. San Rafael, Bacolod City
            </p>
            <p className=" text-white/90 text-lg text-center">
              Followed by a reception at the Bacolod City Sports Complex
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
