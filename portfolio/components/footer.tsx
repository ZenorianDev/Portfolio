"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto max-w-[92rem] px-6 md:px-12 py-16 flex flex-col gap-12">
        {/* ---------- TOP ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <span className="text-lg font-semibold tracking-widest">
              REANNE
            </span>
            <p className="max-w-sm text-sm text-white/60 leading-relaxed">
            Thanks for being here! If you have any questions or opportunities to share, 
            don’t hesitate to connect with me through my contact links.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-widest text-white/50">
              Navigate
            </span>
            <nav className="flex flex-col gap-3 text-sm">
              <Link
                href="#home"
                className="text-white/60 transition hover:text-white"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-white/60 transition hover:text-white"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="text-white/60 transition hover:text-white"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="text-white/60 transition hover:text-white"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-widest text-white/50">
              Connect
            </span>
            <div className="flex gap-4">
              {[
                { name: "GitHub", url: "https://github.com/ZenorianDev" },
                { name: "LinkedIn", url: "https://linkedin.com/in/zenoriandev" },
                { name: "Email", url: "mailto:reannemartinez18@gmail.com" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  className="rounded-full border border-white/20 px-4 py-2 text-xs tracking-wide text-white/60 transition hover:border-white/50 hover:text-white hover:bg-white/10"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ---------- BOTTOM ---------- */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 pt-8 text-xs text-white/40">
          <span>© {new Date().getFullYear()} Reanne Martinez. All rights reserved.</span>
          <span className="tracking-widest uppercase">Designed & Built by Reanne</span>
        </div>
      </div>

      {/* Subtle glow edge */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </footer>
  );
}
