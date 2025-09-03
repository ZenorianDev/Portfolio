// File: /components/projects.tsx
const projects = [
{ title: "Monochrome UI", description: "Design system with motion.", year: "2025" },
{ title: "Realtime Analytics", description: "Edge-first dashboards.", year: "2024" },
];

export default function Projects() {
return (
<section id="projects" className="scroll-mt-24 py-24">
<h2 className="mb-8 text-2xl font-semibold text-white">Projects</h2>
<ul className="grid gap-4 sm:grid-cols-2">
{projects.map((p) => (
<li key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10">
<div className="flex items-center justify-between">
<h3 className="text-lg text-white">{p.title}</h3>
<span className="text-xs text-neutral-400">{p.year}</span>
</div>
<p className="mt-2 text-sm text-neutral-300">{p.description}</p>
</li>
))}
</ul>
</section>
);
}
