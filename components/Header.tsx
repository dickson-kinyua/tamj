"use client";

import { FaBars } from "react-icons/fa";
import MobileNavigationMenu from "@/components/MobileNavigationMenu";
import { useState } from "react";

export default function Header() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenu(false); // Close mobile menu after clicking
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "features", label: "Features" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="relative w-full flex items-center justify-between px-6 py-5 bg-[#0a0a0f] border-b border-[#ffffff15]">
      <h1 className="text-lg text-white/80 tracking-wide font-light">
        Tamj <span className="text-white font-normal">Markets</span>
      </h1>

      {menu && (
        <div className="fixed inset-0 top-0 left-0 w-full h-screen z-50">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={() => setMenu(false)}
          />

          {/* Menu */}
          <div className="relative h-full flex items-center justify-center">
            <MobileNavigationMenu />
          </div>

          {/* Close button - optional but nice */}
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white text-2xl z-50"
            onClick={() => setMenu(false)}
          >
            ✕
          </button>
        </div>
      )}

      <button
        onClick={toggleMenu}
        className="md:hidden text-white/70 hover:text-white transition-colors p-2"
        aria-label="Toggle menu"
      >
        <FaBars size={20} />
      </button>
    </nav>
  );
}
