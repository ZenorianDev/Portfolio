export default function HomeSection() {
  return (
    <main className="font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white z-50 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold text-green-500">R</div>
          <ul className="flex gap-6">
            <li><a href="#homesection" className="hover:text-green-500">Home</a></li>
            <li><a href="#about" className="hover:text-green-500">About</a></li>
            <li><a href="#projects" className="hover:text-green-500">Projects</a></li>
            <li><a href="#contact" className="hover:text-green-500">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Home Section */}
      <section
        id="homesection"
        className="h-screen flex flex-col md:flex-row items-center justify-center bg-gray-700 text-white"
      >
        <div className="max-w-xl p-8 text-center md:text-left">
          <h1 className="text-5xl font-extrabold leading-tight">
            I'M <span className="text-green-500">REANNE LORRAINE MARTINEZ</span>
          </h1>
          <p className="mt-4 text-xl">UX/UI Designer & Web Developer</p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/profile.png"
            alt="Profile"
            className="rounded-full shadow-lg w-64 h-64 object-cover"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-3xl p-8 text-center">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-4 text-gray-700">
            Short bio about you, your skills, and experience.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="h-screen flex items-center justify-center bg-white">
        <div className="max-w-3xl p-8">
          <h2 className="text-3xl font-bold">Projects</h2>
          <ul className="mt-4 list-disc list-inside text-gray-700">
            <li>Project 1</li>
            <li>Project 2</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="h-screen flex items-center justify-center bg-gray-200">
        <div className="max-w-xl p-8 text-center">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="mt-4">Reach me at <a href="mailto:you@email.com" className="text-green-500">you@email.com</a></p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-4">
        © {new Date().getFullYear()} Your Name. All Rights Reserved.
      </footer>
    </main>
  );
}
