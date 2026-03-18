"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function getTimeLeft(date: Date) {
  const diff = date.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function DateCountDown({ date }: { date: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const parsedDate = new Date(date);
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(parsedDate));

  useEffect(() => {
    const interval = setInterval(
      () => setTimeLeft(getTimeLeft(parsedDate)),
      1000,
    );
    return () => clearInterval(interval);
  }, [date]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.25, rootMargin: "0px" },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days, delay: 0.2 },
    { label: "Hours", value: timeLeft.hours, delay: 0.35 },
    { label: "Minutes", value: timeLeft.minutes, delay: 0.5 },
    { label: "Seconds", value: timeLeft.seconds, delay: 0.65 },
  ];

  return (
    <section ref={sectionRef} className="py-16 px-4 flex flex-col items-center">
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0, ease: "easeIn" }}
        className="text-lg uppercase tracking-widest text-gray-500 font-serif font-semibold"
      >
        Counting down to the big day
      </motion.p>
      <div className="flex gap-4">
        {units.map(({ label, value, delay }) => (
          <div key={label} className="flex flex-col items-center">
            <motion.span
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 0.5, delay, ease: "easeIn" }}
              className="text-5xl font-light tabular-nums text-green-950 font-serif"
            >
              {pad(value)}
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1.5, delay: delay + 0.1, ease: "easeIn" }}
              className="text-[10px] leading-3 uppercase tracking-wide text-gray-400 mt-2 font-mono font-semibold"
            >
              {label}
            </motion.span>
          </div>
        ))}
      </div>
    </section>
  );
}
