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

      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="relative min-h-screen px-6 md:px-12 py-32"
      >
        <div className="mx-auto max-w-7xl flex flex-col gap-12">
          {/* ---------- HEADER ---------- */}
          <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-[0_25px_80px_rgba(0,0,0,0.7)]">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
              About Me
            </h2>
            <p className="mt-4 max-w-4xl text-white/70 leading-relaxed">
              I aspire to become the best developer and designer I can possibly be.
              With a focus on logic, creativity, and growth, I strive to build
              impactful projects and continuously improve my skills. My mission is
              to create intuitive solutions that make a meaningful difference in the
              digital world.
            </p>

            {/* subtle divider line */}
            <span className="absolute bottom-0 left-8 right-8 h-px bg-white/10" />
          </div>

          {/* ---------- GRID ROW ---------- */}
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.2fr_0.9fr] gap-8">
            {/* ================= LEFT: PERSONAL BACKGROUND ================= */}
            <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_25px_80px_rgba(0,0,0,0.7)] flex flex-col gap-6">
              {/* Title */}
              <div className="flex items-center justify-between">
                <h3 className="text-sm uppercase tracking-widest text-white/80">
                  Personal Background
                </h3>
                <span className="text-xs text-white/40">LEVEL 6</span>
              </div>

              {/* Avatar */}
              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/40 h-48 flex items-center justify-center">
                <span className="text-white/30 text-sm">Profile Image</span>
              </div>

              {/* Info */}
              <div className="flex flex-col gap-3 text-sm text-white/70">
                <div className="flex justify-between">
                  <span className="text-white/40">Age</span>
                  <span>—</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Birthday</span>
                  <span>—</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Location</span>
                  <span>Philippines</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Email</span>
                  <span>reanne@email.com</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Role</span>
                  <span>Web Developer</span>
                </div>
              </div>
            </div>

            {/* ================= CENTER: CORE ATTRIBUTES ================= */}
            <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_25px_80px_rgba(0,0,0,0.7)] flex flex-col gap-6">
              {/* Title */}
              <h3 className="text-sm uppercase tracking-widest text-white/80">
                Core Attributes
              </h3>

              {/* Radar Chart Placeholder */}
              <div className="relative h-56 flex items-center justify-center">
                <div className="absolute inset-0 rounded-xl border border-white/10 bg-black/40" />
                <span className="relative text-white/30 text-sm">
                  Radar Chart UI
                </span>
              </div>

              {/* Skill Bars */}
              <div className="flex flex-col gap-4">
                {[
                  { label: "Coding", value: 85 },
                  { label: "Design", value: 70 },
                  { label: "Tools", value: 65 },
                  { label: "Communication", value: 80 },
                ].map((skill) => (
                  <div key={skill.label} className="flex flex-col gap-1">
                    <div className="flex justify-between text-xs text-white/60">
                      <span>{skill.label}</span>
                      <span>{skill.value}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full bg-white transition-all duration-700"
                        style={{ width: `${skill.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= RIGHT: EDUCATION & SKILLS ================= */}
            <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_25px_80px_rgba(0,0,0,0.7)] flex flex-col gap-6">
              {/* Title */}
              <h3 className="text-sm uppercase tracking-widest text-white/80">
                Education & Skills
              </h3>

              {/* Timeline */}
              <div className="flex flex-col gap-6">
                {[
                  { title: "Bachelor’s Degree", subtitle: "Software Engineering" },
                  { title: "Internship", subtitle: "Web Development" },
                  { title: "UI/UX Designer", subtitle: "Freelance Projects" },
                  { title: "Web Developer", subtitle: "Personal & Team Projects" },
                ].map((item, i) => (
                  <div key={i} className="relative pl-6">
                    <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-white" />
                    <span className="absolute left-[3px] top-4 bottom-0 w-px bg-white/20" />
                    <div className="flex flex-col gap-1">
                      <span className="text-sm text-white">{item.title}</span>
                      <span className="text-xs text-white/50">{item.subtitle}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section
        id="projects"
        className="relative min-h-screen px-6 md:px-12 py-32"
      >
        <div className="mx-auto max-w-6xl flex flex-col gap-16">
          {/* Header */}
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Projects
            </h2>
            <p className="text-white/60 leading-relaxed">
              A selection of projects focused on clean UI, performance, and
              user-centered design — blending engineering with visual polish.
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Gamified Portfolio",
                desc: "An immersive, stat-based portfolio system inspired by RPG UI patterns.",
                tech: ["Next.js", "Tailwind", "Framer Motion"],
              },
              {
                title: "Business Landing Platform",
                desc: "High-conversion marketing site with responsive layout and motion design.",
                tech: ["React", "TypeScript", "GSAP"],
              },
              {
                title: "Student Management System",
                desc: "Full-stack CRUD system with authentication and role-based access.",
                tech: ["Node.js", "PostgreSQL", "Express"],
              },
              {
                title: "E-commerce UI Kit",
                desc: "Reusable UI component system for modern online stores.",
                tech: ["React", "Storybook", "Tailwind"],
              },
              {
                title: "Portfolio CMS",
                desc: "Headless CMS-driven portfolio system for rapid content updates.",
                tech: ["Next.js", "Sanity", "GraphQL"],
              },
              {
                title: "Interactive Data Dashboard",
                desc: "Real-time visualization dashboard with dynamic charts.",
                tech: ["React", "Recharts", "REST API"],
              },
            ].map((project) => (
              <div
                key={project.title}
                className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition hover:border-white/30 hover:bg-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-lg font-semibold tracking-tight group-hover:text-white transition">
                    {project.title}
                  </h3>

                  <p className="text-sm text-white/60 leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/20 px-3 py-1 text-[10px] tracking-wide text-white/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-black/40 opacity-0 transition group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="relative min-h-screen flex items-center px-6 md:px-12 py-32"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16">
          {/* Left */}
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Let’s Connect
            </h2>

            <p className="text-white/70 leading-relaxed max-w-xl">
              Whether you’d like to collaborate, ask a question, or discuss a
              project idea, feel free to reach out. I’m always open to meaningful
              conversations and new opportunities.
            </p>

            <div className="flex flex-col gap-4 pt-4 text-sm text-white/70">
              <div>
                <span className="text-white/40">Email:</span>{" "}
                reanne@example.com
              </div>
              <div>
                <span className="text-white/40">Location:</span> Philippines
              </div>
            </div>
          </div>

          {/* Right (Form) */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
          >
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-white/50">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="rounded-lg border border-white/20 bg-black/40 px-4 py-2 text-sm outline-none focus:border-white/50"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-white/50">
                Email
              </label>
              <input
                type="email"
                placeholder="you@email.com"
                className="rounded-lg border border-white/20 bg-black/40 px-4 py-2 text-sm outline-none focus:border-white/50"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-white/50">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Your message..."
                className="resize-none rounded-lg border border-white/20 bg-black/40 px-4 py-2 text-sm outline-none focus:border-white/50"
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex w-fit items-center justify-center rounded-full border border-white/30 px-7 py-2 text-xs tracking-wide transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}