import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HomePage from "@/components/homepage";
import About from "@/components/about";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section id="homesection">
        <HomePage />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}
