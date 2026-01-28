"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import About from "@/components/about";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import HeroSlider from "@/components/hero-slider";

/* --------------------------------------------
   Motion presets
--------------------------------------------- */
const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative min-h-screen flex items-center px-6 md:px-16"
      >
        {/* Background portrait */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={reveal}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="text-[clamp(3rem,9vw,6.5rem)] font-extrabold leading-none tracking-tight">
              REANNE <br />
              <span className="block ml-12 md:ml-24">LORRAINE</span>
              <span className="block">MARTINEZ</span>
            </h1>

            <p className="text-neutral-300 text-lg">
              Aspiring Full Stack Developer | Game Developer
            </p>

            <div className="flex gap-4 pt-2">
              <a
                href="#projects"
                className="rounded-full bg-white/10 px-6 py-2 text-sm hover:bg-white/20 transition"
              >
                View Profile
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/20 px-6 py-2 text-sm hover:bg-white/5 transition"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Right UI (01 / 05) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:flex flex-col items-end gap-4"
          >
            <div className="flex items-center gap-4 text-sm tracking-widest">
              <span className="font-semibold">01</span>
              <span className="opacity-50">/ 05</span>
              <div className="flex gap-3 ml-4">
                <button className="hover:opacity-100 opacity-70 transition">
                  ‹
                </button>
                <button className="hover:opacity-100 opacity-70 transition">
                  ›
                </button>
              </div>
            </div>

            <a
              href="#about"
              className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition"
            >
              View Profile
            </a>
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-28 px-6 md:px-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={reveal}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-120px" }}
          className="max-w-6xl mx-auto"
        >
          <About />
        </motion.div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="py-28 px-6 md:px-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={reveal}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true, margin: "-120px" }}
          className="max-w-7xl mx-auto"
        >
          <Projects />
        </motion.div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-28 px-6 md:px-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={reveal}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true, margin: "-120px" }}
          className="max-w-4xl mx-auto"
        >
          <Contact />
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
