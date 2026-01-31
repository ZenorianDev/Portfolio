      {/* ================= PROJECTS ================= */}
      <section
        id="projects"
        className="relative min-h-screen px-6 md:px-12 py-32"
      >
        <div className="mx-auto max-w-6xl flex flex-col gap-16">
          {/* Header */}
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Projects
            </h2>
            <p className="text-white/60 leading-relaxed">
              A selection of projects focused on clean UI, performance, and
              user-centered design — blending engineering with visual polish.
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Gamified Portfolio",
                desc: "An immersive, stat-based portfolio system inspired by RPG UI patterns.",
                tech: ["Next.js", "Tailwind", "Framer Motion"],
              },
              {
                title: "Business Landing Platform",
                desc: "High-conversion marketing site with responsive layout and motion design.",
                tech: ["React", "TypeScript", "GSAP"],
              },
              {
                title: "Student Management System",
                desc: "Full-stack CRUD system with authentication and role-based access.",
                tech: ["Node.js", "PostgreSQL", "Express"],
              },
              {
                title: "E-commerce UI Kit",
                desc: "Reusable UI component system for modern online stores.",
                tech: ["React", "Storybook", "Tailwind"],
              },
              {
                title: "Portfolio CMS",
                desc: "Headless CMS-driven portfolio system for rapid content updates.",
                tech: ["Next.js", "Sanity", "GraphQL"],
              },
              {
                title: "Interactive Data Dashboard",
                desc: "Real-time visualization dashboard with dynamic charts.",
                tech: ["React", "Recharts", "REST API"],
              },
            ].map((project) => (
              <div
                key={project.title}
                className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition hover:border-white/30 hover:bg-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-lg font-semibold tracking-tight group-hover:text-white transition">
                    {project.title}
                  </h3>

                  <p className="text-sm text-white/60 leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/20 px-3 py-1 text-[10px] tracking-wide text-white/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-black/40 opacity-0 transition group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>