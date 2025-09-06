import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";
import { Github, Facebook, Linkedin } from "lucide-react";

const SECTION_ORDER = ["home", "about", "projects", "contact"] as const;
type SectionId = (typeof SECTION_ORDER)[number];

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
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-6 left-6 z-40 font-bold text-xl"
      >
        <Image
          src="/R.png"
          alt="Profile photo"
          width={35}
          height={35}
          className="rounded-xl shadow-lg object-cover cursor-pointer"
          onClick={() => {
            const el = document.getElementById("home");
            if (el) {
              el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
        />
      </motion.div>

      <AnimatePresence mode="wait">
        {!showSide ? (
          <motion.ul
            key="center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-10 z-40 flex items-top justify-center gap-8 text-lm font-medium"
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
            className="fixed left-6 top-1/4 z-40 flex -translate-y-1/2 flex-col gap-6 text-lm font-medium"
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

      <AnimatePresence mode="wait">
        {!showSide ? (
          <motion.div
            key="socials-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-50 left-1/2 z-40 flex -translate-x-1/2 gap-6"
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
      <a href="https://github.com/ZenorianDev" target="ZenorianDev.github.com">
        <Github className="h-5 w-5 text-neutral-300 hover:text-white" />
      </a>
      <a href="https://facebook.com/zenorian.dev" target="ZenorianDev.facebook.com">
        <Facebook className="h-5 w-5 text-neutral-300 hover:text-white" />
      </a>
      <a href="https://linkedin.com/in/zenoriandev" target="ZenorianDev.linkedin.com">
        <Linkedin className="h-5 w-5 text-neutral-300 hover:text-white" />
      </a>
    </>
  );
}