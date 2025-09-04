// File: /components/about.tsx
"use client";

export default function About() {
  return (
    <section className="py-20 text-white">
      <div className="mx-auto max-w-4xl px-4">
        {/* Intro */}
        <h2 className="mb-6 text-3xl font-bold">About Me</h2>
        <p className="mb-10 text-neutral-300 leading-relaxed">
          I'm an aspiring Full Stack Developer and Game Developer with a deep interest in designing 
          and building creative, efficient, and user-centered digital experiences.
        </p>

        {/* Skills */}
        <h3 className="mb-4 text-2xl font-semibold">Skills</h3>
        <div className="mb-10 flex flex-wrap gap-3">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "Python",
            "Java",
            "MySQL",
            "TypeScript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "Bootstrap",
            "Git",
            "GitHub",
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
            <div className="text-lg font-medium">Bachelor of Science in Information Technology</div>
            <div className="text-sm text-neutral-400">
              First City Providential College <br /> 2024 – Present
            </div>
          </li>
          <li>
            <div className="text-lg font-medium">Applied Degree in Software Engineering</div>
            <div className="text-sm text-neutral-400">
              Lithan Academy Singapore <br /> 2024 – Present
            </div>
          </li>
          <li>
            <div className="text-lg font-medium">General Academic Strand</div>
            <div className="text-sm text-neutral-400">
              Jarmmeth College, Inc. <br /> 2022 – 2024
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}