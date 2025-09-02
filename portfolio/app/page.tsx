// app/page.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Homepage from "@/components/homepage";
import About from "@/components/about";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Page() {
  const [activeSection, setActiveSection] = useState("homepage");
  const [navMode, setNavMode] = useState<"top" | "side">("top");

  // Watch which section is in view
  useEffect(() => {
    const sections = document.querySelectorAll("section[data-observe]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.55 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Toggle navbar layout on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setNavMode("side");
      } else {
        setNavMode("top");
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section-based background colors
  const bgColors: Record<string, string> = {
    homepage: "from-gray-950 via-black to-zinc-900",
    about: "from-indigo-950 via-indigo-900 to-purple-900",
    projects: "from-emerald-950 via-emerald-900 to-green-900",
    contact: "from-fuchsia-950 via-pink-900 to-rose-900",
  };

  return (
    <div className="relative min-h-screen text-zinc-100">
      {/* Background transition */}
      <motion.div
        key={activeSection}
        aria-hidden
        className={`pointer-events-none fixed inset-0 -z-10 bg-gradient-to-br ${bgColors[activeSection]}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      />

      <Navbar activeSection={activeSection} navMode={navMode} />

      <main className="mx-auto max-w-7xl">
        <section
          id="homepage"
          data-observe
          className="min-h-screen px-6 flex items-center justify-center"
        >
          <Homepage />
        </section>

        <section
          id="about"
          data-observe
          className="min-h-screen px-6 flex items-center justify-center"
        >
          <About />
        </section>

        <section
          id="projects"
          data-observe
          className="min-h-screen px-6 flex items-center justify-center"
        >
          <Projects />
        </section>

        <section
          id="contact"
          data-observe
          className="min-h-screen px-6 flex items-center justify-center"
        >
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
