// File: /lib/sections.ts
export const SECTION_ORDER = [
  "home",
  "about",
  "projects",
  "contact",
  "resume",
] as const;

export type SectionId = (typeof SECTION_ORDER)[number];

export const SECTION_BG: Record<SectionId, string> = {
  home: "linear-gradient(to bottom, #111, #000)",
  about: "linear-gradient(to bottom, #1a1a1a, #000)",
  projects: "linear-gradient(to bottom, #222, #000)",
  contact: "linear-gradient(to bottom, #2a2a2a, #000)",
  resume: "linear-gradient(to bottom, #333, #000)",
};
