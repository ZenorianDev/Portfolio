// File: /components/about.tsx
"use client";

export default function About() {
  return (
    <section className="py-20 text-white">
      <div className="mx-auto max-w-4xl px-4">
        {/* Intro */}
        <h2 className="mb-6 text-3xl font-bold">About Me</h2>
        <p className="mb-10 text-neutral-300 leading-relaxed">
          I’m a passionate developer who enjoys building clean and functional web
          applications. With a strong interest in modern technologies, I focus on
          crafting solutions that are both user-friendly and scalable.
        </p>

        {/* Skills */}
        <h3 className="mb-4 text-2xl font-semibold">Skills</h3>
        <div className="mb-10 flex flex-wrap gap-3">
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "Node.js",
            "Git",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-neutral-800 px-4 py-2 text-sm hover:bg-neutral-700 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Education */}
        <h3 className="mb-4 text-2xl font-semibold">Education</h3>
        <ul className="space-y-6 border-l border-neutral-700 pl-6">
          <li>
            <div className="text-lg font-medium">B.Sc. in Computer Science</div>
            <div className="text-sm text-neutral-400">
              Your University — 2020 – 2024
            </div>
            <p className="text-neutral-300 mt-2">
              Focused on software engineering, web development, and cloud
              technologies.
            </p>
          </li>
          <li>
            <div className="text-lg font-medium">High School Diploma</div>
            <div className="text-sm text-neutral-400">
              Your School — 2016 – 2020
            </div>
            <p className="text-neutral-300 mt-2">
              Specialized in science and mathematics.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
