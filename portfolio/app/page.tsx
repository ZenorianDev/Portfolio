// app/page.tsx
"use client";

import { useState, useEffect, useMemo } from "react"; 
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/navbar";
import About from "@/components/about";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

const SECTION_ORDER = ["home", "about", "projects", "contact"] as const;
type SectionId = (typeof SECTION_ORDER)[number];


const SECTION_BG: Record<SectionId, string> = {
home: "radial-gradient(1200px 800px at 50% -10%, #111 0%, #0a0a0a 40%, #000 100%)",
about: "radial-gradient(1200px 800px at 50% -10%, #1a1a1a 0%, #0d0d0d 45%, #000 100%)",
projects: "radial-gradient(1200px 800px at 50% -10%, #202020 0%, #0e0e0e 45%, #000 100%)",
contact: "radial-gradient(1200px 800px at 50% -10%, #151515 0%, #0b0b0b 45%, #000 100%)",
};

export default function HomePage() {
  const [active, setActive] = useState<SectionId>("home");
  const [showSide, setShowSide] = useState(false);

  // Track section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id as SectionId);
      },
      { threshold: [0.25, 0.5, 0.75] }
    );

    SECTION_ORDER.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Toggle SideNav on scroll
  useEffect(() => {
    const onScroll = () =>
      setShowSide(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bg = useMemo(() => SECTION_BG[active], [active]);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Animated background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={bg}
          className="fixed inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{ background: bg }}
        />
      </AnimatePresence>

      {/* Navbar */}
      <Navbar active={active} showSide={showSide} />

      {/* Content */}
      <div className="mx-auto max-w-6xl px-4 md:pl-64">
        <section
          id="home"
          className="min-h-[90vh] grid place-items-center py-24 text-center"
        >
          <div>
            <h1 className="mb-4 text-5xl font-bold text-white">Your Name</h1>
            <p className="mb-6 text-neutral-300">
              Brief professional intro goes here.
            </p>
            <div className="flex justify-center gap-3">
              <a
                href="#projects"
                className="rounded-full bg-white px-5 py-2 text-black hover:bg-neutral-200"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/20 px-5 py-2 text-white hover:bg-white/5"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}