"use client";

import { motion } from "framer-motion"; // ✅ import motion
import clsx from "clsx";

type Props = { activeSection: string; navMode: "top" | "side" };

const variants = {
  top: { x: 0, y: 0, opacity: 1 },
  side: { x: 0, y: 0, opacity: 1 },
};

const links = [
  { id: "homepage", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ activeSection, navMode }: Props) {
  const isSide = navMode === "side";

  return (
    <motion.nav
      variants={variants}
      animate={isSide ? "side" : "top"}
      className={clsx(
        "fixed z-40",
        isSide
          ? "left-6 top-1/2 -translate-y-1/2 hidden md:block"
          : "left-0 top-0 w-full"
      )}
    >
      <div
        className={clsx(
          "backdrop-blur bg-white/5 rounded-2xl shadow-lg",
          isSide
            ? "p-2"
            : "mx-auto mt-4 max-w-5xl p-3"
        )}
      >
        <ul
          className={clsx(
            "flex gap-3 text-sm font-medium",
            isSide ? "flex-col" : "justify-center"
          )}
        >
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
