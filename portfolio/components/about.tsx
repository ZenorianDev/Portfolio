// File: /components/about.tsx
"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaBirthdayCake,
  FaUser,
  FaLanguage,
  FaGraduationCap,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaJava,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiMysql, SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl" />, description: "JS makes web pages dynamic." },
  { name: "React", icon: <FaReact className="text-cyan-400 text-5xl" />, description: "React helps me build UI components." },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" />, description: "HTML is the foundation of websites." },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" />, description: "CSS styles everything beautifully." },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-5xl" />, description: "TS adds typing to JS." },
  { name: "Next.js", icon: <SiNextdotjs className="text-white text-5xl" />, description: "Next.js enables SSR and routing." },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-5xl" />, description: "Tailwind for fast styling." },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500 text-5xl" />, description: "Bootstrap for quick layouts." },
  { name: "Python", icon: <FaPython className="text-blue-400 text-5xl" />, description: "Python for backend and automation." },
  { name: "Java", icon: <FaJava className="text-red-500 text-5xl" />, description: "Java for OOP and backend systems." },
  { name: "MySQL", icon: <SiMysql className="text-blue-600 text-5xl" />, description: "MySQL for relational databases." },
  { name: "Git", icon: <FaGitAlt className="text-orange-600 text-5xl" />, description: "Git for version control." },
  { name: "GitHub", icon: <FaGithub className="text-gray-300 text-5xl" />, description: "GitHub for collaboration." },
];

export default function About() {
  const [selected, setSelected] = useState(skills[0]);

  return (
    <section className="py-20 text-white">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <h2 className="mb-12 text-3xl font-bold tracking-wide uppercase">
          Learn More About Me
        </h2>

        {/* Grid layout */}
        <div className="grid gap-10 md:grid-cols-2 items-start">
          {/* Profile photo */}
          <div className="flex justify-center">
            <Image
              src="/me.jpg"
              alt="Profile photo"
              width={400}
              height={500}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* Info */}
          <div>
            <h3 className="text-2xl font-semibold text-green-400 mb-6">
              Full Stack Developer
            </h3>

            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4 text-neutral-300 mb-8">
              <p>
                <span className="font-bold text-white flex items-center gap-2">
                  <FaBirthdayCake className="text-green-400" /> Birthday:
                </span>{" "}
                August 2005
              </p>
              <p>
                <span className="font-bold text-white flex items-center gap-2">
                  <FaUser className="text-green-400" /> Age:
                </span>{" "}
                20
              </p>
              <p>
                <span className="font-bold text-white flex items-center gap-2">
                  <FaLanguage className="text-green-400" /> Languages:
                </span>{" "}
                English / Tagalog / French
              </p>
              <p>
                <span className="font-bold text-white flex items-center gap-2">
                  <FaGraduationCap className="text-green-400" /> Degree:
                </span>{" "}
                BSIT – Software Engineering
              </p>
              <p>
                <span className="font-bold text-white flex items-center gap-2">
                  <FaEnvelope className="text-green-400" /> Email:
                </span>{" "}
                reannemartinez18@gmail.com
              </p>
              <p>
                <span className="font-bold text-white flex items-center gap-2">
                  <FaMapMarkerAlt className="text-green-400" /> City:
                </span>{" "}
                Bulacan, Philippines
              </p>
            </div>

            {/* Bio */}
            <div className="space-y-4 text-neutral-300 leading-relaxed">
              <p>
                As a passionate and goal-driven lifelong learner, I thrive on
                challenging tasks that require critical thinking and
                problem-solving abilities.
              </p>
              <p>
                Growing up, my fascination with the capabilities of computers
                sparked my ambition to become a Software Engineer. I find
                immense interest in building and designing websites, as well as
                delving into various aspects of software development.
              </p>
              <p>
                With a deep-rooted enthusiasm for this field, I am dedicated to
                honing my skills and leveraging my expertise to create
                innovative and impactful software solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-12 border-neutral-800" />

        {/* Skills */}
        <section className="relative w-full h-screen flex flex-col justify-center items-center text-white overflow-hidden">
          <h2 className="mb-12 text-4xl font-bold tracking-wide uppercase">
            My Skills
          </h2>

          <div className="relative w-[800px] h-[400px]">
            {/* Outer arc */}
            <div className="absolute w-full h-full rounded-t-full border-t-2 border-neutral-700"></div>
            {/* Inner arc */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[50px] w-[600px] h-[300px] rounded-t-full border-t-2 border-neutral-700"></div>

            {/* Ferris wheel effect */}
            {skills.map((skill, i, arr) => {
              const angle = Math.PI * (i / (arr.length - 1)); // distribute on half circle
              const radius = i % 2 === 0 ? 350 : 250;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={skill.name}
                  className="absolute cursor-pointer"
                  style={{
                    left: 400 + x - 24,
                    top: 400 - y - 24,
                  }}
                  whileHover={{ scale: 1.3 }}
                  onClick={() => setSelected(skill)}
                >
                  {skill.icon}
                </motion.div>
              );
            })}
          </div>

          {/* Center skill display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.name}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.4 }}
              className="absolute bottom-20 max-w-lg text-center"
            >
              <div className="flex justify-center mb-4 text-8xl">
                {selected.icon}
              </div>
              <h3 className="text-2xl font-semibold text-green-400">
                {selected.name}
              </h3>
              <p className="text-neutral-300 mt-2 text-sm leading-relaxed">
                {selected.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </section>

        {/* Divider */}
        <hr className="my-12 border-neutral-800" />

        {/* Education & Soft Skills */}
        <h3 className="mb-6 text-2xl font-semibold">Education</h3>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Education */}
          <div className="relative border-l border-neutral-700 pl-6">
            <div className="mb-8 ml-4 relative">
              <div className="absolute -left-12 top-1 h-5 w-5 rounded-full border-2 border-green-400 bg-neutral-900"></div>
              <h4 className="text-lg font-medium">
                Bachelor of Science in Information Technology
              </h4>
              <p className="text-sm text-neutral-400">
                First City Providential College <br /> 2024 – Present
              </p>
            </div>

            <div className="mb-8 ml-4 relative">
              <div className="absolute -left-12 top-1 h-5 w-5 rounded-full border-2 border-green-400 bg-neutral-900"></div>
              <h4 className="text-lg font-medium">
                Applied Degree in Software Engineering
              </h4>
              <p className="text-sm text-neutral-400">
                Lithan Academy Singapore <br /> 2024 – Present
              </p>
            </div>

            <div className="ml-4 relative">
              <div className="absolute -left-12 top-1 h-5 w-5 rounded-full border-2 border-green-400 bg-neutral-900"></div>
              <h4 className="text-lg font-medium">General Academic Strand</h4>
              <p className="text-sm text-neutral-400">
                Jarmmeth College, Inc. <br /> 2022 – 2024
              </p>
            </div>
          </div>

          {/* Right: Soft Skills */}
          <div>
            <h4 className="text-xl font-semibold text-green-400 mb-4">
              Soft Skills
            </h4>
            <ul className="grid grid-cols-2 gap-3 text-sm text-neutral-300">
              {[
                "Problem-Solving",
                "Critical Thinking",
                "Team Collaboration",
                "Adaptability",
                "Communication",
                "Time Management",
              ].map((skill) => (
                <li
                  key={skill}
                  className="px-3 py-2 rounded-lg border border-neutral-700 hover:bg-neutral-800 transition-colors"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}