export default function Projects() {
  return (
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
  );
}
