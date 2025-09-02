// components/projects.tsx
export default function Projects() {
return (
<div className="mx-auto max-w-5xl py-24">
<h2 className="text-3xl font-bold text-center">Projects</h2>
<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
{[1, 2, 3].map((n) => (
<div key={n} className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<h3 className="font-semibold">Project {n}</h3>
<p className="mt-1 text-sm text-zinc-300">Short description.</p>
</div>
))}
</div>
</div>
);
}
