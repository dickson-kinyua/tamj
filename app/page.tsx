import FirstCaption from "@/components/FirstCaption";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center text-gray-400 font-serif tracking-wider"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Full screen content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between   p-4">
        <div>
          <Header />

          <FirstCaption />
        </div>

        {/* Bottom navigation */}
        <Navigation />
      </div>
    </main>
  );
}
