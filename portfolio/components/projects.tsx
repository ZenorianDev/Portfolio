"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const PROJECTS = [
  {
    title: "North Sussex Judo",
    desc: "An immersive, stat-based portfolio system inspired by RPG UI patterns and modern UI motion.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    image: "/nsj.png",
    repo: "https://github.com/yourname/gamified-portfolio",
  },
  {
    title: "DoBu Martial Arts",
    desc: "High-conversion marketing site with responsive layout and animated interaction patterns.",
    tech: ["React", "TypeScript", "GSAP"],
    image: "/projects/landing.png",
    repo: "https://github.com/yourname/business-landing",
  },
  {
    title: "Enomy-Finances",
    desc: "Full-stack CRUD system with authentication, dashboards, and role-based access.",
    tech: ["Node.js", "PostgreSQL", "Express"],
    image: "/projects/sms.png",
    repo: "https://github.com/yourname/student-system",
  },
    {
    title: "Meals On Wheels",
    desc: "An immersive, stat-based portfolio system inspired by RPG UI patterns and modern UI motion.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    image: "/projects/portfolio.png",
    repo: "https://github.com/yourname/gamified-portfolio",
  },
  {
    title: "JumpStart",
    desc: "High-conversion marketing site with responsive layout and animated interaction patterns.",
    tech: ["React", "TypeScript", "GSAP"],
    image: "/projects/landing.png",
    repo: "https://github.com/yourname/business-landing",
  },
  {
    title: "Portfolio",
    desc: "Full-stack CRUD system with authentication, dashboards, and role-based access.",
    tech: ["Node.js", "PostgreSQL", "Express"],
    image: "/projects/sms.png",
    repo: "https://github.com/yourname/student-system",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen px-6 md:px-12 py-12"
    >
      <div className="mx-auto max-w-[92rem] flex flex-col gap-16">
        {/* ---------- HEADER ---------- */}
        <div className="flex flex-col gap-4 max-w-xl">
          <h2 className="text-2xl md:text-5xl font-bold tracking-tight">
            Projects
          </h2>
          <p className="text-white/60 leading-relaxed text-sm md:text-base">
            A curated selection of work blending clean UI, performance, and
            interactive design.
          </p>
        </div>

        {/* ---------- PROJECT GRID ---------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PROJECTS.map((project) => (
            <FloatingProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================================= */
/* Floating Project Card (Hero-style effect) */
/* ========================================= */

function FloatingProjectCard({
  title,
  desc,
  tech,
  image,
  repo,
}: {
  title: string;
  desc: string;
  tech: string[];
  image: string;
  repo: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y / rect.height - 0.5) * 10;
    const rotateY = (x / rect.width - 0.5) * 10;

    ref.current.style.transform = `
      perspective(1200px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateZ(8px)
    `;
  };

  const onLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform =
      "perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,0.65)] transition-transform duration-200 will-change-transform"
    >
      {/* Glow border */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-black/40 opacity-0 transition group-hover:opacity-100" />

      {/* Image */}
      <div className="relative h-44 md:h-52 w-full overflow-hidden rounded-t-2xl border-b border-white/10 bg-black/40">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-4 p-5 md:p-6">
        <h3 className="text-sm md:text-lg font-semibold tracking-tight">
          {title}
        </h3>

        <p className="text-xs md:text-sm text-white/60 leading-relaxed line-clamp-3">
          {desc}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 pt-1">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/20 px-3 py-1 text-[9px] md:text-[10px] tracking-wide text-white/60 backdrop-blur-sm"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="pt-3">
          <Link
            href={repo}
            target="_blank"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-1.5 text-[10px] md:text-xs tracking-wide transition hover:bg-white/10 hover:border-white/50"
          >
            View GitHub →
          </Link>
        </div>
      </div>
    </div>
  );
}
