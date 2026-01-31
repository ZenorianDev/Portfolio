"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";

const SECTIONS = ["home", "about", "projects", "contact"] as const;
type SectionId = (typeof SECTIONS)[number];

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
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
    <main className="relative bg-black text-white">
      <Navbar activeSection={activeSection} />

      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}