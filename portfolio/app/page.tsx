// app/page.tsx
"use client";

import { useState, useEffect, useMemo } from "react"; // ✅ added useMemo
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Homepage from "@/components/homepage";
import About from "@/components/about";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Page() {
  const [activeSection, setActiveSection] = useState<string>("homepage");
  const [navMode, setNavMode] = useState<"top" | "side">("top");

  // Intersection Observer
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.56 }
    );

    document.querySelectorAll("section[data-observe]").forEach((s) =>
      obs.observe(s)
    );
    return () => obs.disconnect();
  }, []);

  // Toggle navbar
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) setNavMode("side");
      else setNavMode("top");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bg = useMemo<Record<string, string>>(
    () => ({
      homepage: "from-gray-950 via-black to-zinc-900",
      about: "from-indigo-950 via-indigo-900 to-purple-900",
      projects: "from-emerald-950 via-emerald-900 to-green-900",
      contact: "from-fuchsia-950 via-pink-900 to-rose-900",
    }),
    []
  );

  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth text-zinc-100">
      {/* animated background */}
      <motion.div
        key={activeSection}
        aria-hidden
        className={`pointer-events-none fixed inset-0 -z-10 bg-gradient-to-br ${bg[activeSection]}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      />

      <Navbar activeSection={activeSection} navMode={navMode} />

      <main className="mx-auto max-w-7xl">
        <section
          id="homepage"
          data-observe
          className="min-h-screen snap-start flex items-center justify-center px-6"
        >
          <Homepage />
        </section>

        <section
          id="about"
          data-observe
          className="min-h-screen snap-start flex items-center justify-center px-6"
        >
          <About />
        </section>

        <section
          id="projects"
          data-observe
          className="min-h-screen snap-start flex items-center justify-center px-6"
        >
          <Projects />
        </section>

        <section
          id="contact"
          data-observe
          className="min-h-screen snap-start flex items-center justify-center px-6"
        >
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
