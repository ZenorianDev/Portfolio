// components/navbar.tsx
"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

type Props = { activeSection: string; navMode: "top" | "side" };

const links = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ activeSection, navMode }: Props) {
  // only show floating nav if in "side" mode
  if (navMode === "top") return null;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed right-8 top-6 z-40"
    >
      <div className="backdrop-blur-md bg-black/30 rounded-2xl shadow-lg px-4 py-2">
        <ul className="flex gap-4 text-sm font-medium">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(l.id)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={clsx(
                  "px-3 py-2 rounded-lg transition-colors",
                  activeSection === l.id
                    ? "bg-white/20 text-white"
                    : "text-zinc-300 hover:text-white"
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
