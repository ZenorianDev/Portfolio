import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HomeSection from "@/components/homesection";
import About from "@/components/about";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HomeSection />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
