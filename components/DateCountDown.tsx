"use client";

import { useEffect, useState } from "react";

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
  const parsedDate = new Date(date);
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(parsedDate));

  useEffect(() => {
    const interval = setInterval(
      () => setTimeLeft(getTimeLeft(parsedDate)),
      1000,
    );
    return () => clearInterval(interval);
  }, [date]);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="py-16 px-4 flex flex-col items-center">
      <p className="text-lg uppercase tracking-widest text-gray-500 font-serif font-semibold">
        Counting down to the big day
      </p>
      <div className="flex gap-4">
        {units.map(({ label, value }) => (
          <div key={label} className="flex flex-col items-center">
            <span className="text-5xl font-light tabular-nums text-green-950 font-serif">
              {pad(value)}
            </span>
            <span className="text-[10px] leading-3 uppercase tracking-wide text-gray-400 mt-2 font-mono font-semibold">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
