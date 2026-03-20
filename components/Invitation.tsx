export default function Invitation() {
  return (
    <section
      className="w-full px-6 py-20"
      aria-labelledby="invitation-heading"
    >
      <div className="mx-auto flex max-w-lg flex-col items-center text-center">
        {/* Section label — small caps, restrained */}
        <p
          id="invitation-heading"
          className="font-lexend-peta mb-8 text-[11px] font-medium uppercase tracking-[0.35em] text-green-950/55"
        >
          Invitation
        </p>

        {/* Icon — proportional, not dominating */}
        <div
          className="mb-10 flex h-12 w-12 items-center justify-center rounded-full border border-green-950/10 bg-green-950/3"
          aria-hidden
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="h-6 w-6 text-green-950/40"
          >
            <path d="M4 7h16v10H4z" />
            <path d="M4 7l8 6 8-6" />
          </svg>
        </div>

        {/* 1. Host line — leads the eye */}
        <p className="font-lexend-peta mb-10 max-w-sm text-[15px] font-normal leading-[1.75] text-gray-600">
          Together with their families,
        </p>

        {/* 2. Names — primary focal point */}
        <h2 className="font-mea-culpa mb-10 text-5xl font-normal leading-snug tracking-wide text-green-950 sm:text-6xl">
          Ron &amp; Pam
        </h2>

        {/* 3–4. Formal lines — one visual block, comfortable measure */}
        <div className="font-lexend-peta space-y-3 text-[15px] font-normal leading-[1.75] text-gray-600">
          <p>request the honor of your presence</p>
          <p>as they celebrate their marriage</p>
        </div>

        {/* Optional subtle divider — closes the section */}
        <div
          className="mt-14 h-px w-16 bg-linear-to-r from-transparent via-green-950/20 to-transparent"
          aria-hidden
        />
      </div>
    </section>
  );
}
