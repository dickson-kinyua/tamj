"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/trade" },
    { name: "Gallery", href: "/about" },
    { name: "Achievement", href: "/achievement" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="z-30 flex flex-col gap-5 p-6 bg-white uppercase">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`transition-colors ${
            pathname === link.href
              ? "text-blue-700 font-semibold"
              : "text-gray-700 hover:text-blue-500"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
