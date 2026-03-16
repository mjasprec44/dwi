"use client";

const CEREMONY = {
  name: "Church of the Holy Spirit",
  address: "Brgy. San Rafael, Bacolod City",
  query: "Church of the Holy Spirit Brgy San Rafael Bacolod City",
};

function MapEmbed({ query, title }: { query: string; title: string }) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
  return (
    <div className="flex flex-col gap-2">
      <div className="aspect-video w-full overflow-hidden rounded-lg border border-gray-200">
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
  return (
    <section className="w-full py-16">
      <h2 className="mb-4 text-center text-2xl font-semibold text-green-950 font-serif">
        {CEREMONY.name}
      </h2>
      <div className="mx-auto flex max-w-4xl flex-col gap-4">
        <MapEmbed query={CEREMONY.query} title={CEREMONY.name} />
        <p className="text-center text-lg text-gray-600 font-serif">
          {CEREMONY.address}
        </p>
      </div>
    </section>
  );
}
