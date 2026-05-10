import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader.jsx";
import { certifications } from "../data/portfolioData.js";

export default function Certifications() {
  return (
    <section id="certifications" className="section cert-section">
      <div className="container">
        <SectionHeader eyebrow="Certifications" title="Learning signals recruiters can trust" />
        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <motion.div
              className="cert-card reveal-up"
              key={cert.title}
              whileHover={{ rotateY: 8, rotateX: -5, y: -8 }}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <i className={`bi ${cert.icon}`}></i>
              <h3>{cert.title}</h3>
              <span>{cert.issuer}</span>
              <div className="cert-actions">
                <a href={cert.file} target="_blank" rel="noreferrer">
                  <i className="bi bi-eye"></i>
                  View
                </a>
                <a href={cert.file} download>
                  <i className="bi bi-download"></i>
                  Download
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
