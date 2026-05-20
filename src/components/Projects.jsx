import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader.jsx";
import { projects } from "../data/portfolioData.js";

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <SectionHeader eyebrow="Projects" title="Dashboards and analysis stories" />
        <div className="project-list">
          {projects.map((project, index) => (
            <motion.article
              className="project-row reveal-up"
              key={project.title}
              whileHover={{ x: 10 }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <div className="project-index">{String(index + 1).padStart(2, "0")}</div>
              <div className="project-preview" style={{ background: project.image }}>
                <i className="bi bi-kanban"></i>
              </div>
              <div className="project-body">
                <div className="project-meta">
                  <span>{project.year}</span>
                  <span>{project.type}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
              <div className="project-actions">
                <a href="#" className="mini-btn"><i className="bi bi-eye"></i>Live Demo</a>
                <a href="#" className="mini-btn"><i className="bi bi-github"></i>GitHub</a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
