"use client";

import { motion } from "framer-motion";

export default function Homepage() {
  return (
    <div className="w-full max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left content */}
        <div className="md:col-span-7 space-y-6 px-4 md:px-0">
          <motion.h1
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl font-extrabold leading-tight"
          >
            Kervin Curt
            <br />
            Delos Reyes
          </motion.h1>

          <motion.p
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.08, duration: 0.5 }}
            className="text-lg text-zinc-300 max-w-2xl"
          >
            Lifelong learner building clean UIs, delightful experiences, and
            maintainable code. I focus on shipping small, validated features
            that move products forward.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.16 }}
            className="flex gap-3"
          >
            <a
              href="#projects"
              className="rounded-lg bg-white px-4 py-2 font-semibold text-black"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-white/20 px-4 py-2 text-sm text-zinc-100"
            >
              Contact
            </a>
          </motion.div>

          <div className="mt-6 text-sm text-zinc-400">
            <span className="inline-block mr-3">Based in Philippines</span>
            <span className="inline-block">•</span>
            <span className="inline-block ml-3">Open to collaboration</span>
          </div>
        </div>

        {/* Right preview card */}
        <div className="md:col-span-5 px-4 md:px-0">
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-gradient-to-b from-black/40 to-white/5 p-6 ring-1 ring-white/5 shadow-2xl"
          >
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-black/60 flex items-center justify-center">
              <div className="text-center text-zinc-300">
                Project preview card
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
