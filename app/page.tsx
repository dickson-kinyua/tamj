import About from "@/components/About";
import Achievement from "@/components/Achievements";
import Contact from "@/components/Contact";
import FirstCaption from "@/components/FirstCaption";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className=" text-gray-100! font-serif tracking-wider z-20">
      <div
        className="relative bg-cover bg-center z-10 min-h-screen flex flex-col justify-between p-4"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="z-30 h-[95vh] flex flex-col justify-between sm:justify-between">
          <Header />

          <FirstCaption />
          <Navigation />
        </div>

        {/* Bottom navigation */}
      </div>
      <div className="text-gray-700">
        <About />
        <Achievement />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
