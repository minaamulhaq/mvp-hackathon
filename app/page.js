import HeroSection from "@/component/Applicaton/HeroSection";
import EventCarousel from "@/component/Applicaton/EventCarousel";
import Footer from "@/component/Applicaton/Footer"; // Assuming you have the Footer now

export default function Home() {
  return (
    /* 1. Use 'min-h-screen' to ensure the background covers the whole page */
    /* 2. 'flex-col' ensures components stack vertically without overlapping */
    <main className="flex flex-col min-h-screen bg-[#050505] w-full overflow-x-hidden">

      {/* Hero Section: Usually occupies 100vh */}
      <section className="w-full min-h-screen">
        <HeroSection />
      </section>

      <section className="w-full py-2 px-32">
        <EventCarousel />
      </section>
      {/* Additional sections can go here (Tasks, Features, etc.) */}

      {/* Footer at the very bottom */}

    </main>
  );
}