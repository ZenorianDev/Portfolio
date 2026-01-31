      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="relative min-h-screen flex items-center px-6 md:px-12 py-32"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16">
          {/* Left */}
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Let’s Connect
            </h2>

            <p className="text-white/70 leading-relaxed max-w-xl">
              Whether you’d like to collaborate, ask a question, or discuss a
              project idea, feel free to reach out. I’m always open to meaningful
              conversations and new opportunities.
            </p>

            <div className="flex flex-col gap-4 pt-4 text-sm text-white/70">
              <div>
                <span className="text-white/40">Email:</span>{" "}
                reanne@example.com
              </div>
              <div>
                <span className="text-white/40">Location:</span> Philippines
              </div>
            </div>
          </div>

          {/* Right (Form) */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
          >
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-white/50">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="rounded-lg border border-white/20 bg-black/40 px-4 py-2 text-sm outline-none focus:border-white/50"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-white/50">
                Email
              </label>
              <input
                type="email"
                placeholder="you@email.com"
                className="rounded-lg border border-white/20 bg-black/40 px-4 py-2 text-sm outline-none focus:border-white/50"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-white/50">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Your message..."
                className="resize-none rounded-lg border border-white/20 bg-black/40 px-4 py-2 text-sm outline-none focus:border-white/50"
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex w-fit items-center justify-center rounded-full border border-white/30 px-7 py-2 text-xs tracking-wide transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>