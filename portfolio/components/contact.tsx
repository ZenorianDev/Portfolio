// File: /components/contact.tsx
export default function Contact() {
return (
<section id="contact" className="scroll-mt-24 py-24">
<h2 className="mb-4 text-2xl font-semibold text-white">Contact</h2>
<form className="grid max-w-xl gap-3">
<input className="rounded bg-transparent border border-white/10 px-3 py-2" placeholder="Name" />
<input className="rounded bg-transparent border border-white/10 px-3 py-2" placeholder="Email" />
<textarea className="rounded bg-transparent border border-white/10 px-3 py-2" placeholder="Message" />
<button className="w-fit rounded-full bg-white px-5 py-2 text-black">Send</button>
</form>
</section>
);
}