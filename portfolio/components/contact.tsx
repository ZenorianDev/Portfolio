"use client";

import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 py-20 px-6 text-white"
    >
      <div className="mx-auto max-w-4xl">
        {/* Section heading */}
        <h2 className="mb-8 text-3xl font-bold text-center">Get in Touch</h2>
        <p className="mb-12 text-center text-neutral-400 max-w-2xl mx-auto">
          Whether you’d like to collaborate, have a question, or just want to
          connect, feel free to reach out. I’ll do my best to respond quickly!
        </p>

        {/* Contact details grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Full Name */}
          <div className="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-600 text-white font-bold">
              R
            </div>
            <div>
              <p className="text-sm text-neutral-400">Full Name</p>
              <p className="font-medium">Reanne Lorraine Martinez</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
            <Mail className="h-6 w-6 text-sky-400 mt-1" />
            <div>
              <p className="text-sm text-neutral-400">Email Address</p>
              <a
                href="mailto:reannemartinez18@gmail.com"
                className="font-medium hover:underline"
              >
                zenorian.dev@gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
            <Phone className="h-6 w-6 text-sky-400 mt-1" />
            <div>
              <p className="text-sm text-neutral-400">Phone Number</p>
              <a href="tel:+6399668645784" className="font-medium hover:underline">
                +63 9668645784
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
            <Linkedin className="h-6 w-6 text-sky-400 mt-1" />
            <div>
              <p className="text-sm text-neutral-400">LinkedIn Profile</p>
              <a
                href="https://linkedin.com/in/zenoriandev"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:underline"
              >
                linkedin.com/in/zenoriandev
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition sm:col-span-2">
            <MapPin className="h-6 w-6 text-sky-400 mt-1" />
            <div>
              <p className="text-sm text-neutral-400">Location</p>
              <p className="font-medium">City of San Jose del Monte, Bulacan, North Luzon, Philippines</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
