"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import FloatingCard from "@/components/floatingcard";

/* ------------------------------- */
/* Section constants               */
/* ------------------------------- */
const SECTIONS = ["home", "about", "projects", "contact"] as const;
type SectionId = (typeof SECTIONS)[number];

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  const [active, setActive] = useState<SectionId>("home");

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

  const goTo = (id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const currentIndex = SECTIONS.indexOf(active);

  /* ------------------------------- */
  /* Scroll progress (hero line)     */
  /* ------------------------------- */
  useEffect(() => {
    const onScroll = () => {
      const total =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / total) * 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ------------------------------- */
  /* Active section observer         */
  /* ------------------------------- */
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
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* ================= NAVBAR ================= */}
      <Navbar activeSection={activeSection} />

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative min-h-screen grid grid-cols-1 lg:grid-cols-[1.15fr_1.4fr_0.85fr] items-center px-6 md:px-12"
      >
        {/* ---------- LEFT COLUMN ---------- */}
        <div className="relative z-10 flex items-start gap-10">
          {/* Accent + progress line */}
          <div className="relative flex flex-col items-center top-2 -translate-1/3">
            <span className="h-50 w-px bg-white/20" />
            <span
              className="absolute top-0 w-px bg-white transition-all"
              style={{ height: `${scrollProgress}%` }}
            />
          </div>

          {/* Name block */}
          <div className="flex flex-col gap-6 top-4 -translate-y-1/3">
            <h1 className="text-[clamp(3.2rem,6vw,6.4rem)] font-extrabold leading-none tracking-tight">
              REANNE <br />
              <span className="block ml-12 md:ml-24">MARTINEZ</span>
            </h1>

            <p className="max-w-xm text-neutral-300 text-sl font-semibold leading-relaxed">
              Software Engineering Student | Strong Communication & Technical Skills
            </p>
          </div>
        </div>

        {/* ---------- RIGHT CONTROL PANEL ---------- */}
        <div className="absolute right-48 top-1/3 z-30 hidden -translate-y-1/3 flex-col gap-10 lg:flex">
          {/* Counter + Arrows */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-6 text-5xl tracking-widest">
              <span className="text-white font-semibold">
                {String(currentIndex + 1).padStart(2, "0")}
              </span>
              <span className="text-neutral-500">/ {SECTIONS.length}</span>

              <div className="ml-6 flex items-center gap-4">
                <button
                  aria-label="Previous section"
                  onClick={() =>
                    goTo(SECTIONS[Math.max(currentIndex - 1, 0)])
                  }
                  className="text-8xl text-neutral-400 transition hover:text-white active:scale-90"
                >
                  ‹
                </button>
                <button
                  aria-label="Next section"
                  onClick={() =>
                    goTo(SECTIONS[Math.min(currentIndex + 1, SECTIONS.length - 1)])
                  }
                  className="text-8xl text-neutral-400 transition hover:text-white active:scale-90"
                >
                  ›
                </button>
              </div>
            </div>

            {/* Progress Line */}
            <div className="relative h-[4px] w-80 bg-white/20 overflow-hidden rounded-full">
              <div
                className="absolute left-0 top-0 h-full bg-white transition-all duration-500"
                style={{
                  width: `${((currentIndex + 1) / SECTIONS.length) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Buttons row */}
          <div className="flex items-center gap-6">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-2 text-xm tracking-wide transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              Contact me
            </a>
            <a
              href="https://www.canva.com/design/DAGzKZjBSAA/TUOxOy9U9QUN0KzJre8xsQ/edit?utm_content=DAGzKZjBSAA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold uppercase tracking-widest text-neutral-400 transition hover:text-white"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* ---------- RIGHT VERTICAL SECTION INDICATORS ---------- */}
        <div className="fixed right-8 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-4 lg:flex">
          {SECTIONS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              aria-label={`Go to ${id}`}
              className={`h-6 w-px transition-all ${
                activeSection === id
                  ? "bg-white"
                  : "bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        {/* ---------- BOTTOM FLOATING 3D GLASS CARD ---------- */}
        <FloatingCard />
      </section>

      {/* ================= PLACEHOLDER SECTIONS ================= */}
      <section id="about" className="min-h-screen" />
      <section id="projects" className="min-h-screen" />
      <section id="contact" className="min-h-screen" />
    </main>
  );
}
