export default function Contact() {
  return (
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
  );
}
