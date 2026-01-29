"use client";

import { useRef } from "react";

export default function FloatingCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    // MICRO tilt only
    const rotateY = ((x - midX) / midX) * 3;
    const rotateX = -((y - midY) / midY) * 3;

    card.style.transform = `
      perspective(1200px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateZ(6px)
    `;

    // RGB glow subtly shifts, not flashlight
    glow.style.background = `
      radial-gradient(
        180px circle at ${x}px ${y}px,
        rgba(168,85,247,0.7),
        rgba(34,211,238,0.45),
        rgba(236,72,153,0.35),
        transparent 65%
      )
    `;
  };

  const reset = () => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;

    card.style.transform = `
      perspective(1200px)
      rotateX(0deg)
      rotateY(0deg)
      translateZ(0px)
    `;

    // Back to soft ambient glow
    glow.style.background = `
      linear-gradient(
        135deg,
        rgba(168,85,247,0.7),
        rgba(34,211,238,0.5),
        rgba(236,72,153,0.45)
      )
    `;
  };

  return (
    <div className="absolute bottom-4 left-1/2 z-40 w-[94%] max-w-6xl -translate-x-1/2">
      <div
        className="relative"
        onMouseMove={handleMove}
        onMouseLeave={reset}
      >
        {/* Glow layer */}
        <div
          ref={glowRef}
          className="pointer-events-none absolute inset-0 z-10 rounded-2xl transition-opacity duration-300"
        />

        {/* Card */}
        <div
          ref={cardRef}
          className="relative z-20 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.7)] transition-transform duration-150 ease-out will-change-transform"
        >
          {/* Glass reflection */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-black/40" />

          <div className="relative grid grid-cols-[1fr_auto] gap-10 px-10 py-8">
            {/* ================= LEFT CONTENT ================= */}
            <div className="flex flex-col gap-6">
              {/* SOCIAL ROW */}
              <div className="flex items-center gap-6 text-xs uppercase tracking-widest text-white/70">
                <span className="text-white/40">Social</span>

                <div className="flex items-center gap-6">
                  <a href="#" className="hover:text-white transition">
                    Github
                  </a>
                  <span className="h-4 w-px bg-white/20" />
                  <a href="#" className="hover:text-white transition">
                    Facebook
                  </a>
                  <span className="h-4 w-px bg-white/20" />
                  <a href="#" className="hover:text-white transition">
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* TEXT GRID */}
              <div className="grid grid-cols-[1fr_auto_1fr] items-start gap-10 text-sm leading-relaxed">
                <p className="text-white/70">
                  I&apos;m an aspiring Full Stack Developer and Game Developer with a
                  deep interest in designing and building creative, efficient, and
                  user-centered digital experiences.
                </p>

                <span className="h-full w-px bg-white/20" />

                <p className="font-medium text-white">
                  Whether you&apos;d like to collaborate, have a question, or just want
                  to connect, feel free to reach out. I&apos;ll do my best to respond
                  quickly!
                </p>
              </div>
            </div>

            {/* ================= ICON COLUMN ================= */}
            <div className="flex items-center gap-8">
              <span className="h-full w-px bg-white/20" />

              <div className="flex flex-col items-center gap-4">
                <a
                  href="https://github.com/"
                  aria-label="GitHub profile"
                  className="h-11 w-11 rounded-full border border-white/20 bg-black/30 backdrop-blur-md grid place-items-center transition hover:border-white hover:bg-white/10"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.95.58.11.79-.25.79-.56v-2.04c-3.2.7-3.87-1.55-3.87-1.55-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.2-3.11-.12-.3-.52-1.52.11-3.17 0 0 .97-.31 3.18 1.19.92-.26 1.9-.38 2.88-.38s1.96.13 2.88.38c2.21-1.5 3.18-1.19 3.18-1.19.63 1.65.23 2.87.11 3.17.75.81 1.2 1.85 1.2 3.11 0 4.43-2.69 5.41-5.25 5.7.41.35.77 1.04.77 2.1v3.12c0 .31.21.68.8.56 4.57-1.53 7.86-5.85 7.86-10.95C23.5 5.74 18.27.5 12 .5z" />
                  </svg>
                </a>

                <a
                  href="https://linkedin.com/"
                  aria-label="LinkedIn profile"
                  className="h-11 w-11 rounded-full border border-white/20 bg-black/30 backdrop-blur-md grid place-items-center transition hover:border-white hover:bg-white/10"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M4.98 3.5C4.98 5 3.8 6.18 2.3 6.18S-.38 5-.38 3.5C-.38 2 1.8.82 2.3.82s2.68 1.18 2.68 2.68zM.5 8.98h3.6V23.5H.5V8.98zm7.5 0h3.45v2h.05c.48-.9 1.65-1.85 3.4-1.85 3.63 0 4.3 2.38 4.3 5.48v6.88h-3.6v-6.1c0-1.46-.03-3.33-2.03-3.33-2.03 0-2.34 1.59-2.34 3.23v6.2H8V8.98z" />
                  </svg>
                </a>

                <a
                  href="https://facebook.com/"
                  aria-label="Facebook profile"
                  className="h-11 w-11 rounded-full border border-white/20 bg-black/30 backdrop-blur-md grid place-items-center transition hover:border-white hover:bg-white/10"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M22.68 0H1.32C.59 0 0 .6 0 1.34v21.32C0 23.4.59 24 1.32 24h11.49v-9.29H9.69v-3.62h3.12V8.41c0-3.1 1.89-4.79 4.65-4.79 1.32 0 2.45.1 2.78.14v3.22l-1.91.001c-1.5 0-1.79.71-1.79 1.76v2.31h3.58l-.47 3.62h-3.11V24h6.1c.73 0 1.32-.6 1.32-1.34V1.34C24 .6 23.41 0 22.68 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}