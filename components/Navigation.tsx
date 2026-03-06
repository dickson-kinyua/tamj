"use client";

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = "" }: NavigationProps) {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "gallery", label: "Gallery" },
    { id: "achievement", label: "Achievement" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`hidden sm:flex items-center gap-8 lg:gap-10 px-4 uppercase ${className}`}
    >
      {navLinks.map((link) => (
        <button
          key={link.id}
          onClick={() => scrollToSection(link.id)}
          className="text-sm lg:text-base font-medium tracking-wide text-gray-400 hover:text-white transition-colors duration-300"
        >
          {link.label}
        </button>
      ))}
    </nav>
  );
}
