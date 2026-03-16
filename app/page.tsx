import HeroBanner from "@/components/HeroBanner";
import DateCountDown from "@/components/DateCountDown";
import PageFlip from "@/components/PageFlip";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";

function MainPage() {
  return (
    <div className="w-full bg-white overflow-y-auto">
      {/* Hero Banner */}
      <HeroBanner />

      {/* Count Down Timer */}
      <DateCountDown date="November 27, 2026" />

      {/* Gallery */}
      <Gallery />
      {/* Location / Google Map */}
      <Location />
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
