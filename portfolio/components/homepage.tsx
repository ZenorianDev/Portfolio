// components/homepage.tsx
"use client";

import { motion } from "framer-motion";
import { Github, Facebook, Linkedin } from "lucide-react";

export default function Homepage() {
  return (
    <section
      id="homepage"
      data-observe
      className="relative min-h-screen flex items-center"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/me.jpg" // replace with your actual image path
          alt="Kervin Curt Delos Reyes"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" /> {/* Overlay */}
      </div>

      {/* Left content */}
      <div className="relative z-10 w-full max-w-5xl px-6 md:px-12">
        <div className="flex flex-col gap-6 text-left max-w-lg">
          {/* Name */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl font-extrabold leading-tight text-white"
          >
            Kervin Curt <br /> Delos Reyes
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-lg text-zinc-300"
          >
            Lifelong learner building clean UIs, delightful experiences, and
            maintainable code. I focus on shipping small, validated features
            that move products forward.
          </motion.p>

          {/* Inline Navbar (initial position only, will move to top-right later) */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex gap-6 text-sm font-medium text-zinc-300"
          >
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </motion.nav>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex gap-4 mt-2"
          >
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <Github className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
