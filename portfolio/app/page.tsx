"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/* ------------------------------- */
/* Section constants               */
/* ------------------------------- */
const SECTIONS = ["home", "about", "projects", "contact"] as const;
type SectionId = (typeof SECTIONS)[number];

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const [scrollProgress, setScrollProgress] = useState(0);

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
      <header className="absolute top-0 left-0 z-50 w-full">
        <nav
          className="mx-auto flex h-20 max-w-[92rem] items-center justify-between px-6 md:px-12"
          aria-label="Primary navigation"
        >
          {/* Left */}
          <span className="text-sm font-semibold tracking-widest relative -left-6">
            PORTFOLIO
          </span>

          {/* Center */}
          <ul className="hidden md:flex items-center gap-14 text-xs tracking-widest text-neutral-300">
            {SECTIONS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`transition ${
                    activeSection === id
                      ? "text-white"
                      : "hover:text-white"
                  }`}
                >
                  {id.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>

          {/* Right */}
          <button
            aria-label="Open menu"
            className="text-xl md:hidden"
          >
            ☰
          </button>
        </nav>
      </header>

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative min-h-screen grid grid-cols-1 lg:grid-cols-[1.15fr_1.4fr_0.85fr] items-center px-6 md:px-12"
      >
        {/* ---------- LEFT COLUMN ---------- */}
        <div className="relative z-10 flex items-start gap-10">
          {/* Accent + progress line */}
          <div className="relative flex flex-col items-center">
            <span className="h-40 w-px bg-white/20" />
            <span
              className="absolute top-0 w-px bg-white transition-all"
              style={{ height: `${scrollProgress}%` }}
            />
          </div>

          {/* Name block */}
          <div className="flex flex-col gap-6">
            <h1 className="text-[clamp(3.2rem,7vw,6.4rem)] font-extrabold leading-none tracking-tight">
              REANNE <br />
              <span className="block ml-14 md:ml-24">MARTINEZ</span>
            </h1>

            <p className="max-w-xs text-neutral-300 text-sm leading-relaxed">
              Aspiring Full Stack Developer <br />
              & Game Developer
            </p>

            <a
              href="#contact"
              className="mt-2 inline-flex w-fit items-center justify-center rounded-full border border-white/30 px-7 py-2 text-xs tracking-wide transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              Contact me
            </a>
          </div>
        </div>

        {/* ---------- CENTER COLUMN (PORTRAIT) ---------- */}
        <div className="pointer-events-none absolute inset-0 -z-10 lg:static lg:inset-auto lg:z-0">
          <div className="relative mx-auto h-full max-h-[88vh] w-full max-w-[420px] lg:max-w-none">
            <Image
              src="/portrait.png"
              alt="Portrait of Reanne Martinez"
              fill
              priority
              className="object-cover object-center grayscale opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
          </div>
        </div>

        {/* ---------- RIGHT COLUMN ---------- */}
        <div className="relative z-10 hidden flex-col items-start gap-10 pl-12 lg:flex">
          {/* Slider */}
          <div className="flex items-center gap-6 text-sm tracking-widest text-neutral-300">
            <span className="text-white font-semibold">01</span>
            <span>/ 04</span>

            <div className="ml-4 flex items-center gap-4">
              <button
                aria-label="Previous slide"
                className="text-lg transition hover:text-white"
              >
                ‹
              </button>
              <button
                aria-label="Next slide"
                className="text-lg transition hover:text-white"
              >
                ›
              </button>
            </div>
          </div>

          <div className="h-px w-32 bg-white/20" />

          <a
            href="#about"
            className="text-sm uppercase tracking-widest text-neutral-400 transition hover:text-white"
          >
            View Profile
          </a>

          <div className="h-px w-32 bg-white/20" />
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

        {/* ---------- BOTTOM FLOATING CARD ---------- */}
        <div className="absolute bottom-10 left-1/2 z-30 w-[92%] max-w-6xl -translate-x-1/2 rounded-2xl bg-white/5 backdrop-blur-md px-8 py-6">
          <div className="grid items-start gap-6 md:grid-cols-[1.2fr_2.2fr_2.2fr_auto]">
            {/* SOCIAL LABEL + LINKS */}
            <div className="flex flex-col gap-3 text-xs uppercase tracking-widest text-neutral-300">
              <span className="text-white">Social</span>
              <div className="flex gap-6">
                <a
                  href="https://github.com/"
                  className="transition hover:text-white"
                >
                  GitHub
                </a>
                <a
                  href="https://facebook.com/"
                  className="transition hover:text-white"
                >
                  Facebook
                </a>
                <a
                  href="https://linkedin.com/"
                  className="transition hover:text-white"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* BIO */}
            <p className="text-sm leading-relaxed text-neutral-300">
              I&apos;m an aspiring Full Stack Developer and Game Developer
              focused on crafting clean, scalable, and user-centered digital
              experiences.
            </p>

            {/* CTA */}
            <p className="text-sm leading-relaxed text-neutral-300">
              Let&apos;s collaborate, build something impactful, or simply
              connect — I&apos;m always open to new opportunities.
            </p>

            {/* ICON COLUMN */}
            <div className="hidden flex-col items-center gap-4 md:flex">
              <a
                href="https://github.com/"
                aria-label="GitHub profile"
                className="h-10 w-10 rounded-full border border-white/20 grid place-items-center transition hover:bg-white/10"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.95.58.11.79-.25.79-.56v-2.04c-3.2.7-3.87-1.55-3.87-1.55-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.2-3.11-.12-.3-.52-1.52.11-3.17 0 0 .97-.31 3.18 1.19.92-.26 1.9-.38 2.88-.38s1.96.13 2.88.38c2.21-1.5 3.18-1.19 3.18-1.19.63 1.65.23 2.87.11 3.17.75.81 1.2 1.85 1.2 3.11 0 4.43-2.69 5.41-5.25 5.7.41.35.77 1.04.77 2.1v3.12c0 .31.21.68.8.56 4.57-1.53 7.86-5.85 7.86-10.95C23.5 5.74 18.27.5 12 .5z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com/"
                aria-label="LinkedIn profile"
                className="h-10 w-10 rounded-full border border-white/20 grid place-items-center transition hover:bg-white/10"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M4.98 3.5C4.98 5 3.8 6.18 2.3 6.18S-.38 5-.38 3.5C-.38 2 1.8.82 2.3.82s2.68 1.18 2.68 2.68zM.5 8.98h3.6V23.5H.5V8.98zm7.5 0h3.45v2h.05c.48-.9 1.65-1.85 3.4-1.85 3.63 0 4.3 2.38 4.3 5.48v6.88h-3.6v-6.1c0-1.46-.03-3.33-2.03-3.33-2.03 0-2.34 1.59-2.34 3.23v6.2H8V8.98z" />
                </svg>
              </a>

              <a
                href="https://facebook.com/"
                aria-label="Facebook profile"
                className="h-10 w-10 rounded-full border border-white/20 grid place-items-center transition hover:bg-white/10"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M22.68 0H1.32C.59 0 0 .6 0 1.34v21.32C0 23.4.59 24 1.32 24h11.49v-9.29H9.69v-3.62h3.12V8.41c0-3.1 1.89-4.79 4.65-4.79 1.32 0 2.45.1 2.78.14v3.22l-1.91.001c-1.5 0-1.79.71-1.79 1.76v2.31h3.58l-.47 3.62h-3.11V24h6.1c.73 0 1.32-.6 1.32-1.34V1.34C24 .6 23.41 0 22.68 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PLACEHOLDER SECTIONS ================= */}
      <section id="about" className="min-h-screen" />
      <section id="projects" className="min-h-screen" />
      <section id="contact" className="min-h-screen" />
    </main>
  );
}
