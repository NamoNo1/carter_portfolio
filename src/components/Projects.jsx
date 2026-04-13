import { projects } from "../data/projects.jsx";
import ProjectCard from "./ProjectCard.jsx";

export default function Projects({ onOpenProject }) {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <h2 id="projects-title" className="section-title">
          Project
        </h2>
        <p className="section-lead narrow-text">
          โปรเจกต์พัฒนาระบบเซิร์ฟเวอร์ FiveM ที่เคยมีส่วนร่วมในฐานะ Junior Full Stack Developer
        </p>
        <div className="project-grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={onOpenProject} />
          ))}
        </div>
      </div>
    </section>
  );
}
