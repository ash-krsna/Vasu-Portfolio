import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader.jsx";
import { projects } from "../data/portfolioData.js";

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <SectionHeader eyebrow="Projects" title="Dashboards and analysis stories" />
        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-md-6 col-xl-4" key={project.title}>
              <motion.article
                className="project-card reveal-up"
                whileHover={{ y: -10, rotateX: 3, rotateY: -3 }}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <div className="project-image" style={{ background: project.image }}>
                  <i className="bi bi-kanban"></i>
                  <span className="spark-line"></span>
                </div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <div className="project-actions">
                    <a href="#" className="mini-btn"><i className="bi bi-eye"></i>Live Demo</a>
                    <a href="#" className="mini-btn"><i className="bi bi-github"></i>GitHub</a>
                  </div>
                </div>
              </motion.article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
