import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer";
import { resume } from "./data/resume";

export default function App() {
  return (
    <div className="min-h-screen bg-liquid-glass text-white font-sans antialiased">
      <Header resume={resume} />
      <main className="container mx-auto px-4 py-8 space-y-16">
        <Hero resume={resume} />
        <About about={resume.about} />
        <Skills skills={resume.skills} />
        <Experience experience={resume.experience} />
        <Projects projects={resume.projects} />
        <Education education={resume.education} />
      </main>
      <Footer
        copyright={resume.copyright}
        socials={resume.socials}
        aiNote={resume.aiNote}
      />
    </div>
  );
}
