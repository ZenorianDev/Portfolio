"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, X } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A modern personal portfolio showcasing my skills, projects, and contact details with a sleek design.",
    image: "/portfolio.png",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/yourusername/portfolio",
  },
  {
    id: 2,
    title: "Virdesk",
    description:
      "A full-featured e-commerce platform with product browsing, cart, and secure checkout.",
    image: "/virdesk.png",
    tech: ["React", "Redux", "Node.js", "MongoDB"],
    link: "https://github.com/yourusername/ecommerce-store",
  },
  {
    id: 3,
    title: "Game Project",
    description:
      "A 2D game developed using Python and Pygame with fun mechanics and retro visuals.",
    image: "/projects/game.png",
    tech: ["Python", "Pygame"],
    link: "https://github.com/yourusername/game-project",
  },
{
    id: 4,
    title: "Game Project",
    description:
      "A 2D game developed using Python and Pygame with fun mechanics and retro visuals.",
    image: "/projects/game.png",
    tech: ["Python", "Pygame"],
    link: "https://github.com/yourusername/game-project",
  },
{
    id: 5,
    title: "Game Project",
    description:
      "A 2D game developed using Python and Pygame with fun mechanics and retro visuals.",
    image: "/projects/game.png",
    tech: ["Python", "Pygame"],
    link: "https://github.com/yourusername/game-project",
  },
  {
    id: 6,
    title: "Game Project",
    description:
      "A 2D game developed using Python and Pygame with fun mechanics and retro visuals.",
    image: "/projects/game.png",
    tech: ["Python", "Pygame"],
    link: "https://github.com/yourusername/game-project",
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
                  className="inline-flex items-center gap-2 rounded-full bg-purple-600 hover:bg-purple-700 px-5 py-2 text-white font-medium transition"
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