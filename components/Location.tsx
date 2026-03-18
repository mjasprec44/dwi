"use client";

import { useRef, useState, useEffect } from "react";

const CEREMONY = {
  name: "Church of the Holy Spirit",
  address: "Brgy. San Rafael, Bacolod City",
  query: "Church of the Holy Spirit Brgy San Rafael Bacolod City",
};

function MapEmbed({ query, title }: { query: string; title: string }) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
  return (
    <div className="flex flex-col gap-2">
      <div className="aspect-video h-[450px] w-full overflow-hidden rounded-lg border border-gray-200">
        <iframe
          title={title}
          src={src}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full min-h-[240px] w-full"
        />
      </div>
    </div>
  );
}

export default function Location() {
  const ref = useRef<HTMLElement>(null);
  const [showMaps, setShowMaps] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShowMaps(true);
      },
      { rootMargin: "100px", threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="w-full py-16">
      <h2 className="mb-4 text-center font-serif text-2xl font-semibold text-green-950">
        {CEREMONY.name}
      </h2>
      <div className="mx-auto flex max-w-4xl flex-col gap-4">
        {showMaps ? (
          <MapEmbed query={CEREMONY.query} title={CEREMONY.name} />
        ) : (
          <div
            className="flex h-[300px] w-full items-center justify-center rounded-lg border border-dashed border-gray-200 bg-gray-50 text-sm text-gray-400"
            aria-hidden
          >
            Map loading…
          </div>
        )}
        <p className="text-center font-serif text-lg text-gray-600">
          {CEREMONY.address}
        </p>
      </div>
    </section>
  );
}
