"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

type NavbarProps = {
  activeSection: string;
  navMode: "top" | "side";
};

const sections = [
  { id: "homepage", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ activeSection, navMode }: NavbarProps) {
  const isSide = navMode === "side";

  return (
    <motion.nav
      className={clsx(
        "fixed z-40",
        isSide ? "left-6 top-1/2 -translate-y-1/2" : "top-0 left-0 w-full"
      )}
    >
      <div
        className={clsx(
          "backdrop-blur bg-white/5 rounded-2xl shadow-lg",
          isSide ? "p-2" : "mx-auto mt-4 max-w-5xl p-3"
        )}
      >
        <ul
          className={clsx(
            "flex gap-3 text-sm font-medium",
            isSide ? "flex-col" : "justify-center"
          )}
        >
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(id)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={clsx(
                  "px-3 py-2 rounded-lg transition-colors",
                  activeSection === id
                    ? "bg-white/20 text-white"
                    : "text-zinc-300 hover:text-white"
                )}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
