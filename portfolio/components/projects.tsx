"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, X } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "DoBu Martial Arts",
    description:
      "DoBu Martial Arts is a modern and user-friendly website designed to provide an engaging experience for visitors interested in martial arts training.",
    image: "/dobu.png",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "https://github.com/ZenorianDev/DoBuMartialArts",
  },
  {
    id: 2,
    title: "Virdesk",
    description:
      "Virdesk is a simple browser-based workspace that helps you stay productive and focused. Fuel your productivity and watch your virtual desk grow with you.",
    image: "/virdesk.png",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/ZenorianDev/Virdesk",
  },
  {
    id: 3,
    title: "2048 Game",
    description:
      "2048 is a single-player puzzle game on a 4×4 grid where players slide numbered tiles to combine matching values.",
    image: "/2048.png",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/ZenorianDev/2048",
  },
{
    id: 4,
    title: "Enomy-Finances",
    description:
      "Enomy-Finances is a web-based system developed by using Thymeleaf for frontend and Spring for backend.",
    image: "/enomy.png",
    tech: ["Thymeleaf", "Spring", "MySQL"],
    link: "https://github.com/ZenorianDev/Enomy-Finances",
  },
{
    id: 5,
    title: "North Sussex Judo",
    description:
      "North Sussex Judo is a Java-based program that allows users to enter and manage athlete information for a judo training club.",
    image: "/nsj.png",
    tech: ["Java"],
    link: "https://github.com/ZenorianDev/North-Sussex-Judo",
  },
  {
    id: 6,
    title: "Meals On Wheels",
    description:
      "MerryMeal's Meals on Wheels Project — A full-stack application with a Spring Boot backend and React frontend to manage meal deliveries efficiently.",
    image: "/mow.png",
    tech: ["React", "Spring Boot", "MySQL"],
    link: "https://github.com/DevRyujin/mealsonwheels-project",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<number | null>(null);
  const [zoom, setZoom] = useState(false);

  const project = PROJECTS.find((p) => p.id === selected);

  return (
    <section className="py-20">
      <h2 className="mb-10 text-4xl font-bold text-center text-white">
        Projects
      </h2>

      {/* Gallery View */}
      <AnimatePresence>
        {!selected && (
          <motion.div
            key="gallery"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {PROJECTS.map((p) => (
              <motion.div
                key={p.id}
                whileHover={{ scale: 1.05 }}
                className="relative cursor-pointer overflow-hidden rounded-xl shadow-lg"
                onClick={() => setSelected(p.id)}
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  width={500}
                  height={300}
                  className="object-cover w-full h-64"
                />
                <div className="absolute bottom-0 w-full bg-black/60 p-3 text-white text-lg font-semibold">
                  {p.title}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Detail View */}
      <AnimatePresence>
        {selected && project && (
          <motion.div
            key="detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-6"
          >
            <div className="bg-neutral-900 rounded-2xl shadow-2xl max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 relative">
              {/* Exit button */}
              <button
                onClick={() => {
                  setSelected(null);
                  setZoom(false);
                }}
                className="absolute top-4 right-4 p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white"
              >
                <X size={24} />
              </button>

              {/* Left: Image with zoom */}
              <motion.div
                layout
                className="relative cursor-zoom-in overflow-hidden rounded-xl"
                onClick={() => setZoom((z) => !z)}
              >
                <motion.div
                  animate={{ scale: zoom ? 1.5 : 1 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="object-cover w-full h-80 lg:h-full"
                  />
                </motion.div>
              </motion.div>

              {/* Right: Details */}
              <div className="flex flex-col justify-center text-white">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="mb-4 text-neutral-300">{project.description}</p>
                <h4 className="font-semibold mb-2 text-green-400">Tech Stack</h4>
                <ul className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-neutral-800 px-3 py-1 text-sm"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-neutral-800 hover:bg-neutral-700 px-5 py-2 text-white font-medium transition"
                >
                  <ExternalLink size={18} />
                  View Source
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}