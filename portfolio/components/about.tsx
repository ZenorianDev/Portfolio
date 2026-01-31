"use client";

import React from "react";
import Image from "next/image";
import RadarChart from "./RadarChart";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen px-6 md:px-12 py-28 md:py-12"
    >
      <div className="mx-auto max-w-[72rem] flex flex-col gap-12">
        {/* ---------- HEADER ---------- */}
        <div className="relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-5 md:p-6 shadow-[0_25px_80px_rgba(0,0,0,0.7)]">
          <h2 className="text-xl md:text-3xl font-semibold tracking-wide">
            About Me
          </h2>
          <p className="mt-4 max-w-4xl text-white/70 leading-relaxed text-sm md:text-base">
            I aspire to become the best developer and designer I can possibly be.
            With a focus on logic, creativity, and growth, I strive to build
            impactful projects and continuously improve my skills. My mission is
            to create intuitive solutions that make a meaningful difference in the
            digital world.
          </p>
          <span className="absolute bottom-0 left-6 right-6 h-px bg-white/10" />
        </div>

        {/* ---------- GRID ROW ---------- */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.2fr_0.9fr] gap-6 md:gap-8">
          {/* ================= LEFT ================= */}
          <div className="relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-5 md:p-6 shadow-[0_25px_80px_rgba(0,0,0,0.7)] flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xs md:text-sm uppercase tracking-widest text-white/80">
                Personal Background
              </h3>
              <span className="text-[10px] md:text-xs text-white/40">
                LEVEL 20
              </span>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/40 h-40 md:h-56">
              <Image
                src="/profile.jpg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="flex flex-col gap-3 text-xs md:text-sm text-white/70">
              {[
                ["Age", "20"],
                ["Birthday", "August 2005"],
                ["Location", "Philippines"],
                ["Email", "reannemartinez18@gmail.com"],
                ["Role", "Full-Stack Developer"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between">
                  <span className="text-white/40">{label}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ================= CENTER ================= */}
          <div className="relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-5 md:p-6 shadow-[0_25px_80px_rgba(0,0,0,0.7)] flex flex-col gap-6">
            <h3 className="text-xs md:text-sm uppercase tracking-widest text-white/80">
              Core Attributes
            </h3>

            <div className="relative h-44 md:h-56">
              <RadarChart
                data={[
                  { label: "Coding", value: 83 },
                  { label: "Design", value: 88 },
                  { label: "Communication", value: 89 },
                  { label: "Tools", value: 85 },
                  
                ]}
              />
            </div>

            {/* Optional: horizontal progress bars */}
            <div className="flex flex-col gap-4">
              {[
                { label: "Coding", value: 83 },
                { label: "Design", value: 88 },
                { label: "Tools", value: 85 },
                { label: "Communication", value: 89 },
              ].map(skill => (
                <div key={skill.label} className="flex flex-col gap-1">
                  <div className="flex justify-between text-[11px] md:text-xs text-white/60">
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

          {/* ================= RIGHT ================= */}
          <div className="relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-5 md:p-6 shadow-[0_25px_80px_rgba(0,0,0,0.7)] flex flex-col gap-6">
            <h3 className="text-xs md:text-sm uppercase tracking-widest text-white/80">
              Education & Skills
            </h3>

            <div className="flex flex-col gap-6">
              {[
                { title: "Bachelor's Degree", subtitle: "Software Engineering — Lithan Academy Singapore" },
                { title: "Bachelor of Science in Information Technology", subtitle: "Specialized in Software Engineering — First City Providential College" },
                { title: "Commission", subtitle: "Freelance Projects" },
                { title: "Web & Game Developer", subtitle: "Personal & Team Projects" },
              ].map((item, i) => (
                <div key={i} className="relative pl-6">
                  <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-white" />
                  <span className="absolute left-[3px] top-4 bottom-0 w-px bg-white/20" />
                  <div className="flex flex-col gap-1">
                    <span className="text-xs md:text-sm text-white font-semibold">
                      {item.title}
                    </span>
                    <span className="text-[11px] md:text-sm text-white/50">
                      {item.subtitle}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
