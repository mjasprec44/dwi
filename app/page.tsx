import HeroBanner from "@/components/HeroBanner";
import DateCountDown from "@/components/DateCountDown";
import PageFlip from "@/components/PageFlip";

function MainPage() {
  return (
    <div className="w-full bg-white overflow-y-auto">
      {/* Hero Banner */}
      <HeroBanner />

      {/* Count Down Timer */}
      <DateCountDown date="March 26, 2026" />

      {/* Gallery */}
      {/* Google Map */}
      {/* Food & Drink Menu */}
      {/* Dress Code */}
      {/* Sponsors */}
      {/* Entourage */}
      {/* Gifts */}
      {/* RSVP Form */}
      {/* Footer */}
    </div>
  );
}

export default function Home() {
  return (
    <PageFlip>
      <MainPage />
    </PageFlip>
  );
}
