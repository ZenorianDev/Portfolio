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

  {/* Logo */}
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
            className="fixed top-10 right-10 z-40 flex gap-8 text-lm font-medium"
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
            key="socials-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-20 left-50 z-40 flex"
          >
            <SocialLinks direction="row" />
          </motion.div>
        ) : (
          <motion.div
            key="socials-right"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-6 right-6 z-40 flex"
          >
            <SocialLinks direction="col" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function SocialLinks({ direction = "row" }: { direction?: "row" | "col" }) {
  const iconClasses =
    "h-5 w-5 text-neutral-300 group-hover:text-white transition-colors duration-200";

  const bubbleClasses =
    "group flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition duration-200";

  return (
    <div className={`flex ${direction === "col" ? "flex-col gap-6" : "flex-row gap-3"}`}>
      <a
        href="https://github.com/ZenorianDev"
        target="_blank"
        rel="noopener noreferrer"
        className={bubbleClasses}
      >
        <Github className={iconClasses} />
      </a>
      <a
        href="https://facebook.com/zenorian.dev"
        target="_blank"
        rel="noopener noreferrer"
        className={bubbleClasses}
      >
        <Facebook className={iconClasses} />
      </a>
      <a
        href="https://linkedin.com/in/zenoriandev"
        target="_blank"
        rel="noopener noreferrer"
        className={bubbleClasses}
      >
        <Linkedin className={iconClasses} />
      </a>
    </div>
  );
}