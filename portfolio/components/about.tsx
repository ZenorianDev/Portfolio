      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="relative min-h-screen px-6 md:px-12 py-32"
      >
        <div className="mx-auto max-w-7xl flex flex-col gap-12">
          {/* ---------- HEADER ---------- */}
          <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-[0_25px_80px_rgba(0,0,0,0.7)]">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
              About Me
            </h2>
            <p className="mt-4 max-w-4xl text-white/70 leading-relaxed">
              I aspire to become the best developer and designer I can possibly be.
              With a focus on logic, creativity, and growth, I strive to build
              impactful projects and continuously improve my skills. My mission is
              to create intuitive solutions that make a meaningful difference in the
              digital world.
            </p>

            {/* subtle divider line */}
            <span className="absolute bottom-0 left-8 right-8 h-px bg-white/10" />
          </div>

          {/* ---------- GRID ROW ---------- */}
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.2fr_0.9fr] gap-8">
            {/* ================= LEFT: PERSONAL BACKGROUND ================= */}
            <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_25px_80px_rgba(0,0,0,0.7)] flex flex-col gap-6">
              {/* Title */}
              <div className="flex items-center justify-between">
                <h3 className="text-sm uppercase tracking-widest text-white/80">
                  Personal Background
                </h3>
                <span className="text-xs text-white/40">LEVEL 6</span>
              </div>

              {/* Avatar */}
              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/40 h-48 flex items-center justify-center">
                <span className="text-white/30 text-sm">Profile Image</span>
              </div>

              {/* Info */}
              <div className="flex flex-col gap-3 text-sm text-white/70">
                <div className="flex justify-between">
                  <span className="text-white/40">Age</span>
                  <span>—</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Birthday</span>
                  <span>—</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Location</span>
                  <span>Philippines</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Email</span>
                  <span>reanne@email.com</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Role</span>
                  <span>Web Developer</span>
                </div>
              </div>
            </div>

            {/* ================= CENTER: CORE ATTRIBUTES ================= */}
            <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_25px_80px_rgba(0,0,0,0.7)] flex flex-col gap-6">
              {/* Title */}
              <h3 className="text-sm uppercase tracking-widest text-white/80">
                Core Attributes
              </h3>

              {/* Radar Chart Placeholder */}
              <div className="relative h-56 flex items-center justify-center">
                <div className="absolute inset-0 rounded-xl border border-white/10 bg-black/40" />
                <span className="relative text-white/30 text-sm">
                  Radar Chart UI
                </span>
              </div>

              {/* Skill Bars */}
              <div className="flex flex-col gap-4">
                {[
                  { label: "Coding", value: 85 },
                  { label: "Design", value: 70 },
                  { label: "Tools", value: 65 },
                  { label: "Communication", value: 80 },
                ].map((skill) => (
                  <div key={skill.label} className="flex flex-col gap-1">
                    <div className="flex justify-between text-xs text-white/60">
                      <span>{skill.label}</span>
                      <span>{skill.value}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full bg-white transition-all duration-700"
                        style={{ width: `${skill.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= RIGHT: EDUCATION & SKILLS ================= */}
            <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_25px_80px_rgba(0,0,0,0.7)] flex flex-col gap-6">
              {/* Title */}
              <h3 className="text-sm uppercase tracking-widest text-white/80">
                Education & Skills
              </h3>

              {/* Timeline */}
              <div className="flex flex-col gap-6">
                {[
                  { title: "Bachelor’s Degree", subtitle: "Software Engineering" },
                  { title: "Internship", subtitle: "Web Development" },
                  { title: "UI/UX Designer", subtitle: "Freelance Projects" },
                  { title: "Web Developer", subtitle: "Personal & Team Projects" },
                ].map((item, i) => (
                  <div key={i} className="relative pl-6">
                    <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-white" />
                    <span className="absolute left-[3px] top-4 bottom-0 w-px bg-white/20" />
                    <div className="flex flex-col gap-1">
                      <span className="text-sm text-white">{item.title}</span>
                      <span className="text-xs text-white/50">{item.subtitle}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>