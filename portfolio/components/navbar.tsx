// File: /components/navbar.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Github, Facebook, Linkedin, Youtube } from "lucide-react";
import { SECTION_ORDER, SectionId } from "@/lib/sections";

export default function Navbar({
  active,
  showSide,
}: {
  active: SectionId;
  showSide: boolean;
}) {
  const handleClick = (id: SectionId) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-6 left-6 z-50 font-bold text-xl"
      >
        jp
      </motion.div>

      {/* Nav links */}
      <AnimatePresence mode="wait">
        {!showSide ? (
          <motion.ul
            key="center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex items-center justify-center gap-8 text-lg font-medium"
          >
            {SECTION_ORDER.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={handleClick(id)}
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
          </motion.ul>
        ) : (
          <motion.ul
            key="side"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed left-6 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-6 text-lg font-medium"
          >
            {SECTION_ORDER.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={handleClick(id)}
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
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Socials */}
      <AnimatePresence mode="wait">
        {!showSide ? (
          <motion.div
            key="socials-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-20 left-1/2 z-40 flex -translate-x-1/2 gap-6"
          >
            <SocialLinks />
          </motion.div>
        ) : (
          <motion.div
            key="socials-right"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-6 right-6 z-40 flex flex-col gap-6"
          >
            <SocialLinks />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function SocialLinks() {
  return (
    <>
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
    </>
  );
}
