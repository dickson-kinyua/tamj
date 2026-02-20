"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation(params: type) {
  const pathname = usePathname();
  return (
    <nav className=" h-16 flex items-center gap-10 px-4 uppercase">
      <Link
        href="/"
        className={
          pathname === "/" ? "text-white" : "text-gray-400 hover:text-gray-200"
        }
      >
        Home
      </Link>

      <Link
        href="/trade"
        className={
          pathname === "/trade"
            ? "text-white"
            : "text-gray-400 hover:text-gray-200"
        }
      >
        About
      </Link>
      <Link
        href="/about"
        className={
          pathname === "/about"
            ? "text-white"
            : "text-gray-400 hover:text-gray-200"
        }
      >
        Gallery
      </Link>
      <Link
        href="/achievement"
        className={
          pathname === "/achievement"
            ? "text-white"
            : "text-gray-400 hover:text-gray-200"
        }
      >
        Achievement
      </Link>
      <Link
        href="/contact"
        className={
          pathname === "/contact"
            ? "text-white"
            : "text-gray-400 hover:text-gray-200"
        }
      >
        Contact
      </Link>
    </nav>
  );
}
