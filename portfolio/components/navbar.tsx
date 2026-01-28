"use client";

import { useEffect, useState } from "react";

const SECTIONS = ["home", "about", "projects", "contact"] as const;
type SectionId = (typeof SECTIONS)[number];

export default function Navbar() {
  const [active, setActive] = useState<SectionId>("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id as SectionId);
          }
        });
      },
      { threshold: 0.6 }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled
          ? "backdrop-blur bg-black/60 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-16 h-16 flex items-center justify-between">
        <span className="text-sm tracking-widest font-semibold">
          PORTFOLIO
        </span>

        <ul className="hidden md:flex items-center gap-10 text-sm tracking-widest">
          {SECTIONS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`relative transition ${
                  active === id
                    ? "text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {id.toUpperCase()}
                {active === id && (
                  <span className="absolute -bottom-2 left-0 h-px w-full bg-white" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu icon placeholder */}
        <button className="md:hidden text-xl">☰</button>
      </nav>
    </header>
  );
}
