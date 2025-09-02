export default function Projects() {
  return (
    <div className="max-w-4xl">
      <h2 className="text-3xl font-bold text-center">Projects</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className="rounded-xl bg-white/10 p-4 text-center ring-1 ring-white/20"
          >
            <h3 className="font-semibold">Project {num}</h3>
            <p className="text-sm text-zinc-300">
              A short description of project {num}.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
