"use client";

import Image from "next/image";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* ================= NAVBAR ================= */}
      <header className="absolute top-0 left-0 z-50 w-full">
        <nav
          className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12"
          aria-label="Primary navigation"
        >
          {/* Left */}
          <span className="text-sm font-semibold tracking-widest">
            PORTFOLIO
          </span>

          {/* Center */}
          <ul className="hidden items-center gap-12 text-xs tracking-widest text-neutral-300 md:flex">
            <li>
              <a href="#home" className="transition hover:text-white">
                HOME
              </a>
            </li>
            <li>
              <a href="#about" className="transition hover:text-white">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#projects" className="transition hover:text-white">
                PROJECTS
              </a>
            </li>
            <li>
              <a href="#contact" className="transition hover:text-white">
                CONTACT
              </a>
            </li>
          </ul>

          {/* Right */}
          <button
            className="text-xl text-white md:hidden"
            aria-label="Open menu"
          >
            ☰
          </button>
        </nav>
      </header>

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative min-h-screen grid grid-cols-1 lg:grid-cols-3 items-center px-6 md:px-12"
      >
        {/* ---------- LEFT COLUMN ---------- */}
        <div className="relative z-10 flex flex-col gap-6">
          {/* Accent line */}
          <span className="h-24 w-px bg-white/40" aria-hidden />

          <h1 className="text-[clamp(3rem,8vw,6rem)] font-extrabold leading-none tracking-tight">
            REANNE <br />
            <span className="block">MARTINEZ</span>
          </h1>

          <p className="max-w-xs text-neutral-300">
            Aspiring Full Stack Developer | Game Developer
          </p>

          <div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-2 text-sm transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              Contact me
            </a>
          </div>
        </div>

        {/* ---------- CENTER COLUMN (PORTRAIT) ---------- */}
        <div className="pointer-events-none absolute inset-0 -z-10 lg:static lg:inset-auto lg:z-0">
          <div className="relative mx-auto h-full max-h-[90vh] w-full max-w-md lg:max-w-none">
            <Image
              src="/profile.png"
              alt="Portrait of Reanne Martinez"
              fill
              priority
              className="object-cover object-center grayscale opacity-70"
            />

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
          </div>
        </div>

        {/* ---------- RIGHT COLUMN ---------- */}
        <div className="relative z-10 hidden flex-col items-end gap-6 lg:flex">
          <div className="flex items-center gap-4 text-xs tracking-widest text-neutral-300">
            <span className="text-white font-semibold">01</span>
            <span>/ 05</span>

            <div className="ml-4 flex items-center gap-3">
              <button
                aria-label="Previous slide"
                className="transition hover:text-white"
              >
                ‹
              </button>
              <button
                aria-label="Next slide"
                className="transition hover:text-white"
              >
                ›
              </button>
            </div>
          </div>

          <div className="h-px w-24 bg-white/20" />

          <a
            href="#about"
            className="text-xs uppercase tracking-widest text-neutral-400 transition hover:text-white"
          >
            View Profile
          </a>

          <div className="h-px w-24 bg-white/20" />
        </div>

        {/* ---------- BOTTOM FLOATING CARD ---------- */}
        <div className="absolute bottom-8 left-1/2 z-20 w-[90%] max-w-5xl -translate-x-1/2 rounded-2xl bg-white/5 backdrop-blur-md px-6 py-6 md:px-10">
          <div className="grid gap-6 md:grid-cols-[1fr_2fr_2fr_auto] items-center">
            {/* Social links */}
            <div className="flex gap-6 text-xs uppercase tracking-widest text-neutral-300">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                GitHub
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                Facebook
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                LinkedIn
              </a>
            </div>

            {/* Bio */}
            <p className="text-sm text-neutral-300 leading-relaxed">
              I&apos;m an aspiring Full Stack Developer and Game Developer with
              a strong focus on building clean, efficient, and user-centered
              digital experiences.
            </p>

            {/* CTA */}
            <p className="text-sm text-neutral-300 leading-relaxed">
              Whether you&apos;d like to collaborate, ask a question, or just
              connect — feel free to reach out. I&apos;ll respond as soon as
              possible.
            </p>

            {/* Vertical social icons */}
            <div className="hidden flex-col items-center gap-4 md:flex">
              <a
                href="https://github.com/"
                aria-label="GitHub profile"
                className="h-9 w-9 rounded-full border border-white/20 grid place-items-center text-xs transition hover:bg-white/10"
              >
                G
              </a>
              <a
                href="https://facebook.com/"
                aria-label="Facebook profile"
                className="h-9 w-9 rounded-full border border-white/20 grid place-items-center text-xs transition hover:bg-white/10"
              >
                F
              </a>
              <a
                href="https://linkedin.com/"
                aria-label="LinkedIn profile"
                className="h-9 w-9 rounded-full border border-white/20 grid place-items-center text-xs transition hover:bg-white/10"
              >
                in
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
