import { useRef, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ProjectModal from "./components/ProjectModal.jsx";

export default function App() {
  const [modalProject, setModalProject] = useState(null);
  const lastOpener = useRef(null);

  function handleOpenProject(project, articleEl) {
    lastOpener.current = articleEl;
    setModalProject(project);
  }

  function handleCloseModal() {
    setModalProject(null);
    queueMicrotask(() => {
      if (lastOpener.current && typeof lastOpener.current.focus === "function") {
        lastOpener.current.focus();
      }
      lastOpener.current = null;
    });
  }

  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects onOpenProject={handleOpenProject} />
        <Experience />
        <Contact />
      </main>
      <ProjectModal
        open={Boolean(modalProject)}
        title={modalProject?.title ?? ""}
        images={modalProject?.gallery ?? []}
        stack={modalProject?.stack ?? false}
        onClose={handleCloseModal}
      >
        {modalProject?.body}
      </ProjectModal>
      <Footer />
    </>
  );
}
