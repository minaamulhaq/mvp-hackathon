import HeroSection from "@/component/Applicaton/HeroSection";
import EventCarousel from "@/component/Applicaton/EventCarousel";

export default function Home() {
  return (
    <main className="flex flex-col bg-[#050505] w-full overflow-x-hidden">

      {/* Hero already has h-screen */}
      <HeroSection />

      {/* Normal flowing section */}
      <section className="w-full py-24 px-6">
        <EventCarousel />
      </section>

    </main>
  );
}
