"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/navbar";
import About from "@/components/about";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

const SECTION_ORDER = ["home", "about", "projects", "contact"] as const;
type SectionId = (typeof SECTION_ORDER)[number];

const SECTION_BG: Record<SectionId, string> = {
  home: "linear-gradient(to bottom, #111, #000)",
  about: "linear-gradient(to bottom, #1a1a1a, #000)",
  projects: "linear-gradient(to bottom, #222, #000)",
  contact: "linear-gradient(to bottom, #2a2a2a, #000)",
};

export default function HomePage() {
  const [active, setActive] = useState<SectionId>("home");
  const [showSide, setShowSide] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowSide(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id as SectionId);
          }
        });
      },
      { threshold: 0.6 }
    );

    SECTION_ORDER.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const bg = useMemo(() => SECTION_BG[active], [active]);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={bg}
          className="fixed inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{ background: bg }}
        />
      </AnimatePresence>

      <Navbar active={active} showSide={showSide} />

      <div className="mx-auto max-w-6xl px-4">
        <section
          id="home"
          className="min-h-[90vh] grid place-items-left py-28 text-left"
        >
          <div>
            <h1
              className="mb-4 text-[clamp(3rem,10vw,7rem)] font-extrabold leading-none text-white [text-rendering:optimizeLegibility]"
            >
              REANNE <br />
              <span className="block ml-20 md:ml-40">LORRAINE</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-green-600 to-sky-400">
                MARTINEZ
              </span>
            </h1>
            <p className="mb-6 text-neutral-300">
              Aspiring Full Stack Developer | Game Developer
            </p>
            <div className="z-50 relative">
              <div className="flex justify-left gap-3">
                <a
                  href="#projects"
                  className="rounded-full bg-white/10 px-5 py-2 text-white cursor-pointer hover:bg-white/20 active:scale-95 transition-transform duration-150"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/20 px-5 py-2 text-white cursor-pointer hover:bg-white/5 active:scale-95 transition-transform duration-150"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <About />
          </motion.div>
        </section>

        <section id="projects">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Projects />
          </motion.div>
        </section>

        <section id="contact">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Contact />
          </motion.div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
