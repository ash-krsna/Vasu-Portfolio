import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader.jsx";
import { personal, projects } from "../data/portfolioData.js";

const previewBars = [
  [58, 82, 66, 92, 74],
  [74, 52, 86, 68, 94],
  [48, 72, 88, 62, 78],
  [86, 64, 54, 76, 92],
  [54, 68, 92, 74, 84],
  [78, 58, 88, 70, 96],
];

const previewAccents = ["#0e7c66", "#334bd3", "#e15745", "#d29b2d", "#7a4cc2", "#c43a6d"];

function ProjectPreview({ index }) {
  const bars = previewBars[index % previewBars.length];

  return (
    <div className="project-preview" style={{ "--project-accent": previewAccents[index % previewAccents.length] }}>
      <div className="preview-toolbar">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="preview-kpis">
        <span></span>
        <span></span>
      </div>
      <div className="preview-bars">
        {bars.map((height, barIndex) => (
          <span key={`${height}-${barIndex}`} style={{ height: `${height}%` }}></span>
        ))}
      </div>
      <div className="preview-line"></div>
    </div>
  );
}

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
              <ProjectPreview index={index} />
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
                <a href="#contact" className="mini-btn"><i className="bi bi-chat-dots"></i>Discuss</a>
                <a href={personal.resume} className="mini-btn" download><i className="bi bi-download"></i>Resume</a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
