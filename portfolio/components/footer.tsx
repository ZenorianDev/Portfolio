"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto max-w-[92rem] px-6 md:px-12 py-16 flex flex-col gap-12">

        {/* ---------- TOP ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_0.6fr] gap-12 items-start">

          {/* ---------- BRAND ---------- */}
          <div className="flex flex-col gap-6">
            {/* Name as image */}
            <Image
              src="/R.png" // <-- put your name image in /public
              alt="Reanne Martinez"
              width={60}
              height={60}
              className="opacity-90"
              priority
            />

            <p className="max-w-md text-sm text-white/60 leading-relaxed">
              Thanks for being here! If you have any questions or opportunities to share,
              don’t hesitate to connect with me through my contact links.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-5 pt-2">
              <Link
                href="https://github.com/ZenorianDev"
                target="_blank"
                aria-label="GitHub"
                className="group"
              >
                <Github className="h-5 w-5 text-white/50 transition group-hover:text-white" />
              </Link>

              <Link
                href="https://linkedin.com/in/zenoriandev"
                target="_blank"
                aria-label="LinkedIn"
                className="group"
              >
                <Linkedin className="h-5 w-5 text-white/50 transition group-hover:text-white" />
              </Link>

              <Link
                href="mailto:reannemartinez18@gmail.com"
                aria-label="Email"
                className="group"
              >
                <Mail className="h-5 w-5 text-white/50 transition group-hover:text-white" />
              </Link>
            </div>
          </div>

          {/* ---------- NAVIGATION (RIGHT SIDE) ---------- */}
          <div className="flex flex-col gap-4 md:items-end">
            <span className="text-xs uppercase tracking-widest text-white/50">
              Navigate
            </span>
            <nav className="flex flex-col gap-3 text-sm md:items-end">
              {["home", "about", "projects", "contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item}`}
                  className="text-white/60 transition hover:text-white"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* ---------- BOTTOM ---------- */}
        <div className="relative flex items-center justify-center border-t border-white/10 pt-8 text-xs text-white/40">
          <span>© {new Date().getFullYear()} Reanne Martinez. All rights reserved.</span>
        </div>
      </div>

      {/* Subtle glow edge */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </footer>
  );
}
