export default function HomeSection() {
  return (
    <main className="font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white px-8 py-4 flex justify-between items-center shadow-md z-50">
        <div className="text-2xl font-bold text-white">R</div>
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-6">
          <li><a href="#homesection">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Home Section */}
      <section
        id="homesection"
        className="h-screen flex flex-col md:flex-row items-center justify-center bg-gray-700 text-white"
      >
        <div className="max-w-xl p-8 text-center md:text-left">
          <h1 className="text-5xl font-extrabold leading-tight">
            <span className="text-gray-900">REANNE LORRAINE MARTINEZ</span>
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
      <section
        id="about"
        className="h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-900"
      >
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="max-w-2xl text-center">
          I am a passionate designer and developer focused on creating beautiful,
          user-friendly digital experiences. This section can include your bio,
          skills, and experience highlights.
        </p>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="h-screen flex flex-col justify-center items-center bg-white text-gray-900"
      >
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-3/4">
          <div className="p-6 border rounded-lg shadow">Project 1</div>
          <div className="p-6 border rounded-lg shadow">Project 2</div>
          <div className="p-6 border rounded-lg shadow">Project 3</div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="h-screen flex flex-col justify-center items-center bg-gray-200 text-gray-900"
      >
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="mb-4">Let's work together! Reach me via email:</p>
        <a
          href="mailto:yourname@example.com"
          className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition"
        >
          Say Hello
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} Reanne Martinez | All rights reserved.</p>
      </footer>
    </main>
  );
}
