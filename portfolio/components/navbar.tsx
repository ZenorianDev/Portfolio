// File: /components/navbar.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";

const SECTION_ORDER = ["home", "about", "projects", "contact"] as const;
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
      {/* Top navbar */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -40, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="sticky top-0 z-40"
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between bg-neutral-950/70 px-4 py-3 backdrop-blur-md">
          <div className="font-semibold">YourLogo</div>
          <ul className="flex gap-6">
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
        </nav>
      </motion.div>

      {/* Side navbar (on scroll) */}
      <AnimatePresence>
        {showSide && (
          <motion.aside
            key="side"
            initial={{ x: -120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -120, opacity: 0 }}
            className="fixed left-0 top-0 hidden h-screen w-56 border-r border-white/10 bg-black/40 backdrop-blur md:block"
          >
            <div className="flex h-full flex-col">
              <div className="border-b border-white/10 px-5 py-4 font-semibold">
                YourLogo
              </div>
              <ul className="flex-1 space-y-1 px-3 py-4">
                {SECTION_ORDER.map((id) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className={`block rounded-lg px-3 py-2 text-sm ${
                        active === id
                          ? "bg-white text-black"
                          : "text-neutral-300 hover:bg-white/10"
                      }`}
                    >
                      {id}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="px-3 py-4 text-xs text-neutral-400">
                Socials here
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
