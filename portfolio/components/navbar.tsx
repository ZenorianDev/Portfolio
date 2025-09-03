// File: /components/navbar.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Github, Facebook, Linkedin, Youtube } from "lucide-react";

const SECTION_ORDER = ["about", "projects", "contact", "resume"] as const;
type SectionId = (typeof SECTION_ORDER)[number];

export default function Navbar({
  active,
  showSide,
}: {
  active: SectionId;
  showSide: boolean;
}) {
  return (
    <>
      {/* Initial centered layout */}
      <AnimatePresence>
        {!showSide && (
          <motion.div
            key="centered"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
          >
            {/* Logo top (small) */}
            <div className="absolute top-6 left-6 font-bold text-xl">jp</div>

            {/* Nav links */}
            <ul className="flex flex-col items-center gap-4 text-lg font-medium">
              {SECTION_ORDER.map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`capitalize ${
                      active === id
                        ? "text-white underline"
                        : "text-neutral-300 hover:text-white"
                    }`}
                  >
                    {id}
                  </a>
                </li>
              ))}
            </ul>

            {/* Socials stacked */}
            <div className="flex flex-col gap-4">
              <a href="https://github.com" target="_blank">
                <Github className="h-5 w-5 text-neutral-300 hover:text-white" />
              </a>
              <a href="https://facebook.com" target="_blank">
                <Facebook className="h-5 w-5 text-neutral-300 hover:text-white" />
              </a>
              <a href="https://linkedin.com" target="_blank">
                <Linkedin className="h-5 w-5 text-neutral-300 hover:text-white" />
              </a>
              <a href="https://youtube.com" target="_blank">
                <Youtube className="h-5 w-5 text-neutral-300 hover:text-white" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Split state (after scroll) */}
      <AnimatePresence>
        {showSide && (
          <>
            {/* Nav on left with logo */}
            <motion.aside
              key="nav-left"
              initial={{ x: -120, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -120, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed left-0 top-0 z-40 hidden h-screen w-40 flex-col items-start justify-start border-r border-white/10 bg-black/40 p-6 backdrop-blur md:flex"
            >
              <div className="mb-6 font-bold text-xl">jp</div>
              <ul className="space-y-3 text-sm">
                {SECTION_ORDER.map((id) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className={`capitalize ${
                        active === id
                          ? "text-white underline"
                          : "text-neutral-300 hover:text-white"
                      }`}
                    >
                      {id}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.aside>

            {/* Socials bottom-right */}
            <motion.div
              key="socials-right"
              initial={{ x: 120, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 120, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-4"
            >
              <a href="https://github.com" target="_blank">
                <Github className="h-5 w-5 text-neutral-300 hover:text-white" />
              </a>
              <a href="https://facebook.com" target="_blank">
                <Facebook className="h-5 w-5 text-neutral-300 hover:text-white" />
              </a>
              <a href="https://linkedin.com" target="_blank">
                <Linkedin className="h-5 w-5 text-neutral-300 hover:text-white" />
              </a>
              <a href="https://youtube.com" target="_blank">
                <Youtube className="h-5 w-5 text-neutral-300 hover:text-white" />
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
