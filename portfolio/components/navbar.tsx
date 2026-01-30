"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const SECTIONS = ["home", "about", "projects", "contact"] as const;
type SectionId = (typeof SECTIONS)[number];

export default function Navbar({
  activeSection,
}: {
  activeSection: SectionId;
}) {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;

      // Background blur after scroll
      setIsScrolled(currentScrollY > 10);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
        ${isScrolled ? "bg-black/60 backdrop-blur-xl" : "bg-transparent"}
      `}
    >
      <nav
        className="mx-auto flex h-20 max-w-[92rem] items-center justify-between px-6 md:px-12"
        aria-label="Primary navigation"
      >
        {/* Left */}
        <Link
          href="/#home"
          className="text-xl font-semibold tracking-widest relative -left-6"
        >
          PORTFOLIO
        </Link>

        {/* Center (Desktop) */}
        <ul className="hidden md:flex items-center gap-14 text-xm font-semibold tracking-widest text-neutral-300">
          {SECTIONS.map((id) => (
            <li key={id}>
              <Link
                href={`/#${id}`}
                className={`transition ${
                  activeSection === id
                    ? "text-white"
                    : "hover:text-white"
                }`}
              >
                {id.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right (Mobile button) */}
        <button
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-[60] text-xl md:hidden transition hover:text-white"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* ================= MOBILE OVERLAY MENU ================= */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-opacity duration-300 md:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex h-full flex-col items-center justify-center gap-10 text-lg font-semibold tracking-widest text-neutral-300">
          {SECTIONS.map((id) => (
            <li key={id}>
              <Link
                href={`/#${id}`}
                onClick={() => setOpen(false)}
                className="transition hover:text-white"
              >
                {id.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}