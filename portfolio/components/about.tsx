// File: /components/about.tsx
import Image from "next/image";
import { FaBirthdayCake, FaUser, FaLanguage, FaGraduationCap, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
"use client";

export default function About() {
  return (
    <section className="py-20 text-white">
      <div className="mx-auto max-w-6xl px-4">
{/* Header */}
        <h2 className="mb-12 text-3xl font-bold tracking-wide uppercase">
          Learn More About Me
        </h2>

        {/* Grid layout */}
        <div className="grid gap-10 md:grid-cols-2 items-start">
          {/* Profile photo */}
          <div className="flex justify-center">
            <Image
              src="/profile.jpg" // replace with your image inside public/
              alt="Profile photo"
              width={300}
              height={300}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* Info */}
          <div>
            <h3 className="text-2xl font-semibold text-green-400 mb-6">
              Full Stack Developer
            </h3>

            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4 text-neutral-300 mb-8">
              <p>
                <span className="font-bold text-white flex items-center gap-2">
                  <FaBirthdayCake className="text-green-400" /> Birthday:
                </span>{" "}
                December 5, 2003
              </p>
              <p>
                <span className="font-bold text-white flex items-center gap-2">
                  <FaUser className="text-green-400" /> Age:
                </span>{" "}
                20
              </p>
              <p>
                <span className="font-bold text-white flex items-center gap-2">
                  <FaLanguage className="text-green-400" /> Languages:
                </span>{" "}
                English / Tagalog / Cebuano
              </p>
              <p>
                <span className="font-bold text-white flex items-center gap-2">
                  <FaGraduationCap className="text-green-400" /> Degree:
                </span>{" "}
                BSIT – Software Engineering
              </p>
              <p>
                <span className="font-bold text-white flex items-center gap-2">
                  <FaEnvelope className="text-green-400" /> Email:
                </span>{" "}
                curtdelosreyes8@gmail.com
              </p>
              <p>
                <span className="font-bold text-white flex items-center gap-2">
                  <FaMapMarkerAlt className="text-green-400" /> City:
                </span>{" "}
                Cebu City, PHILIPPINES
              </p>
            </div>

            {/* Bio */}
            <div className="space-y-4 text-neutral-300 leading-relaxed">
              <p>
                As a passionate and goal-driven lifelong learner, I thrive on
                challenging tasks that require critical thinking and
                problem-solving abilities.
              </p>
              <p>
                Growing up, my fascination with the capabilities of computers
                sparked my ambition to become a Software Engineer. I find
                immense interest in building and designing websites, as well as
                delving into various aspects of software development.
              </p>
              <p>
                With a deep-rooted enthusiasm for this field, I am dedicated to
                honing my skills and leveraging my expertise to create
                innovative and impactful software solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-12 border-neutral-800" />

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