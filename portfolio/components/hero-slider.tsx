"use client";

import { useState } from "react";

const SLIDES = [
  { id: 1, label: "Home" },
  { id: 2, label: "About" },
  { id: 3, label: "Projects" },
  { id: 4, label: "Experience" },
  { id: 5, label: "Contact" },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? SLIDES.length - 1 : i - 1));

  const next = () =>
    setIndex((i) => (i === SLIDES.length - 1 ? 0 : i + 1));

  return (
    <div className="flex items-center gap-4 text-sm tracking-widest">
      <span className="font-semibold">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="opacity-50">/ {SLIDES.length}</span>

      <div className="flex gap-3 ml-4">
        <button
          onClick={prev}
          className="opacity-60 hover:opacity-100 transition"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="opacity-60 hover:opacity-100 transition"
        >
          ›
        </button>
      </div>
    </div>
  );
}
